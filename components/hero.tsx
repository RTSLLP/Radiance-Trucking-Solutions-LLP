"use client"

import { ArrowRight, CircleDollarSign, TrendingUp, Truck, Headphones } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  { icon: CircleDollarSign, text: "More Loads" },
  { icon: TrendingUp, text: "Higher Rates" },
  { icon: Truck, text: "No Empty Miles" },
  { icon: Headphones, text: "24/7 Support" },
]

export function Hero() {
  return (
    <section id="home" className="relative bg-[#0a1628] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://img.freepik.com/premium-photo/big-rig-semi-truck-cargo-highway-road_140916-53825.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Truck on highway"
          fill
          className="object-cover object-center opacity-92 brightness-100 contrast-105 saturate-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071321]/92 via-[#071321]/72 to-[#071321]/24" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl bg-[#071321]/28 backdrop-blur-[2px] rounded-3xl p-6 md:p-8 border border-white/8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
          {/* Tagline */}
          <p className="text-[#e31837] text-sm italic mb-4 tracking-wide">
            DISPATCHING EXCELLENCE.
            <br />
            DRIVING YOUR SUCCESS.
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            KEEPING YOUR
            <br />
            TRUCKS <span className="text-[#e31837]">MOVING.</span>
            <br />
            MAXIMIZING
            <br />
            YOUR <span className="text-[#e31837]">PROFITS.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
            Professional truck dispatch services for owner-operators
            and fleets across <span className="text-[#e31837] font-semibold">USA & Canada</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact#get-started-today"
              className="inline-flex items-center justify-center gap-2 bg-[#e31837] hover:bg-[#c41430] text-white px-6 py-3 rounded font-semibold text-sm transition-colors"
            >
              Get a Dispatcher
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a1628] px-6 py-3 rounded font-semibold text-sm transition-colors"
            >
              Our Services
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-white text-sm">
                <feature.icon className="w-5 h-5 text-[#e31837]" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dispatch Partner Badge */}
       <div className="absolute bottom-6 right-4 lg:right-8 hidden md:block">
  <div className="bg-[#061433]/95 border border-[#e31837] rounded-md px-5 py-4 shadow-[0_0_10px_rgba(227,24,55,0.25)] flex items-center gap-5 w-[268px] h-[96px]">
    
    {/* Shield Icon */}
    <div className="flex-shrink-0 w-[54px] h-[54px] flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M50 8C40 18 29 21 18 24V47C18 70 34 82 50 91C66 82 82 70 82 47V24C71 21 60 18 50 8Z"
          stroke="#e31837"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 50L45 61L66 38"
          stroke="#e31837"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Text */}
    <div className="leading-tight">
      <p className="text-[#e31837] text-[11px] font-extrabold tracking-wide uppercase">
        YOUR RELIABLE
      </p>

      <p className="text-white text-[16px] font-black tracking-wide uppercase mt-1">
        DISPATCH PARTNER
      </p>

      <p className="text-[#e31837] text-[11px] font-extrabold tracking-wide uppercase mt-1">
        IN USA &amp; CANADA
      </p>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}
