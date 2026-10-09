import Link from "next/link"
import { Logo } from "./logo"
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#070f1a] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Identity */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white/95 inline-block rounded-lg px-3 py-1.5 shadow-sm border border-white/20">
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Dedicated logistics operations, dispatch coordination, and back-office administration for commercial motor carriers operating across Canada.
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Kitchener, Ontario, Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:15199376622" className="hover:text-white transition">
                  +1 (519) 937-6622 (24/7 Operations Desk)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="mailto:contactus@radiancetrucking.com" className="hover:text-white transition break-all">
                  contactus@radiancetrucking.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Operations Desks
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Dedicated Dispatch
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Rate Negotiation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Back-Office Administration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Billing & Factoring Setup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  CVOR & Safety Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Equipment Supported */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Equipment Supported
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#equipment" className="hover:text-white transition">
                  53' Dry Van
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition">
                  Refrigerated (Reefer)
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition">
                  Flatbed & Step Deck
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition">
                  Highway 401 Corridors
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition">
                  Western Canada Freight
                </a>
              </li>
            </ul>
          </div>

          {/* Carrier Hub Portal */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Carrier Hub
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/portal" className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold transition">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Carrier Experience Hub</span>
                </Link>
              </li>
              <li>
                <Link href="/portal/onboard" className="hover:text-white transition">
                  Digital Carrier Onboarding
                </Link>
              </li>
              <li>
                <Link href="/portal/terms" className="hover:text-white transition">
                  Master Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/portal/account" className="hover:text-white transition">
                  Carrier Account Ledger
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="border-t border-slate-800/80 pt-8 pb-4 text-xs text-slate-500 leading-relaxed">
          <p className="mb-3">
            <strong className="text-slate-400">Regulatory & Industry Notice:</strong> Radiance Trucking Solutions LLP (RTS) is an independent provider of commercial freight dispatch coordination, back-office administration, and carrier logistics support services. RTS is not a licensed motor carrier, freight forwarder, or freight broker. RTS does not take custody of cargo or issue bills of lading. All transportation services are performed exclusively by authorized, licensed commercial carriers operating under their own respective operating authority and insurance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/50 text-slate-500">
            <div>
              © {new Date().getFullYear()} Radiance Trucking Solutions LLP. All rights reserved. Registered in Ontario, Canada.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/portal/terms" className="hover:text-slate-300 transition">
                Terms of Service
              </Link>
              <a href="#contact" className="hover:text-slate-300 transition">
                Contact Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
