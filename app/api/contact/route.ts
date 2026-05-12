import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const MAILTRAP_SEND_URL = "https://send.api.mailtrap.io/api/send"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, phoneNumber, emailAddress, region, message } = body

    if (!fullName || !phoneNumber || !emailAddress || !region || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    const apiToken = process.env.MAILTRAP_API_TOKEN
    const emailTo = process.env.EMAIL_TO
    const emailFrom = process.env.EMAIL_FROM || "contactus@radiancetrucking.com"

    if (!apiToken) {
      return NextResponse.json(
        { error: "Mailtrap API token is not configured." },
        { status: 500 }
      )
    }

    if (!emailTo) {
      return NextResponse.json(
        { error: "Recipient email not configured." },
        { status: 500 }
      )
    }

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${emailAddress}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `

    const apiResponse = await fetch(MAILTRAP_SEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Token": apiToken,
      },
      body: JSON.stringify({
        from: { email: emailFrom, name: "RTS Contact Form" },
        to: [{ email: emailTo }],
        subject: `New contact request from ${fullName}`,
        text: `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${emailAddress}\nRegion: ${region}\nMessage: ${message}`,
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
