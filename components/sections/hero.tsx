import { Fragment } from 'react'
import { Localized, LocalizedInline } from '@/components/localized'
import { PARTNER_EDITION, type Edition } from '@/lib/editions'
import { cn } from '@/lib/utils'

// Product wordmarks. `accent` is the letter rendered in Red (the trailing X).
const PRODUCTS = [
  { base: 'Acrytech' },
  { base: 'Cushion', accent: 'X' },
  { base: 'Faultline' },
  { base: 'Roll', accent: 'X' },
]

export function Hero({ edition = PARTNER_EDITION }: { edition?: Edition }) {
  return (
    <section
      id="hero"
      className="relative isolate scroll-mt-20 overflow-hidden bg-background pb-16 md:pb-20 lg:scroll-mt-0"
    >
      {/* Layer 2 — subtle sky-tinted radial glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 55% at 26% 30%, rgba(22,51,79,0.13), transparent 70%)',
        }}
      />

      {/* Layer 5 — soft light in the upper-right corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(42% 48% at 90% 2%, rgba(255,255,255,0.20), transparent 72%)',
        }}
      />

      {/* Layer 4 — oversized AT Sports watermark, off-center to the upper-right,
          softly masked so it dissolves before it ever reaches the copy. Uses the
          black mark at low opacity to read as an embossed debossing on the light
          slate surface (a white mark would vanish here). */}
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
          src="/logos/at-sports-black.svg"
          alt=""
          className="h-full w-full object-contain object-right-bottom opacity-[0.055]"
        />
      </div>

      {/* Layer — faint diagonal blueprint lines, fading in toward the lower half */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(118deg, transparent 0, transparent 43px, rgba(0,0,0,0.05) 43px, rgba(0,0,0,0.05) 44px)',
          maskImage: 'linear-gradient(to bottom, transparent, #000 55%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 55%)',
        }}
      />

      {/* Layer 3 — dotted grid texture, dialed back to a whisper */}
      <div
        className="halftone pointer-events-none absolute inset-0 text-ink/[0.07]"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-20 pb-4 md:px-12 md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-ink/[0.06] px-3 py-1 font-mono text-xs font-medium tracking-widest text-sky uppercase">
          <span className="size-1.5 rounded-full bg-sky" aria-hidden />
          <LocalizedInline text={edition.heroEyebrow} edition={edition} />
        </span>

        <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight text-navy md:text-7xl">
          {edition.heroTitle.en}
          <span className="mt-3 block text-2xl font-medium text-sky md:text-4xl">
            <Localized
              text={edition.heroSubtitle}
              edition={edition}
              secondaryClassName="text-xl font-normal text-sky/80 md:text-2xl"
            />
          </span>
        </h1>

        <div className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-steel">
          {edition.heroLead.map((para, i) => (
            <Localized
              key={i}
              as="p"
              text={para.text}
              edition={edition}
              className={cn(
                i > 0 && 'mt-6',
                para.emphasis ? 'font-black' : undefined,
              )}
              secondaryClassName="text-base leading-relaxed text-steel/75"
            />
          ))}
        </div>

        {/* Product wordmarks — strong typographic band linking to the kits */}
        <nav
          aria-label="Product lines"
          className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-2xl font-bold tracking-tight text-navy uppercase md:text-3xl"
        >
          {PRODUCTS.map((p, i) => (
            <Fragment key={p.base}>
              {i > 0 && (
                <span className="text-sky" aria-hidden>
                  &bull;
                </span>
              )}
              <a
                href="#kits"
                className="transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none"
              >
                {p.base}
                {p.accent && <span className="text-red">{p.accent}</span>}
              </a>
            </Fragment>
          ))}
        </nav>
      </div>
    </section>
  )
}
