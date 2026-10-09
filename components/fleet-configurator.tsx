"use client"

import { useState } from "react"
import { Check, Sparkles, ArrowRight, Truck, Sliders, ShieldCheck } from "lucide-react"

const equipmentOptions = [
  { id: "dry-van", label: "53' Dry Van", icon: "🚛" },
  { id: "reefer", label: "Tri-Axle Reefer", icon: "❄️" },
  { id: "flatbed", label: "Flatbed / Step Deck", icon: "🏗️" },
  { id: "specialized", label: "Specialized / Heavy", icon: "⚙️" },
]

const fleetSizeOptions = [
  { id: "single", label: "1 Unit (Owner-Op)" },
  { id: "small", label: "2 - 5 Units" },
  { id: "medium", label: "6 - 15 Units" },
  { id: "fleet", label: "15+ Units" },
]

const supportOptions = [
  {
    id: "dispatch",
    label: "Dispatch Only",
    summary: "Load sourcing, rate negotiations, 24/7 driver check-calls, appointment booking.",
  },
  {
    id: "operations",
    label: "Operations & Billing",
    summary: "Everything in dispatch + full invoicing, broker packets, factoring submissions, NOA filings.",
  },
  {
    id: "enterprise",
    label: "Full Enterprise Desk",
    summary: "Dedicated dispatch desk, priority commercial lanes, compliance audits, after-hours escalation.",
  },
]

export function FleetConfigurator() {
  const [equipment, setEquipment] = useState("dry-van")
  const [fleetSize, setFleetSize] = useState("single")
  const [supportLevel, setSupportLevel] = useState("operations")

  const selectedEquipment = equipmentOptions.find((e) => e.id === equipment)?.label
  const selectedFleet = fleetSizeOptions.find((f) => f.id === fleetSize)?.label
  const selectedSupport = supportOptions.find((s) => s.id === supportLevel)

  return (
    <section id="configurator" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D183D] mb-3 shadow-sm">
            <Sliders className="w-3.5 h-3.5 text-[#FF1E2D]" />
            <span>Interactive Operational Configurator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0D183D] leading-tight">
            Configure your dedicated operations desk.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every fleet operates differently. Select your equipment and active truck count below to preview your customized RTS operations blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-8 shadow-sm">
            {/* Step 1: Equipment */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
                Step 1: Primary Trailer / Equipment Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {equipmentOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setEquipment(opt.id)}
                    className={`rounded-2xl border p-3.5 text-center transition flex flex-col items-center justify-center gap-2 ${
                      equipment === opt.id
                        ? "border-[#FF1E2D] bg-red-50/50 text-[#0D183D] font-bold shadow-sm ring-1 ring-[#FF1E2D]"
                        : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="text-xs leading-snug">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fleet Size */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
                Step 2: Active Truck Count
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {fleetSizeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setFleetSize(opt.id)}
                    className={`rounded-xl border py-3 px-3 text-xs text-center font-bold transition ${
                      fleetSize === opt.id
                        ? "border-[#0D183D] bg-[#0D183D] text-white shadow-sm"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Support Level */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
                Step 3: Operational Support Scope
              </label>
              <div className="space-y-3">
                {supportOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSupportLevel(opt.id)}
                    className={`w-full rounded-2xl border p-4 text-left transition flex items-start gap-3.5 ${
                      supportLevel === opt.id
                        ? "border-[#FF1E2D] bg-red-50/30 text-[#0D183D] shadow-sm ring-1 ring-[#FF1E2D]"
                        : "border-slate-200 bg-slate-50/40 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        supportLevel === opt.id
                          ? "border-[#FF1E2D] bg-[#FF1E2D] text-white"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {supportLevel === opt.id && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0D183D]">{opt.label}</p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {opt.summary}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Blueprint Output (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-[#060B18] text-white rounded-3xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RTS BLUEPRINT PREVIEW</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">SPEC_v2.2</span>
            </div>

            {/* Configured Summary */}
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Target Configuration
                </p>
                <p className="text-xl font-black text-white mt-1">
                  {selectedFleet} • {selectedEquipment}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF1E2D]">
                  Operational Tier Selected
                </p>
                <p className="text-base font-bold text-white">
                  {selectedSupport?.label}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedSupport?.summary}
                </p>
              </div>

              {/* Lane Matcher */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Active Corridor Matches
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300">
                    Toronto ⇄ Montreal Corridor
                  </span>
                  <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300">
                    Highway 401 Artery
                  </span>
                  <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300">
                    Western Canada Interprovincial
                  </span>
                </div>
              </div>
            </div>

            {/* CTA to lock in desk */}
            <div className="pt-2">
              <a
                href={`/contact?equipment=${equipment}&fleet=${fleetSize}&support=${supportLevel}#get-a-dispatcher`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FF1E2D] px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/25 transition hover:bg-[#c41430]"
              >
                <span>Activate This Configuration</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligation • No forced dispatch</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
