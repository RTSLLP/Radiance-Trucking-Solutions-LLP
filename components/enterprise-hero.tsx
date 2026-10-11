import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Truck, Globe } from "lucide-react"

export function EnterpriseHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#070f1a] text-white overflow-hidden">
      {/* Official Hero Background Asset with Subtle Dark Corporate Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/branding/hero-official.png"
          alt="Radiance Trucking Solutions Official Logistics Fleet"
          fill
          priority
          className="object-cover object-right md:object-center opacity-35 lg:opacity-40"
        />
        {/* Cinematic gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070f1a] via-[#070f1a]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070f1a] via-transparent to-[#070f1a]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Active Status Beacon (User's favorite blinking red light feature) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-sm shadow-red-500" />
            <span>Active 24/7 Operations & Dispatch Desk</span>
          </div>

          {/* Official Core Tagline Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-4">
            YOUR PARTNER BEHIND{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500">
              EVERY MILE.
            </span>
          </h1>

          {/* Official Brand Subtitle */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-300 mb-6">
            <span>FAST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>RELIABLE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>NATIONWIDE</span>
          </div>

          {/* Positioning Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
            The dedicated operations department behind your trucking business. 
            We secure peak-rate freight, manage broker setup packets and rate confirmations, 
            and streamline your cash flow—with 100% rate transparency and zero forced dispatch.
          </p>

          {/* 4 Brand Pillars (From the Official RTS Brand Package) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 text-xs font-semibold text-slate-200">
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-lg p-2.5 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Backend Reliability</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-lg p-2.5 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Load Procurement</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-lg p-2.5 backdrop-blur-sm">
              <Truck className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Secure Deliveries</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-lg p-2.5 backdrop-blur-sm">
              <Globe className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Nationwide Reach</span>
            </div>
          </div>

          {/* Clean Primary Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#e31837] hover:bg-[#c41430] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
            >
              <span>Contact RTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm tracking-wider border border-slate-700 transition backdrop-blur-sm"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
