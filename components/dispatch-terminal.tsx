"use client"

import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  TrendingUp,
  FileCheck2,
  Truck,
  ArrowUpRight,
} from "lucide-react"

export function DispatchTerminal() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF1E2D]/20 via-[#0D183D]/40 to-[#FF1E2D]/20 blur-xl opacity-75" />

      {/* Main Terminal Window */}
      <div className="relative rounded-2xl border border-white/10 bg-[#060B18]/95 p-5 md:p-6 shadow-2xl backdrop-blur-2xl text-white font-sans">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span className="font-mono text-xs font-semibold tracking-wider text-slate-300">
              RTS DESK TELEMETRY // KITCHENER_01
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>DESK ONLINE</span>
          </div>
        </div>

        {/* Real-time KPI Bar */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Carrier Authority
            </p>
            <p className="mt-1 text-sm md:text-base font-extrabold text-white font-mono">
              100% OWNED
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Forced Dispatch
            </p>
            <p className="mt-1 text-sm md:text-base font-extrabold text-[#FF1E2D] font-mono">
              ZERO // NEVER
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Billing Latency
            </p>
            <p className="mt-1 text-sm md:text-base font-extrabold text-emerald-400 font-mono">
              &lt; 24 HRS
            </p>
          </div>
        </div>

        {/* Live Active Triplist */}
        <div className="space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Active Coordinated Units</span>
            <span className="text-emerald-400 font-mono text-[10px]">● LIVE FEED</span>
          </div>

          {/* Unit 1 */}
          <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-3.5 transition hover:border-[#FF1E2D]/40 hover:bg-white/[0.05]">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#FF1E2D]" />
                <span className="font-bold text-white font-mono">UNIT #104</span>
                <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">
                  53&apos; Dry Van
                </span>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                Rate Confirmed
              </span>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-slate-400" />
                <span>Brampton, ON ➔ Montreal, QC</span>
              </div>
              <span className="text-slate-400 text-[11px]">POD Uploaded</span>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-3.5 transition hover:border-[#FF1E2D]/40 hover:bg-white/[0.05]">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#FF1E2D]" />
                <span className="font-bold text-white font-mono">UNIT #208</span>
                <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">
                  Tri-Axle Reefer
                </span>
              </div>
              <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400">
                In-Transit
              </span>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-slate-400" />
                <span>Kitchener, ON ➔ Chicago, IL</span>
              </div>
              <span className="text-slate-400 text-[11px]">PAPS Verified</span>
            </div>
          </div>

          {/* Unit 3 */}
          <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-3.5 transition hover:border-[#FF1E2D]/40 hover:bg-white/[0.05]">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#FF1E2D]" />
                <span className="font-bold text-white font-mono">UNIT #312</span>
                <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">
                  Flatbed / Step Deck
                </span>
              </div>
              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                Awaiting Carrier Approval
              </span>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-slate-400" />
                <span>Hamilton, ON ➔ Calgary, AB</span>
              </div>
              <span className="text-slate-400 text-[11px]">No Forced Dispatch</span>
            </div>
          </div>
        </div>

        {/* Footer Audit Badge */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#FF1E2D]" />
            <span>Canadian CVOR &amp; NSC Standard</span>
          </div>
          <span className="font-mono text-[10px] text-slate-500">
            ENCRYPTED PARTNER DATA
          </span>
        </div>
      </div>
    </div>
  )
}
