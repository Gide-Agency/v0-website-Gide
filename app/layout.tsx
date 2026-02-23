import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'New-Era analytics based on the truth',
  description:
    'Interpret business questions, surface relevant data sources, and derive an analysis path to deliver answers grounded in evidence rather than generated assumptions.',

  metadataBase: new URL('https://www.gideagency.com'), // CHANGE if different domain
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
    icon: [{ url: '/favicon.png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  openGraph: {
    title: 'New-Era analytics based on the truth',
    description:
      'Interpret business questions, surface relevant data sources, and derive an analysis path to deliver answers grounded in evidence rather than generated assumptions.',
    url: 'https://www.gideagency.com',
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
    title: 'New-Era analytics based on the truth',
    description:
      'Interpret business questions, surface relevant data sources, and derive an analysis path to deliver answers grounded in evidence rather than generated assumptions.',
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

