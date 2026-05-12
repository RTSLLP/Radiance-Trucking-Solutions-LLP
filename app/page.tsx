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
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="max-w-2xl">
              <p className="text-[#e31837] text-xs font-black tracking-[0.3em] uppercase mb-4">
                Real-Time View
              </p>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
                CLEAR CAB VIEW
                <br />
                FOR BETTER CONTROL
              </h2>
              <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
                A clean, high-definition dashboard view that fits the site theme and keeps the focus on the driving experience, not exterior branding.
              </p>
            </div>

            <div className="relative h-[280px] md:h-[420px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <Image
                src="https://www.freightliner.com/media/k44lazch/digital-dash-outward-view.png?width=1160&height=620&format=webp"
                alt="Freightliner digital dash and outward view"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071633]/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Contact />
    </main>
  )
}
