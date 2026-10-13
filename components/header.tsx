"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ShieldCheck, Phone, ChevronDown, Navigation, FileText, Receipt, Shield } from "lucide-react"
import { Logo } from "./logo"

const servicesDropdown = [
  {
    title: "Dedicated Dispatch",
    desc: "Targeted load sourcing & aggressive rate negotiations",
    icon: Navigation,
    href: "#services",
  },
  {
    title: "Back-Office Administration",
    desc: "Broker setup packets, COI submission & rate confirmations",
    icon: FileText,
    href: "#services",
  },
  {
    title: "Billing & Factoring Liaison",
    desc: "Same-day POD invoicing, detention & layover recovery",
    icon: Receipt,
    href: "#services",
  },
  {
    title: "Safety & Compliance Support",
    desc: "Canadian CVOR & NSC audit readiness documentation",
    icon: Shield,
    href: "#services",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md text-slate-800 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-22">
          {/* Logo - Transparent, high-res 3D RTS mark on clean white navbar */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 transition-opacity hover:opacity-90">
            <Logo variant="navbar" />
          </Link>

          {/* Desktop Navigation with Dropdown */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`inline-flex items-center gap-1.5 py-2 transition-colors ${
                  servicesOpen ? "text-[#e31837]" : "text-slate-700 hover:text-[#e31837]"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-red-600" : ""}`} />
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-80 rounded-xl bg-white border border-slate-200 shadow-2xl p-2.5 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Operational Capabilities
                  </div>
                  <div className="space-y-1">
                    {servicesDropdown.map((item) => {
                      const Icon = item.icon || Navigation
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-red-50 text-red-600 group-hover:bg-[#e31837] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-[#e31837] transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-500 leading-snug mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <a href="#equipment" className="text-slate-700 hover:text-[#e31837] transition-colors py-2">
              Equipment & Lanes
            </a>
            <a href="#why-rts" className="text-slate-700 hover:text-[#e31837] transition-colors py-2">
              Why RTS
            </a>
            <a href="#about" className="text-slate-700 hover:text-[#e31837] transition-colors py-2">
              About
            </a>
            <a href="#contact" className="text-slate-700 hover:text-[#e31837] transition-colors py-2">
              Contact Desk
            </a>
          </nav>

          {/* Right Action Desk */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:15199376622"
              className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#e31837] transition"
              title="Direct Operations Line"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>+1 (519) 937-6622</span>
            </a>

            <Link
              href="/portal"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 hover:border-slate-400"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
              <span>Carrier Portal</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#e31837] hover:bg-[#c41430] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-600/20 transition-all hover:shadow-red-600/35"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white py-5 px-4 space-y-4 animate-in fade-in duration-150">
            <nav className="flex flex-col space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-red-600 pt-1">
                Services
              </div>
              {servicesDropdown.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  className="text-sm font-medium text-slate-700 hover:text-[#e31837] pl-3 py-1 border-l border-slate-200 hover:border-red-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {s.title}
                </a>
              ))}

              <div className="pt-2 border-t border-slate-200 space-y-2">
                <a
                  href="#equipment"
                  className="block text-sm font-semibold text-slate-700 hover:text-[#e31837] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Equipment & Lanes
                </a>
                <a
                  href="#why-rts"
                  className="block text-sm font-semibold text-slate-700 hover:text-[#e31837] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why RTS
                </a>
                <a
                  href="#about"
                  className="block text-sm font-semibold text-slate-700 hover:text-[#e31837] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About RTS
                </a>
                <a
                  href="#contact"
                  className="block text-sm font-semibold text-slate-700 hover:text-[#e31837] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Desk
                </a>
              </div>
            </nav>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="tel:15199376622"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 py-1"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>+1 (519) 937-6622 (Operations Line)</span>
              </a>

              <Link
                href="/portal"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span>Carrier Portal</span>
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#e31837] py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
