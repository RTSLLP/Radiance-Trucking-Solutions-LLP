import { Stats } from "@/components/stats"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/assets/branding/cover-image.png"
            alt="Carrier operations support"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 to-slate-950" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#e31837] mb-3">The RTS story</p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl leading-tight">
              Carrier operations support for modern fleets.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Radiance Trucking Solutions LLP delivers dispatch coordination, broker relations, and compliance support for authorized motor carriers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#e31837]">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">Carrier operations support for modern fleets.</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  RTS was founded by logistics professionals who understand the challenges carriers face: broker complexity, regulatory pressure, and the need for operational control.
                </p>
                <p>
                  We work exclusively with authorized motor carriers, providing dispatch coordination, broker relations, compliance support, and driver assistance—without operating as a carrier ourselves.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src="/assets/branding/cover-image.png"
                  alt="Carrier operations support"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#e31837] mb-4">Our approach</p>
          <h2 className="text-4xl font-black text-slate-950 tracking-tight">A focused operations model for carrier success.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
            RTS is built around clear responsibilities: we support carriers with coordination, paperwork, and communication while respecting carrier authority and operational control.
          </p>
        </div>
      </section>
    </main>
  )
}
