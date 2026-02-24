"use client";

import { Metadata } from "next";
import {
  Phone, Mail, MapPin, Clock, MessageSquare,
  Shield, Zap, Target, BarChart3, Globe,
  ArrowRight, CheckCircle2, ChevronDown, Star
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+91 78400 00618",
    href: "tel:+917840000618",
    sub: "Mon – Sat, 10:00 AM – 7:00 PM",
    cta: "Call Now",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    primary: "+91 78400 00618",
    href: "https://wa.me/917840000618",
    sub: "Quick replies within minutes",
    cta: "Chat Now",
    external: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@rigvedaadds.com",
    href: "mailto:info@rigvedaadds.com",
    sub: "Response within 24 hours",
    cta: "Send Email",
  },
  {
    icon: MapPin,
    title: "Office",
    primary: "New Delhi, India",
    href: "https://maps.google.com/?q=Rohini+New+Delhi",
    sub: "D-7/296, 2nd Floor, Sector-6, Rohini",
    cta: "Get Directions",
    external: true,
  },
];

const whyUs = [
  { icon: Shield,   title: "Google Certified",    desc: "Official Google Partner with certified expertise in Search, Display, and YouTube ads." },
  { icon: Target,   title: "ROI Focused",          desc: "Every campaign is optimised to maximise your return — we track every rupee spent." },
  { icon: BarChart3,title: "Full Transparency",    desc: "Weekly reports and live dashboards. No hidden fees, no vague metrics." },
  { icon: Globe,    title: "Pan-India + Global",   desc: "Campaigns across India and international markets including US, UK, UAE." },
];

const services = [
  "Google Search & Display Ads",
  "YouTube Video Advertising",
  "Facebook & Instagram Ads",
  "Brand Bidding Campaigns",
  "SEO & Organic Growth",
  "Performance Marketing",
  "International Campaigns",
  "Landing Page Development",
];

const faqs = [
  {
    q: "How do I get started with Rigveda Ads?",
    a: "Start with a free Google Ads audit — call us or fill the form. We'll analyse your current campaigns (or competitors) and share a custom strategy within 24 hours.",
  },
  {
    q: "Do you work with businesses outside Delhi?",
    a: "Yes, we work with clients pan-India and internationally. All work is done remotely with regular video calls, weekly reports and live dashboard access.",
  },
  {
    q: "What is your minimum ad budget requirement?",
    a: "We work with budgets starting from ₹15,000/month in ad spend. Our management fee is separate and depends on campaign complexity. Free audit first — no commitment.",
  },
  {
    q: "How soon can I expect results from Google Ads?",
    a: "Most clients see measurable improvements within the first 2 weeks. Full optimisation typically takes 30–60 days as we gather enough data to fine-tune targeting and bids.",
  },
  {
    q: "Will you run ads for my competitors' brand names?",
    a: "Yes — competitor bidding and brand protection campaigns are one of our specialties. We can both protect your brand from competitor ads and run ads on competitor keywords.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Absolutely. We offer a free 30-minute strategy call + free Google Ads audit for all new prospects. No obligation, no pressure — just honest advice.",
  },
];

// ─── Label ────────────────────────────────────────────────────────────────────
const Label = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 mb-4">
    <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
      <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
    </span>
    <span className="text-violet-400 font-semibold text-sm">{text}</span>
  </div>
);

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-[#13131A] border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? "border-violet-500/30" : "border-white/5 hover:border-white/10"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-white/85 text-sm pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-violet-400 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="px-6 pb-6 text-white/45 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

// ─── Contact Form ─────────────────────────────────────────────────────────────
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", budget: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", email: "", service: "", budget: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">
            Full Name *
          </label>
          <input
            type="text" required value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your name"
            className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">
            Phone Number *
          </label>
          <input
            type="tel" required value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">
          Email Address
        </label>
        <input
          type="email" value={form.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@company.com"
          className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">
            Service Needed
          </label>
          <select
            value={form.service} onChange={(e) => set("service", e.target.value)}
            className="w-full bg-[#13131A] border border-white/8 rounded-xl px-4 py-3 text-sm text-white/60 focus:outline-none focus:border-violet-500/50 transition-all appearance-none"
          >
            <option value="">Select a service</option>
            <option>Google Ads (PPC)</option>
            <option>SEO & Organic Growth</option>
            <option>Facebook & Instagram Ads</option>
            <option>Brand Bidding</option>
            <option>Performance Marketing</option>
            <option>International Campaigns</option>
            <option>Website Development</option>
            <option>Full Digital Strategy</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">
            Monthly Ad Budget
          </label>
          <select
            value={form.budget} onChange={(e) => set("budget", e.target.value)}
            className="w-full bg-[#13131A] border border-white/8 rounded-xl px-4 py-3 text-sm text-white/60 focus:outline-none focus:border-violet-500/50 transition-all appearance-none"
          >
            <option value="">Select budget range</option>
            <option>₹15,000 – ₹50,000</option>
            <option>₹50,000 – ₹1,00,000</option>
            <option>₹1,00,000 – ₹3,00,000</option>
            <option>₹3,00,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">
          Tell Us About Your Business
        </label>
        <textarea
          value={form.message} onChange={(e) => set("message", e.target.value)}
          rows={4} placeholder="What are your goals? Current challenges? Any context helps..."
          className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 text-sm"
      >
        {sent ? (
          <><CheckCircle2 className="w-5 h-5" /> Received! We will contact you within 2 hours.</>
        ) : (
          <><Zap className="w-5 h-5" /> Get Free Strategy Call <ArrowRight className="w-4 h-4" /></>
        )}
      </button>

      <p className="text-xs text-white/20 text-center">
        🔒 100% confidential. No spam. No obligation.
      </p>
    </form>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div className="bg-[#0B0B0F] text-white overflow-x-hidden">

      {/* ════════════ HERO */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[600px] h-[500px] bg-violet-700/20 rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)", backgroundSize: "44px 44px" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
            <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <Label text="Get In Touch" />
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.03] mb-5 tracking-tight">
              <span className="text-white">Let us </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-pink-300">
                Grow
              </span>
              <br />
              <span className="text-white">Your Ads</span>
            </h1>
            <p className="text-lg text-white/45 leading-relaxed">
              Book a free strategy call or send us a message. We will audit your
              current campaigns and recommend exactly what will move the needle.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT CARDS */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map(({ icon: Icon, title, primary, href, sub, cta, external }, i) => (
              <a
                key={i}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group bg-[#13131A] border border-white/5 rounded-2xl p-6 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="w-11 h-11 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <p className="text-xs font-bold text-white/25 uppercase tracking-widest mb-2">{title}</p>
                <p className="text-white font-bold text-sm mb-1">{primary}</p>
                <p className="text-white/35 text-xs mb-4 leading-snug">{sub}</p>
                <div className="inline-flex items-center gap-1 text-violet-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {cta} <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ MAIN GRID: FORM + SIDEBAR */}
      <section className="py-16 bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── Form (2 cols) */}
            <div className="lg:col-span-2">
              <div className="bg-[#13131A] border border-white/5 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <Label text="Free Consultation" />
                  <h2 className="text-3xl font-black text-white mb-2">
                    Start with a Free Audit
                  </h2>
                  <p className="text-white/40 text-sm mb-8">
                    Fill in your details — we will review your business and call you back
                    with a custom strategy within 2 hours.
                  </p>
                  <ContactForm />
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 bg-[#13131A] border border-white/5 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-semibold text-white/70">Our Office — New Delhi</span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6!2d77.1025!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzE0LjgiTiA3N8KwMDYnMDkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="240"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="px-6 py-4">
                  <p className="text-white/45 text-xs">
                    D-7/296, 2nd Floor, Sector-6, Rohini, New Delhi – 110086
                  </p>
                </div>
              </div>
            </div>

            {/* ── Sidebar */}
            <div className="space-y-5">

              {/* Quick CTA Card */}
              <div className="relative bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Available Now</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-4">
                    Need Immediate Help?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+917840000618"
                      className="flex items-center justify-center gap-2 bg-white text-violet-700 font-black py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full"
                    >
                      <Phone className="w-4 h-4" /> +91 78400 00618
                    </a>
                    <a
                      href="https://wa.me/917840000618"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-white/15 border border-white/20 text-white font-bold py-3 rounded-xl hover:bg-white/25 transition-colors text-sm w-full"
                    >
                      <MessageSquare className="w-4 h-4" /> WhatsApp Us
                    </a>
                    <a
                      href="mailto:info@rigvedaadds.com"
                      className="flex items-center justify-center gap-2 bg-white/15 border border-white/20 text-white font-bold py-3 rounded-xl hover:bg-white/25 transition-colors text-sm w-full"
                    >
                      <Mail className="w-4 h-4" /> info@rigvedaadds.com
                    </a>
                  </div>
                  <p className="text-white/50 text-xs text-center mt-4">
                    Mon – Sat · 10:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-[#13131A] border border-white/5 rounded-2xl p-6">
                <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-5">
                  Why Rigveda Ads?
                </p>
                <div className="space-y-4">
                  {whyUs.map(({ icon: Icon, title, desc }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm font-semibold">{title}</p>
                        <p className="text-white/35 text-xs mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services List */}
              <div className="bg-[#13131A] border border-white/5 rounded-2xl p-6">
                <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-5">
                  Our Services
                </p>
                <div className="space-y-2.5 mb-5">
                  {services.map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-violet-500/60 rounded-full flex-shrink-0" />
                      <span className="text-white/50 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 py-2.5 rounded-xl text-sm font-semibold transition-all w-full"
                >
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Credentials */}
              <div className="bg-[#13131A] border border-white/5 rounded-2xl p-6">
                <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-5">
                  Credentials
                </p>
                <div className="space-y-3">
                  {[
                    "Google Certified Partner",
                    "8+ Years Experience",
                    "500+ Campaigns Managed",
                    "300% Average Client ROI",
                    "Pan-India + International",
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                      <span className="text-white/55 text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Label text="FAQ" />
            <h2 className="text-3xl lg:text-5xl font-black">
              <span className="text-white">Common </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                Questions
              </span>
            </h2>
            <p className="text-white/35 mt-3 max-w-lg mx-auto text-sm">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
          </div>

          {/* Bottom still have questions */}
          <div className="mt-14 text-center">
            <div className="inline-block bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/15 rounded-2xl px-10 py-8">
              <h3 className="text-xl font-black text-white mb-2">Still Have Questions?</h3>
              <p className="text-white/40 text-sm mb-6 max-w-sm mx-auto">
                Our team is just one call away — free consultation, zero obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+917840000618"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all text-sm"
                >
                  <Phone className="w-4 h-4" /> Call +91 78400 00618
                </a>
                <a
                  href="https://wa.me/917840000618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/12 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/5 transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
