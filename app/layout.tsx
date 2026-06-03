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
  title:
    'Radiance Trucking Solutions LLP | Freight Brokerage, Dispatch & Logistics Solutions USA & Canada',

  description:
    'Radiance Trucking Solutions LLP provides professional freight brokerage, truck dispatch, logistics coordination, carrier support, and transportation solutions across the United States and Canada. Helping owner-operators, carriers, brokers, and shippers maximize efficiency, profits, and reliable freight movement.',

  keywords:
    'freight brokerage, truck dispatch services, logistics company USA, logistics company Canada, owner operator dispatch, truck dispatcher, freight broker, trucking company, carrier support, logistics solutions, dry van loads, reefer loads, flatbed dispatch, dedicated lanes, owner operator trucking, fleet management, trucking dispatch services, load booking, freight management, transportation services, USA trucking, Canada trucking, trucking operations, dispatch services for owner operators, logistics coordination, freight solutions, trucking business support, load planning, freight carriers, trucking dispatch company',

  icons: {
    icon: '/rts-icon.png',
    shortcut: '/rts-icon.png',
    apple: '/rts-icon.png',
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
