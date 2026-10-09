import Image from "next/image"
import Link from "next/link"
import { ClipboardCheck, Search, Headphones, FileText, ShieldCheck, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    title: "Carrier Onboarding",
    description: "We collect documentation, equipment details, and operating preferences to shape tailored desk support.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Validation",
    description: "Your CVOR/NSC authority, insurance coverage, and safety documentation get validated before operations begin.",
  },
  {
    icon: Search,
    title: "Lane & Load Sourcing",
    description: "We source and negotiate spot and contract loads aligned with your equipment, lanes, and home-time needs.",
  },
  {
    icon: Headphones,
    title: "Trip Coordination",
    description: "Booking, rate confirmation review, and driver check-calls handled so you stay focused on safe driving.",
  },
  {
    icon: FileText,
    title: "Documentation & Billing",
    description: "Rate confirmations, BOLs, POD archiving, and invoicing workflows managed with strict accuracy.",
  },
]

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-[#060B18] py-20 md:py-24 text-white">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/assets/branding/cover-image.png"
            alt="Carrier operations workflow"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/95 to-[#060B18]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF1E2D] mb-3">
              Process &amp; Execution
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl leading-tight">
              How RTS supports carrier operations.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Our workflow aligns dispatch coordination, broker relations, and compliance support with your operational authority.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF1E2D]/10 text-[#FF1E2D] mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-bold text-[#0D183D] mb-2">{step.title}</h2>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#060B18] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF1E2D]">
              The RTS Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Disciplined carrier operations support.
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              We provide coordination and administrative support while respecting your authority over every load and route decision.
            </p>
            <ul className="space-y-3 text-slate-300 text-sm">
              {[
                "Clear carrier-first operations: Zero forced dispatch",
                "Transparent broker communication: 100% rate confirmation visibility",
                "Compliance-ready documentation: CVOR & NSC alignment",
                "24/7 driver coordination & check-call desk",
                "Immediate invoicing preparation under 24 hours",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#FF1E2D] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/contact#get-a-dispatcher"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c41430] transition shadow-lg"
              >
                <span>Get a Dispatcher</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
