import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title:
    'Radiance Trucking Solutions LLP | Dispatch Coordination & Carrier Operations Support USA & Canada',

  description:
    'RTS delivers premium dispatch coordination, carrier operations support, and logistics support services for authorized motor carriers across the USA and Canada. We help carriers maintain operational clarity, compliance readiness, and efficient load execution.',

  keywords:
    'dispatch coordination USA, dispatch coordination Canada, carrier operations support, logistics support services, truck dispatch services, carrier compliance support, logistics operations USA, logistics operations Canada, motor carrier support services, load planning support, carrier dispatch support, transportation operations support, carrier operational readiness, dispatch services for carriers, North America logistics support, fleet operations support, carrier authority support, trucking compliance services, proven dispatch coordination',

  authors: [{ name: 'Radiance Trucking Solutions LLP' }],

  creator: 'Radiance Trucking Solutions LLP',

  publisher: 'Radiance Trucking Solutions LLP',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title:
      'Radiance Trucking Solutions LLP | Dispatch Coordination & Carrier Operations Support',

    description:
      'Premium dispatch coordination, carrier operations support, and logistics support services for authorized motor carriers across the USA and Canada.',

    url: 'https://www.radiancetrucking.com',

    siteName: 'Radiance Trucking Solutions LLP',

    images: [
      {
        url: '/full-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Radiance Trucking Solutions LLP',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}