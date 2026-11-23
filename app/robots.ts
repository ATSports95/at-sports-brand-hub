import type { MetadataRoute } from 'next'

// The Brand Hub is not meant to be found through search engines.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', disallow: '/' } }
}
