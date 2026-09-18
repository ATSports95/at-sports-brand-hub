import 'server-only'

import { cookies } from 'next/headers'
import { createHmac, timingSafeEqual } from 'node:crypto'
import type { Edition } from '@/lib/editions'

/**
 * Server-only password protection for partner editions.
 *
 * Passwords live in per-edition environment variables and are read here only —
 * they are never sent to the client. On a correct password we set an HttpOnly,
 * signed session cookie so the password is not re-entered during the session.
 * The cookie value is an HMAC of the edition slug, so it cannot be forged
 * without the signing secret and reveals nothing about the password.
 */

const COOKIE_PREFIX = 'atsh_access_'
const SESSION_MAX_AGE = 60 * 60 * 12 // 12 hours

function cookieName(slug: string) {
  return `${COOKIE_PREFIX}${slug}`
}

function editionPassword(edition: Edition): string | undefined {
  if (!edition.passwordEnvVar) return undefined
  const value = process.env[edition.passwordEnvVar]
  return value && value.length > 0 ? value : undefined
}

/**
 * Key used to sign the session cookie. A dedicated secret is preferred; if it
 * is not configured we fall back to the edition password so that only the
 * password variables are strictly required to run.
 */
function signingKey(edition: Edition): string {
  return (
    process.env.BRAND_HUB_SESSION_SECRET ||
    editionPassword(edition) ||
    'at-sports-brand-hub'
  )
}

function expectedToken(edition: Edition): string {
  return createHmac('sha256', signingKey(edition))
    .update(`brand-hub:${edition.slug ?? 'root'}`)
    .digest('hex')
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) return false
  return timingSafeEqual(ab, bb)
}

export function isEditionProtected(edition: Edition): boolean {
  return Boolean(edition.passwordEnvVar)
}

/**
 * True when the edition may be viewed. Open editions are always unlocked.
 * Protected editions require a valid session cookie, and fail closed when no
 * password is configured so they are never accidentally exposed.
 */
export async function isEditionUnlocked(edition: Edition): Promise<boolean> {
  if (!isEditionProtected(edition)) return true
  if (!editionPassword(edition)) return false
  const store = await cookies()
  const token = store.get(cookieName(edition.slug as string))?.value
  if (!token) return false
  return safeEqual(token, expectedToken(edition))
}

export function verifyEditionPassword(
  edition: Edition,
  password: string,
): boolean {
  const expected = editionPassword(edition)
  if (!expected) return false
  return safeEqual(password, expected)
}

/** Sets the signed session cookie that unlocks the edition. */
export async function unlockEdition(edition: Edition): Promise<void> {
  const store = await cookies()
  store.set(cookieName(edition.slug as string), expectedToken(edition), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  })
}
