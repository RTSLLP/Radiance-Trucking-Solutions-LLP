"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services#dispatch" },
  { name: "About", href: "/about" },
  { name: "How We Work", href: "/how-we-work" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isLinkActive = (href: string) => pathname === href.split("#")[0]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[84px] md:h-[92px]">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-[0.18em] uppercase">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition ${
                    isActive
                      ? "text-[#e31837]"
                      : "text-slate-700 hover:text-[#e31837]"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#e31837] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c41430]"
            >
              Contact RTS
            </Link>
          </div>

          <button
            className="lg:hidden rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-lg shadow-slate-900/5">
            <nav className="space-y-4">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href)
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block text-sm font-semibold uppercase tracking-[0.18em] transition ${
                      isActive ? "text-[#e31837]" : "text-slate-800 hover:text-[#e31837]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-5">
              <Link
                href="/contact"
                className="block rounded-full bg-[#e31837] px-5 py-3 text-center text-sm font-semibold uppercase text-white transition hover:bg-[#c41430]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact RTS
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
