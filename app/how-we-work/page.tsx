import Image from "next/image"
import { ClipboardCheck, Search, Headphones, FileText, Wallet, ShieldCheck, MapPin } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    title: "Carrier onboarding",
    description: "We collect documentation, equipment details, and operating preferences to shape support.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance validation",
    description: "Your MC authority, insurance, and regulatory documentation get reviewed before operations begin.",
  },
  {
    icon: Search,
    title: "Load sourcing",
    description: "We source and negotiate loads aligned with your lanes, service types, and home-time needs.",
  },
  {
    icon: Headphones,
    title: "Dispatch coordination",
    description: "Booking, instructions, and driver communication handled so your team stays focused on the road.",
  },
  {
    icon: FileText,
    title: "Documentation support",
    description: "Rate confirmations, BOLs, and invoicing workflows managed with compliance in mind.",
  },
]

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24 text-white">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/assets/branding/cover-image.png"
            alt="Carrier operations workflow"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 to-slate-950" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#e31837] mb-3">Process & execution</p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl leading-tight">
              How RTS supports carrier operations.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Our workflow aligns dispatch coordination, broker relations, and compliance support with your operational authority.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e31837]/10 text-[#e31837]">
                  <step.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-slate-950">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#e31837] mb-3">The RTS approach</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">Disciplined carrier operations support.</h2>
            <p className="text-base leading-8 text-slate-300 mb-6">
              We provide coordination and administrative support while respecting your authority over every load and route decision.
            </p>
            <ul className="space-y-3 text-slate-300">
              {[
                "Clear carrier-first operations",
                "Transparent broker communication",
                "Compliance-ready documentation",
                "24/7 driver coordination",
                "Responsive operations support",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#e31837] flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
