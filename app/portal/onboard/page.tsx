"use client"

import { useState } from "react"
import Link from "next/link"
import {
  UserPlus,
  Truck,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Building2,
  Send,
  ShieldCheck,
} from "lucide-react"

export default function CarrierOnboardingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Carrier Profile
    companyName: "",
    dbaName: "",
    cvorNsc: "",
    businessNumber: "",
    streetAddress: "",
    city: "",
    province: "Ontario",
    postalCode: "",
    contactName: "",
    contactTitle: "",
    contactPhone: "",
    contactEmail: "",

    // Step 2: Fleet & Equipment
    truckCount: "1",
    trailerCount: "1",
    trailerTypes: [] as string[],
    preferredLanes: [] as string[],
    driverType: "Solo",

    // Step 3: Financial & Factoring
    usesFactoring: "No",
    factoringCompanyName: "",
    factoringContactEmail: "",
    directNotes: "",
  })

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxToggle = (category: "trailerTypes" | "preferredLanes", value: string) => {
    setFormData((prev) => {
      const current = prev[category]
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter((item) => item !== value) }
      } else {
        return { ...prev, [category]: [...current, value] }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setStatusMessage("")

    try {
      const res = await fetch("/api/portal/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || "Failed to submit onboarding packet.")
      }

      setStatus("success")
    } catch (err) {
      setStatus("error")
      setStatusMessage(err instanceof Error ? err.message : "Submission failed.")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <UserPlus className="w-3.5 h-3.5" />
            <span>Digital Carrier Integration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Carrier Onboarding <span className="text-[#FF1E2D]">Desk</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Complete your operational profile in under 3 minutes. Your assigned RTS coordinator will review your lanes and set up your active dispatch desk immediately.
          </p>

          {/* Stepper Progress */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-xs font-bold">
            <div
              className={`pb-2 border-b-2 transition ${
                step >= 1 ? "border-[#FF1E2D] text-white" : "border-white/20 text-slate-500"
              }`}
            >
              01. Carrier Entity
            </div>
            <div
              className={`pb-2 border-b-2 transition ${
                step >= 2 ? "border-[#FF1E2D] text-white" : "border-white/20 text-slate-500"
              }`}
            >
              02. Equipment &amp; Lanes
            </div>
            <div
              className={`pb-2 border-b-2 transition ${
                step >= 3 ? "border-[#FF1E2D] text-white" : "border-white/20 text-slate-500"
              }`}
            >
              03. Factoring &amp; Submit
            </div>
          </div>
        </div>

        {status === "success" ? (
          /* Success Screen */
          <div className="rounded-3xl border border-emerald-500/30 bg-white p-8 sm:p-12 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-[#0D183D]">
              Onboarding Packet Received
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Thank you for onboarding <strong className="text-slate-900">{formData.companyName}</strong> with Radiance Trucking Solutions. Our Kitchener operations desk is reviewing your equipment specifications and will connect with your dispatch contact shortly.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/portal/terms"
                className="inline-flex items-center justify-center rounded-full bg-[#FF1E2D] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c41430] transition shadow-md"
              >
                Execute Master Terms (TOS) Next
              </Link>
              <Link
                href="/portal"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition"
              >
                Return to Partner Hub
              </Link>
            </div>
          </div>
        ) : (
          /* Multi-step Form */
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
            {status === "error" && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 mb-6 flex items-center gap-3 text-red-700 text-xs font-semibold">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Carrier Entity */}
              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="text-xl font-black text-[#0D183D] pb-2 border-b border-slate-100 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#FF1E2D]" />
                    <span>Carrier Legal Entity &amp; Authority</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Legal Business Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="e.g. Ontario Express Freight Inc."
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Operating Name / DBA
                      </label>
                      <input
                        type="text"
                        name="dbaName"
                        placeholder="e.g. OEF Logistics"
                        value={formData.dbaName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        CVOR / NSC Authority # *
                      </label>
                      <input
                        type="text"
                        name="cvorNsc"
                        placeholder="e.g. 987-654-321"
                        required
                        value={formData.cvorNsc}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Federal Business Number (BN / GST)
                      </label>
                      <input
                        type="text"
                        name="businessNumber"
                        placeholder="e.g. 123456789 RT0001"
                        value={formData.businessNumber}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Terminal Street Address *
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        placeholder="e.g. 100 Transport Way"
                        required
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="e.g. Mississauga"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Province *
                      </label>
                      <select
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      >
                        <option value="Ontario">Ontario</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Other">Other Province</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="e.g. L5T 2E1"
                        required
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.companyName || !formData.cvorNsc || !formData.city) {
                          setStatus("error")
                          setStatusMessage("Please complete all required fields (*).")
                          return
                        }
                        setStatus("idle")
                        setStep(2)
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0D183D] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#FF1E2D] transition shadow-md"
                    >
                      <span>Continue to Equipment &amp; Lanes</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Equipment & Lanes */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-black text-[#0D183D] pb-2 border-b border-slate-100 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#FF1E2D]" />
                    <span>Fleet Specifications &amp; Operating Lanes</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Active Power Units (Trucks) *
                      </label>
                      <select
                        name="truckCount"
                        value={formData.truckCount}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      >
                        <option value="1">1 Unit (Owner-Operator)</option>
                        <option value="2-3">2 - 3 Units</option>
                        <option value="4-6">4 - 6 Units</option>
                        <option value="7-15">7 - 15 Units</option>
                        <option value="15+">15+ Fleet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Driver Arrangement
                      </label>
                      <select
                        name="driverType"
                        value={formData.driverType}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      >
                        <option value="Solo">Solo Drivers</option>
                        <option value="Team">Team Drivers</option>
                        <option value="Mixed">Mixed Solo &amp; Team</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Trailer Types Operated (Select All That Apply) *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        "53' Dry Van",
                        "Tri-Axle Reefer",
                        "Flatbed / Step Deck",
                        "Roll-Tite / Conestoga",
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => handleCheckboxToggle("trailerTypes", t)}
                          className={`rounded-xl border p-3 text-xs font-bold text-center transition ${
                            formData.trailerTypes.includes(t)
                              ? "border-[#FF1E2D] bg-red-50 text-[#0D183D] ring-1 ring-[#FF1E2D]"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Preferred Canadian &amp; Cross-Border Freight Lanes
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        "Toronto ⇄ Montreal Corridor",
                        "Ontario Highway 401 Regional",
                        "Western Canada (AB / BC)",
                        "Midwest USA Cross-Border",
                        "Local / Regional Ontario",
                        "All Open Commercial Lanes",
                      ].map((lane) => (
                        <button
                          key={lane}
                          type="button"
                          onClick={() => handleCheckboxToggle("preferredLanes", lane)}
                          className={`rounded-xl border p-3 text-xs font-medium text-left transition ${
                            formData.preferredLanes.includes(lane)
                              ? "border-[#0D183D] bg-[#0D183D] text-white font-bold"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {lane}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-full border border-slate-300 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-100 transition"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0D183D] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#FF1E2D] transition shadow-md"
                    >
                      <span>Continue to Factoring &amp; Submit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Factoring & Submit */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-black text-[#0D183D] pb-2 border-b border-slate-100 flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-[#FF1E2D]" />
                    <span>Factoring &amp; Dispatch Preferences</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Do you utilize a Factoring Company for freight billing?
                      </label>
                      <select
                        name="usesFactoring"
                        value={formData.usesFactoring}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                      >
                        <option value="No">No — We bill directly / Quick Pay</option>
                        <option value="Yes">Yes — We use a Factoring Company</option>
                      </select>
                    </div>
                    {formData.usesFactoring === "Yes" && (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                          Factoring Company Name
                        </label>
                        <input
                          type="text"
                          name="factoringCompanyName"
                          placeholder="e.g. RTS Financial, Triumph, etc."
                          value={formData.factoringCompanyName}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Dispatch Notes &amp; Special Equipment Details
                    </label>
                    <textarea
                      name="directNotes"
                      rows={3}
                      placeholder="e.g. Need loads with minimum 2 days home-time in Kitchener; driver has fast-card, etc."
                      value={formData.directNotes}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                    />
                  </div>

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-slate-700 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Upon submission, your onboarding file is securely routed to the Kitchener operations desk. You will receive an immediate confirmation and request for your Certificate of Insurance (COI) and Safety Certificate.
                    </span>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="rounded-full border border-slate-300 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-100 transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF1E2D] px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#c41430] transition shadow-lg shadow-red-500/25 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {status === "submitting" ? "Submitting Packet..." : "Submit Onboarding Packet"}
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
