"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from "lucide-react"

export function EnterpriseContact() {
  const [inquiryType, setInquiryType] = useState<"rate" | "carrier" | "general">("rate")
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    equipment: "53_dry_van",
    origin: "",
    destination: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await fetch("/api/portal/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          legalName: formData.companyName,
          authorizedContact: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          inquiryType,
          equipment: formData.equipment,
          origin: formData.origin,
          destination: formData.destination,
          specialInstructions: formData.message,
        }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Operations Desk Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest mb-3">
                Official Operations Desk
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                Connect With Radiance Operations
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Whether you need dedicated dispatch rates for your equipment, fast carrier onboarding, or cross-border freight coordination, our Kitchener desk responds promptly.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Direct Phone Line */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Direct Operations Line
                  </div>
                  <a
                    href="tel:15199376622"
                    className="text-lg sm:text-xl font-black text-slate-900 hover:text-red-600 transition"
                  >
                    +1 (519) 937-6622
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Live Dispatch & Rate Inquiries Desk
                  </div>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Official Inquiries Inbox
                  </div>
                  <a
                    href="mailto:contactus@radiancetrucking.com"
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-red-600 transition break-all"
                  >
                    contactus@radiancetrucking.com
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Single Official Corporate & Rate Communications Inbox
                  </div>
                </div>
              </div>

              {/* Physical Liaison Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Canadian Liaison Desk
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    Kitchener, Ontario, Canada
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Highway 401 Freight Corridor Coordination
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility highlights */}
            <div className="pt-2 border-t border-slate-200/80 space-y-2 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Rate Transparency • Zero Forced Dispatch Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>CVOR & NSC Audit-Ready Documentation Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>Dedicated 24/7 After-Hours & Border Escalation Coverage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Single Unified High-Converting Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Inquiry Received by Dispatch
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName || "Partner"}</strong>. An RTS operations coordinator is reviewing your request and will connect with you shortly at{" "}
                  <strong className="text-slate-900">{formData.phone}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        fullName: "",
                        companyName: "",
                        phone: "",
                        email: "",
                        equipment: "53_dry_van",
                        origin: "",
                        destination: "",
                        message: "",
                      })
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    Send Direct Inquiry
                  </h3>
                  <p className="text-sm text-slate-500">
                    Select your purpose below for fastest routing to our specialized operations team.
                  </p>
                </div>

                {/* Purpose Selector Tabs */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Inquiry Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1 rounded-xl bg-slate-100 border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setInquiryType("rate")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                        inquiryType === "rate"
                          ? "bg-[#e31837] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Rate / Lane Quote
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType("carrier")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                        inquiryType === "carrier"
                          ? "bg-[#e31837] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Carrier Dispatch
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType("general")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                        inquiryType === "general"
                          ? "bg-[#e31837] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      General Contact
                    </button>
                  </div>
                </div>

                {/* Equipment & Lane Fields (shown when Rate Quote or Carrier Dispatch is selected) */}
                {inquiryType !== "general" && (
                  <div className="space-y-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Equipment Type
                      </label>
                      <select
                        value={formData.equipment}
                        onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-500 font-medium"
                      >
                        <option value="53_dry_van">53ft Dry Van (Standard High-Cube)</option>
                        <option value="reefer">Temperature-Controlled / Reefer (-20°F to +70°F)</option>
                        <option value="flatbed">Flatbed / Step-Deck (Open Deck)</option>
                        <option value="power_only">Power Only (Tractor with Sleeper)</option>
                        <option value="specialized">Specialized / Other Equipment</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Origin (City, Prov / State)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Toronto, ON"
                          value={formData.origin}
                          onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 outline-none text-slate-900 text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Destination (City, Prov / State)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Montreal, QC or Chicago, IL"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 outline-none text-slate-900 text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Primary Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 outline-none text-slate-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company / Fleet Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Express LLC"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 outline-none text-slate-900 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (519) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 outline-none text-slate-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 outline-none text-slate-900 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {inquiryType === "rate"
                      ? "Additional Load / Lane Notes (Optional)"
                      : inquiryType === "carrier"
                      ? "Fleet Size & Preferred Lanes (Optional)"
                      : "Message / Inquiry Details *"}
                  </label>
                  <textarea
                    rows={3}
                    required={inquiryType === "general"}
                    placeholder={
                      inquiryType === "rate"
                        ? "Any weight, pick-up dates, or special handling notes..."
                        : inquiryType === "carrier"
                        ? "Number of trucks, CVOR/NSC status, or preferred operating areas..."
                        : "How can our operations team assist you?"
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 outline-none text-slate-900 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#e31837] hover:bg-[#c41430] disabled:bg-slate-400 text-white font-bold text-xs uppercase tracking-widest transition shadow-lg shadow-red-600/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {submitting
                      ? "Connecting with Dispatch..."
                      : inquiryType === "rate"
                      ? "Request Fast Rate Callback"
                      : "Submit to Operations Desk"}
                  </span>
                </button>

                <div className="text-[11px] text-slate-500 text-center">
                  Direct operations response from our Kitchener liaison desk. Zero spam.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
