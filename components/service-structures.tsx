import Link from "next/link"
import { Check, ArrowRight, Truck, Briefcase, TrendingUp } from "lucide-react"

const structures = [
  {
    tag: "PLAN 1",
    name: "RTS DISPATCH",
    icon: Truck,
    badge: "Core Movement & Dispatch",
    color: "border-blue-200 bg-blue-50/50 text-blue-700",
    headerBg: "bg-[#0D183D]",
    description: "Daily freight search, rate negotiations, broker coordination, and 24/7 route tracking to keep your equipment moving.",
    bestFor: "Owner-operators, independent drivers, and fleets needing dependable load booking.",
    highlights: [
      "Load Search & Opportunity Procurement",
      "Rate Negotiation on Carrier's Behalf",
      "Driver Dispatch & Route Coordination",
      "Broker & Shipper Check Calls",
      "Trip Planning & Appointment Booking",
      "24/7 Operations Desk Monitoring",
      "POD Collection & Delivery Confirmations",
      "No Forced Dispatch — 100% Carrier Approval",
    ],
  },
  {
    tag: "PLAN 2",
    name: "RTS OPERATIONS",
    icon: Briefcase,
    badge: "Complete Operations & Back Office",
    popular: true,
    color: "border-emerald-200 bg-emerald-50/50 text-emerald-700",
    headerBg: "bg-slate-900",
    description: "Full dispatch plus end-to-end back-office support, paperwork filing, compliance monitoring, and invoicing liaison.",
    bestFor: "Growing fleets that want RTS to manage daily operations and administrative back office.",
    highlights: [
      "Everything in RTS Dispatch",
      "Billing, Invoicing & Factoring Liaison",
      "Rate Confirmation & Document Management",
      "Canadian Compliance & Safety Administration",
      "Driver & Vehicle Record Keeping",
      "Permit & Expiry Tracking Reminders",
      "Detention, Lumper & TONU Claims Support",
      "Business Email & Phone Communication",
    ],
  },
  {
    tag: "PLAN 3",
    name: "RTS EXPANSION",
    icon: TrendingUp,
    badge: "Commercial Growth & Scaling",
    color: "border-purple-200 bg-purple-50/50 text-purple-700",
    headerBg: "bg-[#1a1438]",
    description: "Built for established carriers ready to expand lanes, establish direct relationships, and grow fleet revenue.",
    bestFor: "Established fleets looking to scale lanes, increase revenue, and build commercial relationships.",
    highlights: [
      "Everything in RTS Operations",
      "Dedicated Carrier Sales Outreach",
      "Freight Lane & Market Research",
      "Direct Shipper & Broker Relationship Support",
      "Cross-Border Paperwork Preparation Assistance",
      "Capacity Planning & Strategic Growth Reviews",
      "CRM & Pipeline Tracking",
      "Custom Workflow & Operations Support",
    ],
  },
]

export function ServiceStructures() {
  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF1E2D] mb-3">
            Flexible Service Structures
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0D183D] leading-tight">
            Structured support tailored to your fleet size and operational scope.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Whether you run a single power unit or an expanding fleet across Canadian lanes, RTS provides modular service packages that adapt as your business grows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {structures.map((item) => (
            <div
              key={item.name}
              className={`rounded-3xl border ${
                item.popular
                  ? "border-[#FF1E2D] shadow-xl shadow-red-500/5 ring-2 ring-[#FF1E2D]/20"
                  : "border-slate-200 shadow-sm"
              } bg-white flex flex-col justify-between overflow-hidden transition hover:-translate-y-1 hover:shadow-lg duration-200`}
            >
              <div>
                {/* Header */}
                <div className={`${item.headerBg} p-7 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black tracking-[0.2em] text-[#FF1E2D] uppercase">
                      {item.tag}
                    </span>
                    <item.icon className="w-5 h-5 text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Best For Box */}
                <div className="px-7 py-4 bg-slate-50 border-b border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Best For
                  </p>
                  <p className="text-xs font-medium text-slate-700 leading-relaxed">
                    {item.bestFor}
                  </p>
                </div>

                {/* Checklist */}
                <div className="p-7 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Key Deliverables
                  </p>
                  {item.highlights.map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <div className="rounded-full p-0.5 bg-red-50 text-[#FF1E2D] mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-slate-700 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-7 pt-0">
                <Link
                  href="/contact#get-a-dispatcher"
                  className={`w-full py-3.5 rounded-full text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition ${
                    item.popular
                      ? "bg-[#FF1E2D] text-white hover:bg-[#c41430] shadow-md shadow-red-500/20"
                      : "bg-[#0D183D] text-white hover:bg-slate-800"
                  }`}
                >
                  Get a Dispatcher for this Plan
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-[#0D183D] mb-1">
              Need a custom arrangement or specific operational hours?
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              Every carrier is different. We structure commercial proposals around your active truck count, preferred corridors, and support requirements. No long-term locks.
            </p>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white text-xs font-bold uppercase tracking-wider text-[#0D183D] hover:border-[#FF1E2D] hover:text-[#FF1E2D] transition"
          >
            Explore Full Catalogue
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
