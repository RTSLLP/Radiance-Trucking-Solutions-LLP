import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const MAILTRAP_SEND_URL = "https://send.api.mailtrap.io/api/send"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, companyName, phoneNumber, emailAddress, truckCount, message } = body

    if (!fullName || !phoneNumber || !emailAddress || !message) {
      return NextResponse.json(
        { error: "Name, phone, email, and message are required." },
        { status: 400 }
      )
    }

    const apiToken = process.env.MAILTRAP_API_TOKEN
    const emailTo = process.env.EMAIL_TO || "contactus@radiancetrucking.com"
    const emailFrom = process.env.EMAIL_FROM || "contactus@radiancetrucking.com"

    if (!apiToken) {
      return NextResponse.json(
        { error: "Mailtrap API token is not configured." },
        { status: 500 }
      )
    }

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6; max-width: 600px;">
        <h2 style="color: #0D183D; border-bottom: 2px solid #FF1E2D; padding-bottom: 8px;">New 'Get a Dispatcher' Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company / Carrier:</strong> ${companyName || "N/A"}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${emailAddress}</p>
        <p><strong>Active Trucks:</strong> ${truckCount || "1"}</p>
        <p><strong>Operational Details / Message:</strong></p>
        <div style="background-color: #f4f6f8; padding: 12px; border-radius: 6px;">
          ${message.replace(/\n/g, "<br />")}
        </div>
      </div>
    `

    const apiResponse = await fetch(MAILTRAP_SEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Token": apiToken,
      },
      body: JSON.stringify({
        from: { email: emailFrom, name: "RTS Dispatch Inquiry" },
        to: [{ email: emailTo }],
        subject: `New Dispatch Inquiry: ${fullName} (${companyName || "Carrier"})`,
        text: `Name: ${fullName}\nCompany: ${companyName}\nPhone: ${phoneNumber}\nEmail: ${emailAddress}\nTrucks: ${truckCount}\nMessage: ${message}`,
        html,
        reply_to: { email: emailAddress, name: fullName },
      }),
    })

    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text()
      console.error("Mailtrap send error:", apiResponse.status, errorBody)
      return NextResponse.json(
        { error: "Failed to send email through Mailtrap." },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Server error." },
      { status: 500 }
    )
  }
}
