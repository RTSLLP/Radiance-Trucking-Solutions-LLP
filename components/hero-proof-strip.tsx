import { ShieldCheck, Scale, Compass, Clock, CheckCircle2, Award, FileCheck, Building2, Receipt, Globe } from "lucide-react"

export function HeroProofStrip() {
  const metrics = [
    {
      icon: FileCheck,
      value: "100%",
      label: "Rate Con Transparency",
      highlight: "Zero Rate Trimming Guarantee",
      description: "Direct original broker rate confirmations sent to your device before booking. Complete gross revenue transparency.",
    },
    {
      icon: Scale,
      value: "0%",
      label: "Forced Dispatch",
      highlight: "You Own Equipment. You Call Shots.",
      description: "Complete autonomy. If a lane, rate, or schedule doesn't match your profitability goals, our desk pivots immediately.",
    },
    {
      icon: Compass,
      value: "401+",
      label: "Freight Artery Corridors",
      highlight: "Ontario, QC & USA Lanes",
      description: "Daily active freight monitoring across Highway 401, Quebec corridors, and high-yield cross-border border gateways.",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Dedicated Operations Desk",
      highlight: "Continuous Human Support",
      description: "Live dispatcher phone line, weekend tracking, and aggressive detention/layover recovery to protect your cash flow.",
    },
  ]

  const credentials = [
    { icon: Building2, text: "Registered LLP (ACZ-0433)" },
    { icon: Receipt, text: "GST & Tax Compliant Operations" },
    { icon: Globe, text: "IEC Registered Cross-Border" },
    { icon: ShieldCheck, text: "Zero Forced Dispatch Standard" },
    { icon: Award, text: "Canadian Liaison Desk (Kitchener, ON)" },
  ]

  return (
    <section className="relative z-20 bg-[#091322] border-y border-slate-800 text-white shadow-lg">
      {/* 4-Column Heavyweight Metric Cards (TransAm & ET Transport Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group relative bg-[#0d1c33] border border-slate-800 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-red-500/50 hover:bg-[#10223d] hover:shadow-xl hover:shadow-red-950/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 text-red-500 flex items-center justify-center transition-colors group-hover:bg-[#e31837] group-hover:text-white">
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
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Official Credentials & Compliance Ticker Strip (From Company Packet Page 4) */}
      <div className="bg-[#050b14] border-t border-slate-800/80 py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-y-2.5 gap-x-6 text-[11px] font-semibold text-slate-300">
          <div className="flex items-center gap-2 text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-[#e31837] flex-shrink-0" />
            <span className="uppercase tracking-widest text-[10px] text-slate-400 font-extrabold">
              The RTS Partner Standard:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {credentials.map((cred, idx) => {
              const Icon = cred.icon
              return (
                <div key={cred.text} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="tracking-wide text-slate-200">{cred.text}</span>
                  {idx < credentials.length - 1 && (
                    <span className="hidden md:inline text-slate-700 ml-3">•</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
