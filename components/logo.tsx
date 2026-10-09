import Image from "next/image"

export function Logo({ variant = "default" }: { variant?: "default" | "footer" }) {
  if (variant === "footer") {
    return (
      <Image
        src="/assets/branding/RTS_HORIZONTAL_LOGO.png"
        alt="Radiance Trucking Solutions LLP"
        width={260}
        height={70}
        className="object-contain w-auto h-[56px]"
      />
    )
  }

  return (
    <Image
      src="/assets/branding/RTS_NAVIGATION_LOGO.png"
      alt="Radiance Trucking Solutions LLP"
      width={280}
      height={70}
      className="object-contain h-[48px] md:h-[54px] w-auto"
      priority
    />
  )
}
