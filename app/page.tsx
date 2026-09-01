import type { Metadata } from 'next'
import { BrandHub } from '@/components/brand-hub'
import { PARTNER_EDITION } from '@/lib/editions'

// The General Partner Edition is the default surface at `/`. It shares the
// exact same layout, sections, and components as every other edition and only
// swaps in generic AT Sports partner messaging. The Courtina (Japan) edition
// is preserved unchanged at /courtina.
export const metadata: Metadata = {
  title: PARTNER_EDITION.meta.title,
  description: PARTNER_EDITION.meta.description,
}

export default function Home() {
  return <BrandHub edition={PARTNER_EDITION} />
}
