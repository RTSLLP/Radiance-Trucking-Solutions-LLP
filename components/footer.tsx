import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "./logo"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Contact", href: "/contact" },
]

const serviceLinks = [
  { name: "Dispatch", href: "/services#dispatch" },
  { name: "Brokerage Agreement", href: "/services#brokerage" },
  { name: "Compliance", href: "/services#compliance" },
  { name: "Safety", href: "/services#safety" },
]

export function Footer() {
  return (
    <footer className="bg-[#070f1a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              RTS is a trusted dispatch partner for owner-operators and fleets across 
              USA & Canada. We deliver loads, maximize profits, and drive success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#e31837] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">OUR SERVICES</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#e31837] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">CONTACT US</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+15199376622"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#e31837] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#e31837]" />
                  +1 519-937-6622
                </a>
              </li>
              <li>
                <a
                  href="/contact#get-started-today"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#e31837] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#e31837]" />
                  contactus@radiancetrucking.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#e31837]" />
                Serving USA & Canada
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © 2025 Radiance Trucking Solutions LLP (RTS). All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-gray-500 hover:text-[#e31837] text-xs transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#e31837] text-xs transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
        {/* Red accent bar */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#e31837] to-[#e31837]" />
      </div>
    </footer>
  )
}
