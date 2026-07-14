/**
 * Static brand data for the AT Sports Brand Hub.
 * Logo SVGs live in /public/logos/ and are referenced by path.
 */

export const LOGO_BASE = '/logos'

export type ColorToken = {
  name: string
  hex: string
  /** tailwind class used to fill the swatch block */
  swatchClass: string
  /** true when the swatch needs light text for contrast */
  reversedText?: boolean
  group: 'primary' | 'secondary'
}

export const BRAND_COLORS: ColorToken[] = [
  {
    name: 'Navy',
    hex: '#233354',
    swatchClass: 'bg-navy',
    reversedText: true,
    group: 'primary',
  },
  {
    name: 'Red',
    hex: '#9A1B1E',
    swatchClass: 'bg-red',
    reversedText: true,
    group: 'primary',
  },
  {
    name: 'Sky',
    hex: '#4E8CB3',
    swatchClass: 'bg-sky',
    reversedText: true,
    group: 'secondary',
  },
  {
    name: 'Steel',
    hex: '#B9C4CB',
    swatchClass: 'bg-steel',
    group: 'secondary',
  },
  {
    name: 'Slate',
    hex: '#5D6F7A',
    swatchClass: 'bg-slate',
    reversedText: true,
    group: 'secondary',
  },
  {
    name: 'Near-Black',
    hex: '#202528',
    swatchClass: 'bg-ink',
    reversedText: true,
    group: 'secondary',
  },
]

export type ProductLine = {
  id: 'acrytech' | 'cushionx' | 'faultline' | 'rollx'
  name: string
  descriptor: string
  whatFor: string
}

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: 'acrytech',
    name: 'Acrytech',
    descriptor: 'Sports Coatings',
    whatFor:
      'Top-of-the-line sports surface coatings and surface materials.',
  },
  {
    id: 'cushionx',
    name: 'CushionX',
    descriptor: 'Cushion Sports Surfaces',
    whatFor:
      'A lightweight, pliable premium cushion mat that\u2019s fast and easy to install.',
  },
  {
    id: 'faultline',
    name: 'Faultline',
    descriptor: 'Crack Repair',
    whatFor:
      'A premium solution for repairing cracks on sports surfaces, for seamless play on tennis and pickleball courts.',
  },
  {
    id: 'rollx',
    name: 'RollX',
    descriptor: 'Portable Sports Surfaces',
    whatFor:
      'Transforms any foundational surface into a high-performance playing court.',
  },
]

export type NavItem = { id: string; label: string }

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Overview' },
  { id: 'welcome', label: 'Start Here' },
  { id: 'foundation', label: 'Brand Foundation' },
  { id: 'logo', label: 'Logo & Identity' },
  { id: 'color', label: 'Color System' },
  { id: 'typography', label: 'Typography' },
  { id: 'cobranding', label: 'Co-Branding & Partner Use' },
  { id: 'photography', label: 'Photography' },
  { id: 'assets', label: 'Asset Library' },
  { id: 'faq', label: 'FAQ' },
]

export const PRODUCT_NAMING = [
  { correct: 'AT Sports', not: 'ATSports, At Sports', descriptor: '\u2014' },
  { correct: 'Acrytech', not: 'Acry-Tech, AcryTech', descriptor: 'Sports Coatings' },
  {
    correct: 'CushionX',
    not: 'Cushion X, Cushion-X',
    descriptor: 'Cushion Sports Surfaces',
  },
  { correct: 'Faultline', not: 'Fault Line, FaultLine', descriptor: 'Crack Repair' },
  {
    correct: 'RollX',
    not: 'Roll X, Roll-X, Rollx',
    descriptor: 'Portable Sports Surfaces',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Can I make my own AT Sports flyer or ad?',
    a: 'For standard sales materials, yes \u2014 use supplied assets and follow this hub. For paid ads, large signage, or press, send to [email] for quick approval first.',
  },
  {
    q: 'Which logo file for embroidery, engraving, or signage?',
    a: 'Use the solid black or reversed white one-color version, in vector (SVG/EPS) so it scales cleanly. For large-format, check with us first.',
  },
  {
    q: 'Can I change the colors to match my brand?',
    a: 'No \u2014 don\u2019t recolor AT Sports or product logos. When co-branding, keep both brands in their own correct colors, side by side.',
  },
  {
    q: 'Is it "Cushion X" or "CushionX"?',
    a: 'CushionX \u2014 one word, capital C and capital X, no space. Same for RollX. Acrytech and Faultline are each one word too.',
  },
  {
    q: 'When do I use the "Division of AT Sports" tag?',
    a: 'Whenever a product logo appears on its own without other context tying it to AT Sports.',
  },
  {
    q: 'Where do I get a higher-res or project-specific photo?',
    a: 'Request from [email / form link] with the product, color, and intended use.',
  },
  {
    q: 'Who do I contact for anything else?',
    a: '[Name], [email].',
  },
]
