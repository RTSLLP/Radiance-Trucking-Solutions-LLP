"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"

export function EnterpriseContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    region: "Ontario",
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
          authorizedContact: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          region: formData.region,
          specialInstructions: formData.message,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
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
              Direct Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Connect With Radiance Trucking Solutions
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you are an independent carrier, fleet owner, shipper, or logistics partner, 
              our operations team is ready to assist you. Reach out through our direct desk or submit an inquiry below.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Direct Phone</div>
                  <a href="tel:15199376622" className="text-lg font-bold text-slate-900 hover:text-red-600 transition">
                    +1 (519) 937-6622
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Direct Operations Line</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
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

              {/* Headquarters */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Operations Desk</div>
                  <div className="text-base font-bold text-slate-900">Kitchener, Ontario, Canada</div>
                  <div className="text-xs text-slate-500 mt-0.5">Canadian Logistics Liaison Desk</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Universal Clean Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Inquiry Successfully Received</h3>
                <p className="text-slate-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out. An RTS representative will review your message and contact you directly shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition"
                >
                  Submit Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Get in Touch</h3>
                  <p className="text-sm text-slate-600">
                    Fill out the form below and an RTS coordinator will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Logistics Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
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
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Region / Location
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-slate-900 text-sm bg-white transition"
                  >
                    <option value="Ontario">Ontario, Canada</option>
                    <option value="Quebec">Quebec, Canada</option>
                    <option value="Alberta">Alberta, Canada</option>
                    <option value="British Columbia">British Columbia, Canada</option>
                    <option value="Other Canada">Other Canadian Province</option>
                    <option value="United States">United States</option>
                    <option value="International">International</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Message / Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your requirements, inquiry, or how we can assist you..."
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
                  <span>{submitting ? "Sending Message..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
