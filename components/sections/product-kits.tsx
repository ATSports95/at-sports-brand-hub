'use client'

import { useState } from 'react'
import { Check, Copy, FileText } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { LogoTile } from '@/components/logo-tile'
import { PRODUCT_KITS, type ProductKit } from '@/lib/brand'
import { cn } from '@/lib/utils'

function CopyableCopy({ text, index }: { text: string; index: number }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="relative flex flex-col gap-3 rounded-md border border-border bg-card p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-sky uppercase">
          <span className="flex size-5 items-center justify-center rounded-sm bg-navy/5 font-mono text-navy">
            {index + 1}
          </span>
          Option {index + 1}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy marketing copy option ${index + 1}`}
          className="inline-flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1 text-xs font-medium text-slate transition-colors hover:border-sky hover:text-navy"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-sky" />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <p className="text-sm leading-relaxed text-ink/80">{text}</p>
    </div>
  )
}

function KitPanel({ kit }: { kit: ProductKit }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Header band */}
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex flex-col gap-4 border-b border-border bg-white/70 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div
            className={cn(
              'flex h-16 items-center text-lg',
              (kit.id === 'cushionx' || kit.id === 'faultline') && 'h-20',
            )}
          >
            <LogoTile
              file={`${kit.id}-color.svg`}
              alt={`${kit.name} logo`}
              className={cn(
                'w-44 [&>div]:aspect-auto [&>div]:h-16 [&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0',
                (kit.id === 'cushionx' || kit.id === 'faultline') &&
                  'w-52 [&>div]:h-20',
              )}
            />
          </div>
          <div className="flex flex-col gap-1 sm:items-end">
            <span
              className={cn(
                'inline-flex w-fit rounded-sm px-2.5 py-1 text-xs font-semibold text-white',
                kit.accentClass,
              )}
            >
              {kit.descriptor}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-6">
          <h3 className="text-sm font-semibold tracking-wide text-slate uppercase">
            Brand Overview
          </h3>
          {kit.overview.map((para) => (
            <p key={para} className="leading-relaxed text-ink/80">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Positioning */}
      <div>
        <h3 className="text-xl font-semibold text-navy">Brand Positioning</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
          Approved benefit messaging partners may use to describe {kit.name}.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kit.positioning.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 rounded-md border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'flex size-6 shrink-0 items-center justify-center rounded-full text-white',
                    kit.accentClass,
                  )}
                >
                  <Check className="size-3.5" />
                </span>
                <h4 className="font-semibold text-navy">{item.title}</h4>
              </div>
              <p className="text-sm leading-relaxed text-ink/70">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Systems / Levels */}
      {kit.systems && (
        <div>
          <h3 className="text-xl font-semibold text-navy">
            {kit.systemsTitle}
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {kit.systems.map((sys) => (
              <div
                key={sys.label}
                className="flex flex-col overflow-hidden rounded-md border border-border bg-card"
              >
                <div
                  className={cn(
                    'flex items-baseline justify-between gap-2 px-5 py-3 text-white',
                    kit.accentClass,
                  )}
                >
                  <span className="font-mono text-xs tracking-wide uppercase opacity-90">
                    {sys.label}
                  </span>
                  <span className="text-sm font-semibold">{sys.name}</span>
                </div>
                <p className="flex-1 p-5 text-sm leading-relaxed text-ink/75">
                  {sys.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Approved marketing copy */}
      <div>
        <div className="flex items-center gap-2">
          <FileText className="size-5 text-sky" />
          <h3 className="text-xl font-semibold text-navy">
            Ready-to-Use Copy
          </h3>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
          Copy and paste directly, or adapt into your existing materials. Ready
          to use as-is.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {kit.marketingCopy.map((copy, i) => (
            <CopyableCopy key={i} text={copy} index={i} />
          ))}
        </div>
      </div>

      {/* Logo usage */}
      <div className="rounded-md border border-navy/15 bg-navy/[0.03] p-6">
        <h3 className="text-lg font-semibold text-navy">
          {kit.name} logo usage guidelines
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {kit.logoGuidelines.map((rule) => (
            <li
              key={rule}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-sky" />
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ProductKits() {
  const [activeId, setActiveId] = useState<ProductKit['id']>(
    PRODUCT_KITS[0].id,
  )
  const activeKit =
    PRODUCT_KITS.find((k) => k.id === activeId) ?? PRODUCT_KITS[0]

  return (
    <Section id="kits">
      <SectionHeading
        eyebrow="Product Brand Kits"
        title="Approved Positioning by Product"
        intro="Each AT Sports product line has its own approved overview, benefit messaging, and marketing copy. Select a product to view its brand kit — everything here is cleared for partner use across websites, proposals, and marketing materials."
      />

      {/* Product tabs */}
      <div
        role="tablist"
        aria-label="Select a product brand kit"
        className="mt-2 flex flex-wrap gap-2"
      >
        {PRODUCT_KITS.map((kit) => {
          const isActive = kit.id === activeId
          return (
            <button
              key={kit.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveId(kit.id)}
              className={cn(
                'flex flex-col items-start gap-0.5 rounded-md border px-4 py-2.5 text-left transition-colors',
                isActive
                  ? 'border-sky/60 bg-sky/10 text-sky shadow-[0_0_24px_-4px_var(--sky)]'
                  : 'border-border bg-card text-navy hover:border-sky/50',
              )}
            >
              <span className="text-sm font-semibold">{kit.name}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-8">
        <KitPanel kit={activeKit} />
      </div>

      {/* Approval note */}
      <div className="mt-10 rounded-md border-l-4 border-red bg-card px-5 py-4">
        <p className="text-sm leading-relaxed text-ink/80">
          Any newly created marketing content, product claims, or messaging
          outside of the approved language above should be reviewed and approved
          by the AT Sports Marketing Department prior to publication.{' '}
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
