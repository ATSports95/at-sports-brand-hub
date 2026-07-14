/**
 * Central config for every downloadable asset pack.
 *
 * All download URLs live here so they can be updated in one place.
 * Replace each "DROPBOX_LINK_HERE" with the real Dropbox share link.
 *
 * NOTE: Dropbox share links should end in `?dl=1` for a direct download,
 * e.g. https://www.dropbox.com/scl/.../logo-pack.zip?dl=1
 */
export const ASSET_LINKS = {
  logoPack: 'DROPBOX_LINK_HERE',
  productLineAssets: 'DROPBOX_LINK_HERE',
  colorSwatches: 'DROPBOX_LINK_HERE',
  fontsGuide: 'DROPBOX_LINK_HERE',
  templates: 'DROPBOX_LINK_HERE',
  overviewDeck: 'DROPBOX_LINK_HERE',
  hubPdf: 'DROPBOX_LINK_HERE',
} as const

export type AssetKey = keyof typeof ASSET_LINKS
