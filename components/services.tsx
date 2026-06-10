import Link from "next/link"
import { Truck, Handshake, ShieldCheck, Headphones } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Dispatch Coordination",
    description: "Carrier-first load planning and dispatch management designed for continuous performance.",
    href: "/services#dispatch",
  },
  {
    icon: Handshake,
    title: "Broker Relations",
    description: "Clear broker communication and negotiation that align with carrier operations and authority.",
    href: "/services#broker-relations",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Support",
    description: "Documentation, rate confirmations, and regulatory workflows that support operational readiness.",
    href: "/services#compliance",
  },
  {
    icon: Headphones,
    title: "Driver Assistance",
    description: "Proactive driver coordination and issue resolution for safer, more reliable freight movement.",
    href: "/services#driver-support",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-[#e31837] text-sm font-semibold tracking-[0.28em] mb-2 uppercase">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] tracking-tight">Carrier operations and dispatch support for North America</h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-[#e31837]" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex h-full flex-col gap-6 rounded-[28px] border border-slate-200/80 bg-white p-6 transition hover:-translate-y-1 hover:border-[#e31837]/30 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center justify-center rounded-3xl bg-[#e31837]/10 p-5 text-[#e31837] transition group-hover:bg-[#e31837]/15">
                <service.icon className="h-12 w-12" strokeWidth={1.5} />
              </div>

              <div className="space-y-4">
                <h3 className="text-center text-xl font-bold text-[#0a1628]">{service.title}</h3>
                <p className="text-center text-sm leading-7 text-slate-600">{service.description}</p>
              </div>

              <div className="mt-auto text-center">
                <span className="inline-flex items-center justify-center rounded-full border border-[#e31837]/20 bg-[#e31837]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e31837] transition group-hover:bg-[#e31837]/10">
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
