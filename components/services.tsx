import Link from "next/link"
import { Truck, MessageSquare, FileText, ShieldAlert, ArrowRight } from "lucide-react"

const capabilities = [
  {
    icon: Truck,
    title: "Freight Search & Live Dispatch",
    description: "Continuous load board monitoring, broker rate negotiations on your behalf, route planning, appointment scheduling, and 24/7 tracking updates.",
    linkText: "Dispatch Catalogue",
    href: "/services#dispatch",
  },
  {
    icon: MessageSquare,
    title: "Professional Communications",
    description: "Clear, prompt communication between drivers, brokers, shippers, and receivers. Prompt issue resolution, check calls, and delay management.",
    linkText: "Communication Details",
    href: "/services#communication",
  },
  {
    icon: FileText,
    title: "Documentation & Billing Support",
    description: "Organized digital filing for rate confirmations, bills of lading, and proof of deliveries. Streamlined invoicing and factoring liaison to speed up cash flow.",
    linkText: "Back-Office Details",
    href: "/services#documentation",
  },
  {
    icon: ShieldAlert,
    title: "Canadian Compliance Administration",
    description: "Administrative support for carrier setup packets, permit tracking, safety records, inspection coordination, and cross-border paperwork preparation.",
    linkText: "Compliance Scope",
    href: "/services#compliance",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF1E2D] mb-3">
              Core Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D183D] tracking-tight leading-tight">
              Operational depth behind every load.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We operate strictly from the carrier&apos;s side—handling the time-consuming administrative and communication tasks so you stay productive on the road.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#FF1E2D] hover:text-[#c41430] transition flex-shrink-0"
          >
            Explore Complete Catalogue
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <Link
              key={cap.title}
              href={cap.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-[#FF1E2D]/40 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0D183D] flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:text-[#FF1E2D] transition">
                  <cap.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-[#0D183D] mb-3 leading-snug group-hover:text-[#FF1E2D] transition">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D183D] group-hover:text-[#FF1E2D] transition">
                <span>{cap.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
