import { CheckCircle, Users, Clock, FileText } from "lucide-react"

const stats = [
  {
    icon: CheckCircle,
    value: "100%",
    label: "COMMITMENT",
  },
  {
    icon: Users,
    value: "500+",
    label: "HAPPY CLIENTS",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "SUPPORT",
  },
  {
    icon: FileText,
    value: "",
    label: "COMPLIANCE &",
    sublabel: "PAPERWORK",
  },
]

export function Stats() {
  return (
    <section className="bg-[#0a1628] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-white text-sm font-semibold tracking-wider mb-8">
          TRUSTED BY OWNER-OPERATORS & FLEETS
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 ${
                index < stats.length - 1 ? "md:border-r md:border-gray-700" : ""
              } justify-center md:justify-start md:pl-8`}
            >
              <stat.icon className="w-10 h-10 text-[#e31837] flex-shrink-0" />
              <div>
                {stat.value && (
                  <p className="text-white text-2xl font-black">{stat.value}</p>
                )}
                <p className="text-gray-300 text-xs font-semibold tracking-wide">
                  {stat.label}
                </p>
                {stat.sublabel && (
                  <p className="text-gray-300 text-xs font-semibold tracking-wide">
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
