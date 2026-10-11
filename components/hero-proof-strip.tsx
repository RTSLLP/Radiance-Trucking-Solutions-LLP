import { ShieldCheck, Scale, Compass, Clock, CheckCircle2, Award, FileCheck } from "lucide-react"

export function HeroProofStrip() {
  const metrics = [
    {
      icon: FileCheck,
      value: "100%",
      label: "Rate Con Proof",
      highlight: "Zero Rate Trimming",
      description: "Original broker rate confirmations sent directly to your screen before booking. Complete gross revenue transparency.",
    },
    {
      icon: Scale,
      value: "0%",
      label: "Forced Dispatch",
      highlight: "Carrier Decides Every Run",
      description: "You own the equipment, you call the shots. If a rate or destination doesn't fit your business, we pivot instantly.",
    },
    {
      icon: Compass,
      value: "401+",
      label: "Highway & Cross-Border",
      highlight: "Ontario, QC & US Corridors",
      description: "Daily freight monitoring across the 401 corridor, Montreal connections, and high-yield cross-border gateways.",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Active Operations Desk",
      highlight: "Human Dispatch & Escalation",
      description: "Live dispatcher line, weekend check-call coverage, and aggressive detention/layover recovery on every load.",
    },
  ]

  const trustBadges = [
    "100% Rate Transparency Guarantee",
    "Zero Forced Dispatch Standard",
    "CVOR & NSC Audit-Ready Docs",
    "Same-Day Factoring Invoice Filing",
    "Direct Kitchener, ON Liaison Desk",
  ]

  return (
    <section className="relative z-20 bg-[#050b14] border-y border-slate-800 text-white">
      {/* 4-Column Heavyweight Metric Cards (TransAm & ET Transport Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group relative bg-[#091322] border border-slate-800/90 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-red-500/40 hover:bg-[#0c1a2e] hover:shadow-xl hover:shadow-red-950/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center transition-colors group-hover:bg-red-500 group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
                    {item.value}
                  </span>
                </div>

                <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-xs font-semibold text-red-400 mb-2">
                  {item.highlight}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Trust & Compliance Ticker Strip (Ship With Pride & ET Transport Style) */}
      <div className="bg-[#03070d] border-t border-slate-800/60 py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-y-2 gap-x-6 text-[11px] font-semibold text-slate-300">
          <div className="flex items-center gap-2 text-slate-400">
            <Award className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span className="uppercase tracking-widest text-[10px] text-slate-400 font-bold">
              The RTS Operational Standard:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustBadges.map((badge, idx) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="tracking-wide text-slate-300">{badge}</span>
                {idx < trustBadges.length - 1 && (
                  <span className="hidden md:inline text-slate-700 ml-3">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
