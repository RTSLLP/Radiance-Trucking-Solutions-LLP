"use client"

import { ShieldCheck, Check, Lock, FileText, Ban } from "lucide-react"

const guarantees = [
  {
    icon: Ban,
    title: "Zero Forced Dispatch",
    description: "You or your driver have 100% final refusal rights on every load, lane, and appointment time. No penalties, no pressure.",
  },
  {
    icon: FileText,
    title: "100% Rate Transparency",
    description: "You receive the authentic broker rate confirmation directly. We never conceal rates or skim margins off the top.",
  },
  {
    icon: Lock,
    title: "Your Authority, Always",
    description: "You operate under your own CVOR, NSC, and insurance. RTS remains your backend contractor; your business identity is protected.",
  },
  {
    icon: ShieldCheck,
    title: "Direct Cash Flow",
    description: "All broker payments and factoring disbursements go straight to your bank account. RTS never handles your freight revenue.",
  },
]

export function AutonomyBanner() {
  return (
    <section className="bg-[#060B18] text-white py-20 lg:py-24 border-y border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF1E2D]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The RTS Operating Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            You own the truck. <br />
            <span className="text-[#FF1E2D]">You call the shots.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We are not a freight broker, and we are not a mega-carrier leasing your truck. We are your dedicated operations support team. Our role is to advise, negotiate, and execute administrative work—while you keep total control of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#FF1E2D]/40 hover:bg-white/[0.06] transition duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF1E2D]/15 text-[#FF1E2D] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
