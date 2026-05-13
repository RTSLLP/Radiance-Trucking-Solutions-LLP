import { Contact } from "@/components/contact"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Contact Section */}
      <Contact />

      {/* Contact Hero */}
      <section className="bg-[#0a1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1591768793355-74d7c513c317?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90" 
            alt="Contact Us" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#e31837]" />
              <p className="text-[#e31837] text-xs font-black tracking-[0.3em] uppercase">Get In Touch</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-8 tracking-tight">
              CONTACT <br />
              <span className="text-[#e31837]">EXECUTIVE SUPPORT</span>
            </h1>
            <p className="text-gray-300 max-w-xl text-lg md:text-xl font-medium leading-relaxed">
              Our dedicated support team is available 24/7 to discuss your carrier needs and help you scale your trucking business.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-[#0a1628] uppercase tracking-tight">Direct Line</h4>
              <p className="text-gray-500 font-medium">+91 95186 08147</p>
              <p className="text-gray-400 text-sm">(WhatsApp Business Available!)</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center text-white">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-[#0a1628] uppercase tracking-tight">Email Support</h4>
              <a href="mailto:contactus@radiancetrucking.com" className="text-gray-500 font-medium hover:text-[#e31837] transition-colors">
                contactus@radiancetrucking.com
              </a>
              <p className="text-gray-400 text-sm">We aim to respond promptly and professionally to every inquiry.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-[#0a1628] uppercase tracking-tight">Regional HQ</h4>
              <p className="text-gray-500 font-medium">Serving USA & Canada</p>
              <p className="text-gray-400 text-sm">Strategically located to manage major lanes.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center text-white">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-[#0a1628] uppercase tracking-tight">Hours</h4>
              <p className="text-gray-500 font-medium">24/7/365</p>
              <p className="text-gray-400 text-sm">The logistics industry never sleeps, and neither do we.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
