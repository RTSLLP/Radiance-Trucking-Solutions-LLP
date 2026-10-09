"use client"

import { Radio, Activity, Navigation, CheckCircle2 } from "lucide-react"

const corridorSignals = [
  {
    corridor: "TORONTO ⇄ MONTREAL FREIGHT ARTERY",
    status: "ACTIVE DISPATCH",
    capacity: "HIGH DENSITY",
  },
  {
    corridor: "HIGHWAY 401 LOGISTICS CORRIDOR",
    status: "LIVE MONITORING",
    capacity: "OPTIMAL",
  },
  {
    corridor: "WESTERN CANADA (CALGARY / EDMONTON / VANCOUVER)",
    status: "REEFER & DRY VAN",
    capacity: "STEADY DISPATCH",
  },
  {
    corridor: "MIDWEST CROSS-BORDER DOCUMENTATION DESK",
    status: "PARS / PAPS PREP",
    capacity: "COMPLIANT",
  },
  {
    corridor: "KITCHENER LIAISON DESK",
    status: "24/7 CARRIER SUPPORT",
    capacity: "AVAILABLE",
  },
]

export function TelemetryTicker() {
  return (
    <div className="relative bg-[#060B18] border-y border-white/10 py-2.5 overflow-hidden text-xs">
      <div className="flex items-center">
        {/* Fixed label badge on left for desktop */}
        <div className="hidden md:flex items-center gap-2 bg-[#FF1E2D] text-white font-extrabold uppercase tracking-widest text-[10px] px-4 py-1 rounded-r-md z-10 flex-shrink-0 shadow-md">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>LIVE CORRIDOR TELEMETRY</span>
        </div>

        {/* Scrolling ticker track */}
        <div className="flex overflow-hidden whitespace-nowrap w-full">
          <div className="flex items-center gap-8 animate-marquee">
            {corridorSignals.concat(corridorSignals).map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 text-slate-300 font-medium text-xs tracking-wide"
              >
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-white font-bold">{item.corridor}</span>
                <span className="text-[#FF1E2D] font-mono text-[11px] font-bold">
                  [{item.status}]
                </span>
                <span className="text-slate-400 text-[11px]">
                  • {item.capacity}
                </span>
                <span className="text-slate-700 ml-3">/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
