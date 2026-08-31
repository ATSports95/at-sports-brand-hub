import type { Metadata } from 'next'
import { BrandHub } from '@/components/brand-hub'
import { COURTINA_EDITION } from '@/lib/editions'

// The Courtina (Japan) edition, served at /courtina. It renders the same
// shared BrandHub as the General Partner Edition and only swaps in the
// Courtina-specific, Japan-market messaging.
export const metadata: Metadata = {
  title: COURTINA_EDITION.meta.title,
  description: COURTINA_EDITION.meta.description,
}

export default function CourtinaBrandHub() {
  return <BrandHub edition={COURTINA_EDITION} />
}
