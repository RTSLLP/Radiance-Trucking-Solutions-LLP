import Link from "next/link"
import { Truck, Handshake, ShieldCheck, Headphones } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Dispatch Coordination",
    description: "Dedicated load planning and carrier-focused dispatch services tailored to your operations.",
    href: "/services#dispatch",
    id: "dispatch",
  },
  {
    icon: Handshake,
    title: "Broker Relations",
    description: "Strategic broker communication and negotiation to support carrier autonomy and performance.",
    href: "/services#broker-relations",
    id: "broker-relations",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Support",
    description: "Back-office support for documentation, rate confirmations, and regulatory readiness.",
    href: "/services#compliance",
    id: "compliance",
  },
  {
    icon: Headphones,
    title: "Driver Assistance",
    description: "Responsive driver coordination and operational support for every dispatch cycle.",
    href: "/services#driver-support",
    id: "driver-support",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-[#e31837] text-sm font-semibold tracking-[0.28em] mb-2 uppercase">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] tracking-tight">Services for carrier operations and dispatch support</h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-[#e31837]" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              id={service.id}
              href={service.href}
              className="group flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-[#e31837]/30 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-6 flex items-center justify-center rounded-3xl bg-[#e31837]/10 p-4 text-[#e31837] transition group-hover:bg-[#e31837]/15">
                <service.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>

              <h3 className="text-center text-xl font-bold text-[#0a1628] mb-3">{service.title}</h3>
              <p className="text-center text-sm leading-relaxed text-slate-600 flex-grow">{service.description}</p>

              <div className="mt-6 text-center">
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
