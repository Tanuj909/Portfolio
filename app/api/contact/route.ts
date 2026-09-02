import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || "tanujkashyap913@gmail.com";
    const emailPass = process.env.EMAIL_PASS;

    if (!emailPass) {
      console.warn("EMAIL_PASS is not configured in .env.local");
      return NextResponse.json(
        {
          error:
            "Server email credentials are not configured yet. Please set EMAIL_PASS in .env.local",
        },
        { status: 500 }
      );
    }

    // Configure Nodemailer Transporter
    const cleanPass = emailPass.replace(/\s+/g, "");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: cleanPass,
      },
    });

    // 1. Email to Tanuj (Admin Notification)
    const adminMailOptions = {
      from: `"Portfolio Contact Form" <${emailUser}>`,
      to: emailUser,
      replyTo: email,
      subject: `⚡ New Inquiry from ${name} [Portfolio]`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0d0f12; color: #f4f4f5; border-radius: 12px; border: 1px solid #27272a; padding: 28px; box-shadow: 0 8px 30px rgba(0,0,0,0.4);">
          <div style="border-bottom: 1px solid #27272a; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin: 0; color: #00f0ff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">New Portfolio Inquiry</h2>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #71717a; font-family: monospace;">From</p>
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #ffffff;">${name} &lt;<a href="mailto:${email}" style="color: #00f0ff; text-decoration: none;">${email}</a>&gt;</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #71717a; font-family: monospace;">Message Content</p>
            <div style="background-color: #12151a; border: 1px solid #27272a; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="border-top: 1px solid #27272a; padding-top: 16px; font-size: 12px; color: #71717a; display: flex; justify-content: space-between;">
            <span>Received via Portfolio Contact API</span>
            <span>Direct Reply-To: ${email}</span>
          </div>
        </div>
      `,
    };

    // 2. Auto-Reply Confirmation Email to Sender
    const senderConfirmationOptions = {
      from: `"Tanuj Kashyap" <${emailUser}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! | Tanuj Kashyap`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0d0f12; color: #f4f4f5; border-radius: 12px; border: 1px solid #27272a; padding: 32px; box-shadow: 0 8px 30px rgba(0,0,0,0.4);">
          <div style="border-bottom: 1px solid #27272a; padding-bottom: 20px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 4px 0; color: #ffffff; font-size: 22px; font-weight: 700;">Thanks for connecting, ${name}!</h2>
            <p style="margin: 0; font-size: 13px; color: #00f0ff; font-family: monospace;">// INQUIRY RECEIVED CONFIRMATION</p>
          </div>

          <p style="font-size: 15px; line-height: 1.6; color: #e4e4e7; margin-bottom: 20px;">
            Hi <strong>${name}</strong>,<br/><br/>
            Thank you for reaching out through my portfolio! I have received your message and will review it carefully.
          </p>

          <div style="background-color: #12151a; border-left: 3px solid #00f0ff; border-radius: 4px; padding: 14px 18px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 14px; font-weight: 500; color: #10b981;">
              ⚡ I will get back to you within 24 hours.
            </p>
          </div>

          <div style="margin-bottom: 28px;">
            <p style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #71717a; font-family: monospace;">Your Message Summary:</p>
            <div style="background-color: #181c22; border-radius: 6px; padding: 12px 16px; font-size: 13px; color: #a1a1aa; font-style: italic;">
              "${message}"
            </div>
          </div>

          <div style="border-top: 1px solid #27272a; padding-top: 20px; font-size: 13px; color: #a1a1aa; line-height: 1.6;">
            <strong style="color: #ffffff; font-size: 14px; display: block; margin-bottom: 2px;">Tanuj Kashyap</strong>
            <span style="color: #71717a;">Software Developer • Java & Web</span><br/>
            <a href="https://portfolio-seven-dun-14.vercel.app/" style="color: #00f0ff; text-decoration: none; font-size: 12px;">portfolio-seven-dun-14.vercel.app</a>
          </div>
        </div>
      `,
    };

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(senderConfirmationOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Emails dispatched successfully.",
    });
  } catch (error: unknown) {
    console.error("Error sending email via Nodemailer:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
