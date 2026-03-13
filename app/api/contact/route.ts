import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  captchaToken: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let data: Partial<ContactPayload> = {};
  try {
    data = (await req.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = isNonEmptyString(data.name) ? data.name.trim() : "";
  const email = isNonEmptyString(data.email) ? data.email.trim() : "";
  const phone = isNonEmptyString(data.phone) ? data.phone.trim() : "";
  const subject = isNonEmptyString(data.subject) ? data.subject.trim() : "";
  const message = isNonEmptyString(data.message) ? data.message.trim() : "";
  const captchaToken = isNonEmptyString(data.captchaToken) ? data.captchaToken.trim() : "";

  if (!name || !email || !phone || !subject || !message) {
    return NextResponse.json(
      { ok: false, message: "Vui lòng nhập đầy đủ thông tin." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Email không hợp lệ." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

  if (!recaptchaSecret) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "reCAPTCHA chưa được cấu hình (RECAPTCHA_SECRET_KEY). Vui lòng cấu hình để gửi mail an toàn.",
      },
      { status: 500 },
    );
  }

  if (!captchaToken) {
    return NextResponse.json(
      { ok: false, message: "Thiếu mã xác minh reCAPTCHA." },
      { status: 400 },
    );
  }

  if (!host || !portRaw || !user || !pass) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Email service chưa được cấu hình (SMTP_*). Vui lòng cấu hình SMTP để gửi mail.",
      },
      { status: 500 },
    );
  }

  const port = Number(portRaw);
  const secure = port === 465;
  const toEmail = process.env.CONTACT_TO_EMAIL || "daomquan2722004@gmail.com";
  const fromEmail = process.env.SMTP_FROM || user;

  try {
    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(
        captchaToken,
      )}`,
    });

    const verifyData = (await verifyResponse.json()) as {
      success: boolean;
      score?: number;
      "error-codes"?: string[];
    };

    if (!verifyData.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Xác minh reCAPTCHA không thành công. Vui lòng thử lại.",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const text = [
      "Bạn vừa nhận được liên hệ từ website iVista:",
      "",
      `Họ tên: ${name}`,
      `Email: ${email}`,
      `Số điện thoại: ${phone}`,
      `Chủ đề: ${subject}`,
      "",
      "Nội dung:",
      message,
    ].join("\n");

    const info = await transporter.sendMail({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: `[iVista] ${subject}`,
      text,
    });

    return NextResponse.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error("Contact form email error:", err);

    const errorMessage =
      err instanceof Error
        ? err.message
        : "Không gửi được email do lỗi không xác định.";

    return NextResponse.json(
      {
        ok: false,
        message: `Gửi thất bại. Vui lòng thử lại sau. (Chi tiết: ${errorMessage})`,
      },
      { status: 500 },
    );
  }
}

