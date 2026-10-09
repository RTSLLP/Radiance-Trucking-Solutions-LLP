"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ShieldCheck } from "lucide-react"
import { Logo } from "./logo"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/services" },
  { name: "Fleet Architecture", href: "/services#structures" },
  { name: "Company", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.includes("#")) return false
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[84px] md:h-[92px]">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition duration-150 ${
                    isActive
                      ? "text-[#FF1E2D] font-bold"
                      : "text-[#0D183D] hover:text-[#FF1E2D]"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/portal"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/80 bg-slate-50 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0D183D] transition hover:bg-slate-100 hover:border-slate-400"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF1E2D]" />
              <span>Carrier Portal</span>
            </Link>
            <Link
              href="/contact#get-a-dispatcher"
              className="inline-flex items-center justify-center rounded-full bg-[#FF1E2D] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-500/20 transition hover:bg-[#c41430] hover:shadow-lg"
            >
              Get a Dispatcher
            </Link>
          </div>

          <button
            className="lg:hidden rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 mb-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
            <nav className="space-y-4">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href)
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block text-sm font-semibold uppercase tracking-wider transition ${
                      isActive ? "text-[#FF1E2D]" : "text-slate-800 hover:text-[#FF1E2D]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="/portal"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0D183D] transition hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShieldCheck className="w-4 h-4 text-[#FF1E2D]" />
                <span>Carrier Portal</span>
              </Link>
              <Link
                href="/contact#get-a-dispatcher"
                className="block rounded-full bg-[#FF1E2D] px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#c41430]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Dispatcher
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
