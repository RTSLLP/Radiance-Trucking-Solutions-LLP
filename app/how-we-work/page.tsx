import { WhyChooseUs } from "@/components/why-choose-us"
import { ClipboardCheck, Search, Headphones, FileText, Wallet } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    icon: ClipboardCheck,
    title: "1. ONBOARDING & SETUP",
    description: "Our relationship begins with a deep dive into your business needs. We gather your MC Authority, Insurance, and W-9 to get you set up in our system. We discuss your preferred lanes, home time requirements, and equipment specifications (Dry Van, Reefer, Flatbed, etc.) to build your custom carrier profile.",
  },
  {
    icon: Search,
    title: "2. STRATEGIC LOAD MATCHING",
    description: "Our expert dispatchers don't just pick any load. We utilize advanced market analytics and our extensive network of brokers and direct shippers to identify high-yield freight. We perform credit checks on every broker to ensure you're working with reliable partners and negotiate the best possible rates to maximize your RPM (Rate Per Mile).",
  },
  {
    icon: Headphones,
    title: "3. ACTIVE DISPATCH & MONITORING",
    description: "Once a load is secured and approved by you, we handle all the booking details. While you're on the road, our team provides 24/7 support. We manage check calls, handle delays at shippers/receivers, and negotiate detention or layover pay on your behalf. You drive, we handle the friction.",
  },
  {
    icon: FileText,
    title: "4. FULL DOCUMENTATION CONTROL",
    description: "The administrative burden of trucking is heavy—let us carry it. We manage carrier packets, process rate confirmations, and ensure BOLs (Bills of Lading) are handled correctly. We keep your digital records organized and accessible, ensuring you're always audit-ready and compliant.",
  },
  {
    icon: Wallet,
    title: "5. EXPEDITED BILLING & REPORTING",
    description: "Cash flow is the lifeblood of your business. As soon as a load is delivered, we submit the invoice and supporting documents to your factoring company or the broker. We track your weekly revenue and provide detailed performance reports, giving you a clear view of your business's growth and profitability.",
  },
]

export function HowWeWorkContent() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
       {/* Subtle background decoration */}
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e31837]/10 to-transparent" />
       
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#e31837]" />
            <p className="text-[#e31837] text-sm font-black tracking-[0.2em] uppercase">Operations</p>
            <div className="w-12 h-[2px] bg-[#e31837]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] uppercase tracking-tight">
            OUR STRATEGIC <span className="text-[#e31837]">PARTNERSHIP</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A high-performance operational framework designed to eliminate administrative friction and maximize your revenue at every mile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all group text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e31837] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="flex justify-center mb-8">
                <step.icon className="w-16 h-16 text-[#e31837] transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-[#0a1628] mb-6 uppercase tracking-tight leading-tight">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-[#0a1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://img.freepik.com/premium-photo/big-rig-semi-truck-cargo-highway-road_140916-53825.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Elite Logistics" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#e31837]" />
              <p className="text-[#e31837] text-xs font-black tracking-[0.3em] uppercase">Process & Execution</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-8 tracking-tight">
              HOW WE <br />
              <span className="text-[#e31837]">EXECUTE</span>
            </h1>
            <p className="text-gray-300 max-w-xl text-lg md:text-xl font-medium leading-relaxed">
              We deploy elite-level logistics management to ensure your business remains profitable, compliant, and focused on the journey ahead.
            </p>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      <HowWeWorkContent />
      
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e31837]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col items-center mb-10">
            <p className="text-[#e31837] text-[10px] font-black tracking-[0.3em] uppercase mb-4">Elite Policy</p>
            <h2 className="text-4xl font-black text-[#0a1628] tracking-tight uppercase">NO FORCED DISPATCH</h2>
            <div className="w-16 h-1 bg-[#e31837] mt-6" />
          </div>
          <p className="text-gray-600 text-xl leading-relaxed mb-12 font-medium">
            We work for you, not the other way around. You retain absolute authority over every load we find. If a route doesn't meet your strategic criteria or personal preferences, we keep looking. Your success is defined by your choices.
          </p>
          <div className="inline-block bg-[#0a1628] text-white px-10 py-5 rounded-sm font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-black transition-all">
            Your Business • Your Authority
          </div>
        </div>
      </section>
    </main>
  )
}
