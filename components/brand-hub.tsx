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
import type { Edition, SectionId } from '@/lib/editions'

/**
 * The Brand Hub page body. Every edition renders this same component in the
 * same order — the edition decides which sections appear (`sections`) and how
 * much of each shared section renders (`audience`), and swaps partner-facing
 * strings. Keeping one body means a structural change lands in every edition at
 * once and the editions cannot drift apart.
 */
export function BrandHub({ edition }: { edition: Edition }) {
  const show = (id: SectionId) => edition.sections.includes(id)
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      <SidebarNav edition={edition} />
      <main className="min-w-0 flex-1">
        {show('hero') && <Hero edition={edition} />}
        {show('welcome') && <Welcome edition={edition} />}
        {show('foundation') && <Foundation />}
        {show('kits') && <ProductKits audience={edition.audience} />}
        {show('logo') && <LogoIdentity />}
        {show('color') && <ColorSystem />}
        {show('typography') && <Typography />}
        {show('cobranding') && <CoBranding />}
        {show('photography') && <Photography />}
        {show('assets') && <AssetLibrary audience={edition.audience} />}
        {show('faq') && <Faq />}
        <SiteFooter edition={edition} />
      </main>
    </div>
  )
}
