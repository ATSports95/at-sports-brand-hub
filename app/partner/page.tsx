import type { Metadata } from 'next'
import { BrandHub } from '@/components/brand-hub'
import { EditionAccessScreen } from '@/components/edition-access-screen'
import { PARTNER_EDITION } from '@/lib/editions'
import { isEditionUnlocked } from '@/lib/edition-access'

// The General Partner Edition, served at /partner. It is password protected:
// visitors see the branded access screen until they authenticate, then the
// shared BrandHub renders with the full partner experience.
export const metadata: Metadata = {
  title: PARTNER_EDITION.meta.title,
  description: PARTNER_EDITION.meta.description,
}

export default async function PartnerBrandHub() {
  const unlocked = await isEditionUnlocked(PARTNER_EDITION)
  if (!unlocked) return <EditionAccessScreen slug="partner" />
  return <BrandHub edition={PARTNER_EDITION} />
}
