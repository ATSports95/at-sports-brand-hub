import { cn } from '@/lib/utils'

/**
 * Designed divider between sections: a hairline that fades in from both edges
 * to a small rotated Sky diamond flanked by tiny Steel dots — echoing the
 * geometric, technical AT Sports aesthetic.
 */
function SectionDivider() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-3 px-6 md:px-12"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-steel/60" />
      <span className="size-1 rounded-full bg-steel" />
      <span className="size-2 rotate-45 border border-sky/60 bg-sky/15" />
      <span className="size-1 rounded-full bg-steel" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-steel/60" />
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
