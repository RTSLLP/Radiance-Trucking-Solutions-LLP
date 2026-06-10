import Image from "next/image"

export function Logo({ variant = "default" }: { variant?: "default" | "footer" }) {
  if (variant === "footer") {
    return (
      <Image
        src="/assets/branding/horizontal-logo.png"
        alt="RTS - Radiance Trucking Solutions"
        width={240}
        height={70}
        className="object-contain"
      />
    )
  }

  // Header logo - premium horizontal shiny logo
  return (
    <Image
      src="/assets/branding/horizontal-logo-shiny.png"
      alt="Radiance Trucking Solutions LLP"
      width={280}
      height={72}
      className="object-contain h-[68px] w-auto"
      priority
    />
  )
}
