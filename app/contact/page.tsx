import { Contact } from "@/components/contact"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-[#0D183D] py-16 lg:py-20 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF1E2D] mb-4">
              Operations Desk Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Connect with RTS
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need immediate load coordination, back-office administration, or a custom operational arrangement for your fleet, our desk is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Information Cards */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#FF1E2D] flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Direct Calling & WhatsApp</h3>
                <a href="tel:+15199376622" className="text-lg font-black text-[#0D183D] hover:text-[#FF1E2D] transition">
                  +1 (519) 937-6622
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF1E2D]" />
                Dedicated Canadian dispatch operations
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#FF1E2D] flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Official Communications</h3>
                <a href="mailto:contactus@radiancetrucking.com" className="text-base sm:text-lg font-black text-[#0D183D] hover:text-[#FF1E2D] transition break-all">
                  contactus@radiancetrucking.com
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
                Inquiries acknowledged promptly by our coordinators
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#FF1E2D] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Canadian Liaison Office</h3>
                <p className="text-sm font-black text-[#0D183D]">
                  54 Susan Crescent, Kitchener, ON N2A 4B1
                </p>
              </div>
              <p className="text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
                Serving Canadian carriers across all major corridors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Get a Dispatcher Form */}
      <Contact />
    </main>
  )
}
