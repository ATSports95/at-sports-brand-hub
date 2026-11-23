import { Fragment } from 'react'
import { Localized, LocalizedInline } from '@/components/localized'
import { PARTNER_EDITION, type Edition } from '@/lib/editions'
import { cn } from '@/lib/utils'

// Product wordmarks. `accent` is the letter rendered in the brand accent (the trailing X).
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
      className="relative isolate scroll-mt-20 overflow-hidden pb-4 md:pb-6 lg:scroll-mt-0"
    >
      {/* No background of its own: the site-wide gradient on <body> shows
          through so the hero is continuous with the rest of the page. */}

      {/* Layer 4 — oversized AT Sports watermark, off-center to the upper-right,
          white at low opacity and softly masked so it dissolves before it ever
          reaches the copy. Embossed blueprint feel, not a visible logo. */}
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

      {/* The diagonal-line and dotted-grid layers that used to sit here are
          gone: the court-surface texture on <body> now carries the whole page,
          so local pattern overlays would only fight it. */}

      {/* Content — same padding and max width as <Section>, so the hero copy
          lines up with every section below it. */}
      <div className="relative z-10 px-6 pt-20 md:px-16 md:pt-28 lg:px-24">
      <div className="mx-auto w-full max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs font-medium tracking-widest text-sky uppercase">
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
                // The emphasized opening paragraph is white so it leads the
                // block; the paragraphs after it keep the inherited steel.
                para.emphasis ? 'font-black text-white' : undefined,
              )}
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
                {p.accent && <span className="text-accent">{p.accent}</span>}
              </a>
            </Fragment>
          ))}
        </nav>
      </div>
      </div>
    </section>
  )
}
