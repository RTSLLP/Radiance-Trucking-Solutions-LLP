import Image from "next/image"

interface LogoProps {
  variant?: "navbar" | "master" | "horizontal"
  className?: string
}

export function Logo({ variant = "navbar", className = "" }: LogoProps) {
  if (variant === "master") {
    return (
      <Image
        src="/assets/branding/RTS_MASTER_LOGO.png"
        alt="Radiance Trucking Solutions LLP Master Logo"
        width={320}
        height={320}
        className={`object-contain ${className}`}
        priority
      />
    )
  }

  if (variant === "horizontal") {
    return (
      <Image
        src="/assets/branding/RTS_HORIZONTAL_LOGO.png"
        alt="Radiance Trucking Solutions LLP"
        width={280}
        height={80}
        className={`object-contain ${className}`}
        priority
      />
    )
  }

  // Default navbar logo: crisp transparent 3D metallic RTS mark
  return (
    <Image
      src="/assets/branding/RTS_NAV_BAR_LOGO.png"
      alt="RTS - Radiance Trucking Solutions LLP"
      width={160}
      height={48}
      className={`object-contain h-10 md:h-12 w-auto ${className}`}
      priority
    />
  )
}
