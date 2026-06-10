"use client"

import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  "Coordinated dispatch execution focused on your operation.",
  "Clear communication across brokers, dispatch, and drivers.",
  "Compliance support that reduces administrative burden.",
  "Operational confidence with carrier authority respected.",
  "24/7 USA and Canada coverage for your fleet.",
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-[#e31837]">Why work with RTS</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">
              Reliable carrier operations support built for your success.
            </h2>
            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-[#e31837] flex-shrink-0" strokeWidth={2} />
                  <p className="text-sm leading-6">{benefit}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#e31837] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c41430]"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl min-h-[300px] bg-slate-900">
            <Image
              src="/assets/branding/cover-image.png"
              fill
              priority
              className="object-cover"
              alt="Carrier operations support"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
