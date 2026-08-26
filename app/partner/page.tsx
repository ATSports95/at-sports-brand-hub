import type { Metadata } from 'next'
import { BrandHub } from '@/components/brand-hub'
import { PARTNER_EDITION } from '@/lib/editions'

// The original AT Sports Partner Edition, preserved exactly as it was
// before the Courtina edition was introduced.
export const metadata: Metadata = {
  title: PARTNER_EDITION.meta.title,
  description: PARTNER_EDITION.meta.description,
}

export default function PartnerBrandHub() {
  return <BrandHub edition={PARTNER_EDITION} />
}
