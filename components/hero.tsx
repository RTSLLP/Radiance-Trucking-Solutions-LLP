"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/assets/branding/cover-image.png"
          alt="North American transportation operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-slate-950/80 to-slate-950/92" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(227,24,55,0.14),transparent_30%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-36">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#e31837] mb-4">Carrier Operations Support</p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            Operational dispatch coordination for North American carriers
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-200 sm:text-lg leading-8">
            RTS delivers premium dispatch coordination, compliance-ready logistics support, and carrier-focused operations management across the USA and Canada.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact#get-started-today"
              className="inline-flex items-center justify-center rounded-full bg-[#e31837] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#c41430]"
            >
              Contact RTS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#e31837] hover:bg-white/15"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
