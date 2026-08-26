import type { Metadata } from 'next'
import { BrandHub } from '@/components/brand-hub'
import { PARTNER_EDITION } from '@/lib/editions'

export const metadata: Metadata = {
  title: PARTNER_EDITION.meta.title,
  description: PARTNER_EDITION.meta.description,
}

export default function Home() {
  return <BrandHub edition={PARTNER_EDITION} />
}
