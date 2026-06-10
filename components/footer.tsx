import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "./logo"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Contact", href: "/contact" },
]

const serviceLinks = [
  { name: "Dispatch Coordination", href: "/services#dispatch" },
  { name: "Broker Relations", href: "/services#broker-relations" },
  { name: "Compliance Support", href: "/services#compliance" },
  { name: "Driver Assistance", href: "/services#driver-support" },
]

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-6">
            <Logo variant="footer" />
            <p className="max-w-md text-sm leading-7 text-slate-400">
              RTS provides premium dispatch coordination, carrier operations support, and logistics readiness for authorized motor carriers across North America.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition hover:text-[#e31837]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition hover:text-[#e31837]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">Contact</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <a href="tel:+919518608147" className="flex items-center gap-3 transition hover:text-[#e31837]">
                <Phone className="h-4 w-4 text-[#e31837]" />
                +91 95186 08147
              </a>
              <a href="mailto:contactus@radiancetrucking.com" className="flex items-center gap-3 transition hover:text-[#e31837]">
                <Mail className="h-4 w-4 text-[#e31837]" />
                contactus@radiancetrucking.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#e31837]" />
                USA & Canada
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950/95">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © 2025 Radiance Trucking Solutions LLP (RTS). All Rights Reserved.
          </p>
          <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:gap-6">
            <p>RTS supports authorized carriers with dispatch coordination and logistics operations across North America.</p>
            <p>Dispatch and documentation support is delivered with carrier authority in mind.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
