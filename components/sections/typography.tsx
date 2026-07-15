import { Section, SectionHeading } from '@/components/section'

const FONTS = [
  {
    name: 'Figtree',
    role: 'Primary typeface',
    weights: 'Light · Regular · Medium · SemiBold · Bold',
    note: 'open-source Google Font',
    fontClass: 'font-display',
  },
  {
    name: 'Space Grotesk',
    role: 'Secondary Typeface ',
    weights: 'Medium · Bold',
    note: 'Open-Source Google Font',
    fontClass: 'font-secondary',
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

      <div className="grid gap-5 sm:grid-cols-2">
        {FONTS.map((font) => (
          <div
            key={font.name}
            className="flex flex-col gap-2 rounded-md border border-border bg-card p-6"
          >
            <span className={`${font.fontClass} text-3xl font-bold text-navy`}>
              Aa
            </span>
            <span
              className={`${font.fontClass} mt-2 text-lg font-semibold text-navy`}
            >
              {font.name}
            </span>
            <span className="text-xs font-medium tracking-wide text-sky uppercase">
              {font.role}
            </span>
            <span className={`${font.fontClass} text-sm text-slate`}>
              {font.weights}
            </span>
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
          The same family sets the headlines above at heavier weights, keeping
          the type system clean and consistent.
        </p>
      </div>


    </Section>
  )
}
