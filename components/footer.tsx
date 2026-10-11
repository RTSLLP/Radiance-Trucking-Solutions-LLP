import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ShieldCheck, Award, Check } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#050c17] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Master Logo Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-20 h-14 sm:w-24 sm:h-16 relative flex-shrink-0">
                <Image
                  src="/assets/branding/rts-emblem-transparent.png"
                  alt="Radiance Trucking Solutions LLP Logistics Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-base sm:text-lg font-black text-white tracking-wide">
                  RADIANCE TRUCKING SOLUTIONS LLP
                </div>
                <div className="text-xs font-bold text-[#e31837] uppercase tracking-widest mt-0.5">
                  YOUR PARTNER BEHIND EVERY MILE
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Dedicated freight dispatch coordination, back-office administration, 
              and carrier logistics operations for commercial motor carriers across North America.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Kitchener, Ontario, Canada (Liaison Operations)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:15199376622" className="hover:text-white transition">
                  +1 (519) 937-6622 (Direct Operations Line)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="mailto:contactus@radiancetrucking.com" className="hover:text-white transition break-all">
                  contactus@radiancetrucking.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Operations Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Operations Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Dedicated Dispatch Desk
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Rate Negotiation & Load Hunting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Broker Packet Administration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Invoicing & Factoring Liaison
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Safety & Audit Readiness
                </a>
              </li>
            </ul>
          </div>

          {/* Carrier Hub Portal & Trust Badges */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                Carrier Portal Desk
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link href="/portal" className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold transition">
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
                    Carrier Invoice & Ledger
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industry Trust Credentials */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-red-500" />
                <span>Verified Operations Standard</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                  <span>IEC Registered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                  <span>24/7 Live Desk</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                  <span>100% Rate Con Proof</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                  <span>Zero Forced Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Notice Disclaimer */}
        <div className="border-t border-slate-800/80 pt-8 pb-4 text-xs text-slate-500 leading-relaxed">
          <p className="mb-4">
            <strong className="text-slate-400">Regulatory & Industry Notice:</strong> Radiance Trucking Solutions LLP is an independent operations support and commercial dispatch coordination provider. RTS is not a motor carrier, freight forwarder, or freight broker. RTS does not take custody of cargo or issue bills of lading. All freight transportation services are performed exclusively by licensed, authorized commercial carriers operating under their own respective operating authorities and insurance policies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/50 text-slate-500">
            <div>
              © {new Date().getFullYear()} Radiance Trucking Solutions LLP. All rights reserved.
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
