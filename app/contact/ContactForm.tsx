"use client";

import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  captcha?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  // Số điện thoại Việt Nam: 10 số, bắt đầu bằng 0 hoặc +84 và các đầu số di động phổ biến
  const v = value.replace(/\s+/g, "");
  return /^((\+84)|0)(3|5|7|8|9)\d{8}$/.test(v);
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const n = name.trim();
    const em = email.trim();
    const ph = phone.trim();
    const s = subject.trim();
    const m = message.trim();

    const nextErrors: FieldErrors = {};

    if (!n) {
      nextErrors.name = "Vui lòng nhập họ tên.";
    }
    if (!em) {
      nextErrors.email = "Vui lòng nhập email.";
    } else if (!isValidEmail(em)) {
      nextErrors.email = "Email không hợp lệ.";
    }
    if (!ph) {
      nextErrors.phone = "Vui lòng nhập số điện thoại.";
    } else if (!isValidPhone(ph)) {
      nextErrors.phone = "Số điện thoại không hợp lệ.";
    }
    if (!s) {
      nextErrors.subject = "Vui lòng nhập chủ đề.";
    }
    if (!m) {
      nextErrors.message = "Vui lòng nhập nội dung.";
    } else {
      const wordCount = m.split(/\s+/).filter(Boolean).length;
      if (wordCount > 500) {
        nextErrors.message = "Nội dung tối đa 500 từ.";
      }
    }
    if (!captchaToken) {
      nextErrors.captcha = "Vui lòng xác minh reCAPTCHA.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Vui lòng kiểm tra lại các trường được đánh dấu.",
      });
      return;
    }

    setErrors({});

    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: n,
          email: em,
          phone: ph,
          subject: s,
          message: m,
          captchaToken,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(data?.message || "Gửi thất bại. Vui lòng thử lại.");
      }

      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      setStatus({
        type: "success",
        message: "Gửi thành công! Chúng tôi sẽ phản hồi sớm nhất.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error ? err.message : "Gửi thất bại. Vui lòng thử lại.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row">
        <div className="col-sm-6">
          <div className={`single-form ${errors.name ? "has-error" : ""}`}>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={80}
              placeholder=""
              data-placeholder-vi="Họ tên *"
              data-placeholder-en="Name *"
              aria-label="Họ tên"
              autoComplete="name"
            />
            {errors.name && <div className="field-error-text">{errors.name}</div>}
          </div>
        </div>
        <div className="col-sm-6">
          <div className={`single-form ${errors.email ? "has-error" : ""}`}>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={120}
              placeholder=""
              data-placeholder-vi="Email *"
              data-placeholder-en="Email *"
              aria-label="Email"
              autoComplete="email"
            />
            {errors.email && <div className="field-error-text">{errors.email}</div>}
          </div>
        </div>
        <div className="col-sm-6">
          <div className={`single-form ${errors.phone ? "has-error" : ""}`}>
            <input
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={20}
              placeholder=""
              data-placeholder-vi="Số điện thoại *"
              data-placeholder-en="Phone *"
              aria-label="Số điện thoại"
              autoComplete="tel"
            />
            {errors.phone && <div className="field-error-text">{errors.phone}</div>}
          </div>
        </div>
        <div className="col-sm-12">
          <div className={`single-form ${errors.subject ? "has-error" : ""}`}>
            <input
              name="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              maxLength={120}
              placeholder=""
              data-placeholder-vi="Chủ đề *"
              data-placeholder-en="Subject *"
              aria-label="Chủ đề"
            />
            {errors.subject && <div className="field-error-text">{errors.subject}</div>}
          </div>
        </div>
        <div className="col-sm-12">
          <div className={`single-form ${errors.message ? "has-error" : ""}`}>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={1000}
              placeholder=""
              data-placeholder-vi="Viết tin nhắn *"
              data-placeholder-en="Write A Message *"
              aria-label="Nội dung"
            />
            {errors.message && <div className="field-error-text">{errors.message}</div>}
          </div>
        </div>

        <div className="col-sm-12">
          <div className={`single-form ${errors.captcha ? "has-error" : ""}`}>
            {RECAPTCHA_SITE_KEY ? (
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token) => {
                  setCaptchaToken(token);
                  setErrors((prev) => ({ ...prev, captcha: undefined }));
                }}
              />
            ) : (
              <div className="field-error-text">
                Vui lòng cấu hình reCAPTCHA (NEXT_PUBLIC_RECAPTCHA_SITE_KEY).
              </div>
            )}
            {errors.captcha && <div className="field-error-text">{errors.captcha}</div>}
          </div>
        </div>

        {status.type !== "idle" && (
          <div className="col-sm-12">
            <div
              className={[
                "contact-form-status",
                status.type === "success" ? "is-success" : "",
                status.type === "error" ? "is-error" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              role={status.type === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              {status.type === "sending" && "Đang gửi..."}
              {status.type === "success" && status.message}
              {status.type === "error" && status.message}
            </div>
          </div>
        )}

        <div className="col-sm-12">
          <div className="form-btn">
            <button className="btn" type="submit" disabled={status.type === "sending"}>
              <span data-lang="vi">Gửi tin nhắn</span>
              <span data-lang="en">Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

