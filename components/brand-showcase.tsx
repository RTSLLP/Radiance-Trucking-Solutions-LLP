"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import {
  Navigation,
  FileText,
  Receipt,
  ShieldCheck,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
  Phone,
  Clock,
  Briefcase,
  Search,
  Users,
  Calendar,
  Layers,
} from "lucide-react"

// Service Ecosystem Items (Directly from Company Packet Page 2)
const serviceEcosystem = [
  {
    id: "dispatch-coordination",
    title: "24/7 Dispatch Coordination",
    subtitle: "Round-the-clock freight movement",
    tagline: "Keep your trucks on the move and your day running smooth.",
    category: "Operations",
    icon: Navigation,
    badge: "24/7 LIVE DESK",
    summary:
      "Continuous dispatch coordination ensuring your trucks stay rolling with high-yield freight while eliminating unpaid downtime.",
    responsibilities: [
      "Direct broker and shipper rate negotiations on every load",
      "Strategic backhaul sourcing to eliminate deadhead miles",
      "Daily check-calls, dock coordination, and arrival status tracking",
      "Immediate dispute and loading delay resolution",
    ],
    carrierBenefits: [
      "Zero forced dispatch: you make the final call on every run",
      "100% rate con transparency delivered straight to your device",
      "Consistent miles on your preferred freight corridors",
    ],
  },
  {
    id: "load-procurement",
    title: "Load Procurement & Sales",
    subtitle: "High-paying loads matching your preferences",
    tagline: "Connecting you with reliable shippers and consistent freight opportunities.",
    category: "Procurement",
    icon: Search,
    badge: "TOP SPOT & CONTRACT",
    summary:
      "Our carrier sales desk scours spot and contract boards to secure premium-rate loads specifically matched to your equipment.",
    responsibilities: [
      "Pre-screening freight brokers for credit rating and days-to-pay",
      "Securing loads aligned with your equipment type (Dry Van, Reefer, Flatbed)",
      "Continuous market lane rate analysis across Highway 401 & US corridors",
      "Lane development to secure recurring freight commitments",
    ],
    carrierBenefits: [
      "Higher gross earnings per mile without broker rate skimming",
      "Preferred access to vetted broker freight",
      "Predictable schedules and lane consistency",
    ],
  },
  {
    id: "documentation-management",
    title: "Documentation Management",
    subtitle: "Organized compliance from BOL to POD",
    tagline: "Accurate paperwork handling to keep operations compliant.",
    category: "Administration",
    icon: FileText,
    badge: "AUDIT-READY",
    summary:
      "We handle every piece of paperwork required to keep your operating authority in good standing with brokers and regulatory bodies.",
    responsibilities: [
      "Immediate completion of broker carrier setup packets",
      "Certificate of Insurance (COI) submission and tracking",
      "Rate confirmation verification and digital archiving",
      "BOL collection and clean Proof of Delivery (POD) processing",
    ],
    carrierBenefits: [
      "Zero administrative stress for drivers on the highway",
      "Fast broker approvals so you never lose high-paying loads",
      "Structured paperless records available anytime",
    ],
  },
  {
    id: "billing-support",
    title: "Billing & Factoring Support",
    subtitle: "Same-day cash flow & detention recovery",
    tagline: "Invoicing and back-office support to keep your cash flow in order.",
    category: "Finance",
    icon: Receipt,
    badge: "SAME-DAY INVOICE",
    summary:
      "Unpaid freight or delayed paperwork hurts cash flow. We invoice the moment delivery is confirmed and aggressively fight for accessorials.",
    responsibilities: [
      "Same-day invoice generation upon receiving signed PODs",
      "Direct integration with your factoring company for fast funding",
      "Aggressive tracking and collection of detention, layover, and TONU fees",
      "Complete payment status ledger and monthly revenue summaries",
    ],
    carrierBenefits: [
      "Accelerated cash flow to keep fuel and equipment running",
      "Full recovery of detention fees that brokers often ignore",
      "Accurate records for clear business accounting",
    ],
  },
  {
    id: "professional-communication",
    title: "Professional Broker Communication",
    subtitle: "Representing your company with excellence",
    tagline: "Professional email communication with brokers and shippers on your behalf.",
    category: "Liaison",
    icon: Users,
    badge: "CORPORATE DESK",
    summary:
      "We act as your professional front office, ensuring brokers treat your operating authority with respect, promptness, and priority.",
    responsibilities: [
      "Dedicated corporate email correspondence representing your carrier name",
      "Clear, timely location and ETA updates on every shipment",
      "Professional resolution of dock delays and shipper re-routes",
      "Building long-term broker trust to unlock direct freight",
    ],
    carrierBenefits: [
      "Strengthens your carrier reputation in the freight market",
      "Eliminates driver phone calls while navigating traffic",
      "Consistent communication that shippers demand",
    ],
  },
  {
    id: "after-hours-operations",
    title: "After-Hours & Weekend Support",
    subtitle: "Trucking never stops, and neither do we",
    tagline: "Support when you need it, even after regular business hours.",
    category: "Support",
    icon: Clock,
    badge: "24/7 ESCALATION",
    summary:
      "Breakdowns, border customs issues, and dock delays don't wait for business hours. Our operations desk is reachable around the clock.",
    responsibilities: [
      "24/7 emergency dispatch and driver coordination",
      "Border clearance and customs document escalation",
      "Receiver after-hours delivery appointment rescheduling",
      "Weekend load status updates to brokers and shippers",
    ],
    carrierBenefits: [
      "Peace of mind knowing you are never stranded on the highway",
      "Rapid resolution of border and customs holdups",
      "Maintains carrier on-time delivery ratings",
    ],
  },
]

// 5-Step Process (Directly from Company Packet Page 3)
const processSteps = [
  {
    step: "01",
    title: "Understand Your Business",
    subtitle: "Equipment, lanes, and profitability goals",
    desc: "We learn about your equipment, preferred lanes, operating costs, and communication preferences to align our dispatch support with your exact goals.",
    icon: Briefcase,
  },
  {
    step: "02",
    title: "Find Quality Opportunities",
    subtitle: "Strong shipper and broker network",
    desc: "Our carrier sales team monitors Canadian and cross-border freight boards to find high-paying loads that match your equipment and preferences.",
    icon: Search,
  },
  {
    step: "03",
    title: "Negotiate & Secure Loads",
    subtitle: "Competitive rates with 100% transparency",
    desc: "We present the best options, negotiate aggressively for maximum rate per mile, and send the original rate confirmation directly to your device.",
    icon: Navigation,
  },
  {
    step: "04",
    title: "Coordinate Operations",
    subtitle: "Appointments, paperwork, and live updates",
    desc: "We dispatch the load, confirm dock appointments, manage paperwork with all parties, and keep you informed every step of the journey.",
    icon: Calendar,
  },
  {
    step: "05",
    title: "Support Every Mile",
    subtitle: "Billing, detention recovery, and after-hours",
    desc: "From invoicing your factoring company upon delivery to fighting for detention and providing 24/7 escalation, we support you all the way.",
    icon: ShieldCheck,
  },
]

export function BrandShowcase() {
  const [activeTab, setActiveTab] = useState<"services" | "process" | "why">("services")
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [selectedService, setSelectedService] = useState<typeof serviceEcosystem[0] | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Handle sliding controls
  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : serviceEcosystem.length - 1))
  }

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < serviceEcosystem.length - 1 ? prev + 1 : 0))
  }

  // Keyboard navigation & escape for Genie modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null)
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-200 scroll-mt-20 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-black uppercase tracking-widest mb-3 border border-red-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Operations Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Built Around Your Business
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              Running a successful trucking business takes more than finding freight. Explore our complete service ecosystem and 5-step operational workflow.
            </p>
          </div>

          {/* Interactive Navigation Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-stretch sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("services")}
              className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${
                activeTab === "services"
                  ? "bg-white text-slate-950 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Service Ecosystem
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("process")}
              className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${
                activeTab === "process"
                  ? "bg-white text-slate-950 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              5-Step Process
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("why")}
              className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition ${
                activeTab === "why"
                  ? "bg-white text-slate-950 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Why RTS
            </button>
          </div>
        </div>

        {/* TAB 1: SERVICE ECOSYSTEM (Interactive Slider + Genie Magic Popup) */}
        {activeTab === "services" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e31837]" />
                <span>Showing {carouselIndex + 1} of {serviceEcosystem.length} Capabilities • Click card for Genie Deep-Dive</span>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-xl bg-[#e31837] hover:bg-[#c41430] text-white flex items-center justify-center transition shadow-md shadow-red-600/20"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Sliding Grid Container */}
            <div
              ref={sliderRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-out"
            >
              {serviceEcosystem.map((item, idx) => {
                const Icon = item.icon
                const isFocused = idx === carouselIndex
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setCarouselIndex(idx)
                      setSelectedService(item)
                    }}
                    className={`group cursor-pointer rounded-3xl p-7 transition-all duration-300 relative flex flex-col justify-between border ${
                      isFocused
                        ? "bg-slate-950 text-white border-slate-900 shadow-2xl scale-[1.02] ring-2 ring-red-500/50"
                        : "bg-white text-slate-900 border-slate-200 hover:border-red-300 hover:shadow-xl hover:bg-slate-50/80"
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                            isFocused
                              ? "bg-red-500 text-white shadow-md shadow-red-500/30"
                              : "bg-red-50 text-[#e31837] group-hover:bg-[#e31837] group-hover:text-white"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${
                            isFocused
                              ? "bg-slate-800 text-red-400 border-slate-700"
                              : "bg-slate-100 text-slate-600 border-slate-200 group-hover:border-red-200"
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <h3
                        className={`text-xl font-black mb-1 transition-colors ${
                          isFocused ? "text-white" : "text-slate-900 group-hover:text-[#e31837]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                          isFocused ? "text-red-400" : "text-slate-500"
                        }`}
                      >
                        {item.subtitle}
                      </div>

                      <p
                        className={`text-sm leading-relaxed mb-6 ${
                          isFocused ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {item.tagline}
                      </p>
                    </div>

                    {/* Bottom Action Hint */}
                    <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-bold">
                      <span className={isFocused ? "text-red-400" : "text-slate-500"}>
                        ✨ Click to Expand Blueprint
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isFocused ? "text-red-400" : "text-slate-400 group-hover:text-[#e31837]"
                        }`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* TAB 2: OUR 5-STEP PROCESS (From Company Packet Page 3) */}
        {activeTab === "process" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((step) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.step}
                    className="bg-slate-50 border border-slate-200 hover:border-red-500/40 rounded-2xl p-6 transition-all hover:shadow-lg flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-black font-mono text-[#e31837]">
                          {step.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center group-hover:bg-[#e31837] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-base font-black text-slate-900 mb-1 group-hover:text-[#e31837] transition-colors">
                        {step.title}
                      </h3>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                        {step.subtitle}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom Process Guarantee Banner */}
            <div className="p-6 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
              <div>
                <div className="text-sm font-black text-red-400 uppercase tracking-wider">
                  The RTS Back-Office Promise
                </div>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  We are not a broker. We are your dedicated operational partner behind every mile.
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e31837] hover:bg-[#c41430] text-white text-xs font-black uppercase tracking-wider transition whitespace-nowrap"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 3: WHY CARRIERS TRUST RTS (Directly from Page 3) */}
        {activeTab === "why" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-red-300 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#e31837] flex items-center justify-center font-black text-xl mb-6">
                ⏱️
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">We Help You Save Time</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We manage paperwork, broker setup packets, dock appointments, follow-ups, and daily check-call coordination so you can focus strictly on driving and earning.
              </p>
              <div className="space-y-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Zero administrative overhead</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Fast broker setup packets</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-red-300 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl mb-6">
                📁
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">We Help You Stay Organized</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                From rate confirmations and BOLs to invoicing support and clean digital record-keeping—we keep your commercial operating authority in order and audit-ready.
              </p>
              <div className="space-y-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Structured document archiving</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>CVOR & NSC audit readiness</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-red-300 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xl mb-6">
                📈
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">We Help You Grow Your Business</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                With consistent support, strong shipper and broker relationships, and higher-paying lane opportunities, we help you scale your trucking business with confidence.
              </p>
              <div className="space-y-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Aggressive rate negotiations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>100% rate con transparency</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* THE "GENIE MAGIC" EXPANDING BLUEPRINT MODAL / DRAWER                        */}
        {/* ========================================================================= */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedService(null)}
          >
            {/* Modal Dialog Card with Genie Glow */}
            <div
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-10 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Genie Ambient Background Glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-[#e31837]/20 via-blue-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Header with Close Button */}
              <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#e31837] text-white flex items-center justify-center shadow-md shadow-red-600/30">
                    {(() => {
                      const Icon = selectedService.icon
                      return <Icon className="w-6 h-6" />
                    })()}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-100 text-[#e31837] border border-red-200">
                      {selectedService.badge}
                    </span>
                    <h3 className="text-2xl font-black text-slate-950 mt-1 leading-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline & Summary */}
              <div className="relative z-10 mb-6">
                <p className="text-sm font-bold text-[#e31837] mb-2">
                  {selectedService.tagline}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedService.summary}
                </p>
              </div>

              {/* Operational Blueprint Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 mb-8 pt-4 border-t border-slate-100">
                {/* Left: What RTS Handles */}
                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e31837]" />
                    <span>What RTS Operations Handles</span>
                  </div>
                  <div className="space-y-2">
                    {selectedService.responsibilities.map((task, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: What You Gain */}
                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>What You Gain as a Carrier</span>
                  </div>
                  <div className="space-y-2">
                    {selectedService.carrierBenefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-100 relative z-10">
                <a
                  href="tel:15199376622"
                  className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700 hover:text-[#e31837] py-2 px-3"
                >
                  <Phone className="w-4 h-4 text-[#e31837]" />
                  <span>Call Dispatch: +1 (519) 937-6622</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#e31837] hover:bg-[#c41430] text-white text-xs font-black uppercase tracking-wider transition shadow-md shadow-red-600/30"
                  >
                    <span>Request Rate For This</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
