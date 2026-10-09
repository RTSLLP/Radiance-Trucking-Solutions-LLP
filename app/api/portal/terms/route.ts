import { NextResponse } from "next/server"

const MAILTRAP_SEND_URL = "https://send.api.mailtrap.io/api/send"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      legalCompanyName,
      operatingName,
      cvorNscNumber,
      signerFullName,
      signerTitle,
      businessEmail,
      businessPhone,
      clientTimestamp,
    } = body

    if (!legalCompanyName || !signerFullName || !businessEmail || !cvorNscNumber) {
      return NextResponse.json(
        { error: "Required legal execution fields are missing." },
        { status: 400 }
      )
    }

    // Capture IP and Network Fingerprint
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "Internal Network"
    const userAgent = request.headers.get("user-agent") || "Unknown Device"

    // Generate Immutable Confirmation ID and Server Timestamp
    const confirmationId = `RTS-TOS-${new Date().getFullYear()}-${Math.floor(
      100000 + Math.random() * 900000
    )}`
    const serverTimestamp = new Date().toISOString()
    const easternTimeFormatted = new Date().toLocaleString("en-CA", {
      timeZone: "America/Toronto",
      dateStyle: "full",
      timeStyle: "medium",
    }) + " (Eastern Time)"

    const mailtrapToken = process.env.MAILTRAP_API_TOKEN
    const destinationEmail = process.env.EMAIL_TO || "contactus@radiancetrucking.com"

    const auditEmailText = `
=================================================================
RADIANCE TRUCKING SOLUTIONS LLP (RTS)
LEGAL EXECUTION RECORD: MASTER TERMS OF SERVICE v2.2
=================================================================

CONFIRMATION ID: ${confirmationId}
EXECUTION STATUS: DIGITALLY EXECUTED & AUDITED
SERVER TIMESTAMP (UTC): ${serverTimestamp}
EASTERN TIME (ONTARIO): ${easternTimeFormatted}

--- CARRIER ENTITY DETAILS ---
Legal Corporate Name: ${legalCompanyName}
Operating Name (DBA): ${operatingName || "N/A"}
CVOR / NSC Authority #: ${cvorNscNumber}

--- AUTHORIZED SIGNER CREDENTIALS ---
Signer Full Name: ${signerFullName}
Corporate Title: ${signerTitle}
Official Business Email: ${businessEmail}
Direct Contact Phone: ${businessPhone}

--- AUDIT & NETWORK FORENSICS ---
Signer IP Address: ${clientIp}
Device / Browser User-Agent: ${userAgent}
Client Submitted Time: ${clientTimestamp || "N/A"}
Agreement Document Version: RTS Master Terms of Service v2.2
Governing Law: Province of Ontario, Canada

=================================================================
This electronic record was generated pursuant to the Ontario Electronic
Commerce Act, 2000. It constitutes an immutable audit trail of carrier
consent and execution.
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
            name: "RTS Legal Compliance",
          },
          to: [
            {
              email: destinationEmail,
            },
            {
              email: businessEmail,
            },
          ],
          subject: `[LEGAL EXECUTION] RTS Master Terms v2.2 - ${legalCompanyName} (${confirmationId})`,
          text: auditEmailText,
          category: "TOS Execution",
        }),
      })
    } else {
      console.log("Mailtrap token not configured; logged audit record:\n", auditEmailText)
    }

    return NextResponse.json({
      success: true,
      confirmationId,
      timestamp: easternTimeFormatted,
      signerName: signerFullName,
      companyName: legalCompanyName,
    })
  } catch (err) {
    console.error("Terms execution error:", err)
    return NextResponse.json(
      { error: "Internal server error while recording execution." },
      { status: 500 }
    )
  }
}
