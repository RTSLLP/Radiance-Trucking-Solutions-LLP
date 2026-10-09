"use client"

import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    emailAddress: "",
    truckCount: "1",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send message.")
      }

      setStatus("success")
      setStatusMessage("Thank you for reaching out to RTS. Our operations desk will review your details and connect with you shortly.")
      setFormData({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        emailAddress: "",
        truckCount: "1",
        message: "",
      })
    } catch (error) {
      setStatus("error")
      setStatusMessage(
        error instanceof Error ? error.message : "There was a problem sending your message."
      )
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="bg-[#0D183D] py-16 lg:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF1E2D]">
              Direct Inquiry
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Ready to streamline your fleet&apos;s daily operations?
            </h2>
            <p className="text-base leading-relaxed text-slate-300 max-w-xl">
              Tell us about your equipment, preferred lanes, or operational bottlenecks. Our operations desk will review your requirements and discuss how RTS can support your business.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 space-y-5">
              <div className="flex items-start gap-3.5 text-white">
                <div className="p-2 rounded-xl bg-red-500/10 text-[#FF1E2D] mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <a href="tel:+15199376622" className="text-base font-bold hover:text-[#FF1E2D] transition-colors">
                    +1 (519) 937-6622
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Phone & WhatsApp Operations Line</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-white">
                <div className="p-2 rounded-xl bg-red-500/10 text-[#FF1E2D] mt-0.5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <a href="mailto:contactus@radiancetrucking.com" className="text-base font-bold hover:text-[#FF1E2D] transition-colors">
                    contactus@radiancetrucking.com
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Official Inquiries & Dispatch Desk</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-white">
                <div className="p-2 rounded-xl bg-red-500/10 text-[#FF1E2D] mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-bold">Kitchener, Ontario, Canada</p>
                  <p className="text-xs text-slate-400 mt-0.5">Serving Canadian Carriers across National & Regional Corridors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="get-a-dispatcher" className="rounded-3xl bg-white p-7 sm:p-10 shadow-2xl scroll-mt-28">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-[#0D183D]">Get a Dispatcher</h3>
              <p className="text-xs text-slate-500 mt-1">Submit your details below and an RTS coordinator will follow up.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Company / Carrier Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="e.g. Express Freight Ltd"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="e.g. +1 (519) 000-0000"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="e.g. dispatch@yourcarrier.com"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Active Power Units / Trucks
                </label>
                <select
                  name="truckCount"
                  value={formData.truckCount}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D]"
                >
                  <option value="1">1 Truck (Owner-Operator)</option>
                  <option value="2-5">2 to 5 Trucks (Small Fleet)</option>
                  <option value="6-15">6 to 15 Trucks (Growing Fleet)</option>
                  <option value="16+">16+ Trucks (Commercial Fleet)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Tell Us About Your Operation / Lanes
                </label>
                <textarea
                  name="message"
                  placeholder="Equipment types (Dry Van, Reefer, Flatbed), primary lanes, or what backend support you need..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF1E2D] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-[#FF1E2D] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/25 transition hover:bg-[#c41430] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === "sending" ? "Submitting..." : "Get a Dispatcher"}
                <Send className="h-4 w-4" />
              </button>

              {statusMessage ? (
                <p className={`text-sm mt-3 font-medium ${status === "success" ? "text-emerald-600" : "text-rose-600"}`}>
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
