import { cn } from '@/lib/utils'
import type { Edition, LocalizedText } from '@/lib/editions'

/**
 * Renders an edition string. In a bilingual edition the English text leads and
 * the Japanese translation sits directly beneath it, one step down in contrast
 * so the hierarchy stays intact. In a single-language edition, or when no
 * translation exists yet, only the English text renders — no empty slots and
 * no layout shift.
 */
export function Localized({
  text,
  edition,
  className,
  secondaryClassName,
  as: Tag = 'span',
}: {
  text: LocalizedText
  edition: Edition
  /** Applied to the primary (English) node. */
  className?: string
  /** Applied to the secondary (Japanese) node. */
  secondaryClassName?: string
  as?: 'span' | 'div' | 'p'
}) {
  const showSecondary = edition.bilingual && Boolean(text.ja)

  if (!showSecondary) {
    return <Tag className={className}>{text.en}</Tag>
  }

  return (
    <Tag className={className}>
      <span className="block">{text.en}</span>
      <span
        lang={edition.secondaryLocale}
        className={cn('mt-1.5 block font-jp', secondaryClassName)}
      >
        {text.ja}
      </span>
    </Tag>
  )
}

/**
 * Inline variant for tight spots — pills, single-line notes — where stacking
 * two blocks would break the layout. Joins the two languages on one line.
 */
export function LocalizedInline({
  text,
  edition,
  separator = '/',
  className,
}: {
  text: LocalizedText
  edition: Edition
  separator?: string
  className?: string
}) {
  const showSecondary = edition.bilingual && Boolean(text.ja)

  return (
    <span className={className}>
      {text.en}
      {showSecondary && (
        <>
          <span aria-hidden className="mx-1.5 opacity-50">
            {separator}
          </span>
          <span lang={edition.secondaryLocale} className="font-jp">
            {text.ja}
          </span>
        </>
      )}
    </span>
  )
}
