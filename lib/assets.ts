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
  logoPack:
    'https://www.dropbox.com/scl/fo/jnia9jx92vczrvrz528li/AFJCRnkzeUG40V0UpV6t6OM?rlkey=tsng14i1i2dksgruyrtmv6djd&dl=0',
  productLineAssets:
    'https://www.dropbox.com/scl/fo/zwh4o0jzf308bo6qx7arg/APUJfa6c-4l8QEhLEJK3lj4?rlkey=tacyioasl14qhqu6q2gh3tr8q&dl=0',
  colorSwatches:
    'https://www.dropbox.com/scl/fo/h6cyulxmlnh3blps0nxcr/AOhvrACRMrETOWdzT_bFkRA?rlkey=trz186g4313k9tvrfa5byr6va&dl=0',
  fontsGuide: 'DROPBOX_LINK_HERE',
  templates: 'DROPBOX_LINK_HERE',
  overviewDeck: 'DROPBOX_LINK_HERE',
  hubPdf: 'DROPBOX_LINK_HERE',
} as const

export type AssetKey = keyof typeof ASSET_LINKS
