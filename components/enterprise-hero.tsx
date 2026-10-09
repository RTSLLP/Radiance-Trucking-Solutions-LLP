import Link from "next/link"
import Image from "next/image"
import { ShieldCheck, PhoneCall, ArrowRight, CheckCircle2 } from "lucide-react"

export function EnterpriseHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#0a1628] text-white overflow-hidden">
      {/* Background Photography with Industrial Enterprise Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/na-truck-1.jpg"
          alt="Commercial highway transport in Canada"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Canadian Carrier Operations & Dedicated Dispatch</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
            Dedicated Fleet Operations.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
              Zero Forced Dispatch.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
            RTS serves as your dedicated backend operations department across Canada. 
            We secure top-paying freight, handle broker rate confirmations and setup packets, 
            and manage your billing—while you retain 100% authority and control over your equipment.
          </p>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-sm text-slate-200">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span>100% Rate Confirmation Transparency</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span>Zero Forced Dispatch Guarantee</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span>Full Carrier Packet & Invoicing Management</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span>Direct Kitchener Operations Liaison</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#e31837] hover:bg-[#c41430] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-red-600/25 hover:shadow-red-600/40"
            >
              <span>Request a Dispatcher</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:15199376622"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-sm tracking-wider border border-slate-700 transition-all backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-red-400" />
              <span>+1 (519) 937-6622</span>
            </a>
            <Link
              href="/portal"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-semibold text-sm tracking-wider transition"
            >
              <ShieldCheck className="w-4 h-4 text-red-400" />
              <span>Carrier Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enterprise Stats Bar (Venture Logistics Style) */}
      <div className="absolute bottom-0 inset-x-0 bg-[#070f1a]/95 border-t border-slate-800 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-white">0%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Forced Dispatch</div>
            </div>
            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Rate Con Transparency</div>
            </div>
            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Operations Support</div>
            </div>
            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Retained Authority</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
