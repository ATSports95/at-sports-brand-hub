import { LogoTile } from '@/components/logo-tile'
import { Localized } from '@/components/localized'
import { PARTNER_EDITION, type Edition } from '@/lib/editions'

export function SiteFooter({
  edition = PARTNER_EDITION,
}: {
  edition?: Edition
}) {
  const year = new Date().getFullYear()
  return (
    <footer className="relative isolate overflow-hidden bg-navy px-6 pt-20 pb-12 md:px-12">
      {/* Layer — subtle sky-tinted radial glow (matches hero) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 55% at 26% 30%, rgba(78,140,179,0.16), transparent 70%)',
        }}
      />

      {/* Layer — oversized AT Sports watermark, off-center to the upper-right,
          white at ~5% opacity and softly masked (matches hero) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -right-[6%] hidden w-[84%] md:block"
        style={{
          maskImage:
            'linear-gradient(to left, #000 0%, #000 30%, transparent 80%)',
          WebkitMaskImage:
            'linear-gradient(to left, #000 0%, #000 30%, transparent 80%)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/at-sports-white.svg"
          alt=""
          className="h-full w-full object-contain object-right-bottom opacity-[0.05]"
        />
      </div>

      {/* Layer — faint diagonal blueprint lines (matches hero) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(118deg, transparent 0, transparent 43px, rgba(255,255,255,0.035) 43px, rgba(255,255,255,0.035) 44px)',
          maskImage: 'linear-gradient(to bottom, transparent, #000 55%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 55%)',
        }}
      />

      {/* Layer — dotted grid texture (matches hero) */}
      <div
        className="halftone pointer-events-none absolute inset-0 text-white/[0.055]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-6">
        <LogoTile
          file="at-sports-white.svg"
          alt="AT Sports"
          tone="navy"
          className="w-44 [&>div]:aspect-auto [&>div]:h-14 [&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0"
        />
        <Localized
          as="p"
          text={edition.footerNote}
          edition={edition}
          className="max-w-xl text-sm leading-relaxed text-steel"
          secondaryClassName="text-steel/70"
        />
        <p className="text-xs text-steel/70">
          © {year} AT Sports. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
