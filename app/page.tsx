import { EnterpriseHero } from "@/components/enterprise-hero"
import { EnterpriseServices } from "@/components/enterprise-services"
import { EnterpriseEquipment } from "@/components/enterprise-equipment"
import { EnterpriseAutonomy } from "@/components/enterprise-autonomy"
import { EnterpriseContact } from "@/components/enterprise-contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Muscular Enterprise Hero & Proof Bar */}
      <EnterpriseHero />

      {/* 2. Core Operational Capabilities & Services */}
      <EnterpriseServices />

      {/* 3. Supported Equipment & Freight Profiles (53' Van, Reefer, Flatbed) */}
      <EnterpriseEquipment />

      {/* 4. Carrier Independence & Autonomy Standard (Zero Forced Dispatch) */}
      <EnterpriseAutonomy />

      {/* 5. Direct Kitchener Operations Desk & Inquiry Form */}
      <EnterpriseContact />
    </main>
  )
}
