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
      setStatusMessage("Your message has been sent successfully. We will contact you soon.")
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
        <div className="grid lg:grid-cols-2">
          {/* Left Content */}
          <div className="px-4 py-16 md:py-24 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              READY TO INCREASE
              <br />
              YOUR <span className="text-[#e31837]">PROFITS?</span>
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md">
              Partner with Radiance Trucking Solutions and experience professional 
              dispatch services that keep your trucks loaded and your business growing.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="tel:+919518608147"
                className="flex items-center gap-3 text-white hover:text-[#e31837] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#e31837]" />
                <span className="text-sm">+91 95186 08147</span>
              </a>
              <p className="text-gray-400 text-xs ml-8 mt-0.5">(WhatsApp Business Available!)</p>
              <a
                href="mailto:contactus@radiancetrucking.com"
                className="flex items-center gap-3 text-white hover:text-[#e31837] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#e31837]" />
                <span className="text-sm">contactus@radiancetrucking.com</span>
              </a>
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-[#e31837]" />
                <span className="text-sm">Serving USA & Canada</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div id="get-started-today" className="bg-[#e31837] px-6 py-12 md:px-12 scroll-mt-24">
            <h3 className="text-xl font-bold text-white mb-6">
              GET STARTED TODAY
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="">Region</option>
                  <option value="us">United States</option>
                  <option value="canada">Canada</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded bg-white text-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#0a1628] hover:bg-[#070f1a] disabled:opacity-70 disabled:cursor-not-allowed text-white py-3 rounded font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                {status === "sending" ? "Sending..." : "SEND MESSAGE"}
                <Send className="w-4 h-4" />
              </button>

              {statusMessage ? (
                <p
                  className={`text-sm mt-3 ${
                    status === "success" ? "text-green-200" : "text-red-200"
                  }`}
                >
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
