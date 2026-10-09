import { NextResponse } from "next/server"

const MAILTRAP_SEND_URL = "https://send.api.mailtrap.io/api/send"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const {
      companyName,
      dbaName,
      cvorNsc,
      businessNumber,
      streetAddress,
      city,
      province,
      postalCode,
      truckCount,
      trailerCount,
      trailerTypes,
      preferredLanes,
      driverType,
      usesFactoring,
      factoringCompanyName,
      directNotes,
    } = data

    if (!companyName || !cvorNsc || !city) {
      return NextResponse.json(
        { error: "Required onboarding fields are missing." },
        { status: 400 }
      )
    }

    const mailtrapToken = process.env.MAILTRAP_API_TOKEN
    const destinationEmail = process.env.EMAIL_TO || "contactus@radiancetrucking.com"

    const onboardingPacketText = `
=================================================================
RADIANCE TRUCKING SOLUTIONS LLP (RTS)
NEW DIGITAL CARRIER ONBOARDING PACKET
=================================================================

SUBMISSION TIMESTAMP: ${new Date().toISOString()}

--- CARRIER ENTITY & AUTHORITY ---
Legal Business Name: ${companyName}
Operating Name (DBA): ${dbaName || "N/A"}
CVOR / NSC Authority #: ${cvorNsc}
Business Number (BN/GST): ${businessNumber || "N/A"}
Terminal Address: ${streetAddress}, ${city}, ${province} ${postalCode}

--- FLEET & EQUIPMENT SPECIFICATIONS ---
Active Power Units (Trucks): ${truckCount}
Trailers Operated: ${trailerTypes?.join(", ") || "Dry Van"}
Driver Arrangement: ${driverType}
Preferred Freight Lanes: ${preferredLanes?.join(" | ") || "All Open Commercial"}

--- FACTORING & SETTLEMENTS ---
Uses Factoring: ${usesFactoring}
Factoring Company: ${factoringCompanyName || "N/A"}

--- DISPATCH NOTES ---
${directNotes || "None provided"}

=================================================================
ACTION REQUIRED: Review documentation, assign dedicated Kitchener
operations desk, and request COI + Safety Certificate.
=================================================================
`

    if (mailtrapToken) {
      await fetch(MAILTRAP_SEND_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${mailtrapToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: {
            email: "contactus@radiancetrucking.com",
            name: "RTS Carrier Onboarding Desk",
          },
          to: [
            {
              email: destinationEmail,
            },
          ],
          subject: `[NEW ONBOARDING] ${companyName} (${truckCount} Trucks - CVOR ${cvorNsc})`,
          text: onboardingPacketText,
          category: "Carrier Onboarding",
        }),
      })
    } else {
      console.log("Mailtrap token not configured; logged packet:\n", onboardingPacketText)
    }

    return NextResponse.json({
      success: true,
      message: "Onboarding packet successfully registered.",
    })
  } catch (err) {
    console.error("Onboarding error:", err)
    return NextResponse.json(
      { error: "Internal server error while processing onboarding packet." },
      { status: 500 }
    )
  }
}
