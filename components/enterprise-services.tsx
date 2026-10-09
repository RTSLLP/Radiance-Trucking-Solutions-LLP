import { Navigation, FileText, Receipt, Shield, Check } from "lucide-react"

const services = [
  {
    icon: Navigation,
    title: "Dedicated Dispatch & Route Coordination",
    tagline: "High-paying loads. Zero deadhead waste.",
    description:
      "We source top-paying loads across Ontario, Quebec, and Western Canada. Your dedicated dispatcher aggressively negotiates every rate confirmation to maximize your revenue per mile.",
    features: [
      "Targeted load hunting across premium Canadian freight lanes",
      "Aggressive rate negotiation directly with vetted brokers",
      "Strategic backhaul planning to minimize unpaid deadhead miles",
      "100% transparent rate confirmations sent directly to you",
    ],
  },
  {
    icon: FileText,
    title: "Carrier Back-Office & Broker Packets",
    tagline: "Zero paperwork distractions while driving.",
    description:
      "We handle the mountain of administrative work required to haul freight. From carrier setup packets to insurance certificate submissions, your office is fully covered.",
    features: [
      "Complete broker setup packet completion and document management",
      "Immediate rate confirmation review, execution, and archiving",
      "Shipper and receiver check calls and appointment scheduling",
      "Resolution of dock delays, load cancellations, and layovers",
    ],
  },
  {
    icon: Receipt,
    title: "Billing, Invoicing & Factoring Liaison",
    tagline: "Get paid on time for every mile turned.",
    description:
      "Cash flow is the lifeblood of trucking. We generate professional invoices the moment you deliver and coordinate directly with your factoring company or direct broker accounts.",
    features: [
      "Same-day invoice preparation upon Proof of Delivery (POD) receipt",
      "Direct factoring company integration and schedule submission",
      "Aggressive collection of detention pay, layover, and lumper charges",
      "Organized payment tracking and aging ledger reports",
    ],
  },
  {
    icon: Shield,
    title: "Safety, Compliance & Audit Readiness",
    tagline: "Protecting your commercial carrier authority.",
    description:
      "We help you stay fully compliant with Canadian commercial vehicle standards so your fleet stays on the road without costly fines or safety downgrades.",
    features: [
      "Ontario CVOR & provincial NSC compliance documentation support",
      "Driver qualification file maintenance and renewal tracking",
      "Periodic vehicle inspection and maintenance log organization",
      "Oversize, overweight, and provincial regulatory guidance",
    ],
  },
]

export function EnterpriseServices() {
  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
            Core Operational Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-5">
            Full-Service Logistics Operations Built for Canadian Carriers
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We operate as your complete in-house operations department. You drive and manage your fleet—RTS handles the dispatch, paperwork, rate negotiations, and billing.
          </p>
        </div>

        {/* 4 Muscular Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 border border-red-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      <p className="text-sm font-medium text-red-600">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="border-t border-slate-100 pt-6 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
