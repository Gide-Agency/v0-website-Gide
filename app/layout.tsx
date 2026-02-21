import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Gide - Reason with data, without hallucinations',
  description:
    'You want accurate answers from your data. Gide sources them with governed and traceable reasoning.',

  metadataBase: new URL('https://gideagency.com'), // CHANGE if different domain
  alternates: {
    canonical: '/',
  },

  keywords: [
    'AI analytics',
    'data reasoning',
    'governed AI',
    'auditable AI',
    'business intelligence',
    'data analysis',
    'AI middleware',
  ],

  category: 'technology',

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: '/favicon.png' }, // your new favicon
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },

  openGraph: {
    title: 'Gide - Reason with data, without hallucinations',
    description:
      'Accurate answers from your data through governed and traceable reasoning.',
    url: 'https://gide.ai',
    siteName: 'Gide',
    images: [
      {
        url: '/og-image.png', // optional but recommended
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gide - Reason with data, without hallucinations',
    description:
      'Accurate answers from your data through governed and traceable reasoning.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}