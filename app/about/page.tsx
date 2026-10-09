import Link from "next/link"
import Image from "next/image"
import { Shield, CheckCircle, ArrowRight, MapPin, Users, Award } from "lucide-react"
import { Stats } from "@/components/stats"

const principles = [
  {
    icon: Shield,
    title: "100% Carrier Autonomy (No Forced Dispatch)",
    description: "You own your operating authority and your equipment. You have the final say on every load, rate, corridor, and schedule. RTS coordinates and negotiates—you decide.",
  },
  {
    icon: Users,
    title: "Professional Communication Standards",
    description: "In logistics, communication breakdowns cost money. We maintain structured, courteous, and timely communication with brokers, shippers, receivers, and drivers.",
  },
  {
    icon: Award,
    title: "Meticulous Documentation & Audit Readiness",
    description: "Lost paperwork leads to delayed pay. We audit rate confirmations, track bills of lading, and organize driver records so your back office is always clean.",
  },
  {
    icon: MapPin,
    title: "Dedicated Canadian Focus",
    description: "We understand the unique operational landscape of Canadian freight corridors, regional weather considerations, and provincial regulations.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#0D183D] py-20 lg:py-24 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF1E2D] mb-4">
              Company & Operations
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Behind Every Mile, There is an Operation.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Radiance Trucking Solutions LLP was created with a clear objective: to give independent carriers, owner-operators, and growing fleets a dedicated, professional backend operations department without the overhead of hiring an in-house team.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Identity */}
      <section className="py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF1E2D]">
                Independent Operations Partner
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D183D] leading-tight">
                We operate from the carrier&apos;s side.
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Running a trucking business in Canada requires juggling dozens of high-friction tasks simultaneously: finding quality loads, negotiating with brokers, tracking check calls, filing paperwork, managing factor requirements, and maintaining regulatory compliance.
                </p>
                <p>
                  When a driver or small fleet owner is forced to handle all of this from the cab of a truck, operations suffer, cash flow slows down, and valuable loads are missed.
                </p>
                <p>
                  RTS bridges this gap. We are engaged strictly as an independent outsourced logistics operations and support provider. We provide the personnel, phone handling, communication systems, and administrative discipline to keep your trucks moving profitably.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-6 text-xs text-slate-500">
                <div>
                  <span className="block font-bold text-[#0D183D]">Entity Registration</span>
                  <span>Radiance Trucking Solutions LLP (LLPIN: ACZ-0433)</span>
                </div>
                <div>
                  <span className="block font-bold text-[#0D183D]">Canadian Liaison Office</span>
                  <span>Kitchener, Ontario, Canada</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D183D] text-white border border-slate-800 shadow-xl flex flex-col items-center text-center">
              <div className="relative w-36 h-36 mb-6">
                <Image
                  src="/assets/branding/master-logo.png"
                  alt="RTS Master Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-black mb-2">Our Operational Role</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm mb-6">
                We do not hold operating authority in our own name, and we do not broker freight. Every call we make and every rate we negotiate is done under your commercial authority and in your carrier name.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#FF1E2D]" />
                Carrier Protection First
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Operating Principles */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF1E2D] mb-2 block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D183D]">
              How we work with our partners.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div key={p.title} className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex gap-4">
                <div className="p-3 rounded-xl bg-red-50 text-[#FF1E2D] h-fit flex-shrink-0">
                  <p.icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0D183D] mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <Stats />

      {/* Bottom CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0D183D] mb-4">
            Partner with an Operations Desk That Has Your Back
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Ready to experience disciplined dispatch coordination and reliable back-office support? Connect with our team today.
          </p>
          <Link
            href="/contact#get-a-dispatcher"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c41430] transition shadow-lg shadow-red-500/20"
          >
            Get a Dispatcher
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
