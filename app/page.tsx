import { Hero } from "@/components/hero"
import { TelemetryTicker } from "@/components/telemetry-ticker"
import { FrictionPoints } from "@/components/friction-points"
import { InteractiveSolutions } from "@/components/interactive-solutions"
import { AutonomyBanner } from "@/components/autonomy-banner"
import { FleetConfigurator } from "@/components/fleet-configurator"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Canvas with Canadian Carrier positioning and Dispatch Command Center */}
      <Hero />

      {/* 2. Live Corridor Telemetry Ticker */}
      <TelemetryTicker />

      {/* 3. The 4 Road Friction Realities RTS Solves */}
      <FrictionPoints />

      {/* 4. Interactive 3-Tab Solutions Matrix (RTS Dispatch | RTS Operations | RTS Expansion) */}
      <InteractiveSolutions />

      {/* 5. Carrier Autonomy Standard: You own the truck. You call the shots. */}
      <AutonomyBanner />

      {/* 6. Interactive Fleet Scope Configurator ("Build Your Desk") */}
      <FleetConfigurator />

      {/* 7. Direct Desk Activation Inquiry Form & Canadian Operations Desk */}
      <Contact />
    </main>
  )
}
