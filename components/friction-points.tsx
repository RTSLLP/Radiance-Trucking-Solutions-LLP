import { PhoneCall, FileSpreadsheet, Compass, ShieldAlert } from "lucide-react"

const frictionPoints = [
  {
    icon: PhoneCall,
    title: "Broker Calls & Negotiations While Driving",
    description: "Spending hours tracking down loads, haggling with brokers, and coordinating appointments when your attention needs to be on safety and fleet operations.",
  },
  {
    icon: FileSpreadsheet,
    title: "Paperwork Delays & Cash Flow Bottlenecks",
    description: "Missing PODs, slow rate confirmation filing, and delayed invoices that tie up your hard-earned revenue with factoring companies and brokers.",
  },
  {
    icon: Compass,
    title: "Empty Deadhead Miles & Weak Lanes",
    description: "Accepting sub-optimal rates just to get back home because you lack consistent backhaul connections across major Canadian freight corridors.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance Filings & Safety Paperwork",
    description: "Wrestling with carrier packets, Canadian regulatory filings, permit tracking, and border crossing document preparation without administrative backup.",
  },
]

export function FrictionPoints() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF1E2D] mb-3">
            The Reality On The Road
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0D183D] leading-tight">
            Driving trucks is only half the battle. Managing the backend is the rest.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            RTS steps in as your dedicated backend operations department—handling the communications, paperwork, and load coordination so you can focus on driving and growing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frictionPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#FF1E2D] flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-[#0D183D] mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
