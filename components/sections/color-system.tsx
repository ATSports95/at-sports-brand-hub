import { Section, SectionHeading } from '@/components/section'
import { ColorSwatch } from '@/components/color-swatch'
import { BRAND_COLORS } from '@/lib/brand'

export function ColorSystem() {
  const primary = BRAND_COLORS.filter((c) => c.group === 'primary')
  const secondary = BRAND_COLORS.filter((c) => c.group === 'secondary')

  return (
    <Section id="color">
      <SectionHeading
        eyebrow="Color System"
        title="Brand Color System"
        intro="Click any swatch to copy its HEX value to your clipboard."
      />

      <h3 className="mb-4 text-sm font-medium tracking-wide text-slate uppercase">
        Primary
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {primary.map((color) => (
          <ColorSwatch key={color.name} color={color} />
        ))}
      </div>

      <h3 className="mt-10 mb-4 text-sm font-medium tracking-wide text-slate uppercase">
        Secondary
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {secondary.map((color) => (
          <ColorSwatch key={color.name} color={color} />
        ))}
      </div>

      <div className="mt-10 rounded-md border border-border bg-muted p-6">
        <h4 className="font-semibold text-navy">Usage notes</h4>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          Navy leads and should dominate layouts with white space. Red is the
          accent, not the field — use it for emphasis, never as a large
          background. Sky and the neutrals support. Keep text legible: dark
          text on light, white on Navy/Near-Black; avoid low-contrast pairings
          like Steel on white.
        </p>
      </div>
    </Section>
  )
}
