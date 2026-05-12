import Link from "next/link"
import { Truck, Handshake, FileCheck, Headphones } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "DISPATCH",
    description: "We find high-paying loads from top load boards to keep your trucks loaded and moving.",
    href: "/services#dispatch",
    id: "dispatch",
  },
  {
    icon: Handshake,
    title: "BROKERAGE AGREEMENT",
    description: "We establish and manage broker relationships with comprehensive agreements to ensure fair terms and maximum earnings.",
    href: "/services#brokerage",
    id: "brokerage",
  },
  {
    icon: FileCheck,
    title: "COMPLIANCE",
    description: "We handle all documents including rate confirmations, BOLs and invoicing.",
    href: "/services#compliance",
    id: "compliance",
  },
  {
    icon: Headphones,
    title: "SAFETY",
    description: "24/7 driver support for you and your drivers, anytime, anywhere.",
    href: "/services#safety",
    id: "safety",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[#e31837] text-sm font-semibold tracking-wide mb-2">WHAT WE DO</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628]">
            OUR SERVICES
          </h2>
          <div className="w-12 h-1 bg-[#e31837] mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              id={service.id}
              href={service.href}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group scroll-mt-28 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  {/* Icon background with translucent effect */}
                  <div className="w-24 h-24 rounded-2xl bg-[#e31837]/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#e31837]/20 transition-all duration-300">
                    <service.icon className="w-14 h-14 text-[#e31837] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center font-bold text-[#0a1628] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-600 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              
              {/* View Details Button */}
              <div className="mt-6 flex justify-center">
                <button className="text-[#e31837] text-xs font-bold uppercase tracking-[0.2em] bg-[#e31837]/10 hover:bg-[#e31837]/20 px-4 py-2 rounded transition-all duration-300 group-hover:translate-y-0 translate-y-1 opacity-0 group-hover:opacity-100">
                  View Details →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
