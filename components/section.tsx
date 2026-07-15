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
      {/* Subtle brand texture — echoes the hero: a soft sky glow and a whisper
          of the dotted grid in the upper-right, masked so it never competes. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* soft sky glow in the upper-right */}
        <div
          className="absolute top-0 right-0 h-64 w-1/2"
          style={{
            background:
              'radial-gradient(60% 60% at 100% 0%, rgba(78,140,179,0.06), transparent 70%)',
          }}
        />
        {/* faint diagonal blueprint lines, masked to the upper-right */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(118deg, transparent 0, transparent 43px, rgba(35,51,84,0.025) 43px, rgba(35,51,84,0.025) 44px)',
            maskImage:
              'radial-gradient(85% 65% at 100% 0%, #000, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(85% 65% at 100% 0%, #000, transparent 75%)',
          }}
        />
        {/* whisper of the dotted grid */}
        <div
          className="halftone absolute top-0 right-0 h-56 w-2/3 text-navy/[0.05]"
          style={{
            maskImage:
              'radial-gradient(75% 75% at 100% 0%, #000, transparent 72%)',
            WebkitMaskImage:
              'radial-gradient(75% 75% at 100% 0%, #000, transparent 72%)',
          }}
        />
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
