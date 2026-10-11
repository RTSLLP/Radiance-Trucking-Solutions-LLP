"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShieldCheck, FileText, Check, AlertCircle, ArrowLeft, Clock, Lock, Send } from "lucide-react"

export default function TermsExecutionPage() {
  const [currentTime, setCurrentTime] = useState("")
  const [formData, setFormData] = useState({
    legalCompanyName: "",
    operatingName: "",
    cvorNscNumber: "",
    signerFullName: "",
    signerTitle: "",
    businessEmail: "",
    businessPhone: "",
    agreedToTerms: false,
  })

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const [confirmationData, setConfirmationData] = useState<{
    confirmationId?: string
    timestamp?: string
    signerName?: string
    companyName?: string
  } | null>(null)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleString("en-CA", {
          timeZone: "America/Toronto",
          dateStyle: "full",
          timeStyle: "medium",
        }) + " (Eastern Time)"
      )
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreedToTerms) {
      setStatus("error")
      setStatusMessage("You must agree to the Master Terms of Service to proceed.")
      return
    }

    setStatus("submitting")
    setStatusMessage("")

    try {
      const res = await fetch("/api/portal/terms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          clientTimestamp: new Date().toISOString(),
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || "Failed to execute agreement.")
      }

      setStatus("success")
      setConfirmationData(data)
    } catch (err) {
      setStatus("error")
      setStatusMessage(err instanceof Error ? err.message : "An error occurred.")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/portal"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#0D183D] mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Partner Hub</span>
        </Link>

        {/* Header */}
        <div className="rounded-3xl bg-[#060B18] text-white p-8 sm:p-10 border border-white/10 mb-8 shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Digital Legal Audit Trail Active</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Master Terms of Service <span className="text-[#FF1E2D]">(v2.2)</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Radiance Trucking Solutions LLP (RTS) • Independent Operations Support &amp; Dispatch Agreement.
          </p>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FF1E2D]" />
              <span>LIVE SYSTEM TIME: {currentTime || "Synchronizing..."}</span>
            </div>
            <span>JURISDICTION: ONTARIO, CANADA</span>
          </div>
        </div>

        {status === "success" && confirmationData ? (
          /* Success Screen */
          <div className="rounded-3xl border border-emerald-500/30 bg-white p-8 sm:p-12 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-[#0D183D]">
              Agreement Executed Successfully
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Your digital acknowledgement for <strong className="text-slate-900">{confirmationData.companyName}</strong> has been legally registered and locked with an immutable audit trail. A signed Digital Certificate of Execution has been dispatched to your email and the RTS operations desk.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 max-w-lg mx-auto text-left font-mono text-xs space-y-2 text-slate-700">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-400">Confirmation ID:</span>
                <span className="font-bold text-[#0D183D]">{confirmationData.confirmationId}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2 pt-1">
                <span className="text-slate-400">Authorized Signer:</span>
                <span className="font-bold text-slate-900">{confirmationData.signerName}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400">Execution Timestamp:</span>
                <span className="text-slate-900">{confirmationData.timestamp}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/portal"
                className="inline-flex items-center justify-center rounded-full bg-[#0D183D] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#FF1E2D] transition"
              >
                Return to Partner Hub
              </Link>
              <Link
                href="/portal/account"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition"
              >
                View Account Ledger
              </Link>
            </div>
          </div>
        ) : (
          /* Agreement Document + Execution Form */
          <div className="space-y-8">
            {/* Scrollable Terms Text */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#FF1E2D]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-[#0D183D]">
                    Agreement Terms &amp; Scope
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">READ CAREFULLY</span>
              </div>

              <div className="h-96 overflow-y-auto pr-4 space-y-5 text-xs text-slate-700 leading-relaxed font-sans border-r border-slate-100">
                <section>
                  <h3 className="font-bold text-sm text-[#0D183D] mb-1">
                    1. Scope of Independent Operations Support
                  </h3>
                  <p>
                    Radiance Trucking Solutions LLP (&quot;RTS&quot;) is engaged strictly as an independent outsourced logistics operations support and administrative dispatch provider. RTS is NOT a motor carrier, freight broker, freight forwarder, or customs broker. RTS coordinates loads, manages communications, and prepares administrative documentation solely on behalf of, in the name of, and under the legal operating authority of the Client Carrier (&quot;Carrier&quot;).
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-sm text-[#0D183D] mb-1">
                    2. Retained Carrier Authority &amp; Zero Forced Dispatch
                  </h3>
                  <p>
                    The Carrier retains 100% legal, commercial, and operational authority over all vehicles, drivers, and equipment. RTS maintains a strict Zero Forced Dispatch policy. The Carrier reserves total and unilateral refusal rights over any proposed load, route, lane, schedule, or broker appointment.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-sm text-[#0D183D] mb-1">
                    3. Rate Transparency &amp; Carrier Direct Settlement
                  </h3>
                  <p>
                    All loads are booked with complete financial transparency. RTS shall provide authentic, unedited broker rate confirmations to the Carrier. All freight charges, fuel surcharges, detention, and accessorial fees paid by brokers, shippers, or factoring companies belong 100% to the Carrier and are deposited directly into the Carrier&apos;s commercial accounts. RTS shall never intercept or take custody of Carrier freight revenue.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-sm text-[#0D183D] mb-1">
                    4. Support Fees, Invoicing &amp; Late Payment Penalties
                  </h3>
                  <p>
                    In consideration of operational support services, the Carrier agrees to pay RTS the agreed fee schedule (as confirmed during onboarding or weekly dispatch reconciliations). Invoices are rendered weekly or bi-weekly. All invoices are due upon the stated Due Date. Past-due accounts shall incur a monthly late interest penalty of 2.0% (or the maximum permitted under Ontario law) compounded monthly on any outstanding unpaid balance.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-sm text-[#0D183D] mb-1">
                    5. Regulatory Compliance &amp; Insurance Maintenance
                  </h3>
                  <p>
                    The Carrier warrants and represents that it maintains active commercial operating authority (e.g., CVOR in Ontario, NSC, or provincial equivalent), comprehensive public liability and property damage insurance, and cargo insurance in good standing at all times during this Agreement.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-sm text-[#0D183D] mb-1">
                    6. Governing Law &amp; Electronic Execution
                  </h3>
                  <p>
                    This Agreement is governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. The parties agree that digital execution via this electronic portal constitutes a valid, legally enforceable signature under the Electronic Commerce Act, 2000 (Ontario).
                  </p>
                </section>
              </div>
            </div>

            {/* Execution Form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-[#0D183D]">
                  Authorized Officer Execution
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Complete the fields below to digitally sign and execute the Master Terms of Service.
                </p>
              </div>

              {status === "error" && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 mb-6 flex items-center gap-3 text-red-700 text-xs font-semibold">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Carrier Legal Corporate Name *
                    </label>
                    <input
                      type="text"
                      name="legalCompanyName"
                      placeholder="e.g. Maple Leaf Transport Inc."
                      required
                      value={formData.legalCompanyName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Operating / Trade Name (DBA)
                    </label>
                    <input
                      type="text"
                      name="operatingName"
                      placeholder="e.g. Maple Leaf Express"
                      value={formData.operatingName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      CVOR / NSC / Authority # *
                    </label>
                    <input
                      type="text"
                      name="cvorNscNumber"
                      placeholder="e.g. 123-456-789"
                      required
                      value={formData.cvorNscNumber}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Signer Full Legal Name *
                    </label>
                    <input
                      type="text"
                      name="signerFullName"
                      placeholder="e.g. Johnathan Smith"
                      required
                      value={formData.signerFullName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Corporate Title *
                    </label>
                    <input
                      type="text"
                      name="signerTitle"
                      placeholder="e.g. Owner / President / Director"
                      required
                      value={formData.signerTitle}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Official Business Email *
                    </label>
                    <input
                      type="email"
                      name="businessEmail"
                      placeholder="e.g. dispatch@carrier.com"
                      required
                      value={formData.businessEmail}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="businessPhone"
                      placeholder="e.g. +1 (416) 555-0199"
                      required
                      value={formData.businessPhone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                    />
                  </div>
                </div>

                {/* Legal Sign-off Checkbox */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 pt-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#FF1E2D] focus:ring-[#FF1E2D]"
                    />
                    <span className="text-xs text-slate-700 leading-relaxed">
                      I confirm that I am a duly authorized corporate officer of the Carrier and possess full legal authority to bind the Carrier to the RTS Master Terms of Service (v2.2). I understand that clicking &quot;Execute Agreement&quot; creates an immutable electronic record, records my IP address, and constitutes a legally binding electronic agreement.
                    </span>
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FF1E2D] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/25 transition hover:bg-[#c41430] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {status === "submitting" ? "Registering Agreement..." : "Execute Agreement & Generate Certificate"}
                    </span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-3 font-mono">
                    SECURE 256-BIT ENCRYPTION • SYSTEM TIMESTAMP AUDITED
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
