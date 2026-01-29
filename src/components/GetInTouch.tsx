"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  title: string;
  message: string;
};

type SendStatus = "idle" | "sending" | "sent" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_9hf5n4v";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_56oohyc";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; 

export default function GetInTouch() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [status, setStatus] = useState<SendStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(key: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    if (!PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage("Email service is not configured yet. Please set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.");
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          title: form.title,
          message: form.message,
          to_email: "sai.usa@urios.edu.ph",
          reply_to: form.email,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("sent");
      setForm({ name: "", email: "", title: "", message: "" });
    } catch (error) {
      console.error("EmailJS send failed", error);
      const message = getErrorMessage(error);
      setErrorMessage(message);
      setStatus("error");
    }
  }

  function getErrorMessage(error: unknown) {
    if (typeof error === "string") return error;
    if (error && typeof error === "object" && "text" in error && typeof (error as any).text === "string") {
      return (error as any).text;
    }
    return "Something went wrong. Please try again.";
  }

  return (
    <section id="contact" className="py-20 px-4 bg-beige relative overflow-hidden">
      <div className="absolute top-10 right-8 w-16 h-16 bg-accent-pink rounded-full floating-icon opacity-30"></div>
      <div className="absolute bottom-16 left-6 w-20 h-20 bg-accent-blue rounded-full floating-icon opacity-30" style={{ animationDelay: "0.6s" }}></div>

      <div className="max-w-4xl mx-auto relative z-10 decorative-frame bg-white p-8 md:p-10 shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black mb-2">Get in touch</h2>
          <p className="text-base md:text-lg text-gray-700">Send me a note and I will get back to you soon.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              required
              placeholder="Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent-blue"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent-blue"
            />
          </div>

          <input
            required
            placeholder="Subject"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent-blue"
          />

          <textarea
            required
            placeholder="Message"
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-accent-blue"
          />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-accent-pink text-white px-5 py-2 rounded-md font-semibold shadow hover:opacity-90 disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send message"}
            </button>
          </div>

          {status === "sent" && (
            <p className="text-sm text-green-600">Your message has been sent!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
