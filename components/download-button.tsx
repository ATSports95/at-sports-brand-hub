import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ASSET_LINKS, type AssetKey } from '@/lib/assets'

export function DownloadButton({
  assetKey,
  label = 'Download',
}: {
  assetKey: AssetKey
  label?: string
}) {
  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={ASSET_LINKS[assetKey]}
          target="_blank"
          rel="noopener noreferrer"
        />
      }
      size="lg"
      className="bg-navy text-white hover:bg-navy/90"
    >
      <Download className="size-4" />
      {label}
    </Button>
  )
}
