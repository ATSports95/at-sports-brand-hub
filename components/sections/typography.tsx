import { Section, SectionHeading } from '@/components/section'

const FONTS = [
  {
    name: 'Figtree',
    role: 'Primary Text Typeface',
    weights: 'Light · Regular · Medium · SemiBold · Bold',
    note: 'Open-Source Google Font',
    fontClass: 'font-display',
  },
  {
    name: 'Space Grotesk',
    role: 'Display Typeface ',
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

    </Section>
  )
}
