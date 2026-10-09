import Image from "next/image"
import { Check } from "lucide-react"

const equipmentTypes = [
  {
    title: "53' Dry Van",
    subtitle: "High-Volume General Freight & Consumer Commodities",
    description:
      "Consistent year-round freight across major Canadian industrial corridors. We keep your dry van trailers loaded with high-density freight, avoiding deadhead runs.",
    lanes: "Ontario (Highway 401 Corridor) • Quebec (Montreal / Quebec City) • Western Canada",
    specs: ["Max Weight: 45,000 lbs", "Dock-to-Dock Freight", "Consistent Backhauls", "Palletized Commodities"],
  },
  {
    title: "Refrigerated (Reefer)",
    subtitle: "Temperature-Sensitive Produce, Food & Frozen Cargo",
    description:
      "Premium rate-per-mile freight with strict temperature management. We ensure pre-cooling verification, multi-temp monitoring, and punctual delivery windows.",
    lanes: "Ontario ⇄ Western Canada (Calgary/Edmonton/Vancouver) • Cross-Canada Cold Chain",
    specs: ["Continuous Temp Monitoring", "Produce & Food Service", "High Demand Lanes", "Higher CPM Averages"],
  },
  {
    title: "Flatbed / Step Deck",
    subtitle: "Industrial Machinery, Building Materials & Steel",
    description:
      "Specialized open-deck freight requiring dedicated tarping and securement planning. We connect your flatbeds with high-paying industrial and construction shippers.",
    lanes: "Ontario Steel Artery • Heavy Machinery Routes • Alberta Energy Infrastructure",
    specs: ["Strapping & Tarping Rates", "Overweight/Oversize Coordination", "Industrial Manufacturers", "Direct Job Site Deliveries"],
  },
]

export function EnterpriseEquipment() {
  return (
    <section id="equipment" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
            Fleet Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-5">
            Equipment Profiles We Actively Support
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our dispatch coordinators specialize in trailer-specific rate dynamics. Whether running standard dry vans or specialized open decks, we know how to price and position your equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {equipmentTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-8 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
                  Equipment Spec
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm font-semibold text-red-600 mb-4">{item.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.description}</p>

                <div className="bg-white rounded-lg p-4 border border-slate-200 mb-6">
                  <div className="text-xs font-bold uppercase text-slate-500 mb-1">Primary Corridors</div>
                  <div className="text-xs font-medium text-slate-800 leading-snug">{item.lanes}</div>
                </div>

                <div className="space-y-2 mb-6">
                  {item.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href="#contact"
                  className="block text-center w-full py-2.5 px-4 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-900 text-xs font-bold uppercase tracking-wider transition"
                >
                  Dispatch This Equipment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
