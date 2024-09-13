import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message, phone } = await req.json();

    // Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email details
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `Contact form submission from ${name}`,
      text: `Message: ${message}\nPhone: ${phone}`,

      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    // Return success response using NextResponse
    return NextResponse.json(
      { message: "Your email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
