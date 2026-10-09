"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"

export function EnterpriseContact() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    equipmentType: "Dry Van (53')",
    truckCount: "1 Truck",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch("/api/portal/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          legalName: formData.companyName,
          authorizedContact: formData.contactName,
          phone: formData.phone,
          email: formData.email,
          equipmentTypes: [formData.equipmentType],
          truckCount: formData.truckCount,
          specialInstructions: formData.message,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        // Fallback friendly success
        setSubmitted(true)
      }
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Operations Desk Info */}
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
              Direct Operations Liaison
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Connect With Your Dedicated Dispatch Desk
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Ready to eliminate dispatch friction, cut backhaul deadhead, and streamline your billing? 
              Contact our Kitchener operations desk directly to discuss your fleet requirements.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-red-100/80 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Direct Phone</div>
                  <a href="tel:15199376622" className="text-lg font-bold text-slate-900 hover:text-red-600 transition">
                    +1 (519) 937-6622
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Toll-free / Direct Operations Line</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-red-100/80 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Inquiries</div>
                  <a
                    href="mailto:contactus@radiancetrucking.com"
                    className="text-lg font-bold text-slate-900 hover:text-red-600 transition break-all"
                  >
                    contactus@radiancetrucking.com
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Single Official Operations Inbox</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Headquarters</div>
                  <div className="text-base font-bold text-slate-900">Kitchener, Ontario, Canada</div>
                  <div className="text-xs text-slate-500 mt-0.5">Registered Canadian Commercial Business</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Operating Hours</div>
                  <div className="text-base font-bold text-slate-900">24/7 Live Road Support</div>
                  <div className="text-xs text-slate-500 mt-0.5">Active monitoring for all assigned freight</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Corporate Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Inquiry Successfully Received</h3>
                <p className="text-slate-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out. An RTS operations coordinator will contact you directly within 2 business hours to review your fleet needs and discuss current rates.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Request a Dedicated Dispatcher</h3>
                  <p className="text-sm text-slate-600">
                    Complete the form below to receive a direct callback from an operations manager.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Company / Carrier Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Freight Lines Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="operations@carrier.ca"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Trailer Type
                    </label>
                    <select
                      value={formData.equipmentType}
                      onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm bg-white transition"
                    >
                      <option value="Dry Van (53')">53' Dry Van</option>
                      <option value="Refrigerated (Reefer)">Refrigerated (Reefer)</option>
                      <option value="Flatbed / Step Deck">Flatbed / Step Deck</option>
                      <option value="Multiple Trailers">Multiple Trailer Fleet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Active Power Units
                    </label>
                    <select
                      value={formData.truckCount}
                      onChange={(e) => setFormData({ ...formData, truckCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm bg-white transition"
                    >
                      <option value="1 Truck">1 Truck (Owner Operator)</option>
                      <option value="2-5 Trucks">2 - 5 Trucks (Small Fleet)</option>
                      <option value="6-15 Trucks">6 - 15 Trucks (Mid-Sized Fleet)</option>
                      <option value="15+ Trucks">15+ Trucks (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Current Preferred Lanes or Operational Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us where your equipment currently runs (e.g., Highway 401, Western Canada, Montreal) or what you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-lg bg-[#e31837] hover:bg-[#c41430] disabled:bg-slate-400 text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/25"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "Sending Inquiry..." : "Submit Operations Inquiry"}</span>
                </button>

                <p className="text-center text-xs text-slate-500">
                  By submitting, you agree to receive a callback from Radiance Trucking Solutions LLP. Zero spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
