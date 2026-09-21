import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set — contact form email not sent.");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }
    const resend = new Resend(apiKey);

    const { name, email, phone, company, service, budget, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Adshouz Website <adshouz@dieferee.resend.app>",
      to: [process.env.CONTACT_TO_EMAIL || "contact@adshouz.com"],
      replyTo: email,
      subject: `New Enquiry from ${name} — Adshouz`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;background:#f9f9f9;padding:0;border-radius:16px;overflow:hidden;">
          
          <!-- Header -->
          <div style="background:linear-gradient(135deg,#7C3AED,#4F46E5);padding:28px 32px;">
            <h1 style="color:white;margin:0;font-size:20px;font-weight:900;">New Contact Form Submission</h1>
            <p style="color:rgba(255,255,255,0.65);margin:6px 0 0;font-size:13px;">Adshouz — adshouz.com</p>
          </div>

          <!-- Body -->
          <div style="padding:28px 32px;background:#ffffff;">
            <table style="width:100%;border-collapse:collapse;">
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:11px 0;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;width:160px;">Full Name</td>
                <td style="padding:11px 0;color:#111827;font-weight:700;font-size:14px;">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:11px 0;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Email</td>
                <td style="padding:11px 0;font-size:14px;"><a href="mailto:${email}" style="color:#7C3AED;font-weight:700;text-decoration:none;">${email}</a></td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:11px 0;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Phone</td>
                <td style="padding:11px 0;color:#111827;font-weight:700;font-size:14px;"><a href="tel:${phone}" style="color:#111827;text-decoration:none;">${phone}</a></td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:11px 0;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Company/Website</td>
                <td style="padding:11px 0;color:#111827;font-weight:700;font-size:14px;">${company || "Not provided"}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:11px 0;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Service</td>
                <td style="padding:11px 0;font-size:14px;">
                  <span style="background:#EDE9FE;color:#6D28D9;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:700;">${service || "Not specified"}</span>
                </td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:11px 0;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Budget</td>
                <td style="padding:11px 0;font-size:14px;">
                  <span style="background:#D1FAE5;color:#065F46;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:700;">${budget || "Not specified"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:11px 0;color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;">Message</td>
                <td style="padding:11px 0;color:#374151;font-size:14px;line-height:1.6;">${message ? message.replace(/\n/g, "<br/>") : "No message provided."}</td>
              </tr>
            </table>
          </div>

          <!-- Reply tip -->
          <div style="margin:0 32px 28px;padding:14px 16px;background:#EDE9FE;border-radius:10px;border-left:4px solid #7C3AED;">
            <p style="margin:0;color:#5B21B6;font-size:12px;">
              💡 <strong>Hit Reply</strong> to respond directly to <strong>${name}</strong> at <strong>${email}</strong>
            </p>
          </div>

          <!-- Footer -->
          <div style="padding:16px 32px;background:#f9f9f9;border-top:1px solid #f0f0f0;">
            <p style="margin:0;color:#d1d5db;font-size:11px;text-align:center;">Adshouz · adshouz.com · Delhi, India</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
