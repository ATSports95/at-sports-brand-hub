'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/brand'
import { LogoTile } from '@/components/logo-tile'
import { SiteSearch } from '@/components/site-search'
import { PARTNER_EDITION, type Edition } from '@/lib/editions'

function useScrollSpy() {
  const [active, setActive] = useState(NAV_ITEMS[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

function NavLinks({
  active,
  onNavigate,
}: {
  active: string
  onNavigate?: () => void
}) {
  return (
    <nav aria-label="Brand hub sections" className="flex flex-col gap-0.5">
      {NAV_ITEMS.map(({ id, label }, i) => {
        const isActive = active === id
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={onNavigate}
            aria-current={isActive ? 'true' : undefined}
            className={cn(
              'group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
              isActive
                ? 'bg-navy/5 font-semibold text-navy'
                : 'text-slate hover:bg-muted hover:text-navy',
            )}
          >
            <span
              className={cn(
                'h-4 w-0.5 rounded-full transition-colors',
                isActive ? 'bg-accent' : 'bg-transparent group-hover:bg-steel',
              )}
              aria-hidden
            />
            <span className="font-mono text-xs text-steel">
              {String(i + 1).padStart(2, '0')}
            </span>
            {label}
          </a>
        )
      })}
    </nav>
  )
}

export function SidebarNav({
  edition = PARTNER_EDITION,
}: {
  edition?: Edition
}) {
  const active = useScrollSpy()
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeLabel =
    NAV_ITEMS.find((n) => n.id === active)?.label ?? NAV_ITEMS[0].label

  return (
    <>
      {/* Desktop sidebar */}
      {/* No background: the fixed site-wide gradient shows through here too */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r border-border lg:flex">
        <div className="border-b border-border px-6 py-6">
          <div className="flex items-center justify-center">
            {/* Reversed white mark: the sidebar is a dark charcoal surface, and
                the brand rule is white-on-dark, never full-color-on-dark. */}
            <LogoTile
              file="at-sports-white.svg"
              alt="AT Sports"
              className="w-40 [&>div]:aspect-auto [&>div]:h-16 [&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0"
            />
          </div>
        </div>
        <div className="px-3 pt-4">
          <SiteSearch />
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <NavLinks active={active} />
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-sidebar/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center gap-3">
          <LogoTile
            file="at-sports-white.svg"
            alt="AT Sports"
            className="w-28 [&>div]:aspect-auto [&>div]:h-9 [&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="max-w-[9rem] truncate text-xs font-medium text-slate">
            {activeLabel}
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border text-navy"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="absolute top-[57px] right-0 left-0 max-h-[70vh] overflow-y-auto border-b border-border bg-sidebar p-4 shadow-lg">
            <div className="mb-3">
              <SiteSearch onNavigate={() => setMobileOpen(false)} />
            </div>
            <NavLinks active={active} onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
