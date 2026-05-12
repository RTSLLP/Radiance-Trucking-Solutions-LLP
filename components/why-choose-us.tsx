"use client"

import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  "We work as your back office so you can focus on driving.",
  "No forced dispatch – you decide which load to take.",
  "Transparent communication and honest approach.",
  "We treat your business like our own.",
  "100% dedicated to increasing your profits.",
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white overflow-hidden py-5">
      <div className="max-w-[1173px] mx-auto">
        <div className="grid lg:grid-cols-[47%_53%] min-h-[388px]">

          {/* Left Content */}
          <div className="relative z-10 px-6 md:px-12 py-10 md:py-11 bg-white">
            <p className="text-[#e31837] text-[14px] font-black tracking-[0.08em] uppercase mb-3">
              WHY CHOOSE US
            </p>

            <h2 className="text-[#071633] text-[28px] md:text-[30px] font-black tracking-[0.04em] leading-tight uppercase mb-4">
              WE FOCUS ON YOUR SUCCESS
            </h2>

            <div className="relative w-[55px] h-[4px] bg-[#e31837] mb-7">
              <span className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-[#e31837] rounded-full" />
            </div>

            {/* Benefits List */}
            <ul className="space-y-[14px] mb-7">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-[18px] h-[18px] text-[#e31837] flex-shrink-0 mt-[1px]"
                    strokeWidth={3}
                  />
                  <span className="text-[#071633] text-[14px] font-semibold leading-snug">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-3 bg-[#e31837] hover:bg-[#c41430] text-white h-[56px] px-10 rounded-sm font-black text-sm uppercase transition-all shadow-lg hover:shadow-[0_10px_20px_rgba(227,24,55,0.3)] w-fit"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" strokeWidth={3} />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[300px] lg:min-h-[388px] overflow-hidden">
            <Image
              src="https://cdn.wallpapersafari.com/24/69/xsQt6m.jpg"
              fill
              priority
              className="object-cover object-center"
              alt=""
            />

            {/* Soft white fade on the left side of image */}
            <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  )
}
