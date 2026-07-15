import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Figtree, Space_Grotesk } from 'next/font/google'
import './globals.css'

// Figtree (Google Fonts) is the brand's primary typeface — an Effra-like
// geometric sans used for both headlines and body copy.
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

// Space Grotesk (Google Fonts) is the secondary typeface, used at Medium and
// Bold weights for high-impact accents.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AT Sports Brand Hub — Partner Edition',
  description:
    'Everything partners need to represent AT Sports and our product lines correctly — logos, colors, product names, co-branding rules, and ready-to-use assets.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#233354',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${figtree.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
