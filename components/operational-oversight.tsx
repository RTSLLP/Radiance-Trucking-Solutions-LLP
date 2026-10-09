import { Radio, CheckCircle, Clock, MapPin, FileCheck, Shield } from "lucide-react"

export function OperationalOversight() {
  return (
    <section className="py-20 md:py-28 bg-[#0D183D] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF1E2D] mb-6">
              <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF1E2D]" />
              Dedicated Operations Desk
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-6">
              Structured visibility from load booking to settlement.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              We do not treat dispatch as random phone calls. RTS operates a structured communication and monitoring protocol for every active unit—giving owner-operators and fleet owners complete peace of mind.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-1 rounded-full bg-red-500/10 text-[#FF1E2D] mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Broker & Receiver Coordination</h4>
                  <p className="text-xs text-slate-400 mt-0.5">We handle all pickup confirmations, appointment scheduling, and receiver check calls in your commercial name.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1 rounded-full bg-red-500/10 text-[#FF1E2D] mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Rapid Exception & Delay Escalation</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Weather holds, detention tracking, and mechanic/tire breakdowns are handled promptly to protect your time and money.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1 rounded-full bg-red-500/10 text-[#FF1E2D] mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Fast Settlement & POD Processing</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Delivery paperwork is collected and verified immediately to ensure prompt broker payment and factoring submission.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive UI Mockup Card */}
          <div className="bg-slate-900/90 rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  RTS Operations Desk • Canadian Lanes
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                Active Protocol
              </span>
            </div>

            {/* Active Load Status Block */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-slate-400 font-medium">DISPATCH #CAN-8492</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    In Transit • On Schedule
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-white mb-2">
                  <MapPin className="w-4 h-4 text-[#FF1E2D] flex-shrink-0" />
                  <span>Mississauga, ON</span>
                  <span className="text-slate-500">➔</span>
                  <span>Calgary, AB</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                  <div>Equipment: <span className="text-slate-200 font-semibold">53&apos; Dry Van</span></div>
                  <div>Appointment: <span className="text-slate-200 font-semibold">Confirmed 08:00 MST</span></div>
                </div>
              </div>

              {/* Status checklist grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-3.5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <FileCheck className="w-3.5 h-3.5 text-[#FF1E2D]" />
                    Rate Confirmation
                  </div>
                  <p className="text-[11px] text-slate-400">Verified & Filed to Carrier Record</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3.5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    Check Calls
                  </div>
                  <p className="text-[11px] text-slate-400">Broker Updated • Next 12:00 EST</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3.5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    Canadian Compliance
                  </div>
                  <p className="text-[11px] text-slate-400">CVOR / NSC Standard Aligned</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3.5 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    Backhaul Coordination
                  </div>
                  <p className="text-[11px] text-slate-400">Calgary ➔ Winnipeg Reload Sourced</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Operational Authority: Carrier Preserved</span>
              <span className="text-slate-200 font-semibold">Zero Forced Dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
