import Image from "next/image"

export function Logo({ variant = "default" }: { variant?: "default" | "footer" }) {
  if (variant === "footer") {
    return (
      <Image
        src="/global-mark.jpeg"
        alt="RTS - Radiance Trucking Solutions"
        width={120}
        height={108}
        className="object-contain"
      />
    )
  }

  // Header logo - using full logo image at prominent size
  return (
    <Image
      src="/full-logo.jpeg"
      alt="Radiance Trucking Solutions LLP - Dispatch | Brokerage | Compliance | Safety"
      width={400}
      height={100}
      className="object-contain h-[100px] md:h-[110px] w-auto"
      priority
    />
  )
}
