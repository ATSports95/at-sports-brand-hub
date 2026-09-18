import type { Metadata } from 'next'
import { BrandHub } from '@/components/brand-hub'
import { PUBLIC_EDITION } from '@/lib/editions'

// The Public Brand Hub is the default, open surface at `/`. It renders the same
// shared BrandHub as every other edition, trimmed to public-facing sections and
// content. It never references or links to the password-protected editions.
export const metadata: Metadata = {
  title: PUBLIC_EDITION.meta.title,
  description: PUBLIC_EDITION.meta.description,
}

export default function Home() {
  return <BrandHub edition={PUBLIC_EDITION} />
}
