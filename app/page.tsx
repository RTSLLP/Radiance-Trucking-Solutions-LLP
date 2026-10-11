import { EnterpriseHero } from "@/components/enterprise-hero"
import { BrandShowcase } from "@/components/brand-showcase"
import { EnterpriseAutonomy } from "@/components/enterprise-autonomy"
import { EnterpriseContact } from "@/components/enterprise-contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Official Hero Graphic Canvas featuring "YOUR PARTNER BEHIND EVERY MILE" */}
      <EnterpriseHero />

      {/* 2. Interactive Modern Operations Architecture (Apple/Antigravity style with Master Logo) */}
      <BrandShowcase />

      {/* 3. The Carrier Independence Standard: You Own The Equipment. You Call The Shots. */}
      <EnterpriseAutonomy />

      {/* 4. Universal Operations Contact Desk & Direct Liaison */}
      <EnterpriseContact />
    </main>
  )
}
