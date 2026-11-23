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
    <footer className="relative isolate overflow-hidden px-6 pt-20 pb-12 md:px-16 lg:px-24">
      {/* No background of its own — the site-wide gradient on <body> carries
          through here too (see hero). */}

      {/* Layer — oversized AT Sports watermark, off-center to the upper-right,
          white at low opacity and softly masked (matches hero) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-6 hidden w-[76%] md:right-16 md:block lg:right-24"
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

      {/* Pattern overlays removed to match the hero — the court-surface
          texture on <body> carries through here too. */}

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-6">
        {/* Reversed white mark: the footer is a dark charcoal surface, which is
            exactly the case the brand's reversed logo exists for. */}
        <LogoTile
          file="at-sports-white.svg"
          alt="AT Sports"
          className="w-44 [&>div]:aspect-auto [&>div]:h-14 [&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0"
        />
        <Localized
          as="p"
          text={edition.footerNote}
          edition={edition}
          className="max-w-xl text-xs leading-relaxed text-steel"
          secondaryClassName="text-steel/70"
        />
        <p className="text-xs text-steel/70">
          © {year} AT Sports. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
