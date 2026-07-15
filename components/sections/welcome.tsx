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
