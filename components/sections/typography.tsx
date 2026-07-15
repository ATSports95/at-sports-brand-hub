import { Section, SectionHeading } from '@/components/section'

const FONTS = [
  {
    name: 'Figtree',
    role: 'Everyday font',
    weights: 'Light · Regular · Medium · SemiBold · Bold',
    note: 'Clean geometric sans for body copy and UI. Loaded from Google Fonts.',
  },
  {
    name: 'Expletus Sans',
    role: 'Accent / display font',
    weights: 'Regular · Medium · SemiBold · Bold',
    note: 'Used for headlines and display moments.',
  },
  {
    name: 'Flood',
    role: 'High-impact accent font',
    weights: 'Display use only',
    note: 'Reserved for bold, high-impact accents.',
  },
]

export function Typography() {
  return (
    <Section id="typography">
      <SectionHeading
        eyebrow="Typography"
        title="Typography"
        intro="A clear hierarchy: bold display headlines in Navy, clean body text in Near-Black and Slate."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {FONTS.map((font) => (
          <div
            key={font.name}
            className="flex flex-col gap-2 rounded-md border border-border bg-card p-6"
          >
            <span className="font-display text-3xl font-bold text-navy">
              Aa
            </span>
            <span className="mt-2 text-lg font-semibold text-navy">
              {font.name}
            </span>
            <span className="text-xs font-medium tracking-wide text-sky uppercase">
              {font.role}
            </span>
            <span className="text-sm text-slate">{font.weights}</span>
            <p className="mt-1 text-xs leading-relaxed text-slate">
              {font.note}
            </p>
          </div>
        ))}
      </div>

      {/* Live hierarchy sample */}
      <div className="mt-8 rounded-md border border-border bg-card p-8">
        <span className="text-xs font-medium tracking-wide text-slate uppercase">
          Live hierarchy
        </span>
        <h3 className="mt-4 font-display text-4xl font-bold text-navy">
          Engineered to perform
        </h3>
        <p className="mt-2 text-lg font-medium text-slate">
          The complete sports surfacing system
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-ink/80">
          Body copy uses Figtree at a comfortable line height for readability.
          It carries the everyday message while the
          display font handles headlines and accents.
        </p>
      </div>

      <div className="mt-8 rounded-md border border-red/30 bg-red/5 p-6">
        <h4 className="font-semibold text-navy">
          For partners without the fonts
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          Don&apos;t substitute look-alikes in AT Sports-branded materials. Use
          a clean neutral sans (Arial/Helvetica) for your own documents, or
          request a branded template. Don&apos;t recreate AT Sports headlines
          or logos in a substitute font — request the asset.
        </p>
      </div>
    </Section>
  )
}
