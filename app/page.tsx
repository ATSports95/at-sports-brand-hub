import { SidebarNav } from '@/components/sidebar-nav'
import { Hero } from '@/components/sections/hero'
import { QuickAccess } from '@/components/sections/quick-access'
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

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      <SidebarNav />
      <main className="min-w-0 flex-1">
        <Hero />
        <QuickAccess />
        <Welcome />
        <Foundation />
        <ProductKits />
        <LogoIdentity />
        <ColorSystem />
        <Typography />
        <CoBranding />
        <Photography />
        <AssetLibrary />
        <Faq />
        <SiteFooter />
      </main>
    </div>
  )
}
