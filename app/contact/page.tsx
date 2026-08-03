import { Contact } from "@/components/contact"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/assets/branding/cover-image.png"
            alt="Contact operations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#e31837] mb-3">Get in touch</p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl leading-tight">
              Contact RTS.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Reach our operations team to discuss dispatch coordination, broker relations, and compliance support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a1628] text-white">
                <Phone className="h-5 w-5" />
              </div>
              <h4 className="mt-6 text-xl font-black text-slate-950 uppercase tracking-tight">Direct Line</h4>
              <a href="tel:+15199376622" className="mt-3 block text-sm leading-7 text-slate-600 hover:text-[#e31837] transition">
                +1 519-937-6622
              </a>
              <p className="mt-2 text-xs text-slate-400">WhatsApp business support available</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a1628] text-white">
                <Mail className="h-5 w-5" />
              </div>
              <h4 className="mt-6 text-xl font-black text-slate-950 uppercase tracking-tight">Email Support</h4>
              <a href="mailto:contactus@radiancetrucking.com" className="mt-3 block text-sm leading-7 text-slate-600 hover:text-[#e31837] transition">
                contactus@radiancetrucking.com
              </a>
              <p className="mt-2 text-xs text-slate-400">We aim to reply within one business day.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a1628] text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <h4 className="mt-6 text-xl font-black text-slate-950 uppercase tracking-tight">Regional Coverage</h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">USA & Canada</p>
              <p className="mt-2 text-xs text-slate-400">Support for authorized carriers in major North American lanes.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
