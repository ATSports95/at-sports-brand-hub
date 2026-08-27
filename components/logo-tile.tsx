'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { LOGO_BASE } from '@/lib/brand'

type Tone = 'light' | 'navy'

type LogoTileProps = {
  /** filename in /public/logos, e.g. "at-sports-color.svg" */
  file: string
  alt: string
  /** background tone of the tile */
  tone?: Tone
  caption?: string
  subCaption?: string
  className?: string
  /** inline style applied to the <img> for correct/incorrect demos */
  imgStyle?: React.CSSProperties
  imgClassName?: string
}

/**
 * Renders a brand logo on a padded tile. If the SVG 404s during preview,
 * a neutral Steel placeholder labeled with the filename is shown instead
 * so it is obvious which asset needs to be dropped in.
 */
export function LogoTile({
  file,
  alt,
  tone = 'light',
  caption,
  subCaption,
  className,
  imgStyle,
  imgClassName,
}: LogoTileProps) {
  const [errored, setErrored] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const isNavy = tone === 'navy'

  // onError may not fire if the SVG 404s during SSR before React hydrates,
  // so re-check the loaded state once mounted.
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) {
      setErrored(true)
    }
  }, [])

  return (
    <figure className={cn('flex flex-col gap-3', className)}>
      <div
        className={cn(
          'relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-md border p-6 transition-colors',
          // The `light` tone is a subtly raised panel. Full-color/navy marks
          // read directly on it because the theme surface is a dimmed slate
          // chosen for exactly that, not a near-black.
          isNavy
            ? 'border-navy bg-navy'
            : 'border-border bg-card',
        )}
      >
        {errored ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-sm bg-steel/40 p-4 text-center">
            <span className="text-xs font-medium text-slate">
              Missing asset
            </span>
            <code className="break-all text-[11px] text-ink/70">{file}</code>
          </div>
        ) : (
          // Plain <img> keeps SVGs simple without next/image config.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={`${LOGO_BASE}/${file}`}
            alt={alt}
            style={imgStyle}
            onError={() => setErrored(true)}
            className={cn(
              'max-h-full max-w-full object-contain',
              imgClassName,
            )}
          />
        )}
      </div>
      {(caption || subCaption) && (
        <figcaption className="flex flex-col gap-0.5">
          {caption && (
            <span className="text-sm font-semibold text-navy">{caption}</span>
          )}
          {subCaption && (
            <span className="text-xs leading-relaxed text-slate">
              {subCaption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}
