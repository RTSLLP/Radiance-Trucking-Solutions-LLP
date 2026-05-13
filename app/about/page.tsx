import { Stats } from "@/components/stats"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="bg-[#0a1628] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://img.freepik.com/premium-photo/big-rig-semi-truck-cargo-highway-road_140916-53825.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Premium truck on highway"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/80 to-[#0a1628]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#e31837]" />
            <p className="text-[#e31837] text-xs font-black tracking-[0.3em] uppercase">The RTS Story</p>
            <div className="w-10 h-[2px] bg-[#e31837]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-8 tracking-tight">
            DRIVING THE FUTURE OF <br />
            <span className="text-[#e31837]">LOGISTICS EXCELLENCE</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Radiance Trucking Solutions LLP (RTS) is more than a dispatch service. We are your strategic partner in the high-stakes world of North American logistics.
          </p>
        </div>
      </section>

      {/* Corporate Identity Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#e31837]/5 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#e31837]" />
                <p className="text-[#e31837] text-xs font-black tracking-[0.2em] uppercase">Who We Are</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-8 tracking-tight uppercase leading-tight">
                EXPERIENCED DISPATCH SUPPORT FOR <br />
                <span className="text-[#e31837]">OWNER-OPERATORS</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed font-medium">
                RTS was founded by dispatch professionals who know the pressure owner-operators and small fleets face every day: rising operating costs, broker complexity, and increasing regulatory overhead. Our focus is practical support that helps carriers make better decisions and protect their margins.
              </p>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed font-medium">
                North America still relies on trucking for the majority of freight movement, and that means predictable loads, clear paperwork, and reliable communication are more important than ever. We help partners keep trucks moving with documented broker agreements, lane-aware load selection, and compliance guidance built around real industry needs.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-100">
                <div>
                  <h4 className="text-[#0a1628] font-black text-lg mb-2 uppercase">OPERATING SMARTER</h4>
                  <p className="text-gray-500 text-sm font-medium">Market-aware load planning that reduces empty miles and improves run consistency.</p>
                </div>
                <div>
                  <h4 className="text-[#0a1628] font-black text-lg mb-2 uppercase">DOCUMENTED SUPPORT</h4>
                  <p className="text-gray-500 text-sm font-medium">Clear broker paperwork, compliance checks, and communication so you stay in control.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <Image
                  src="https://img.freepik.com/premium-photo/big-rig-semi-truck-cargo-highway-road_140916-53825.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Premium Trucking"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-[#e31837] text-white p-6 rounded-xl shadow-2xl hidden md:block">
                <p className="text-3xl font-black">CARRIER</p>
                <p className="text-[10px] font-black tracking-[0.2em] uppercase opacity-80">FOCUSED SUPPORT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Visionary Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-12">
            <p className="text-[#e31837] text-xs font-black tracking-[0.3em] uppercase mb-4">Our Vision</p>
            <h2 className="text-4xl font-black text-[#0a1628] tracking-tight uppercase">BEYOND THE HORIZON</h2>
            <div className="w-16 h-1 bg-[#e31837] mt-6" />
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-xl font-medium italic">
            "To build a dependable dispatch service recognized for clear communication, consistent support, and practical carrier-first solutions."
          </p>
        </div>
      </section>
    </main>
  )
}
