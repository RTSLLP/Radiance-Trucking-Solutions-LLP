import Image from "next/image"

export function Logo({ variant = "default" }: { variant?: "default" | "footer" }) {
  if (variant === "footer") {
    return (
      <Image
        src="/assets/branding/horizontal-logo.png"
        alt="RTS - Radiance Trucking Solutions"
        width={220}
        height={60}
        className="object-contain"
      />
    )
  }

  return (
    <Image
      src="/assets/branding/horizontal-logo-shiny.png"
      alt="Radiance Trucking Solutions LLP"
      width={220}
      height={60}
      className="object-contain h-[54px] w-auto"
      priority
    />
  )
}
