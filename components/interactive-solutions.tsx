"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Truck, Settings2, TrendingUp, ShieldCheck } from "lucide-react"

const solutionTiers = [
  {
    id: "dispatch",
    name: "RTS DISPATCH",
    icon: Truck,
    badge: "LOAD SOURCING & TRIP DESK",
    subtitle: "Active trip coordination and broker negotiation for owner-operators & drivers.",
    fit: "Owner-operators and 1-3 unit carriers who want steady, profitable miles without phone fatigue.",
    features: [
      "Spot & contract load sourcing matched to your equipment and lane preferences",
      "Aggressive broker rate negotiation with zero hidden kickbacks",
      "Driver check-calls and appointment scheduling managed 24/7",
      "Rate confirmation review and verification before dispatch",
      "Zero forced dispatch: You retain 100% final approval on every trip",
    ],
    ctaText: "Activate Dispatch Desk",
  },
  {
    id: "operations",
    name: "RTS OPERATIONS",
    icon: Settings2,
    badge: "COMPLETE BACK-OFFICE DESK",
    subtitle: "Full administrative, invoicing, and documentation desk for growing fleets.",
    fit: "Carriers with 2-10 units looking to eliminate administrative overhead and accelerate cash flow.",
    features: [
      "Everything in RTS Dispatch included",
      "Immediate billing preparation, POD archiving, and invoicing turnaround (< 24 hrs)",
      "Carrier packet onboarding with new brokers and direct shippers",
      "Factoring company notice-of-assignment (NOA) submissions and schedule reconciliation",
      "Detention, layover, and accessorial charge negotiation and recovery",
      "Provincial CVOR / NSC safety records administration support",
    ],
    ctaText: "Activate Operations Desk",
  },
  {
    id: "expansion",
    name: "RTS EXPANSION",
    icon: TrendingUp,
    badge: "FLEET SCALING & COMMERCIAL",
    subtitle: "Strategic capacity management and lane development for established fleets.",
    fit: "Established fleets (5+ units) scaling their Canadian and cross-border commercial footprint.",
    features: [
      "Everything in RTS Dispatch & RTS Operations included",
      "Dedicated senior dispatcher and account operations manager",
      "Direct shipper outreach and recurring lane contract development",
      "Cross-border customs document readiness (PARS / PAPS coordination)",
      "Fleet revenue optimization reporting and lane profitability analysis",
      "Priority after-hours breakdown and road exception escalation desk",
    ],
    ctaText: "Activate Expansion Desk",
  },
]

export function InteractiveSolutions() {
  const [activeTab, setActiveTab] = useState("dispatch")
  const currentTier = solutionTiers.find((t) => t.id === activeTab) || solutionTiers[0]

  return (
    <section id="solutions" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF1E2D] mb-3">
            Fleet Architecture &amp; Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0D183D] leading-tight">
            Built to scale with your active truck count.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Select the operational tier that fits your fleet today. We tailor our day-to-day desk support to your exact lanes, equipment specs, and operational tempo.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mb-8 max-w-2xl">
          {solutionTiers.map((tier) => {
            const isActive = activeTab === tier.id
            const Icon = tier.icon
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTab(tier.id)}
                className={`flex-1 min-w-[160px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition duration-150 ${
                  isActive
                    ? "bg-[#0D183D] text-white shadow-md"
                    : "text-slate-600 hover:text-[#0D183D] hover:bg-white/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#FF1E2D]" : "text-slate-400"}`} />
                <span>{tier.name}</span>
              </button>
            )
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left side: Overview & Fit */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-block rounded-full bg-[#FF1E2D]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#FF1E2D]">
                {currentTier.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0D183D]">
                {currentTier.name}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                {currentTier.subtitle}
              </p>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ideal Operational Fit
                </p>
                <p className="text-sm text-slate-700 leading-snug">
                  {currentTier.fit}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/contact?plan=${currentTier.id}#get-a-dispatcher`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-500/20 transition hover:bg-[#c41430]"
                >
                  <span>{currentTier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right side: Deliverables Checklist */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0D183D] pb-3 border-b border-slate-100 flex items-center justify-between">
                <span>Core Operational Deliverables</span>
                <span className="text-[#FF1E2D] text-xs font-mono">GUARANTEED SCOPE</span>
              </h4>

              <div className="space-y-3.5 pt-1">
                {currentTier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed font-normal">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FF1E2D]" />
                  <span>Transparent carrier agreement</span>
                </div>
                <span>Custom proposal per fleet specs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
