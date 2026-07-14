import { Check, X, Star, Unlock, ShieldAlert } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { PRODUCT_NAMING } from '@/lib/brand'
import { cn } from '@/lib/utils'

function PartnerBox({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      style={style}
      className={cn(
        'flex items-center justify-center rounded-sm bg-steel/50 text-center text-xs font-medium text-slate',
        className,
      )}
    >
      [Your Logo]
    </div>
  )
}

// eslint-disable-next-line @next/next/no-img-element
const ATLogo = ({ style }: { style?: React.CSSProperties }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/logos/at-sports-color.svg"
    alt="AT Sports logo"
    style={style}
    className="max-h-full max-w-full object-contain"
  />
)

const DO = [
  'Use files exactly as supplied.',
  'Recommend product lines by the job they do.',
  'Ask when unsure, before printing/posting.',
  'Use approved project photography.',
]
const DONT = [
  'Recolor/redraw/restyle any logo.',
  'Change a product name or its capitalization.',
  'Alter surfacing colors in photos.',
  'Make unpublished performance/warranty claims.',
  'Merge your logo into ours or present your company as AT Sports.',
]

export function CoBranding() {
  return (
    <Section id="cobranding">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red/10 px-3 py-1 text-xs font-semibold tracking-wide text-red uppercase">
        <Star className="size-3.5" />
        Most important for partners
      </div>
      <SectionHeading
        eyebrow="Co-Branding & Partner Use"
        title="Co-branding & partner use"
        emphasis
        intro="Keep the marks separate and balanced — use a clear divider or generous space, never overlap or merge them. Respect AT Sports' clear space and match visual weight so neither mark overpowers the other."
      />

      <p className="max-w-2xl text-sm leading-relaxed text-ink/80">
        Use approved language only:{' '}
        <strong className="text-navy">&ldquo;Authorized Installer,&rdquo;</strong>{' '}
        <strong className="text-navy">&ldquo;Authorized Dealer,&rdquo;</strong>{' '}
        or{' '}
        <strong className="text-navy">
          &ldquo;[Your Company] — Authorized AT Sports Partner.&rdquo;
        </strong>{' '}
        Don&apos;t invent titles like &ldquo;Official Partner&rdquo; or
        &ldquo;Certified by AT Sports&rdquo; without sign-off.
      </p>

      {/* Correct vs incorrect co-branding */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {/* Correct */}
        <figure className="flex flex-col gap-3">
          <div className="flex aspect-[3/2] items-center justify-center gap-4 rounded-md border-2 border-sky bg-card p-6">
            <PartnerBox className="h-14 w-28" />
            <span className="h-16 w-px bg-steel" aria-hidden />
            <div className="flex h-14 w-28 items-center justify-center">
              <ATLogo />
            </div>
          </div>
          <figcaption className="flex items-center gap-2 text-sm font-medium text-navy">
            <span className="flex size-5 items-center justify-center rounded-full bg-sky text-white">
              <Check className="size-3" />
            </span>
            Correct — separate, balanced, divided
          </figcaption>
        </figure>

        {/* Overlapping */}
        <figure className="flex flex-col gap-3">
          <div className="relative flex aspect-[3/2] items-center justify-center rounded-md border-2 border-red/60 bg-card p-6">
            <PartnerBox className="absolute h-14 w-28 -translate-x-4" />
            <div className="absolute flex h-14 w-28 translate-x-6 items-center justify-center">
              <ATLogo />
            </div>
          </div>
          <figcaption className="flex items-center gap-2 text-sm font-medium text-navy">
            <span className="flex size-5 items-center justify-center rounded-full bg-red text-white">
              <X className="size-3" />
            </span>
            Overlapping — don&apos;t merge or crowd the marks
          </figcaption>
        </figure>

        {/* Mismatched weight */}
        <figure className="flex flex-col gap-3">
          <div className="flex aspect-[3/2] items-center justify-center gap-4 rounded-md border-2 border-red/60 bg-card p-6">
            <PartnerBox className="h-24 w-40" />
            <div className="flex h-8 w-16 items-center justify-center">
              <ATLogo />
            </div>
          </div>
          <figcaption className="flex items-center gap-2 text-sm font-medium text-navy">
            <span className="flex size-5 items-center justify-center rounded-full bg-red text-white">
              <X className="size-3" />
            </span>
            Mismatched weight — don&apos;t let one mark overpower the other
          </figcaption>
        </figure>

        {/* Recolored */}
        <figure className="flex flex-col gap-3">
          <div className="flex aspect-[3/2] items-center justify-center gap-4 rounded-md border-2 border-red/60 bg-card p-6">
            <PartnerBox className="h-14 w-28" />
            <span className="h-16 w-px bg-steel" aria-hidden />
            <div className="flex h-14 w-28 items-center justify-center">
              <ATLogo style={{ filter: 'hue-rotate(120deg) saturate(2)' }} />
            </div>
          </div>
          <figcaption className="flex items-center gap-2 text-sm font-medium text-navy">
            <span className="flex size-5 items-center justify-center rounded-full bg-red text-white">
              <X className="size-3" />
            </span>
            Recolored — don&apos;t recolor either logo
          </figcaption>
        </figure>
      </div>

      {/* Product naming table */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-navy">
          Using product line names
        </h3>
        <div className="mt-4 overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-4 py-3 font-semibold">Correct</th>
                <th className="px-4 py-3 font-semibold">Not</th>
                <th className="px-4 py-3 font-semibold">Descriptor</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCT_NAMING.map((row, i) => (
                <tr
                  key={row.correct}
                  className={cn(
                    'border-t border-border',
                    i % 2 === 1 && 'bg-muted/60',
                  )}
                >
                  <td className="px-4 py-3 font-semibold text-navy">
                    {row.correct}
                  </td>
                  <td className="px-4 py-3 text-red line-through decoration-red/40">
                    {row.not}
                  </td>
                  <td className="px-4 py-3 text-slate">{row.descriptor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          Write the company name <strong className="text-navy">AT Sports</strong>{' '}
          in full (two words); don&apos;t shorten to &ldquo;ATS&rdquo; in
          customer-facing copy. On first mention, pair the product with its
          descriptor, then use the product name after. Don&apos;t add ™/®
          yourself — use marks as supplied.
        </p>
      </div>

      {/* Do's & don'ts */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="rounded-md border border-sky/40 bg-sky/5 p-6">
          <h4 className="mb-4 flex items-center gap-2 font-semibold text-navy">
            <span className="flex size-6 items-center justify-center rounded-full bg-sky text-white">
              <Check className="size-3.5" />
            </span>
            Do
          </h4>
          <ul className="flex flex-col gap-3">
            {DO.map((d) => (
              <li key={d} className="text-sm leading-relaxed text-ink/80">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-red/30 bg-red/5 p-6">
          <h4 className="mb-4 flex items-center gap-2 font-semibold text-navy">
            <span className="flex size-6 items-center justify-center rounded-full bg-red text-white">
              <X className="size-3.5" />
            </span>
            Don&apos;t
          </h4>
          <ul className="flex flex-col gap-3">
            {DONT.map((d) => (
              <li key={d} className="text-sm leading-relaxed text-ink/80">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* What needs approval */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-6">
          <h4 className="mb-4 flex items-center gap-2 font-semibold text-navy">
            <span className="flex size-6 items-center justify-center rounded-full bg-navy/5 text-navy">
              <Unlock className="size-3.5" />
            </span>
            Use freely
          </h4>
          <p className="text-sm leading-relaxed text-ink/80">
            Logos, colors, fonts in your own quotes/proposals/standard sales
            materials; approved project photos in your portfolio and social.
          </p>
        </div>
        <div className="rounded-md border border-border bg-card p-6">
          <h4 className="mb-4 flex items-center gap-2 font-semibold text-navy">
            <span className="flex size-6 items-center justify-center rounded-full bg-red/10 text-red">
              <ShieldAlert className="size-3.5" />
            </span>
            Approve before going public
          </h4>
          <p className="text-sm leading-relaxed text-ink/80">
            Paid advertising; large-format signage/wraps/banners; press
            releases or media quotes; any new co-branded lockup or template.
            When in doubt, send it to{' '}
            <span className="font-medium text-navy">[email]</span> before
            it&apos;s live.
          </p>
        </div>
      </div>
    </Section>
  )
}
