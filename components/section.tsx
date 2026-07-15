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
        'scroll-mt-20 border-b border-border px-6 py-16 md:px-12 md:py-20 lg:scroll-mt-8',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-4xl">{children}</div>
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
