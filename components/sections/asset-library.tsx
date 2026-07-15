import {
  Images,
  Boxes,
  Palette,
  FileText,
} from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { DownloadButton } from '@/components/download-button'
import type { AssetKey } from '@/lib/assets'

const CARDS: {
  key: AssetKey
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}[] = [
  {
    key: 'logoPack',
    title: 'Logo Pack',
    description:
      'All AT Sports and product line logos in full format (SVG, PNG transparent, EPS): full-color, black, and reversed.',
    icon: Images,
  },
  {
    key: 'productLineAssets',
    title: 'Marketing Media',
    description:
      'Approved product photos, installation imagery, and branded videos to use across print and digital materials',
    icon: Boxes,
  },
  {
    key: 'colorSwatches',
    title: 'Acrytech Color Codes',
    description: 'Official coating color specifications for print and digital design.',
    icon: Palette,
  },
  {
    key: 'hubPdf',
    title: 'This Hub as a PDF',
    description: 'Offline copy of the full brand hub.',
    icon: FileText,
  },
]

export function AssetLibrary() {
  return (
    <Section id="assets" className="bg-muted/50">
      <SectionHeading
        eyebrow="Asset Library"
        title="Asset Library"
        intro="The download hub. Every button opens the current file in a new tab — always download fresh rather than reusing old copies."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.key}
              className="flex flex-col gap-4 rounded-md border border-border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-md bg-navy/5 text-navy">
                <Icon className="size-5" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/80">
                  {card.description}
                </p>
              </div>
              <DownloadButton assetKey={card.key} />
            </div>
          )
        })}
      </div>
    </Section>
  )
}
