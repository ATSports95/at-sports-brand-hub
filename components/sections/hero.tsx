import { ArrowRight, Library } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LogoTile } from '@/components/logo-tile'

const CHIPS = ['Acrytech', 'CushionX', 'Faultline', 'RollX']

export function Hero() {
  return (
    <section
      id="hero"
      className="diagonal-bottom relative scroll-mt-20 overflow-hidden bg-navy pb-28 lg:scroll-mt-0"
    >
      {/* Halftone dot texture accent */}
      <div
        className="halftone pointer-events-none absolute inset-0 text-white/10"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 pt-16 pb-8 md:px-12 md:pt-24">
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

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
    </section>
  )
}
