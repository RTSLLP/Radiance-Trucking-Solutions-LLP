"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation, FileText, Receipt, ShieldCheck, ArrowRight, Check } from "lucide-react"

const capabilities = [
  {
    id: "dispatch",
    title: "Dedicated Dispatch Coordination",
    tagline: "High-yield freight lanes. Zero forced dispatch.",
    icon: Navigation,
    description:
      "Our operations desk continuously monitors Canadian freight volume across Highway 401, Ontario, Quebec, and Western Canada. We analyze spot vs. contract rate spreads and negotiate aggressively so your trucks only turn profitable miles.",
    bullets: [
      "Direct broker rate negotiations to maximize gross revenue per mile",
      "Strategic backhaul positioning to eliminate unpaid deadhead miles",
      "100% transparent rate confirmations delivered directly to your device",
      "Real-time driver route optimization and weather/border traffic alerts",
    ],
  },
  {
    id: "admin",
    title: "Back-Office Administration",
    tagline: "Total paperwork handling so drivers focus on the highway.",
    icon: FileText,
    description:
      "Hauling freight generates heavy administrative overhead. RTS absorbs every piece of broker paperwork, insurance submission, and check-call duty, ensuring your operating authority remains in good standing.",
    bullets: [
      "Immediate completion and submission of carrier setup packets",
      "Certificate of Insurance (COI) distribution to vetted brokerages",
      "Scheduled shipper/receiver check calls and dock arrival notices",
      "Fast escalation and settlement of loading delays and layovers",
    ],
  },
  {
    id: "billing",
    title: "Invoicing & Factoring Liaison",
    tagline: "Accelerated cash flow and aggressive detention recovery.",
    description:
      "Unpaid miles break carrier balance sheets. The moment your driver collects a signed Proof of Delivery (POD), our billing desk generates compliant invoices and routes them directly to your factoring company.",
    bullets: [
      "Same-day invoice generation upon receiving delivery documentation",
      "Direct factoring company integration and NOA schedule filing",
      "Aggressive tracking and collection of detention, layover, and lumper fees",
      "Complete payment status ledger and monthly gross revenue accounting",
    ],
  },
  {
    id: "compliance",
    title: "Safety & Audit Readiness",
    tagline: "Protecting your commercial carrier authority.",
    description:
      "We help you maintain audit-ready documentation across Canadian commercial standards. From driver qualification records to inspection files, we ensure you stay fully road-legal.",
    bullets: [
      "Ontario CVOR & National Safety Code (NSC) documentation guidance",
      "Driver qualification file organization and renewal reminder tracking",
      "Periodic vehicle maintenance record and annual inspection archiving",
      "Permit coordination for specialized, oversized, and cross-provincial moves",
    ],
  },
]

export function BrandShowcase() {
  const [activeTab, setActiveTab] = useState("dispatch")
  const current = capabilities.find((c) => c.id === activeTab) || capabilities[0]

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Proud Master Brand Presentation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 pb-12 border-b border-slate-100">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-3">
              Operational Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              How Radiance Trucking Solutions Powers Your Business
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We operate as your dedicated operations department. Explore our core capabilities below to see how our team handles load procurement, broker paperwork, and billing.
            </p>
          </div>

          {/* Master Emblem Card */}
          <div className="flex-shrink-0 flex items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex-shrink-0">
              <Image
                src="/assets/branding/RTS_MASTER_LOGO.png"
                alt="RTS Official Master Emblem"
                fill
                className="object-contain"
              />
            </div>
            <div className="pr-4">
              <div className="text-xs font-black uppercase text-slate-900 tracking-wide">
                Radiance Trucking Solutions LLP
              </div>
              <div className="text-[11px] font-semibold text-red-600 uppercase tracking-wider mt-0.5">
                Official Operations Hub
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Your Partner Behind Every Mile
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Capability Switcher (Apple / Antigravity Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Nav Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((item) => {
              const Icon = item.icon
              const isActive = item.id === activeTab
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all flex items-start gap-4 ${
                    isActive
                      ? "bg-[#0a1628] text-white border-[#0a1628] shadow-lg shadow-slate-950/10 scale-[1.02]"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-red-500 text-white"
                        : "bg-white text-slate-700 border border-slate-200"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold leading-snug">{item.title}</div>
                    <div
                      className={`text-xs mt-1 leading-normal ${
                        isActive ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {item.tagline}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Dynamic Deep Dive Card */}
          <div className="lg:col-span-7 bg-[#0a1628] text-white rounded-2xl border border-slate-800 p-8 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                Capability Blueprint
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{current.title}</h3>
              <p className="text-red-400 text-sm font-semibold mb-6">{current.tagline}</p>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {current.description}
              </p>

              <div className="border-t border-slate-800 pt-6 space-y-3.5 mb-8">
                {current.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#e31837] hover:bg-[#c41430] text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-red-600/20"
                >
                  <span>Connect With This Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:15199376622"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold tracking-wider border border-slate-700 transition"
                >
                  <span>Call Operations: +1 (519) 937-6622</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
