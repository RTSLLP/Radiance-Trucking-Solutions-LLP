import { Shield, Eye, ThumbsUp, Scale } from "lucide-react"

const standards = [
  {
    icon: ThumbsUp,
    title: "Zero Forced Dispatch",
    description:
      "You make the final call on every single load. If a lane, rate, or schedule does not fit your operational goals, we pivot immediately. You never take a load you do not want.",
  },
  {
    icon: Eye,
    title: "100% Rate Transparency",
    description:
      "You receive the original broker rate confirmation directly. We do not skim rates, hide broker numbers, or shave margins. You see the true gross revenue on every mile.",
  },
  {
    icon: Shield,
    title: "100% Retained Authority",
    description:
      "You do not lease on to us. You haul under your own company name and authority. RTS acts strictly as your contracted operations desk—protecting your business identity.",
  },
  {
    icon: Scale,
    title: "No Long-Term Trap Contracts",
    description:
      "We believe in earning our place on your team through daily performance. No punitive retainers, no long-term lock-ins, and no hidden cancellation penalties.",
  },
]

export function EnterpriseAutonomy() {
  return (
    <section id="why-rts" className="py-24 bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            The Carrier Independence Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-5">
            You Own the Equipment. You Call the Shots.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            The trucking industry is full of brokers and dispatch services that take advantage of owner-operators. 
            At RTS, our entire operational model is designed around transparency, autonomy, and respect for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
