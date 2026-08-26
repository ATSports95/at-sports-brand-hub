import { Users, Layers, Mail } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Localized } from '@/components/localized'
import { PARTNER_EDITION, type Edition } from '@/lib/editions'

export function Welcome({ edition = PARTNER_EDITION }: { edition?: Edition }) {
  return (
    <Section id="welcome">
      <SectionHeading
        eyebrow="Start Here"
        title="Welcome to the Brand Hub"
      />

      <Localized
        as="p"
        text={edition.welcomeIntro}
        edition={edition}
        className="max-w-2xl text-pretty leading-relaxed text-ink/80"
        secondaryClassName="mt-3 text-[0.95em] text-ink/65"
      />



      {/* Contact & approvals callout */}
      <div className="mt-5 flex max-w-md flex-col gap-1 rounded-md border border-sky/40 bg-sky/5 p-4">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-navy text-white">
            <Mail className="size-3.5" />
          </span>
          <h3 className="text-sm font-semibold text-navy">
            AT Sports Marketing Contact
          </h3>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-ink">
          <span className="font-medium">Malory Bateman</span> — Business
          Development Manager
          <br />
          <a
            href="mailto:malory@atsports.com"
            className="font-medium text-sky underline underline-offset-2"
          >
            malory@atsports.com
          </a>
        </p>
      </div>
    </Section>
  )
}
