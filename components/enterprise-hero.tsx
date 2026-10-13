import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Headphones, ClipboardCheck, Globe2, Handshake } from "lucide-react"

export function EnterpriseHero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Official Hero Background Graphic - Full brightness without dark gloom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/branding/hero-official.png"
          alt="Radiance Trucking Solutions Official Logistics Fleet"
          fill
          priority
          className="object-cover object-right md:object-right opacity-95 lg:opacity-100"
        />
        {/* Soft, bright enterprise gradient overlay: leaves the right-side fleet & globe in full daylight brilliance while ensuring crystal-clear text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 md:via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent md:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Active Status Beacon (Red pulsing light) */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-red-200 bg-red-50/90 text-red-700 text-xs font-black tracking-wider uppercase mb-5 backdrop-blur-sm shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e31837] animate-pulse shadow-sm shadow-red-500" />
            <span>Active 24/7 Operations &amp; Dispatch Desk</span>
          </div>

          {/* Official Company Packet Brand Slogan Divider Bar */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-8 sm:w-12 bg-[#e31837] rounded-full" />
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-slate-900">
              YOUR PARTNER BEHIND EVERY MILE.
            </span>
            <div className="h-0.5 w-8 sm:w-12 bg-slate-900 rounded-full" />
          </div>

          {/* Official Major Impact Headline from Company Packet Page 1 */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.05] mb-5">
            SIMPLIFY OPERATIONS.<br />
            <span className="text-[#e31837]">
              FOCUS ON WHAT MOVES YOU FORWARD.
            </span>
          </h1>

          {/* Company Packet Bullet Category Tags */}
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm font-black tracking-wider uppercase text-slate-800 mb-5">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#e31837]" />
              DISPATCH
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#e31837]" />
              CARRIER SUPPORT
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#e31837]" />
              BACK OFFICE OPERATIONS
            </span>
          </div>

          {/* Exact Positioning Copy from Company Packet */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-xl font-medium">
            Professional dispatch and operational support helping owner-operators and small fleets run their business smoothly and profitably. We are not a broker—we are your trusted back-office partner, working behind the scenes with 100% rate transparency and zero forced dispatch.
          </p>

          {/* Primary Action Desk Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#e31837] hover:bg-[#c41430] text-white font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
            >
              <span>Request Dispatch Rate</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:15199376622"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm transition"
            >
              <Phone className="w-4 h-4 text-[#e31837]" />
              <span>Call Operations: +1 (519) 937-6622</span>
            </a>
          </div>

          {/* 4 Brand Pillars (Bottom of Company Packet Page 1) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl text-xs font-bold text-slate-800">
            <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3 shadow-sm hover:border-red-300 transition">
              <Headphones className="w-4 h-4 text-[#e31837] flex-shrink-0" />
              <span>Dedicated Support</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3 shadow-sm hover:border-red-300 transition">
              <ClipboardCheck className="w-4 h-4 text-[#e31837] flex-shrink-0" />
              <span>Reliable Operations</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3 shadow-sm hover:border-red-300 transition">
              <Globe2 className="w-4 h-4 text-[#e31837] flex-shrink-0" />
              <span>Nationwide Coverage</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3 shadow-sm hover:border-red-300 transition">
              <Handshake className="w-4 h-4 text-[#e31837] flex-shrink-0" />
              <span>Partner Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
