import { cn } from '@/lib/utils'

export function Section({
  id,
  children,
  className,
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative isolate scroll-mt-20 border-b border-border px-6 py-16 md:px-12 md:py-20 lg:scroll-mt-8',
        className,
      )}
    >
      {/* Brand texture — echoes the hero header: a sky glow, diagonal blueprint
          lines, the dotted grid, and an oversized AT Sports logo watermark. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* soft sky glow in the upper-right */}
        <div
          className="absolute top-0 right-0 h-72 w-2/3"
          style={{
            background:
              'radial-gradient(60% 60% at 100% 0%, rgba(78,140,179,0.08), transparent 70%)',
          }}
        />
        {/* diagonal blueprint lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(118deg, transparent 0, transparent 40px, rgba(35,51,84,0.045) 40px, rgba(35,51,84,0.045) 41px)',
            maskImage:
              'radial-gradient(100% 80% at 100% 0%, #000, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(100% 80% at 100% 0%, #000, transparent 80%)',
          }}
        />
        {/* dotted grid */}
        <div
          className="halftone absolute top-0 right-0 h-72 w-3/4 text-navy/[0.08]"
          style={{
            maskImage:
              'radial-gradient(80% 80% at 100% 0%, #000, transparent 74%)',
            WebkitMaskImage:
              'radial-gradient(80% 80% at 100% 0%, #000, transparent 74%)',
          }}
        />
        {/* oversized logo watermark, off the right edge like the hero */}
        <div
          className="absolute top-1/2 -right-[5%] hidden h-[88%] w-1/2 -translate-y-1/2 md:block"
          style={{
            maskImage:
              'linear-gradient(to left, #000 0%, #000 26%, transparent 82%)',
            WebkitMaskImage:
              'linear-gradient(to left, #000 0%, #000 26%, transparent 82%)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/at-sports-black.svg"
            alt=""
            className="h-full w-full object-contain object-right opacity-[0.04]"
          />
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-4xl">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  emphasis,
}: {
  eyebrow: string
  title: string
  intro?: string
  emphasis?: boolean
}) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'h-4 w-1 rounded-full',
            emphasis ? 'bg-red' : 'bg-sky',
          )}
          aria-hidden
        />
        <span className="font-mono text-xs font-medium tracking-widest text-slate uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-pretty text-3xl font-bold tracking-tight text-navy md:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="max-w-2xl text-pretty leading-relaxed text-ink/80">
          {intro}
        </p>
      )}
    </div>
  )
}
