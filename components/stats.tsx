import { CheckCircle, Users, Clock, FileText } from "lucide-react"

const stats: Array<{ icon: typeof CheckCircle; value: string; label: string; sublabel?: string }> = [
  {
    icon: CheckCircle,
    value: "Operational",
    label: "Carrier reliability",
  },
  {
    icon: Users,
    value: "Trusted",
    label: "Carrier relationships",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
  },
  {
    icon: FileText,
    value: "Compliant",
    label: "Documentation",
  },
]

export function Stats() {
  return (
    <section className="bg-[#0D183D] py-14 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-slate-300 text-xs font-bold uppercase tracking-[0.25em] mb-10">
          OPERATIONAL STANDARDS & CARRIER COMMITMENT
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 ${
                index < stats.length - 1 ? "md:border-r md:border-white/10" : ""
              } justify-center md:justify-start md:pl-6`}
            >
              <stat.icon className="w-9 h-9 text-[#FF1E2D] flex-shrink-0" strokeWidth={1.75} />
              <div>
                {stat.value && (
                  <p className="text-white text-xl sm:text-2xl font-black tracking-tight">{stat.value}</p>
                )}
                <p className="text-slate-300 text-xs font-semibold tracking-wide">
                  {stat.label}
                </p>
                {stat.sublabel && (
                  <p className="text-slate-400 text-xs font-medium">
                    {stat.sublabel}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
