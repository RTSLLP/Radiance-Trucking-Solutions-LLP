import { Services } from "@/components/services"
import { Route, TrendingUp, ShieldCheck, Headphones, Receipt, Zap, Navigation } from "lucide-react"

const detailedServices = [
  {
    icon: Route,
    title: "Dispatch Coordination",
    details: [
      "Carrier-focused route planning and dispatch execution.",
      "Direct coordination with brokers, shippers, and drivers.",
      "Load confirmations aligned with carrier capabilities.",
      "Real-time adjustments to keep operations moving.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Broker Relations",
    details: [
      "Strategic broker communication on behalf of the carrier.",
      "Negotiation guidance built around carrier authority.",
      "Transparent terms and documented coordination.",
      "Ongoing management of broker expectations.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Compliance Support",
    details: [
      "Assistance with rate confirmations, BOLs, and paperwork.",
      "Documentation workflows designed for carrier readiness.",
      "Support for IFTA, DOT, and operational compliance.",
      "Back-office coordination that reduces administrative friction.",
    ],
  },
  {
    icon: Receipt,
    title: "Driver Assistance",
    details: [
      "Responsive driver support during each shipment.",
      "Check calls, updates, and issue escalation.",
      "Alignment with carrier preferences and operational plans.",
      "Support for safe, compliant load execution.",
    ],
  },
]

export function DetailedServices() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-[#e31837] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Service Details</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] uppercase tracking-tight">
            Our service suite
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            From dispatch coordination to driver support, we cover every critical function of carrier operations.
          </p>
        </div>

        <div className="space-y-20">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              id={['dispatch', 'broker-relations', 'compliance', 'driver-support'][index]}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center scroll-mt-32`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#0a1628] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <service.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-[#0a1628] uppercase tracking-tight">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e31837] mt-2 flex-shrink-0" />
                      <p className="text-slate-700 leading-relaxed text-sm">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-slate-950 py-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[#e31837]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#e31837] mb-3">Service portfolio</p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl leading-tight">Carrier operations services for sustained performance.</h1>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Dispatch coordination, broker relations, compliance support, and driver assistance built to reinforce your operation across USA and Canada.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <DetailedServices />

      <section className="py-24 bg-[#070f1a] text-white relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e31837]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-10 border border-white/5 bg-white/5 rounded-2xl hover:border-[#e31837]/30 transition-all group">
              <Navigation className="w-16 h-16 text-[#e31837] mx-auto mb-8 transition-transform group-hover:scale-110 duration-300" strokeWidth={1} />
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight">LANE OPTIMIZATION</h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Strategic analysis of market trends to ensure you operate in the highest-yield corridors.</p>
            </div>
            <div className="p-10 border border-white/5 bg-white/5 rounded-2xl hover:border-[#e31837]/30 transition-all group">
              <Headphones className="w-16 h-16 text-[#e31837] mx-auto mb-8 transition-transform group-hover:scale-110 duration-300" strokeWidth={1} />
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight">24/7 SUPPORT</h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">A dedicated team of logistics specialists available to help you manage operational needs when they arise.</p>
            </div>
            <div className="p-10 border border-white/5 bg-white/5 rounded-2xl hover:border-[#e31837]/30 transition-all group">
              <Zap className="w-16 h-16 text-[#e31837] mx-auto mb-8 transition-transform group-hover:scale-110 duration-300" strokeWidth={1} />
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight">ACCELERATED SETUP</h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Our onboarding is designed to connect you with load opportunities quickly and keep operations moving.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
