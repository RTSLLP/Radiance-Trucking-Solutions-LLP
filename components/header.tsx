"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShieldCheck, Phone } from "lucide-react"
import { Logo } from "./logo"

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Equipment", href: "#equipment" },
  { name: "Why RTS", href: "#why-rts" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0a1628] text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-white/95 rounded-lg px-3 py-1.5 shadow-sm border border-white/20">
              <Logo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Desk */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:15199376622"
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition mr-2"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>+1 (519) 937-6622</span>
            </a>

            <Link
              href="/portal"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Carrier Portal</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#e31837] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-600/20 transition hover:bg-[#c41430]"
            >
              Request a Dispatcher
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-lg border border-slate-700 p-2 text-slate-300 hover:bg-slate-800 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#070f1a] py-6 px-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-slate-300 hover:text-white transition py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="tel:15199376622"
                className="flex items-center gap-2 text-sm font-semibold text-slate-300 py-1"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>+1 (519) 937-6622 (24/7 Desk)</span>
              </a>

              <Link
                href="/portal"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 py-3 text-xs font-bold uppercase tracking-wider text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Carrier Portal</span>
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#e31837] py-3 text-xs font-bold uppercase tracking-wider text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Dispatcher
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
