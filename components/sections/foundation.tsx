import { Check, X } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { LogoTile } from '@/components/logo-tile'
import { PRODUCT_LINES } from '@/lib/brand'

const WE_SAY = [
  '"Engineered for high-performance play."',
  '"A premium solution designed to [do the job]."',
  '"Fast and easy to install."',
  'Specific, provable claims.',
]

const WE_DONT_SAY = [
  'Unprovable superlatives ("the best," "#1").',
  'Vague hype with no substance.',
  'Promises we can\u2019t stand behind.',
]

export function Foundation() {
  return (
    <Section id="foundation">
      <SectionHeading
        eyebrow="Brand Foundation"
        title="Mission & positioning"
        intro="AT Sports manufactures the surfaces athletes play on — engineered, tested, and built to perform. We give facility owners, contractors, and municipalities a single trusted source for the full surfacing system, backed by a product line that keeps growing."
      />

      {/* Pull-quote */}
      <blockquote className="relative my-8 rounded-md border-l-4 border-red bg-muted px-6 py-6">
        <p className="text-balance font-display text-xl font-semibold text-navy md:text-2xl">
          &ldquo;The complete sports surfacing system, from one
          manufacturer.&rdquo;
        </p>
      </blockquote>

      {/* Voice & tone */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-navy">Voice &amp; tone</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">
          AT Sports sounds professional, technical, and confident — the voice
          of a manufacturer that knows its products perform. Benefit-forward
          without hype. We let the engineering do the talking.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-md border border-sky/40 bg-sky/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-sky text-white">
              <Check className="size-3.5" />
            </span>
            <h4 className="font-semibold text-navy">We say</h4>
          </div>
          <ul className="flex flex-col gap-3">
            {WE_SAY.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-ink/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-red/30 bg-red/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-red text-white">
              <X className="size-3.5" />
            </span>
            <h4 className="font-semibold text-navy">We don&apos;t say</h4>
          </div>
          <ul className="flex flex-col gap-3">
            {WE_DONT_SAY.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-ink/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product lines */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-navy">The product lines</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
          One manufacturer, a full surfacing system. Each line solves a
          specific job.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {PRODUCT_LINES.map((product) => (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden rounded-md border border-border bg-card"
            >
              <div className="flex h-28 items-center justify-center border-b border-border bg-white p-6">
                <LogoTile
                  file={`${product.id}-color.svg`}
                  alt={`${product.name} logo`}
                  className="w-full [&>div]:aspect-auto [&>div]:h-16 [&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="rounded-sm bg-navy/5 px-2 py-0.5 text-xs font-medium text-sky">
                    {product.descriptor}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink/80">
                  {product.whatFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
