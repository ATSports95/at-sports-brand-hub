import { ArrowRight, Library } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LogoTile } from '@/components/logo-tile'

const CHIPS = ['Acrytech', 'CushionX', 'Faultline', 'RollX']

export function Hero() {
  return (
    <section
      id="hero"
      className="diagonal-bottom relative isolate scroll-mt-20 overflow-hidden bg-navy pb-28 lg:scroll-mt-0"
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
        className="pointer-events-none absolute -top-[8%] -right-[10%] hidden h-[80%] w-[68%] md:block"
        style={{
          maskImage:
            'linear-gradient(to left, #000 0%, #000 30%, transparent 78%)',
          WebkitMaskImage:
            'linear-gradient(to left, #000 0%, #000 30%, transparent 78%)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/at-sports-white.svg"
          alt=""
          className="h-full w-full object-contain object-right opacity-[0.05]"
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
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-16 pb-8 md:px-12 md:pt-24">
        <LogoTile
          file="at-sports-white.svg"
          alt="AT Sports"
          tone="navy"
          className="w-52 [&>div]:aspect-auto [&>div]:h-20 [&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0"
        />

        <h1 className="mt-10 text-balance text-4xl font-bold tracking-tight text-white md:text-6xl">
          AT Sports Brand Hub
          <span className="mt-2 block text-2xl font-medium text-sky md:text-3xl">
            Partner Edition
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-steel">
          Everything you need to represent AT Sports and our product lines
          correctly — logos, colors, product names, co-branding rules, and
          ready-to-use assets.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {CHIPS.map((chip, i) => (
            <span
              key={chip}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-white"
            >
              {chip}
              {i < CHIPS.length - 1 && (
                <span className="text-red" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>

        {/* CTA row on a faint frosted slab so the buttons lift off the field */}
        <div className="mt-10 w-fit rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-sm">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#welcome" />}
              size="lg"
              className="bg-white text-navy hover:bg-white/90"
            >
              Browse the guidelines
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#assets" />}
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Library className="size-4" />
              Go to Asset Library
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
