import Image from "next/image"

interface LogoProps {
  variant?: "navbar" | "master" | "horizontal" | "emblem"
  className?: string
}

export function Logo({ variant = "navbar", className = "" }: LogoProps) {
  if (variant === "emblem" || variant === "master") {
    return (
      <Image
        src="/assets/branding/rts-emblem-transparent.png"
        alt="Radiance Trucking Solutions LLP Logistics Emblem"
        width={320}
        height={220}
        className={`object-contain ${className}`}
        priority
      />
    )
  }

  // Default navbar and horizontal logo: crisp transparent 3D metallic RTS mark
  return (
    <Image
      src="/assets/branding/rts-mark-transparent.png"
      alt="RTS - Radiance Trucking Solutions LLP"
      width={180}
      height={50}
      className={`object-contain h-10 sm:h-12 w-auto ${className}`}
      priority
    />
  )
}

