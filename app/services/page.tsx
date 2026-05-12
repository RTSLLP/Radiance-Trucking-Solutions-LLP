import { Services } from "@/components/services"
import { Route, TrendingUp, ShieldCheck, Headphones, Receipt, Zap, Navigation } from "lucide-react"

const detailedServices = [
  {
    icon: Route,
    title: "FREIGHT DISPATCHING",
    details: [
      "Access to premium load boards and private networks.",
      "Strategic route planning to minimize empty miles.",
      "Bilingual dispatchers for clear communication.",
      "Specialized dispatching for Dry Van, Reefer, Flatbed, and Step Deck.",
    ],
    image: "https://img.freepik.com/premium-photo/big-rig-semi-truck-cargo-highway-road_140916-53825.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    icon: TrendingUp,
    title: "BROKERAGE AGREEMENT",
    details: [
      "Comprehensive broker relationship management and vetting.",
      "Fair and transparent agreement terms negotiated for your benefit.",
      "Protection of your rights with documented carrier-broker agreements.",
      "Ongoing compliance monitoring and dispute resolution support.",
    ],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
  },
  {
    icon: ShieldCheck,
    title: "COMPLIANCE & ADMIN",
    details: [
      "Management of carrier packets and broker setup.",
      "Processing of Rate Confirmations and BOLs.",
      "Assistance with IFTA, DOT, and ELD compliance.",
      "Streamlined invoicing and factoring company liaison.",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
  },
  {
    icon: Receipt,
    title: "BILLING & FACTORING",
    details: [
      "Submit invoices immediately after delivery.",
      "Quick-pay and factoring setup assistance.",
      "Weekly revenue reporting for your fleet.",
      "Follow-up on aging accounts and late payments.",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
  },
]

export function DetailedServices() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#e31837]" />
            <p className="text-[#e31837] text-sm font-black tracking-[0.2em] uppercase">Premium Offerings</p>
            <div className="w-12 h-[2px] bg-[#e31837]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0a1628] uppercase tracking-tight">
            COMPREHENSIVE <span className="text-[#e31837]">SOLUTIONS</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            We provide a suite of high-performance services designed to optimize every facet of your trucking business.
          </p>
        </div>

        <div className="space-y-32">
          {detailedServices.map((service, index) => (
            <div 
              key={index} 
              id={["dispatch", "brokerage", "compliance", "safety"][index]}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center scroll-mt-32`}
            >
              <div className="flex-1 w-full">
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent opacity-60" />
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#0a1628] rounded-2xl flex items-center justify-center text-white shadow-xl group hover:bg-[#e31837] transition-colors duration-300">
                    <service.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#0a1628] uppercase tracking-tight leading-tight">{service.title}</h3>
                </div>
                <ul className="space-y-5">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#e31837] mt-2.5 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed text-lg font-medium">{detail}</p>
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
      <section className="bg-[#0a1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://img.freepik.com/premium-photo/big-rig-semi-truck-cargo-highway-road_140916-53825.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Elite Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/80 to-[#0a1628]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#e31837]" />
            <p className="text-[#e31837] text-xs font-black tracking-[0.3em] uppercase">Service Portfolio</p>
            <div className="w-10 h-[2px] bg-[#e31837]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-8 tracking-tight">
            OUR ELITE <span className="text-[#e31837]">SERVICES</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Unrivaled expertise in load management, rate negotiation, and administrative excellence for the modern carrier.
          </p>
        </div>
      </section>

      <Services />
      <DetailedServices />

      <section className="py-24 bg-[#070f1a] text-white relative overflow-hidden">
         {/* Subtle background glow */}
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
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight">24/7 ELITE SUPPORT</h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">A dedicated team of logistics experts available at every hour to manage your operational needs.</p>
            </div>
            <div className="p-10 border border-white/5 bg-white/5 rounded-2xl hover:border-[#e31837]/30 transition-all group">
              <Zap className="w-16 h-16 text-[#e31837] mx-auto mb-8 transition-transform group-hover:scale-110 duration-300" strokeWidth={1} />
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight">ACCELERATED SETUP</h4>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Our streamlined onboarding process gets your fleet moving premium loads within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
