"use client"

import { Phone, Mail } from "lucide-react"
import Link from "next/link"

const services = [
  { name: "DISPATCH", href: "/services#dispatch" },
  { name: "BROKERAGE AGREEMENT", href: "/services#brokerage" },
  { name: "COMPLIANCE", href: "/services#compliance" },
  { name: "SAFETY", href: "/services#safety" },
]

export function TopBar() {
  return (
    <div className="bg-[#0a1628] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
        <div className="flex items-center gap-4">
          {services.map((service, index) => (
            <span key={service.name} className="flex items-center">
              <Link 
                href={service.href} 
                className="hover:text-[#e31837] transition-colors text-xs font-medium tracking-wide"
              >
                {service.name}
              </Link>
              {index < services.length - 1 && (
                <span className="text-[#e31837] ml-4">|</span>
              )}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6 text-xs">
          <a href="tel:+919518608147" className="flex items-center gap-2 hover:text-[#e31837] transition-colors">
            <Phone className="w-3 h-3" />
            <span>+91 95186 08147</span>
          </a>
          <a href="/contact#get-started-today" className="flex items-center gap-2 hover:text-[#e31837] transition-colors">
            <Mail className="w-3 h-3" />
            <span>contactus@radiancetrucking.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}
