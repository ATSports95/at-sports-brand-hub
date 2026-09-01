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
          Charcoal is the primary brand color for typography and backgrounds.
          Modern Blue is the primary accent — use it for buttons, graphics, and
          key brand moments, not as a large field. Deep Navy and Steel Blue
          support, while Light Blue Gray and Off White carry backgrounds,
          dividers, and clean space. Keep text legible: light text on Charcoal,
          Deep Navy, or Steel Blue; dark text on Light Blue Gray and Off White.
        </p>
      </div>
    </Section>
  )
}
