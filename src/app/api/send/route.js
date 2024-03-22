import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  console.log("test");
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Wassim@simoportfolio.com",
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>
            <span className="font-semibold"> Subject:</span> {subject}
          </h1>
          <p>Thank you for contacting me!</p>
          <p className="font-semibold">New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
