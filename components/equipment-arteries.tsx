import Link from "next/link"
import { Truck, Snowflake, Layers, Zap, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"

export function EquipmentArteries() {
  const equipmentList = [
    {
      id: "dry-van",
      title: "53' Dry Vans",
      icon: Truck,
      highlight: "High-Cube General Freight",
      specs: [
        "Dimensions: 53' L × 102\" W × 110\" H",
        "Payload Capacity: Up to 45,000 lbs",
        "Capacity: 26 to 30 Standard Pallets",
        "E-Track & Logistic Straps Equipped",
      ],
      cargo: "Retail goods, packaged consumer commodities, electronics, automotive parts, and palletized commercial freight.",
      strategy: "We match your dry van with high-density lanes along the 401 corridor to eliminate empty deadhead and lock in premium outbound/inbound spreads.",
    },
    {
      id: "reefer",
      title: "Temperature-Controlled Reefers",
      icon: Snowflake,
      highlight: "Cold-Chain & Perishable Freight",
      specs: [
        "Temperature Range: -20°F to +70°F",
        "Continuous Reefer Telematics Monitoring",
        "Pre-Cool Verification & Pulp Temp Logs",
        "Food Safety & Sanitary Transport Ready",
      ],
      cargo: "Fresh produce, dairy, frozen proteins, pharmaceuticals, and temperature-sensitive grocery goods.",
      strategy: "Reefers command the highest rate spreads in North America. We book premium cold loads with strict detention protocols to protect reefer engine hours.",
    },
    {
      id: "flatbed",
      title: "Flatbeds & Step-Decks",
      icon: Layers,
      highlight: "Open Deck & Heavy Industrial",
      specs: [
        "Length: 48' & 53' Aluminum / Combo Decks",
        "Payload Capacity: Up to 48,000 lbs",
        "Lumber & Steel Tarps + Heavy Ratchets",
        "Provincial Over-Dimensional Permits",
      ],
      cargo: "Structural steel, building lumber, heavy construction machinery, industrial equipment, and agricultural implements.",
      strategy: "Our dispatchers actively source open-deck spot rates and negotiated project freight that pay top dollar per mile for skilled tarping and securement.",
    },
    {
      id: "power-only",
      title: "Power Only & Dedicated Pulls",
      icon: Zap,
      highlight: "Drop & Hook Efficiency",
      specs: [
        "Class 8 Tractors with Sleeper Berths",
        "Trailer Interchange Agreement Verified",
        "Pre-Vetted Shipper Trailer Pools",
        "Zero Wait Time Drop-and-Hook Turns",
      ],
      cargo: "Pre-loaded broker trailers, private corporate fleet pools, and cross-border relay freight.",
      strategy: "Turn miles immediately without waiting on dock loading. We position your tractor for high-efficiency drop-and-hook continuous loops.",
    },
  ]

  const corridors = [
    {
      name: "Highway 401 Core Artery",
      route: "Windsor ⇄ London ⇄ Kitchener ⇄ GTA ⇄ Kingston ⇄ Montreal",
      desc: "Canada's primary freight lifeline. Over 40% of the country's trade moves through this highway. Daily dispatch with zero deadhead return planning.",
      status: "High Density / Active Dispatch",
    },
    {
      name: "Ontario to Western Canada",
      route: "Southern Ontario ⇄ Winnipeg (MB) ⇄ Calgary / Edmonton (AB) ⇄ Vancouver (BC)",
      desc: "Long-haul cross-country runs for high-mileage solo and team drivers. Optimized fuel stop planning and mountain pass weather alerts.",
      status: "Long-Haul Team & Solo",
    },
    {
      name: "Cross-Border Gateway Corridors",
      route: "Ambassador Bridge (Detroit) • Peace Bridge (Buffalo) • Blue Water (Port Huron)",
      desc: "Dedicated customs paperwork assistance, ACE/ACI e-manifest review, and direct liaison with Canadian & US customs broker desks.",
      status: "Customs & Bonded Ready",
    },
    {
      name: "Ontario ⇄ Quebec Regional",
      route: "Greater Toronto Area ⇄ Montreal Metropolitan Area ⇄ Quebec City",
      desc: "Same-day and overnight regional shuttles with high turnaround rates, reliable receiver check-ins, and automated bilingual paperwork support.",
      status: "High-Turnover Regional",
    },
  ]

  return (
    <section id="equipment" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest mb-3">
            Fleet Equipment & Freight Corridors
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            The Right Equipment for Every Critical Mile
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Just like the industry&apos;s premier asset carriers, RTS builds dedicated operational blueprints around your exact equipment profile and preferred lanes.
          </p>
        </div>

        {/* 4 Equipment Types (TransAm / Pride Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {equipmentList.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e31837] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Equipment Specifications
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                      {item.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-600 mb-6">
                    <p>
                      <strong className="text-slate-900 font-semibold">Typical Commodities:</strong>{" "}
                      {item.cargo}
                    </p>
                    <p className="text-slate-500 italic">
                      <strong className="text-slate-700 font-semibold not-italic">RTS Lane Strategy:</strong>{" "}
                      {item.strategy}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e31837] hover:text-[#b31229] transition"
                  >
                    <span>Request Lane Rate for {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Canadian Freight Artery Corridors (Inspired by TransAm Concord, ON & Highway 401 focus) */}
        <div className="bg-[#070f1a] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/30">
              <MapPin className="w-3.5 h-3.5" />
              <span>Core Operational Arteries</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Where Radiance Moves Freight Daily
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We monitor live spot vs. contract rate indexes along Canada&apos;s busiest commercial arteries. Our Kitchener operations liaison coordinates smooth transit across provincial and international border crossings.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {corridors.map((c) => (
              <div
                key={c.name}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {c.name}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    {c.status}
                  </span>
                </div>
                <div className="text-xs font-semibold text-red-400 mb-2 font-mono">
                  {c.route}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Need custom lane planning or border customs setup? Direct dispatch desk available 24/7.
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:15199376622"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition border border-slate-700"
              >
                <span>Call Kitchener Desk</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e31837] hover:bg-[#c41430] text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-red-600/30"
              >
                <span>Instant Rate Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
