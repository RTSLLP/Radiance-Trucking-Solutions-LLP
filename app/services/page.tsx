import Link from "next/link"
import { 
  Truck, 
  MessageSquare, 
  FileText, 
  ShieldCheck, 
  Globe2, 
  TrendingUp, 
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  CalendarCheck,
  FileSpreadsheet
} from "lucide-react"

const catalogueCategories = [
  { id: "dispatch", name: "1. Dispatch & Trip Coordination", icon: Truck },
  { id: "communication", name: "2. Communications & Broker Liaison", icon: MessageSquare },
  { id: "documentation", name: "3. Back Office & Documentation", icon: FileText },
  { id: "compliance", name: "4. Canadian Compliance Administration", icon: ShieldCheck },
  { id: "border", name: "5. Border Paperwork Prep", icon: Globe2 },
  { id: "commercial", name: "6. Commercial & Carrier Sales", icon: TrendingUp },
  { id: "exceptions", name: "7. Exception & Emergency Support", icon: AlertCircle },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Page Header */}
      <section className="bg-[#0D183D] py-20 lg:py-24 text-white relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF1E2D] mb-4">
              Official Public Catalogue
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              RTS Service Catalogue
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              A comprehensive directory of independent logistics operations, dispatch coordination, and administrative support services available to Canadian carriers, owner-operators, and transportation businesses.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact#get-a-dispatcher"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c41430] transition shadow-lg shadow-red-500/20"
              >
                Get a Dispatcher
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#catalogue-index"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-white/10 transition"
              >
                Browse Disciplines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor Navigation Bar */}
      <div id="catalogue-index" className="sticky top-[84px] md:top-[92px] z-40 bg-white border-b border-slate-200 shadow-sm py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold whitespace-nowrap">
          {catalogueCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:border-[#FF1E2D] hover:text-[#FF1E2D] transition flex items-center gap-1.5"
            >
              <cat.icon className="w-3.5 h-3.5 text-[#FF1E2D]" />
              <span>{cat.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Catalogue Core Sections */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 space-y-24">

        {/* 1. Dispatch & Trip Coordination */}
        <section id="dispatch" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-red-50 text-[#FF1E2D]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#FF1E2D] uppercase tracking-wider">Discipline 01</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D183D]">Dispatch & Trip Coordination</h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mb-8">
            Continuous freight procurement and load coordination tailored to your equipment, preferred corridors, and operating preferences. RTS conducts all negotiations strictly on your behalf under your operating authority.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF1E2D]" />
                Freight Opportunity Search
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active load board scanning, broker network inquiries, and dedicated lane matching to identify profitable, compatible loads without wasting time.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF1E2D]" />
                Rate Negotiation & Coordination
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Professional negotiation with freight brokers to secure the best available market rates, accessorials (detention/layover), and clear terms.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF1E2D]" />
                Trip & Routing Assistance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Route timing, appointment coordination, transit calculation, and reload planning to minimize empty deadhead miles across Canadian corridors.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Communications Support */}
        <section id="communication" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-red-50 text-[#FF1E2D]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#FF1E2D] uppercase tracking-wider">Discipline 02</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D183D]">Communication & Broker Liaison</h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mb-8">
            Professional phone handling, prompt email coordination, and status reporting. We act as your professional front desk with brokers, shippers, and receivers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#FF1E2D]" />
                Check Calls & ETA Updates
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular status notifications provided to brokers and customers to eliminate constant driver phone interruptions while on the road.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#FF1E2D]" />
                Professional Email Management
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rapid turnaround for rate confirmations, delivery receipts, and broker correspondence handled cleanly with carrier-aligned communication.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#FF1E2D]" />
                Delay & Escalation Handling
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Immediate, calm notifications for shipper loading delays, weather interruptions, or mechanical holdups to protect your professional reputation.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Documentation & Back Office */}
        <section id="documentation" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-red-50 text-[#FF1E2D]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#FF1E2D] uppercase tracking-wider">Discipline 03</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D183D]">Back Office & Documentation</h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mb-8">
            Complete digital filing, billing coordination, and carrier packet management. We ensure paperwork is never lost and invoices are prepared accurately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#FF1E2D]" />
                Rate Con & BOL Processing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Auditing rate confirmations for accuracy, securing signed Bills of Lading, and archiving load files systematically for audit readiness.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#FF1E2D]" />
                Invoicing & Factoring Liaison
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generating professional carrier invoices and transmitting required documentation directly to your designated factoring company or broker.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#FF1E2D]" />
                Detention, Lumper & TONU Claims
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Securing approved detention documentation, signed receipts, and Truck Ordered Not Used (TONU) compensation from brokers.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Canadian Compliance */}
        <section id="compliance" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-red-50 text-[#FF1E2D]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#FF1E2D] uppercase tracking-wider">Discipline 04</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D183D]">Canadian Compliance & Safety Administration</h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mb-8">
            Administrative tracking of your regulatory requirements, filings, and safety records. Helping Canadian carriers stay compliant without the administrative strain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-[#FF1E2D]" />
                Carrier Setup Packets
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Completing carrier onboarding packets with brokers and 3PLs quickly and accurately to get your authority approved without delays.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-[#FF1E2D]" />
                Expiry & Renewal Monitoring
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proactive calendar tracking for Certificate of Insurance (COI) renewals, CVOR/NSC documentation, and operating permits.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-3 flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-[#FF1E2D]" />
                Driver File Organization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Administrative organization of driver qualification records, inspection reports, and safety paperwork in clean digital folders.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Border Support */}
        <section id="border" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-red-50 text-[#FF1E2D]">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#FF1E2D] uppercase tracking-wider">Discipline 05</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D183D]">Border Documentation Preparation Assistance</h2>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 mb-6 text-xs text-amber-900 leading-relaxed">
            <strong>Important Legal Boundary:</strong> Radiance Trucking Solutions LLP is NOT a customs broker. We provide administrative and document-preparation assistance solely to help carriers assemble necessary cross-border records for customs clearance brokers.
          </div>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mb-8">
            Assisting drivers and carriers with paperwork packaging, manifest coordination, and customs broker document transmission for cross-border transit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-2">Paperwork Assembly & Transmission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compiling commercial invoices, BOLs, and carrier details to ensure clean delivery to designated customs brokers before drivers hit border crossings.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-2">PAPS / PARS Coordination Assistance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Liaising between the driver, customs broker, and broker desk to verify barcode clearance numbers and prevent border delays.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Commercial Support */}
        <section id="commercial" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-red-50 text-[#FF1E2D]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#FF1E2D] uppercase tracking-wider">Discipline 06</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D183D]">Commercial & Carrier Sales Support</h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mb-8">
            Carrier-side commercial coordination to help your transportation business grow, research higher-yield corridors, and build recurring relationships with reputable brokers and shippers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-2">Lane Research & Analysis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluating seasonal rate trends, backhaul volumes, and regional rate averages to help you choose the most lucrative lanes.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-2">Carrier Sales Outreach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contacting brokers and freight providers to introduce your equipment, establish recurring lane opportunities, and expand relationships.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-2">Capacity Planning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mapping out scheduled truck availability in advance to secure reload commitments before your drivers arrive at destination.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Exception & Emergency Support */}
        <section id="exceptions" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-red-50 text-[#FF1E2D]">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#FF1E2D] uppercase tracking-wider">Discipline 07</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0D183D]">Operational Exception & Breakdown Support</h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mb-8">
            When unexpected challenges happen on the road, RTS provides immediate operational and communication support so you are not stranded managing crisis calls alone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-2">Tow & Repair Coordination</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assisting with locating nearby commercial repair shops, mobile mechanics, or tire services along major Canadian highways.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-2">Broker Delay Notifications</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Communicating professionally with receivers and brokers to re-schedule delivery windows and protect customer relationships.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-[#0D183D] text-base mb-2">Alternative Load Planning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quickly pivoting route plans or rescheduling reload commitments if an active breakdown impacts subsequent trip schedules.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Conversion Banner */}
      <section className="bg-[#0D183D] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">
            Discuss Your Fleet&apos;s Specific Operational Needs
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            All services in our catalogue can be packaged into custom operational arrangements tailored to your truck count and required service hours.
          </p>
          <Link
            href="/contact#get-a-dispatcher"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF1E2D] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c41430] transition shadow-lg shadow-red-500/25"
          >
            Get a Dispatcher for Your Fleet
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
