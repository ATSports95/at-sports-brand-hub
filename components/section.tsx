import { cn } from '@/lib/utils'

/**
 * Designed divider between sections: a modern dotted line that fades in from
 * both edges to a small Sky node at the center — clean, technical, on-brand.
 */
function SectionDivider() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center px-6 md:px-12"
    >
      <div
        className="h-1.5 w-full text-steel"
        style={{
          backgroundImage:
            'radial-gradient(currentColor 1.1px, transparent 1.6px)',
          backgroundSize: '14px 6px',
          backgroundPosition: 'center',
          maskImage:
            'linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)',
        }}
      />
      <span className="absolute size-2 rounded-full bg-sky ring-4 ring-background" />
    </div>
  )
}

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
        'relative scroll-mt-20 px-6 py-16 md:px-12 md:py-20 lg:scroll-mt-8',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-4xl">{children}</div>
      <SectionDivider />
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
            emphasis ? 'bg-accent' : 'bg-sky',
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
