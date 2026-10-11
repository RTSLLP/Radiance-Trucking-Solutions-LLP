"use client"

import { useState } from "react"
import { Phone, Mail, Send, CheckCircle2, Truck, ShieldAlert, Sparkles } from "lucide-react"

export function QuickInquiry() {
  const [inquiryType, setInquiryType] = useState<"carrier" | "shipper">("carrier")
  const [equipment, setEquipment] = useState("53_dry_van")
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate fast dispatch routing
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section id="quote" className="py-24 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Desk Credentials (TransAm Rates Desk Style) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Rate & Capacity Desk</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Instant Freight & Dispatch Callback
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Whether you are an owner-operator seeking top-dollar 401 or cross-border lanes, or a commercial freight partner requiring reliable capacity, our Kitchener operations desk reviews your lane requirements immediately.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Live Dispatch Line
                  </div>
                  <a
                    href="tel:15199376622"
                    className="text-base sm:text-lg font-black text-slate-900 hover:text-red-600 transition"
                  >
                    +1 (519) 937-6622
                  </a>
                  <div className="text-xs text-slate-500">
                    Kitchener, Ontario Liaison Desk (24/7 Available)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Direct Rate Packet Desk
                  </div>
                  <a
                    href="mailto:contactus@radiancetrucking.com"
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-red-600 transition break-all"
                  >
                    contactus@radiancetrucking.com
                  </a>
                  <div className="text-xs text-slate-500">
                    Same-day rate confirmations & carrier onboarding
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>100% Rate Con Transparency • Zero Forced Dispatch Guaranteed</span>
            </div>
          </div>

          {/* Right Column: 60-Second Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#070f1a] text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Inquiry Received by Dispatch
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, {name || "partner"}. An RTS operations coordinator is reviewing your lane request for{" "}
                    <span className="text-white font-semibold">{origin || "Origin"} ⇄ {destination || "Destination"}</span>. 
                    We will connect with you shortly at <span className="text-red-400 font-mono">{phone}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setOrigin("")
                        setDestination("")
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold uppercase tracking-wider text-white transition border border-slate-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Audience Segment Switcher */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      I Am Inquiring As
                    </label>
                    <div className="grid grid-cols-2 gap-3 p-1 rounded-xl bg-slate-900 border border-slate-800">
                      <button
                        type="button"
                        onClick={() => setInquiryType("carrier")}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                          inquiryType === "carrier"
                            ? "bg-[#e31837] text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Carrier / Owner-Operator
                      </button>
                      <button
                        type="button"
                        onClick={() => setInquiryType("shipper")}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                          inquiryType === "shipper"
                            ? "bg-[#e31837] text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Shipper / Freight Broker
                      </button>
                    </div>
                  </div>

                  {/* Equipment Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Equipment Type Required
                    </label>
                    <select
                      value={equipment}
                      onChange={(e) => setEquipment(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 font-medium"
                    >
                      <option value="53_dry_van">53ft Dry Van (Standard High-Cube)</option>
                      <option value="reefer">Temperature-Controlled / Reefer (-20°F to +70°F)</option>
                      <option value="flatbed">Flatbed / Step-Deck (Open Deck)</option>
                      <option value="power_only">Power Only (Tractor with Sleeper)</option>
                      <option value="specialized">Specialized / Other Equipment</option>
                    </select>
                  </div>

                  {/* Lane Origin & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Origin (City, Prov / State)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Toronto, ON or Kitchener"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Destination (City, Prov / State)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Montreal, QC or Chicago, IL"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contact Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(519) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#e31837] hover:bg-[#c41430] disabled:opacity-75 text-white font-bold text-xs uppercase tracking-widest transition shadow-lg shadow-red-600/30"
                  >
                    {loading ? (
                      <span>Connecting with Dispatch Desk...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit to Operations Desk (Fast Callback)</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-slate-500 text-center">
                    Your details are held strictly confidential. No spam, no marketing lists.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
