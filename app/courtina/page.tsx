import type { Metadata } from 'next'
import { BrandHub } from '@/components/brand-hub'
import { EditionAccessScreen } from '@/components/edition-access-screen'
import { COURTINA_EDITION } from '@/lib/editions'
import { isEditionUnlocked } from '@/lib/edition-access'

// The Courtina (Japan) edition, served at /courtina. It is password protected
// with its own credential and renders the same shared BrandHub once unlocked,
// swapping in the Courtina-specific, Japan-market messaging.
export const metadata: Metadata = {
  title: COURTINA_EDITION.meta.title,
  description: COURTINA_EDITION.meta.description,
}

export default async function CourtinaBrandHub() {
  const unlocked = await isEditionUnlocked(COURTINA_EDITION)
  if (!unlocked) return <EditionAccessScreen slug="courtina" />
  return <BrandHub edition={COURTINA_EDITION} />
}
