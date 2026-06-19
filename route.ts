import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Here you would typically integrate with SendGrid, Resend, or Nodemailer
    // For now, we simulate a successful email send to "hello@madbirdstudio.com" or the CV email.
    console.log("New message received:", { name, email, message });

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 });
  }
}
