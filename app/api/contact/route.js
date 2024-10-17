import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // replace with your sender email
      to: "chogueuramine@gmail.com", // form input email
      subject: "Message from made4cloud LTD ",
      html: `<p>Name: ${body.name}</p><p>Email: ${body.email}</p><p>Message: ${body.message}</p>`,
    });

    return NextResponse.json({ status: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { status: "Email sending failed", error },
      { status: 500 }
    );
  }
}
