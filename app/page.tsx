import { EnterpriseHero } from "@/components/enterprise-hero"
import { HeroProofStrip } from "@/components/hero-proof-strip"
import { BrandShowcase } from "@/components/brand-showcase"
import { EquipmentArteries } from "@/components/equipment-arteries"
import { EnterpriseAutonomy } from "@/components/enterprise-autonomy"
import { QuickInquiry } from "@/components/quick-inquiry"
import { EnterpriseContact } from "@/components/enterprise-contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Official Hero Graphic Canvas featuring "YOUR PARTNER BEHIND EVERY MILE" */}
      <EnterpriseHero />

      {/* 2. TransAm / ET Transport Style Anchored Operational Proof Strip */}
      <HeroProofStrip />

      {/* 3. Interactive Modern Operations Architecture (Apple/Antigravity style with Master Logo) */}
      <BrandShowcase />

      {/* 4. Equipment Specifications & Canadian Freight Artery Corridors */}
      <EquipmentArteries />

      {/* 5. The Carrier Independence Standard: You Own The Equipment. You Call The Shots. */}
      <EnterpriseAutonomy />

      {/* 6. Instant 60-Second Freight & Dispatch Inquiry Desk */}
      <QuickInquiry />

      {/* 7. Universal Operations Contact Desk & Direct Liaison */}
      <EnterpriseContact />
    </main>
  )
}
