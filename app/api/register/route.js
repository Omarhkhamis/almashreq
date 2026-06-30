/* global process, Response */

import nodemailer from "nodemailer";

const recipientEmail = "info@almashraq-sa.com";

function hasMailConfig() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function cleanField(value) {
  return String(value || "").trim();
}

export async function POST(request) {
  if (!hasMailConfig()) {
    return Response.json({ message: "Mail service is not configured." }, { status: 500 });
  }

  const body = await request.json();
  const name = cleanField(body.name);
  const phone = cleanField(body.phone);

  if (!name || !phone) {
    return Response.json({ message: "Name and phone are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const subject = "طلب جديد من موقع المشرق للاستثمار";
  const text = [
    "وصل طلب جديد من نموذج الموقع.",
    "",
    `الاسم أو الشركة: ${name}`,
    `رقم الجوال: ${phone}`,
    "",
    "يرجى التواصل مع العميل في أقرب وقت."
  ].join("\n");

  await transporter.sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: recipientEmail,
    subject,
    text,
    replyTo: process.env.MAIL_REPLY_TO || recipientEmail
  });

  return Response.json({ message: "Message sent successfully." });
}
