import { Fragment } from 'react'

// Product wordmarks. `accent` is the letter rendered in Red (the trailing X).
const PRODUCTS = [
  { base: 'Acrytech' },
  { base: 'Cushion', accent: 'X' },
  { base: 'Faultline' },
  { base: 'Roll', accent: 'X' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate scroll-mt-20 overflow-hidden bg-navy pb-16 md:pb-20 lg:scroll-mt-0"
    >
      {/* Layer 2 — subtle sky-tinted radial glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 55% at 26% 30%, rgba(78,140,179,0.16), transparent 70%)',
        }}
      />

      {/* Layer 5 — soft light in the upper-right corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(42% 48% at 90% 2%, rgba(255,255,255,0.05), transparent 72%)',
        }}
      />

      {/* Layer 4 — oversized AT Sports watermark, off-center to the upper-right,
          white at ~5% opacity and softly masked so it dissolves before it ever
          reaches the copy. Embossed blueprint feel, not a visible logo. */}
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

      {/* Layer — faint diagonal blueprint lines, fading in toward the lower half */}
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

      {/* Layer 3 — dotted grid texture, dialed back to a whisper */}
      <div
        className="halftone pointer-events-none absolute inset-0 text-white/[0.055]"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-20 pb-4 md:px-12 md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs font-medium tracking-widest text-sky uppercase">
          <span className="size-1.5 rounded-full bg-sky" aria-hidden />
          Official Brand Portal
        </span>

        <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight text-white md:text-7xl">
          AT Sports Brand Hub
          <span className="mt-3 block text-2xl font-medium text-sky md:text-4xl">
            Partner Edition
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-steel">
          Everything you need to represent AT Sports and our product lines
          correctly — logos, colors, product names, co-branding rules, and
          ready-to-use assets.
        </p>

        {/* Product wordmarks — strong typographic band linking to the kits */}
        <nav
          aria-label="Product lines"
          className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-2xl font-bold tracking-tight text-white uppercase md:text-3xl"
        >
          {PRODUCTS.map((p, i) => (
            <Fragment key={p.base}>
              {i > 0 && (
                <span className="text-white/20" aria-hidden>
                  /
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
