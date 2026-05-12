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
  title: 'Radiance Trucking Solutions LLP | Professional Truck Dispatch Services',
  description: 'Professional truck dispatch services for owner-operators and fleets across USA & Canada. Keep your trucks moving and maximize your profits with RTS.',
  keywords: 'truck dispatch, trucking services, owner-operators, fleet management, USA trucking, Canada trucking',
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
