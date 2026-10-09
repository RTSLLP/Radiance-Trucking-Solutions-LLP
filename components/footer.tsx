import Link from "next/link"
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react"
import { Logo } from "./logo"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions Catalogue", href: "/services" },
  { name: "Fleet Architecture", href: "/services#structures" },
  { name: "Company Standards", href: "/about" },
  { name: "Direct Contact", href: "/contact" },
]

const portalLinks = [
  { name: "Partner Hub Overview", href: "/portal" },
  { name: "Digital Onboarding Wizard", href: "/portal/onboard" },
  { name: "Master Terms of Service (TOS)", href: "/portal/terms" },
  { name: "Invoices & Settlement Hub", href: "/portal/account" },
]

export function Footer() {
  return (
    <footer className="bg-[#050A18] text-slate-200 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr_1fr_1.1fr]">
          {/* Col 1: Identity */}
          <div className="space-y-6">
            <Logo variant="footer" />
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Radiance Trucking Solutions LLP (RTS) provides professional outsourced logistics operations, dispatch coordination, and backend business support for carriers and transportation businesses across Canada.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Radiance Trucking Solutions LLP</p>
              <p>LLPIN: ACZ-0433</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1E2D] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Partner Hub */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1E2D] mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF1E2D]" />
              <span>Partner Hub</span>
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {portalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1E2D] mb-4">
              Canadian Operations
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <a href="tel:+15199376622" className="flex items-start gap-3 transition hover:text-white">
                <Phone className="h-4 w-4 text-[#FF1E2D] mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-semibold text-white">+1 (519) 937-6622</span>
                  <span className="text-xs text-slate-400">Phone & WhatsApp Operations</span>
                </div>
              </a>
              <a href="mailto:contactus@radiancetrucking.com" className="flex items-start gap-3 transition hover:text-white">
                <Mail className="h-4 w-4 text-[#FF1E2D] mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-semibold text-white">contactus@radiancetrucking.com</span>
                  <span className="text-xs text-slate-400">Official Inquiries & Support</span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#FF1E2D] mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Canadian Liaison Office</span>
                  <span className="text-xs text-slate-400">54 Susan Crescent, Kitchener, ON N2A 4B1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimers & Legal Notice */}
      <div className="border-t border-white/5 bg-[#030610] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-[11px] leading-relaxed text-slate-400">
            <strong>Legal Disclaimer & Operational Status:</strong> Radiance Trucking Solutions LLP is engaged strictly as an independent outsourced logistics operations, administrative, and backend support provider. RTS is NOT a motor carrier, freight broker, freight forwarder, or customs broker. RTS does not hold motor carrier operating authority in its own name, does not own or lease commercial vehicles, does not employ drivers, and does not take custody or assume liability for cargo. All dispatch, load booking, and communications with shippers or brokers are conducted strictly on behalf of and under the commercial authority of the client carrier.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
            <p>© {new Date().getFullYear()} Radiance Trucking Solutions LLP (RTS). All Rights Reserved.</p>
            <p>Your Partner Behind Every Mile.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
