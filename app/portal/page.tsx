import Link from "next/link"
import { ShieldCheck, FileText, UserPlus, CreditCard, ArrowRight, Clock, Check, Phone, Mail } from "lucide-react"

export default function PortalHubPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#060B18] via-[#0D183D] to-[#060B18] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RTS Partner Infrastructure</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Carrier Experience <span className="text-[#FF1E2D]">Hub</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Frictionless operations for Canadian carrier partners. Complete your digital onboarding, execute the Master Terms with a verified legal audit trail, and manage your statements in one place.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Core Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Module 1: Digital Onboarding */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg flex flex-col justify-between hover:border-[#FF1E2D]/40 transition duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#FF1E2D] flex items-center justify-center mb-6">
                <UserPlus className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Phase 01 // Integration
              </span>
              <h2 className="text-2xl font-black text-[#0D183D] mt-1 mb-3">
                Digital Onboarding
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Replace bulky paper packets. Enter your CVOR/NSC details, equipment specifications, and lane preferences in a streamlined 3-minute flow.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Fleet &amp; Equipment Profiling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>COI &amp; Safety Certificate Upload</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Direct Operations Desk Assignment</span>
                </li>
              </ul>
            </div>
            <Link
              href="/portal/onboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D183D] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#FF1E2D]"
            >
              <span>Start Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Module 2: Legal TOS Execution */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg flex flex-col justify-between hover:border-[#FF1E2D]/40 transition duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Phase 02 // Compliance
              </span>
              <h2 className="text-2xl font-black text-[#0D183D] mt-1 mb-3">
                Master Terms (TOS)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Review the Master Terms of Service v2.2 and execute your digital acknowledgement with an immutable cryptographic audit trail.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Server-Validated Timestamp (UTC &amp; EST)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>IP Address &amp; Signer Fingerprinting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Instant Certificate of Execution PDF</span>
                </li>
              </ul>
            </div>
            <Link
              href="/portal/terms"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D183D] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#FF1E2D]"
            >
              <span>Review &amp; Sign TOS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Module 3: Account, Invoices & Settlement */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg flex flex-col justify-between hover:border-[#FF1E2D]/40 transition duration-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Phase 03 // Settlements
              </span>
              <h2 className="text-2xl font-black text-[#0D183D] mt-1 mb-3">
                Invoices &amp; Billing
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                View statement ledger, verify due dates, calculate automatic overdue penalty interest, and access direct Canadian B2B transfer instructions.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Carrier vs. RTS Profile Spec</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Dynamic Overdue Penalty Calculator</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Encrypted B2B Bank Transfer Rails</span>
                </li>
              </ul>
            </div>
            <Link
              href="/portal/account"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D183D] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#FF1E2D]"
            >
              <span>Access Invoices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Security & Liaison Notice */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-[#0D183D]">
              Need direct coordination with your assigned operations coordinator?
            </h3>
            <p className="text-xs text-slate-600">
              Kitchener Desk operations are available via telephone and encrypted electronic mail.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+15199376622"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-5 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF1E2D]" />
              <span>+1 (519) 937-6622</span>
            </a>
            <a
              href="mailto:contactus@radiancetrucking.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#c41430]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Ops Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
