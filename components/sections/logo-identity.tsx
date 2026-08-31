import { Check, X } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { LogoTile } from '@/components/logo-tile'
import { PRODUCT_LINES } from '@/lib/brand'

const DONTS = [
  'Don\u2019t stretch, squash, or distort — scale proportionally only.',
  'Don\u2019t recolor or add gradients, shadows, glows, effects.',
  'Don\u2019t rotate or tilt.',
  'Don\u2019t rebuild or retype any part — always use the supplied file.',
  'Don\u2019t place on busy or low-contrast backgrounds.',
  'Don\u2019t crowd it inside its clear space.',
  'Don\u2019t add words or your own logo inside the AT Sports lockup.',
]

const INCORRECT = [
  {
    label: 'Stretched',
    caption: 'Distorted aspect ratio',
    style: { transform: 'scaleX(1.6)' },
  },
  {
    label: 'Recolored',
    caption: 'Wrong colors',
    style: { filter: 'hue-rotate(120deg) saturate(2)' },
  },
  {
    label: 'Rotated',
    caption: 'Tilted lockup',
    style: { transform: 'rotate(-12deg)' },
  },
]

// Approved treatments demonstrated alongside the incorrect examples.
const APPROVED = [
  {
    label: 'Drop shadow',
    caption: 'OK to use',
    style: { filter: 'drop-shadow(4px 6px 3px rgba(0,0,0,0.55))' },
  },
]

export function LogoIdentity() {
  return (
    <Section id="logo">
      <SectionHeading
        eyebrow="Logo & Identity"
        title="Logo & Identity"
        intro="Our logos are supplied as ready-to-use files. Show color and black versions on light tiles, and the reversed white version on Navy — never white-on-white."
      />

      {/* Corporate logo */}
      <div className="mb-14">
        <h3 className="text-xl font-semibold text-navy">The Company Logo</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/80">
          The AT Sports logo represents the company as a whole. Product logos represent individual solutions within the AT Sports product portfolio.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <LogoTile
            file="at-sports-color.png"
            alt="AT Sports full color logo"
            caption="Full color"
            subCaption="Default — use whenever possible"
          />
          <LogoTile
            file="at-sports-black.svg"
            alt="AT Sports solid black logo"
            caption="Solid black"
            subCaption="One-color printing & engraving"
          />
          <LogoTile
            file="at-sports-white.svg"
            alt="AT Sports reversed white logo"
            tone="navy"
            caption="Reversed white"
            subCaption="Dark & photo backgrounds"
          />
        </div>
      </div>

      {/* The Tag */}
      <div className="mb-14">
        <h3 className="text-xl font-semibold text-navy">
          The AT Sports Tag
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/80">
          The &ldquo;Division of AT Sports&rdquo; tag identifies each product
          line as part of the AT Sports portfolio. Use the supplied lockup when
          a product-line logo appears without clear AT Sports company context.
          Never rebuild, retype, or reposition the tag.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <LogoTile
            file="division-tag-color.png"
            alt="Division of AT Sports tag"
            caption="The Tag"
            subCaption="Division of AT Sports"
          />
        </div>
      </div>

      {/* Product line logos */}
      <div className="mb-14">
        <h3 className="text-xl font-semibold text-navy">Product Line Logos</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/80">
          Each line — Acrytech, CushionX, Faultline, RollX — has its own logo
          in the same three versions. Use the product logo when marketing that
          product; pair it with the Tag when it stands alone.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {PRODUCT_LINES.map((p) => (
            <LogoTile
              key={p.id}
              file={`${p.id}-color.png`}
              alt={`${p.name} logo`}
              caption={p.name}
            />
          ))}
        </div>

        <p className="mt-8 mb-4 text-sm font-medium text-slate">
          The same product logos paired with the Tag (lockups):
        </p>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {PRODUCT_LINES.map((p) => (
            <LogoTile
              key={p.id}
              file={`${p.id}-tag-color.png`}
              alt={`${p.name} with Division of AT Sports tag`}
              caption={`${p.name} + Tag`}
            />
          ))}
        </div>
      </div>

      {/* Clear space */}
      <div className="mb-14 rounded-md border border-border bg-muted p-6">
        <h3 className="text-lg font-semibold text-navy">
          Clear space &amp; minimum size
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/80">
          Maintain clear space around the logo equal to at least the height of
          the <strong className="text-navy">&quot;A&quot;</strong> in the AT
          Sports wordmark. No text, graphics, borders, or other logos may enter
          this area.
        </p>
      </div>

      {/* Don'ts */}
      <div className="mb-14">
        <h3 className="text-xl font-semibold text-navy">Logo Don&apos;ts</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {DONTS.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 rounded-md border border-border bg-card p-4"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                <X className="size-3.5" />
              </span>
              <p className="text-sm leading-relaxed text-ink/80">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Correct vs incorrect */}
      <div>
        <h3 className="text-xl font-semibold text-navy">
          Correct vs. Incorrect
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/80">
          Concrete examples of the rules above. The incorrect tiles apply CSS
          treatments to the real logo — they are demonstrations, not assets to
          use.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {/* Correct */}
          <figure className="flex flex-col gap-3">
            <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-3xl border-2 border-sky bg-white/70 p-6 backdrop-blur-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/at-sports-color.png"
                alt="Correct AT Sports logo usage"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <figcaption className="flex items-center gap-2 text-sm font-medium text-navy">
              <span className="flex size-5 items-center justify-center rounded-full bg-sky text-white">
                <Check className="size-3" />
              </span>
              Correct — clean, proper padding
            </figcaption>
          </figure>

          {INCORRECT.map((item) => (
            <figure key={item.label} className="flex flex-col gap-3">
              <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-md border-2 border-red/60 bg-white/70 p-6 backdrop-blur-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/at-sports-color.png"
                  alt={`Incorrect logo usage: ${item.label}`}
                  style={item.style}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <figcaption className="flex items-center gap-2 text-sm font-medium text-navy">
                <span className="flex size-5 items-center justify-center rounded-full bg-red text-white">
                  <X className="size-3" />
                </span>
                {item.label} — {item.caption}
              </figcaption>
            </figure>
          ))}

          {APPROVED.map((item) => (
            <figure key={item.label} className="flex flex-col gap-3">
              <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-md border-2 border-sky bg-white p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/at-sports-color.png"
                  alt={`Approved logo usage: ${item.label}`}
                  style={item.style}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <figcaption className="flex items-center gap-2 text-sm font-medium text-navy">
                <span className="flex size-5 items-center justify-center rounded-full bg-sky text-white">
                  <Check className="size-3" />
                </span>
                {item.label} — {item.caption}
              </figcaption>
            </figure>
          ))}

          {/* Busy background */}
          <figure className="flex flex-col gap-3">
            <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-md border-2 border-sky bg-slate p-6">
              <div
                className="court-surface pointer-events-none absolute inset-0 opacity-60"
                aria-hidden
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/at-sports-color.png"
                alt="Approved logo usage: busy background"
                className="relative max-h-full max-w-full object-contain"
              />
            </div>
            <figcaption className="flex items-center gap-2 text-sm font-medium text-navy">
              <span className="flex size-5 items-center justify-center rounded-full bg-sky text-white">
                <Check className="size-3" />
              </span>
              On busy background — OK to use
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  )
}
