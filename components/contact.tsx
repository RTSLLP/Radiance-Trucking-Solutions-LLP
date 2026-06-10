"use client"

import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    region: "",
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
      setStatusMessage("Thank you for contacting RTS. Our team will review your inquiry and reach out within 1–2 business days.")
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        region: "",
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
    <section id="contact" className="bg-[#0a1628] py-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] bg-slate-950/95 px-6 py-14 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:px-10 sm:py-16 lg:px-12">
            <p className="text-sm uppercase tracking-[0.32em] text-[#e31837] mb-4">Carrier Operations Inquiry</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Partner with RTS for better operational clarity.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              We provide coordinated dispatch support, broker relations, and compliance operations for authorized carriers in North America.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-3 text-white">
                <Phone className="mt-1 h-5 w-5 text-[#e31837]" />
                <div>
                  <p className="text-sm font-semibold">+91 95186 08147</p>
                  <p className="text-xs text-slate-400">WhatsApp business support available</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white">
                <Mail className="mt-1 h-5 w-5 text-[#e31837]" />
                <div>
                  <p className="text-sm font-semibold">contactus@radiancetrucking.com</p>
                  <p className="text-xs text-slate-400">Reach our operations team directly</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white">
                <MapPin className="mt-1 h-5 w-5 text-[#e31837]" />
                <div>
                  <p className="text-sm font-semibold">USA & Canada</p>
                  <p className="text-xs text-slate-400">Serving authorized carriers across major lanes</p>
                </div>
              </div>
            </div>
          </div>

          <div id="get-started-today" className="rounded-[32px] bg-[#e31837] px-6 py-12 sm:px-10 lg:px-12 scroll-mt-24">
            <h3 className="text-xl font-bold text-white mb-6">Start a conversation with RTS</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="">Region</option>
                  <option value="us">USA</option>
                  <option value="canada">Canada</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold uppercase text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>

              {statusMessage ? (
                <p className={`text-sm mt-3 ${status === "success" ? "text-emerald-200" : "text-rose-200"}`}>
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
