"use client"

import Link from "next/link"
import { ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react"
import { DispatchTerminal } from "./dispatch-terminal"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060B18] via-[#0D183D] to-[#060B18] text-white py-16 sm:py-20 lg:py-24">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF1E2D]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E2D]/40 bg-[#FF1E2D]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF1E2D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF1E2D] animate-ping" />
              <span>Canadian Carrier Operations Support</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              The Operations Support Behind Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Trucking Business.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Independent dispatch coordination, error-free back-office management, and proactive compliance administration—engineered to keep Canadian fleets rolling with{" "}
              <strong className="text-white font-semibold">zero forced dispatch</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact#get-a-dispatcher"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FF1E2D] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/25 transition hover:bg-[#c41430] hover:shadow-xl"
              >
                <span>Get a Dispatcher</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10 hover:border-slate-500"
              >
                <span>Explore Solutions</span>
              </Link>
              <Link
                href="/portal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-300 transition hover:text-white hover:bg-slate-800"
              >
                <ShieldCheck className="w-4 h-4 text-[#FF1E2D]" />
                <span>Partner Portal</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF1E2D]" />
                <span className="font-semibold text-slate-200">Zero Forced Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF1E2D]" />
                <span className="font-semibold text-slate-200">100% Retained Authority</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF1E2D]" />
                <span className="font-semibold text-slate-200">Direct Kitchener Liaison Desk</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Terminal */}
          <div className="lg:col-span-5">
            <DispatchTerminal />
          </div>
        </div>
      </div>
    </section>
  )
}
