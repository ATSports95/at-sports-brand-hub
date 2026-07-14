import { LogoTile } from '@/components/logo-tile'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="diagonal-top relative -mt-14 overflow-hidden bg-navy px-6 pt-28 pb-12 md:px-12">
      <div
        className="halftone pointer-events-none absolute inset-0 text-white/5"
        aria-hidden
      />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-6">
        <LogoTile
          file="at-sports-white.svg"
          alt="AT Sports"
          tone="navy"
          className="w-44 [&>div]:aspect-auto [&>div]:h-14 [&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0"
        />
        <p className="max-w-xl text-sm leading-relaxed text-steel">
          AT Sports Brand Hub — Partner Edition. Maintained by [team/contact]
          and updated as the brand evolves — always work from the live version.
        </p>
        <p className="text-xs text-steel/70">
          © {year} AT Sports. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
