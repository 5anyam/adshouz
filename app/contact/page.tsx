// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  ArrowRight, ChevronRight, Zap, MessageSquare,
  Building2, Calendar, AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "info@adshouz.com";
const ADDRESS    = "Pitampura, Delhi, India";

// ─── Data ──────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: PHONE_DISP,
    sub: "Mon–Sat, 9 AM – 7 PM",
    href: `tel:${PHONE}`,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: EMAIL,
    sub: "Reply within 4 hours",
    href: `mailto:${EMAIL}`,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi, India",
    sub: "Serving clients Pan India",
    href: "https://maps.google.com",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat",
    sub: "9:00 AM – 7:00 PM IST",
    href: null,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

const services = [
  "Google Ads (Search / Display / YouTube / Shopping)",
  "SEO (Local / Technical / Content Marketing)",
  "Social Media Ads (Meta / LinkedIn / YouTube)",
  "Performance Marketing & Retargeting",
  "Web Development (Next.js / WordPress / Landing Pages)",
  "Brand Bidding",
  "Multiple Services",
  "Not Sure — Need Guidance",
];

const budgets = [
  "Under ₹20,000/month",
  "₹20,000 – ₹50,000/month",
  "₹50,000 – ₹1,00,000/month",
  "₹1,00,000 – ₹3,00,000/month",
  "₹3,00,000+/month",
];

const steps = [
  { step: "01", title: "Submit Form",       desc: "Fill out the form and we'll receive your details instantly." },
  { step: "02", title: "Discovery Call",    desc: "A 30-min call to understand your goals, competition, and current setup." },
  { step: "03", title: "Free Audit",        desc: "We audit your current digital presence and identify growth opportunities." },
  { step: "04", title: "Strategy & Quote",  desc: "You receive a clear strategy and transparent pricing — no obligation." },
];

const faqs = [
  {
    q: "How quickly will you respond to my enquiry?",
    a: "We respond to all enquiries within 4 business hours on weekdays. For urgent matters, call us directly — our team is available Mon–Sat, 9 AM–7 PM IST.",
  },
  {
    q: "Is the initial consultation really free?",
    a: "Yes, completely free. The discovery call and audit involve no charges or obligations. We share our findings and recommendations regardless of whether you decide to work with us.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Absolutely. We work with businesses at every stage — from early-stage startups with ₹20,000/month budgets to established brands spending ₹50L+/month. Our recommendations are always calibrated to your budget and stage.",
  },
  {
    q: "Can I meet in person at your Delhi office?",
    a: "Yes — we welcome in-person meetings at our Delhi office. Schedule via the form or call us to book a time. We also serve clients remotely across India and internationally.",
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Replace with your actual form submission logic
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-indigo-600/8 dark:bg-indigo-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Contact</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
              <MessageSquare className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                Free Audit · No Obligation · Reply in 4 Hours
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Let us Grow Your </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500">
                Business Together
              </span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Tell us about your business and goals. We will audit your current
              digital presence and give you a
              <strong className="text-gray-900 dark:text-white"> clear, actionable strategy — completely free.</strong>
            </p>

            <div className="flex flex-wrap gap-4">
              {["Free Audit Included", "No Lock-in Contracts", "Response in 4 Hours", "Pan India + International"].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-white/50 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-7">
            <path d="M0,18 C360,36 1080,0 1440,18 L1440,36 L0,36 Z" className="fill-gray-50 dark:fill-[#0F0F14]" />
          </svg>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ───────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-[#0F0F14] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map(({ icon: Icon, label, value, sub, href, color, bg }, i) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={i}
                  {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                  className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/40 hover:-translate-y-0.5 transition-all group"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
                >
                  <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <div className="text-[11px] text-gray-400 dark:text-white/35 font-medium mb-0.5">{label}</div>
                  <div className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm leading-snug">{value}</div>
                  <div className="text-[11px] text-gray-400 dark:text-white/35 mt-0.5">{sub}</div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ───────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

            {/* ── FORM ──────────────────────────────────────── */}
            <div>
              <div className="mb-7">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">
                  Get Your Free{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                    Digital Audit
                  </span>
                </h2>
                <p className="text-gray-400 dark:text-white/40 text-sm">
                  Fill in your details — we will review and get back within 4 hours.
                </p>
              </div>

              {status === "success" ? (
                /* ── Success State ── */
                <div className="bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/20 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-500 dark:text-white/50 text-sm mb-5 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will review your details
                    and contact you within 4 business hours.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" }); }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 dark:text-violet-400 hover:opacity-80 transition-opacity"
                  >
                    <ArrowRight className="w-4 h-4" /> Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-white/70 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/25 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-white/70 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/25 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-white/70 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/25 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-white/70 mb-1.5">
                        Company / Website
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="yourcompany.com"
                        className="w-full bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/25 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-white/70 mb-1.5">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service...</option>
                      {services.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-white/70 mb-1.5">
                      Monthly Marketing Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                      {budgets.map((b, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                          className={cn(
                            "px-3 py-2.5 rounded-xl text-[11px] font-semibold border transition-all text-center",
                            form.budget === b
                              ? "bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-500/20"
                              : "bg-gray-50 dark:bg-[#13131A] border-gray-200 dark:border-white/[0.08] text-gray-600 dark:text-white/55 hover:border-violet-400/50 hover:text-violet-600 dark:hover:text-violet-400"
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-white/70 mb-1.5">
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What are you trying to achieve? E.g. increase leads, grow e-commerce revenue, improve rankings..."
                      className="w-full bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/25 focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all resize-none"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 dark:bg-red-500/5 border border-red-200 dark:border-red-500/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message & Get Free Audit
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-400 dark:text-white/30">
                    By submitting this form, you agree to be contacted by our team.
                    We never share your data with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ───────────────────────────────────── */}
            <div className="lg:sticky lg:top-24 space-y-4">

              {/* What Happens Next */}
              <div className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 dark:border-white/[0.05]">
                  <h3 className="font-black text-gray-900 dark:text-white text-sm">What Happens Next?</h3>
                </div>
                <div className="p-5 space-y-4">
                  {steps.map(({ step, title, desc }, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-7 h-7 bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-lg flex items-center justify-center font-black text-[11px] shadow-sm shadow-violet-500/20">
                          {step}
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-px flex-1 bg-gradient-to-b from-violet-400/30 to-transparent mt-1.5 min-h-[12px]" />
                        )}
                      </div>
                      <div className="pt-0.5">
                        <div className="font-bold text-gray-900 dark:text-white text-xs mb-0.5">{title}</div>
                        <p className="text-gray-400 dark:text-white/40 text-[11px] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-5 text-white shadow-xl shadow-violet-500/20">
                <h3 className="font-black text-sm mb-1">Prefer to Talk Directly?</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-4">
                  Skip the form — call or WhatsApp us right now.
                </p>
                <div className="space-y-2.5">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-2.5 bg-white/15 hover:bg-white/25 transition-colors rounded-xl px-4 py-3 text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" /> {PHONE_DISP}
                  </a>
                  <a
                    href={`https://wa.me/${PHONE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 transition-colors rounded-xl px-4 py-3 text-xs font-bold"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3 text-xs font-bold"
                  >
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" /> {EMAIL}
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5">
                <h3 className="font-black text-gray-900 dark:text-white text-sm mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-violet-500" /> Office Hours
                </h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM", active: true },
                    { day: "Saturday",        hours: "10:00 AM – 5:00 PM", active: true },
                    { day: "Sunday",          hours: "Closed", active: false },
                  ].map(({ day, hours, active }, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 dark:text-white/60">{day}</span>
                      <span className={cn(
                        "font-bold",
                        active ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-white/30"
                      )}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/[0.05] flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-[11px] text-gray-400 dark:text-white/35">Currently available</span>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5">
                <h3 className="font-black text-gray-900 dark:text-white text-sm mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-500" /> Location
                </h3>
                <p className="text-xs text-gray-500 dark:text-white/50 leading-relaxed mb-3">
                  Based in Delhi, India. Serving clients across India and internationally with remote-first delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Delhi NCR", "Mumbai", "Bangalore", "Pan India", "UK / UAE"].map((loc) => (
                    <span key={loc} className="text-[11px] font-medium bg-gray-100 dark:bg-white/[0.05] text-gray-500 dark:text-white/40 px-2.5 py-1 rounded-full">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="group bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors list-none">
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/90 pr-4">{q}</span>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-violet-500 group-open:text-violet-500 group-open:bg-violet-500/10 transition-all font-bold text-base">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-gray-500 dark:text-white/50 text-sm leading-relaxed border-t border-gray-100 dark:border-white/[0.05]">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-indigo-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-200">
              See Real Growth?
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Join 500+ businesses that trust Rigveda Ads to manage their digital
            marketing and deliver measurable ROI every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group"
            >
              <Zap className="w-4 h-4" />
              Get Free Audit Now
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all text-sm"
            >
              <Phone className="w-4 h-4" /> {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
