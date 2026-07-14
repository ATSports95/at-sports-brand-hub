'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ColorToken } from '@/lib/brand'

export function ColorSwatch({ color }: { color: ColorToken }) {
  const [copied, setCopied] = useState(false)

  async function copyHex() {
    try {
      await navigator.clipboard.writeText(color.hex)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard not available; no-op
    }
  }

  return (
    <button
      type="button"
      onClick={copyHex}
      aria-label={`Copy ${color.name} hex ${color.hex}`}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-card text-left transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <span
        className={cn(
          'flex h-24 items-end justify-end p-2',
          color.swatchClass,
        )}
      >
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-sm px-1.5 py-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100',
            color.reversedText
              ? 'bg-white/15 text-white'
              : 'bg-ink/10 text-ink',
          )}
        >
          {copied ? (
            <>
              <Check className="size-3" /> Copied!
            </>
          ) : (
            <>
              <Copy className="size-3" /> Copy
            </>
          )}
        </span>
      </span>
      <span className="flex flex-col gap-0.5 px-3 py-2.5">
        <span className="text-sm font-semibold text-navy">{color.name}</span>
        <span className="font-mono text-xs text-slate">{color.hex}</span>
      </span>
    </button>
  )
}
