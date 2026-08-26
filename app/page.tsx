import type { Metadata } from 'next'
import { BrandHub } from '@/components/brand-hub'
import { COURTINA_EDITION } from '@/lib/editions'

// This chat's deliverable is the Courtina (Japan) edition, so it is the
// default surface. The original AT Sports Partner Edition is preserved
// unchanged at /partner.
export const metadata: Metadata = {
  title: COURTINA_EDITION.meta.title,
  description: COURTINA_EDITION.meta.description,
}

export default function Home() {
  return <BrandHub edition={COURTINA_EDITION} />
}
