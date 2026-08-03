import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.radiancetrucking.com'),
  title:
    'Radiance Trucking Solutions LLP | Freight Brokerage, Truck Dispatch & Logistics Services USA & Canada',

  description:
    'Radiance Trucking Solutions LLP provides professional freight brokerage, truck dispatch, carrier support, load planning, logistics coordination, and transportation management services across the United States and Canada. Trusted dispatch solutions for owner-operators, trucking fleets, carriers, brokers, and shippers seeking reliable freight movement and profitable loads.',

  keywords:
    'truck dispatch services USA, truck dispatch services Canada, freight brokerage company, freight broker USA, freight broker Canada, trucking dispatch company, owner operator dispatch services, dispatch services for trucking companies, logistics company USA, logistics company Canada, transportation company USA, transportation company Canada, freight dispatch company, trucking company dispatch, dry van dispatch services, reefer dispatch services, flatbed dispatch services, hotshot dispatch services, power only dispatch, carrier setup services, freight management services, logistics coordination, supply chain logistics, trucking logistics company, freight transportation solutions, trucking operations management, truck load booking, load planning services, trucking carrier support, owner operator support services, trucking fleet dispatch, dispatch company for owner operators, trucking solutions provider, load board management, freight scheduling, dedicated freight lanes, OTR trucking dispatch, trucking back office support, truck dispatcher USA, truck dispatcher Canada, freight forwarding support, transportation logistics solutions, logistics and dispatch company, trucking compliance support, freight movement solutions, carrier dispatch services, trucking industry services, Radiance Trucking Solutions LLP',

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
      'Radiance Trucking Solutions LLP | Freight Brokerage & Dispatch Services',

    description:
      'Professional freight brokerage, dispatch, and logistics solutions across USA & Canada.',

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
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}