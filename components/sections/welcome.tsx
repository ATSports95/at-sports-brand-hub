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
        This is your one place for everything you need to represent AT Sports
        and our product lines correctly. Whether you&apos;re building a
        proposal, posting to social, or putting our name on a sign, start here.
        Everything here is current and cleared for partner use — bookmark this
        page rather than saving copies. The one rule that covers most
        situations: <strong className="text-navy">when in doubt, ask us
        before you publish.</strong>
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
            AT Sports is the umbrella manufacturer behind a complete system of
            sports surfacing products — from crack repair, to coatings, to
            cushioned and portable systems. One manufacturer for the full
            surfacing system; each product line solves a specific job.
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
            Contact &amp; approvals
          </h3>
        </div>
        <dl className="grid gap-x-8 gap-y-4 px-6 py-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium tracking-wide text-slate uppercase">
              Brand &amp; marketing contact
            </dt>
            <dd className="mt-1 text-sm text-ink">
              [Name], [email@atsports.com]
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-slate uppercase">
              Asset requests
            </dt>
            <dd className="mt-1 text-sm text-ink">[email / form link]</dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-slate uppercase">
              Co-branding approval
            </dt>
            <dd className="mt-1 text-sm text-ink">[email]</dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-slate uppercase">
              Typical turnaround
            </dt>
            <dd className="mt-1 text-sm text-ink">[X business days]</dd>
          </div>
        </dl>
      </div>
    </Section>
  )
}
