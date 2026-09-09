"use client";

import { useState, type FormEvent } from "react";
import { Send, Handshake, Zap, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";

const infoRows = [
  {
    icon: Handshake,
    title: "PARTNERSHIPS",
    text: "We are open to strategic partnerships that drive growth and create value.",
  },
  {
    icon: Zap,
    title: "INQUIRIES",
    text: "Have a question about our services? Contact us and we'll respond.",
  },
  {
    icon: Globe,
    title: "SUPPORT",
    text: "Our team is ready to provide the information and support you need.",
  },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactFormSection() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // TODO: Connect this to a real backend / email API service (e.g. EmailJS, SendGrid, or a custom API route).
      // For now, we log the form data and show a success message.
      console.log("Contact form submitted:", form);
      setSubmitted(true);
      setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="relative overflow-hidden bg-cream">
      <Blob tone="gold" size={420} className="absolute -top-24 -right-24 z-0" opacity={0.12} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT CARD — Form */}
          <Reveal variant="left">
            <div className="rounded-lg border border-gold/10 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
              <h2 className="font-[family-name:var(--font-heading)] text-[22px] font-bold text-text-dark">
                SEND US A MESSAGE
              </h2>
              <div className="mt-2 h-[3px] w-12 bg-gold" />
              <p className="mt-4 text-[13px] leading-relaxed text-text-dark/65">
                Fill out the form and our team will get back to you as soon as
                possible.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-md border border-gold/20 bg-gold/5 p-6 text-center">
                  <p className="text-[14px] font-semibold text-gold">
                    Thank you for your message!
                  </p>
                  <p className="mt-2 text-[12px] text-text-dark/60">
                    Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-text-dark/70"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        className={`w-full rounded-md border bg-cream/50 px-4 py-3 text-[13px] text-text-dark outline-none transition-colors focus:border-gold focus:ring-4 focus:ring-gold/15 ${
                          errors.fullName ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-red-500">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-text-dark/70"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`w-full rounded-md border bg-cream/50 px-4 py-3 text-[13px] text-text-dark outline-none transition-colors focus:border-gold focus:ring-4 focus:ring-gold/15 ${
                          errors.email ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-text-dark/70"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full rounded-md border border-gray-200 bg-cream/50 px-4 py-3 text-[13px] text-text-dark outline-none transition-colors focus:border-gold focus:ring-4 focus:ring-gold/15"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-text-dark/70"
                      >
                        Subject *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className={`w-full rounded-md border bg-cream/50 px-4 py-3 text-[13px] text-text-dark outline-none transition-colors focus:border-gold focus:ring-4 focus:ring-gold/15 ${
                          errors.subject ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-[11px] text-red-500">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-text-dark/70"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`w-full resize-none rounded-md border bg-cream/50 px-4 py-3 text-[13px] text-text-dark outline-none transition-colors focus:border-gold focus:ring-4 focus:ring-gold/15 ${
                        errors.message ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-shine mt-2 inline-flex h-[44px] w-full items-center justify-center gap-2 rounded bg-gold px-8 text-[11px] font-bold text-white uppercase tracking-wider transition-all hover:bg-gold-light hover:scale-[1.02] sm:w-auto sm:self-start"
                  >
                    SEND MESSAGE
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* RIGHT CARD — Info */}
          <Reveal delay={120} variant="right">
            <div className="rounded-lg border border-gold/10 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
              <h2 className="font-[family-name:var(--font-heading)] text-[22px] font-bold text-text-dark">
                WE WOULD LOVE TO HEAR FROM YOU
              </h2>
              <div className="mt-2 h-[3px] w-12 bg-gold" />
              <p className="mt-4 text-[13px] leading-relaxed text-text-dark/65">
                Whether you have a question about our services, want to explore a
                partnership, or need more information, we&apos;re here to help.
              </p>

              <div className="mt-8 flex flex-col gap-8">
                {infoRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                      </div>
                      <div className="min-w-0 pt-1">
                        <h3 className="text-[11px] font-bold uppercase tracking-wider text-text-dark">
                          {row.title}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-text-dark/65">
                          {row.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
