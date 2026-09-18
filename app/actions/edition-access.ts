'use server'

import { redirect } from 'next/navigation'
import { EDITIONS } from '@/lib/editions'
import { unlockEdition, verifyEditionPassword } from '@/lib/edition-access'

export type AccessState = { error?: string }

/**
 * Verifies a submitted password for a protected edition. `slug` is bound on the
 * client (`.bind(null, slug)`) so the action keeps the `useActionState`
 * signature. On success it sets the session cookie and redirects into the
 * edition; on failure it returns an error message for the access screen.
 */
export async function submitEditionPassword(
  slug: string,
  _prevState: AccessState,
  formData: FormData,
): Promise<AccessState> {
  const edition = Object.values(EDITIONS).find((e) => e.slug === slug)

  if (!edition || !edition.passwordEnvVar) {
    return { error: 'This Brand Hub is not available.' }
  }

  const password = String(formData.get('password') ?? '')
  if (!password) {
    return { error: 'Please enter your password.' }
  }

  if (!verifyEditionPassword(edition, password)) {
    return { error: 'Incorrect password. Please try again.' }
  }

  await unlockEdition(edition)
  redirect(`/${edition.slug}`)
}
