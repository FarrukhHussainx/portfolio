import nodemailer from "nodemailer";

import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { subject, email, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // e.g., Gmail, Outlook, etc.
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS,
      },
    });

    const g = await transporter.sendMail({
      from: email,
      to: "farrukhhussainofficial@gmail.com",
      subject: `${subject}`,

      text: `This message is from ${email},\n\n${message}`,
    });
    console.log(g);

    return new NextResponse({ status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500 });
  }
};
