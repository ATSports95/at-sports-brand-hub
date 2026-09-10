'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CornerDownLeft, Search } from 'lucide-react'
import { NAV_ITEMS, PRODUCT_LINES } from '@/lib/brand'
import { cn } from '@/lib/utils'

type SearchItem = {
  label: string
  id: string
  kind: 'Section' | 'Product' | 'Resource'
  hint?: string
}

// One flat, searchable index across sections, product lines, and key resources.
const INDEX: SearchItem[] = [
  ...NAV_ITEMS.map(
    (n): SearchItem => ({ label: n.label, id: n.id, kind: 'Section' }),
  ),
  ...PRODUCT_LINES.map(
    (p): SearchItem => ({
      label: p.name,
      id: 'kits',
      kind: 'Product',
      hint: p.descriptor,
    }),
  ),
  { label: 'Logo downloads', id: 'assets', kind: 'Resource' },
  { label: 'Color tokens & hex', id: 'color', kind: 'Resource' },
  { label: 'Co-branding rules', id: 'cobranding', kind: 'Resource', hint: 'Partner use' },
  { label: 'Fonts', id: 'typography', kind: 'Resource' },
  { label: 'Templates', id: 'assets', kind: 'Resource' },
]

export function SiteSearch({
  className,
  onNavigate,
  visibleSections,
  sectionLabels,
}: {
  className?: string
  onNavigate?: () => void
  /**
   * Ids of the sections rendered in the current edition. When provided, the
   * index is limited to these so the search never surfaces or links to a
   * section that is not present (e.g. partner-only sections on the public hub).
   */
  visibleSections?: string[]
  /**
   * Per-section label overrides for the current edition. When a Section entry's
   * id is present, its label is shown instead of the shared `NAV_ITEMS` label so
   * search results match the sidebar naming.
   */
  sectionLabels?: Record<string, string | undefined>
}) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)

  const index = useMemo(() => {
    let items = INDEX
    if (visibleSections) {
      const allowed = new Set(visibleSections)
      items = items.filter((i) => allowed.has(i.id))
    }
    if (sectionLabels) {
      items = items.map((i) =>
        i.kind === 'Section' && sectionLabels[i.id]
          ? { ...i, label: sectionLabels[i.id] as string }
          : i,
      )
    }
    return items
  }, [visibleSections, sectionLabels])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return index
      .filter(
        (i) =>
          i.label.toLowerCase().includes(q) ||
          i.hint?.toLowerCase().includes(q),
      )
      .slice(0, 7)
  }, [query, index])

  useEffect(() => setActive(0), [query])

  // Close when clicking outside the search.
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  function go(item?: SearchItem) {
    const target = item ?? results[active]
    if (!target) return
    window.location.hash = `#${target.id}`
    setQuery('')
    setOpen(false)
    onNavigate?.()
  }

  const showResults = open && query.trim().length > 0

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <div className="relative">
        <Search
          className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-slate"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setActive((a) => Math.min(a + 1, results.length - 1))
            } else if (e.key === 'ArrowUp') {
              e.preventDefault()
              setActive((a) => Math.max(a - 1, 0))
            } else if (e.key === 'Enter') {
              e.preventDefault()
              go()
            } else if (e.key === 'Escape') {
              setOpen(false)
            }
          }}
          placeholder="Search the hub…"
          aria-label="Search the brand hub"
          className="w-full rounded-md border border-border bg-background py-2 pr-3 pl-8 text-sm text-ink transition-colors outline-none placeholder:text-slate focus-visible:border-sky focus-visible:ring-2 focus-visible:ring-sky/30"
        />
      </div>

      {showResults && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-border bg-popover shadow-lg">
          {results.length > 0 ? (
            <ul role="listbox">
              {results.map((r, i) => (
                <li key={`${r.kind}-${r.id}-${r.label}`}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(r)}
                    className={cn(
                      'flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition-colors',
                      i === active
                        ? 'bg-muted text-navy'
                        : 'text-ink/80 hover:bg-muted',
                    )}
                  >
                    <span className="flex min-w-0 items-baseline gap-2">
                      <span className="truncate font-medium">{r.label}</span>
                      {r.hint && (
                        <span className="truncate text-xs text-slate">
                          {r.hint}
                        </span>
                      )}
                    </span>
                    <span className="flex items-center gap-1.5">
                      {i === active && (
                        <CornerDownLeft
                          className="size-3 text-slate"
                          aria-hidden
                        />
                      )}
                      <span className="text-[10px] font-medium tracking-wide text-slate uppercase">
                        {r.kind}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-3 text-sm text-slate">
              No matches for “{query.trim()}”.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
