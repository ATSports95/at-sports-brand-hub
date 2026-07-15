import {
  ArrowUpRight,
  Boxes,
  Handshake,
  Library,
  Palette,
  Shapes,
  Type,
} from 'lucide-react'
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
    title: 'Product brand kits',
    desc: 'Approved overviews, positioning, and marketing copy.',
    id: 'kits',
    icon: Boxes,
    tint: 'bg-slate/15 text-slate',
  },
  {
    title: 'Asset library',
    desc: 'Download logo packs, templates, and guides.',
    id: 'assets',
    icon: Library,
    tint: 'bg-navy/10 text-navy',
  },
  {
    title: 'Co-branding',
    desc: 'How to present your brand alongside AT Sports.',
    id: 'cobranding',
    icon: Handshake,
    tint: 'bg-red/10 text-red',
  },
  {
    title: 'Typography',
    desc: 'The brand fonts and how to use them.',
    id: 'typography',
    icon: Type,
    tint: 'bg-sky/15 text-sky',
  },
]

export function QuickAccess() {
  return (
    <section
      aria-label="Quick access to key resources"
      className="relative z-20 -mt-24 px-6 md:-mt-28 md:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ title, desc, id, icon: Icon, tint }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-[0_10px_30px_-12px_rgba(35,51,84,0.25)] transition-all duration-200 hover:-translate-y-1 hover:border-sky hover:shadow-[0_18px_44px_-14px_rgba(35,51,84,0.38)] focus-visible:ring-2 focus-visible:ring-sky/50 focus-visible:outline-none"
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
