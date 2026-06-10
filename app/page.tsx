import Image from "next/image"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <section className="py-20 md:py-28 bg-[#071633] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-[#e31837] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Real-time Operations
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
                Clear visibility for every dispatch
              </h2>
              <p className="mt-6 text-slate-300 text-base leading-relaxed">
                Operational oversight and driver coordination that reduce administrative friction and keep your fleet moving with confidence.
              </p>
            </div>

            <div className="relative h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <Image
                src="https://www.freightliner.com/media/k44lazch/digital-dash-outward-view.png?width=1160&height=620&format=webp"
                alt="Driver display and operations dashboard"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071633]/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Contact />
    </main>
  )
}
