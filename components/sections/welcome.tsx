import { Users, Layers, Mail } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'

export function Welcome() {
  return (
    <Section id="welcome">
      <SectionHeading
        eyebrow="Start Here"
        title="Welcome to the Brand Hub"
      />

      <p className="max-w-2xl text-pretty leading-relaxed text-ink/80">
        This Brand Hub is the single source of truth for the AT Sports brand. Every logo, product description, color, marketing asset, and positioning statement has been approved by the AT Sports Marketing Department to ensure a consistent experience across every market.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-6">
          <span className="flex size-10 items-center justify-center rounded-md bg-navy/5 text-navy">
            <Users className="size-5" />
          </span>
          <h3 className="text-lg font-semibold text-navy">Who this is for</h3>
          <p className="text-sm leading-relaxed text-ink/80">
            AT Sports distributors, dealers, installers, and channel partners
            representing the brand or a product line.
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-6">
          <span className="flex size-10 items-center justify-center rounded-md bg-navy/5 text-navy">
            <Layers className="size-5" />
          </span>
          <h3 className="text-lg font-semibold text-navy">Brand at a glance</h3>
          <p className="text-sm leading-relaxed text-ink/80">
            AT Sports designs and manufactures professional sports surfacing systems used on courts around the world.
            <br /><br />
            Rather than sourcing individual products from multiple suppliers, contractors can rely on one manufacturer for coatings, crack repair, cushioned systems, portable courts, equipment, and technical support - all engineered to work together as a complete system.
          </p>
        </div>
      </div>

      {/* Contact & approvals callout */}
      <div className="mt-5 overflow-hidden rounded-md border border-sky/40 bg-sky/5">
        <div className="flex items-center gap-3 border-b border-sky/30 bg-sky/10 px-6 py-4">
          <span className="flex size-9 items-center justify-center rounded-md bg-navy text-white">
            <Mail className="size-4" />
          </span>
          <h3 className="text-lg font-semibold text-navy">
            AT Sports Marketing Contact
          </h3>
        </div>
        <dl className="px-6 py-6">
          <div>
            <dd className="mt-1 text-center text-base text-ink">
              Malory Bateman
              <br />
              Business Development Manager
              <br />
              <a
                href="mailto:malory@atsports.com"
                className="font-medium text-sky underline underline-offset-2"
              >
                malory@atsports.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  )
}
