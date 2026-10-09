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
  metadataBase: new URL('https://www.radiancetrucking.com'),

  title:
    'Radiance Trucking Solutions LLP | Canadian Carrier Operations Support & Dispatch',

  description:
    'RTS delivers dedicated dispatch coordination, back-office management, and compliance operations support for commercial carriers across Canada. Zero forced dispatch, 100% carrier authority.',

  keywords:
    'dispatch coordination Canada, Canadian carrier operations support, truck dispatch services Ontario, CVOR compliance support, Canadian fleet operations, load planning Canada, transportation operations support, Toronto Montreal corridor dispatch, 401 freight artery',

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
      'Radiance Trucking Solutions LLP | Canadian Carrier Operations Support',

    description:
      'Dedicated dispatch coordination, back-office management, and compliance operations support for commercial carriers across Canada.',

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