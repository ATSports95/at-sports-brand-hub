import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Expletus_Sans, Figtree } from 'next/font/google'
import './globals.css'

// Body / everyday font. The real brand font is Effra (commercial license).
// Figtree is used here as a close Google Fonts stand-in.
// TODO: replace with self-hosted Effra @font-face on production
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

// Display / accent headings.
const expletusSans = Expletus_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-expletus',
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
      className={`light bg-background ${figtree.variable} ${expletusSans.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
