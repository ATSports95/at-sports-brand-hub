import { SidebarNav } from '@/components/sidebar-nav'
import { Hero } from '@/components/sections/hero'
import { Welcome } from '@/components/sections/welcome'
import { Foundation } from '@/components/sections/foundation'
import { ProductKits } from '@/components/sections/product-kits'
import { LogoIdentity } from '@/components/sections/logo-identity'
import { ColorSystem } from '@/components/sections/color-system'
import { Typography } from '@/components/sections/typography'
import { CoBranding } from '@/components/sections/cobranding'
import { Photography } from '@/components/sections/photography'
import { AssetLibrary } from '@/components/sections/asset-library'
import { Faq } from '@/components/sections/faq'
import { SiteFooter } from '@/components/sections/site-footer'
import type { Edition } from '@/lib/editions'

/**
 * The Brand Hub page body. Every edition renders this same component with the
 * same sections in the same order — the edition only swaps partner-facing
 * strings. Keeping one body means a structural change lands in every edition
 * at once and the editions cannot drift apart.
 */
export function BrandHub({ edition }: { edition: Edition }) {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      <SidebarNav edition={edition} />
      <main className="min-w-0 flex-1">
        <Hero edition={edition} />
        <Welcome edition={edition} />
        <Foundation />
        <ProductKits />
        <LogoIdentity />
        <ColorSystem />
        <Typography />
        <CoBranding />
        <Photography />
        <AssetLibrary />
        <Faq />
        <SiteFooter edition={edition} />
      </main>
    </div>
  )
}
