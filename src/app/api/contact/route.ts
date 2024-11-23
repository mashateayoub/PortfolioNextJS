import { NextResponse } from 'next/server'
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Updated email template with more professional formatting
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <div style="font-family: 'Geist Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #020817; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
          <!-- Header -->
          <div style="background: linear-gradient(to right, rgba(34, 197, 94, 0.05), rgba(34, 197, 94, 0.02)); padding: 24px; border-bottom: 1px solid rgba(34, 197, 94, 0.1);">
            <h2 style="color: #15803d; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h2>
          </div>
          
          <!-- Content -->
          <div style="padding: 24px;">
            <div style="margin-bottom: 24px;">
              <p style="margin: 8px 0;">
                <strong style="color: #15803d;">From:</strong> 
                <span style="color: #020817;">${name}</span>
              </p>
              <p style="margin: 8px 0;">
                <strong style="color: #15803d;">Email:</strong> 
                <a href="mailto:${email}" style="color: #15803d; text-decoration: none;">${email}</a>
              </p>
            </div>

            <div style="margin-top: 24px;">
              <h3 style="color: #15803d; font-size: 18px; margin-bottom: 12px;">Message:</h3>
              <div style="background-color: rgba(34, 197, 94, 0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.1);">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 16px 24px; background-color: rgba(34, 197, 94, 0.02); border-top: 1px solid rgba(34, 197, 94, 0.1); font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">This is an automated message from your portfolio contact form.</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
} 