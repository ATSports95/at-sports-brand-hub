import { Check, X, Camera } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'

const DO = [
  'High-res at intended size, sharp and true to the surface.',
  'Real contractors.',
  'Installation process.',
  'Finished courts.',
  'Wide facility shots.',
  'Close product details.',
]
const DONT = [
  'Low-res grabs or stretched images.',
  'Altering or filtering surface colors.',
  'Cropping out branding.',
  'Pulling uncleared images from the website/social.',
  'Fake renders/AI-looking imagery.',
]

export function Photography() {
  return (
    <Section id="photography">
      <SectionHeading
        eyebrow="Photography & Imagery"
        title="Photography & Imagery"
        intro="Use the curated project images in the Asset Library for marketing and portfolio use — these are cleared for partners. Show surfaces as installed; real projects build trust better than stock."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-md border border-sky/40 bg-sky/5 p-6">
          <h4 className="mb-4 flex items-center gap-2 font-semibold text-navy">
            <span className="flex size-6 items-center justify-center rounded-full bg-sky text-white">
              <Check className="size-3.5" />
            </span>
            Do Show
          </h4>
          <ul className="flex flex-col gap-3">
            {DO.map((d) => (
              <li key={d} className="text-sm leading-relaxed text-ink/80">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-red/30 bg-red/5 p-6">
          <h4 className="mb-4 flex items-center gap-2 font-semibold text-navy">
            <span className="flex size-6 items-center justify-center rounded-full bg-red text-white">
              <X className="size-3.5" />
            </span>
            Don&apos;t
          </h4>
          <ul className="flex flex-col gap-3">
            {DONT.map((d) => (
              <li key={d} className="text-sm leading-relaxed text-ink/80">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex items-start gap-4 rounded-md border border-border bg-muted p-6">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-navy text-white">
          <Camera className="size-5" />
        </span>
        <div>
          <h4 className="font-semibold text-navy">Requesting new images</h4>
          <p className="mt-1 text-sm leading-relaxed text-ink/80">
            Need a specific project shot or higher-res file? Request from malory@atsports.com with the product line, surface color, and intended use. 
          </p>
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-slate">
        No photo credit is required for approved images downloaded from the AT
        Sports Asset Library unless a specific credit is included with the file.
        Images may not be resold, transferred to unrelated third parties, or
        used to suggest involvement in a project the partner did not complete.
      </p>
    </Section>
  )
}
