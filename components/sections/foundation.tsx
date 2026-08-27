import { Check, X } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { LogoTile } from '@/components/logo-tile'
import { PRODUCT_LINES } from '@/lib/brand'

const WE_SAY = [
  '"Manufactured with 100% self-crosslinking acrylic technology."',
  '"Engineered to withstand heavy play and changing climates."',
  '"Designed to reduce installation time and process complexity."',
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
        title="Mission & Positioning"
        intro="AT Sports exists to help contractors, distributors, and facility owners build courts that perform better, last longer, and represent their businesses with confidence.&#10;Through continuous product development and in-house manufacturing, we engineer complete sports surfacing systems trusted from local community courts to professional competition."
      />

      {/* Pull-quote */}
      <blockquote className="relative my-8 rounded-md border-l-4 border-red bg-muted px-6 py-7 md:px-8 md:py-8">
        {/* No spaces in the tagline, so <wbr /> supplies break points after each
            period — otherwise the line is one unbreakable token and overflows. */}
        <p className="font-display text-xl font-black uppercase leading-tight tracking-tight text-navy sm:text-2xl md:text-3xl">
          &ldquo;Surfaces.<wbr />Systems.<wbr />Solutions.&rdquo;
        </p>
      </blockquote>

      {/* Voice & tone */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-navy">Voice &amp; Tone</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">
          AT Sports sounds professional, technical, and confident — the voice
          of a manufacturer that knows its products perform. Benefit-forward
          without hype. We lead with facts, explain the customer benefit, and
          allow product performance to support the message.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-md border border-sky/40 bg-sky/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-sky text-white">
              <Check className="size-3.5" />
            </span>
            <h4 className="font-semibold text-navy">We lead with facts</h4>
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
        <h3 className="text-xl font-semibold text-navy">The Product Lines</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
          AT Sports manufactures complete sports surfacing systems. Each product line serves as a solution for a specific challenge
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
