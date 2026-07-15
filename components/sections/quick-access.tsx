import { ArrowUpRight, Library, Palette, Shapes, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const CARDS = [
  {
    title: 'Logos & identity',
    desc: 'Corporate, product, and Tag logos in every version.',
    id: 'logo',
    icon: Shapes,
    tint: 'bg-navy/10 text-navy',
  },
  {
    title: 'Color system',
    desc: 'The brand palette with click-to-copy hex values.',
    id: 'color',
    icon: Palette,
    tint: 'bg-sky/15 text-sky',
  },
  {
    title: 'Asset library',
    desc: 'Download logo packs, templates, and guides.',
    id: 'assets',
    icon: Library,
    tint: 'bg-red/10 text-red',
  },
]

export function QuickAccess() {
  return (
    <section
      aria-labelledby="quick-access-heading"
      className="border-b border-border bg-muted/40 px-6 py-14 md:px-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-7 flex items-center gap-3">
          <span
            className="flex size-9 items-center justify-center rounded-md bg-navy text-white"
            aria-hidden
          >
            <Zap className="size-4" />
          </span>
          <div>
            <p className="font-mono text-xs font-medium tracking-widest text-slate uppercase">
              Quick Access
            </p>
            <h2
              id="quick-access-heading"
              className="text-lg font-semibold text-navy"
            >
              Jump to the most-used resources
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CARDS.map(({ title, desc, id, icon: Icon, tint }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-sky hover:shadow-[0_16px_36px_-16px_rgba(35,51,84,0.35)] focus-visible:ring-2 focus-visible:ring-sky/50 focus-visible:outline-none"
            >
              <span
                className={cn(
                  'flex size-10 items-center justify-center rounded-lg',
                  tint,
                )}
              >
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="flex items-center gap-1 font-semibold text-navy">
                  {title}
                  <ArrowUpRight
                    className="size-4 text-slate transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky"
                    aria-hidden
                  />
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
