// app/services/seo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, TrendingUp, MapPin, Settings, PenTool,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  BarChart3, Globe, Zap, Link2, FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Services | Search Engine Optimisation | Adshouz Digital",
  description:
    "Data-driven SEO services — Local SEO, Technical SEO, and Content Marketing — that grow organic traffic, build authority, and generate leads on autopilot.",
  keywords: "seo services, search engine optimisation, seo agency Delhi, organic traffic, local seo, technical seo",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const subServices = [
  {
    icon: MapPin,
    title: "Local SEO",
    href: "/services/local-seo",
    desc: "Rank in Google Maps and local search. Dominate 'near me' searches and drive foot traffic and calls from your city.",
    color: "text-green-500",
    bg: "bg-green-500/10 group-hover:bg-green-500/20",
    border: "hover:border-green-400/40",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    href: "/services/technical-seo",
    desc: "Fix crawl errors, Core Web Vitals, site speed, and structured data — the foundation every high-ranking site is built on.",
    color: "text-blue-500",
    bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    border: "hover:border-blue-400/40",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    href: "/services/content-marketing",
    desc: "SEO-optimised blog posts, landing pages, and content strategy that ranks on Page 1 and converts visitors into leads.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    border: "hover:border-emerald-400/40",
  },
];

const services = [
  { icon: Search,   title: "Keyword Research",       desc: "Intent-mapped keyword strategy targeting buyer, informational, and navigational terms across your full funnel." },
  { icon: Globe,    title: "On-Page Optimisation",   desc: "Title tags, meta descriptions, H-tags, internal linking, and schema markup optimised on every page." },
  { icon: Link2,    title: "Link Building",          desc: "White-hat backlink acquisition from high-DA industry publications, directories, and editorial placements." },
  { icon: BarChart3,"title": "Rank Tracking",        desc: "Weekly keyword ranking reports with competitor benchmarking so you always know where you stand." },
  { icon: FileText, title: "SEO Audits",             desc: "Full technical and content audit with a prioritised action plan — delivered within 5 business days." },
  { icon: Zap,      title: "Core Web Vitals",        desc: "LCP, CLS, and INP optimised to meet Google's page experience thresholds and protect your rankings." },
];

const stats = [
  { value: "68%",  label: "Of online experiences start with search" },
  { value: "53%",  label: "Of all website traffic is organic" },
  { value: "14×",  label: "Higher close rate vs outbound leads" },
  { value: "∞",    label: "Organic traffic doesn't stop when you pause" },
];

const process = [
  { step: "01", title: "SEO Audit",           desc: "Technical audit + keyword gap analysis + competitor backlink research. You get a full picture of where you stand and what to fix first." },
  { step: "02", title: "Strategy & Roadmap",  desc: "Prioritised 6-month SEO roadmap — technical fixes, content plan, and link building targets — mapped to your revenue goals." },
  { step: "03", title: "On-Page & Technical", desc: "We fix every on-page issue, implement schema, improve site speed, and align content to target keywords." },
  { step: "04", title: "Content & Links",     desc: "Regular content publishing and backlink acquisition build authority steadily. Rankings compound month over month." },
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Technical fixes and on-page optimisation can show improvements in 4–8 weeks. Meaningful ranking gains for competitive keywords typically take 3–6 months. SEO is a compounding investment — results grow consistently over time and don't stop when you pause spending, unlike paid ads.",
  },
  {
    q: "Do I need all three SEO services — Local, Technical, and Content?",
    a: "It depends on your goals. Local businesses benefit most from Local SEO + Technical SEO. Content-heavy sites or those targeting national/global audiences need Content Marketing + Technical SEO. We recommend a combination after auditing your current site and competitive landscape.",
  },
  {
    q: "How do you build backlinks without risking a Google penalty?",
    a: "We use only white-hat link building — editorial outreach, guest posts on relevant publications, digital PR, and niche directory submissions. We never buy links or use private blog networks. Every link we build is one you'd be happy showing Google.",
  },
  {
    q: "Can you recover a site hit by a Google algorithm update?",
    a: "Yes. We conduct a full penalty audit — identifying thin content, toxic backlinks, or technical issues that triggered the drop. Recovery typically involves content improvements, backlink disavow, and technical fixes. Most sites we've worked with recovered within 2–4 months.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

export default function SEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-violet-600/8 dark:bg-violet-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">SEO</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-5">
              <Search className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                SEO · Organic Growth · Page 1 Rankings
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Rank Higher. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-violet-500">
                Get Found.
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Grow Without Ads.</span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              53% of all web traffic comes from organic search. We build data-driven
              SEO strategies that put you on Page 1 and keep you there —
              <strong className="text-gray-900 dark:text-white"> generating leads 24/7 without paying per click.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-emerald-500/25 text-sm group">
                Get Free SEO Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-emerald-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["White-hat Only", "Monthly Reports", "No Lock-in", "Google Penalty Recovery"].map((b) => (
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

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-[#0F0F14] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ value, label }, i) => (
              <div key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-emerald-400/40 hover:-translate-y-0.5 transition-all"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{value}</div>
                <div className="text-xs text-gray-400 dark:text-white/35 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB SERVICES ─────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                SEO Services
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Three specialised services that together cover every dimension of search rankings.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {subServices.map(({ icon: Icon, title, href, desc, color, bg, border }, i) => (
              <Link key={i} href={href}
                className={`bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 ${border} hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group block`}
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.1}s both` }}>
                <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className={`font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1 group-hover:${color} transition-colors`}>
                  {title}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 dark:text-white/40 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">
              Everything{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm">
              Across all SEO engagements, every client gets the full package.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-emerald-400/40 hover:-translate-y-1 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-emerald-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{title}</h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              How We Work
            </h2>
          </div>
          <div className="space-y-3">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-emerald-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-emerald-400/30 to-transparent mt-2 min-h-[16px]" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 dark:text-white/45 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
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
              <details key={i}
                className="group bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors list-none">
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/90 pr-4">{q}</span>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-emerald-500 group-open:text-emerald-500 group-open:bg-emerald-500/10 transition-all font-bold text-base">
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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-teal-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Start Ranking on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              Page 1
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Free SEO audit — we will show you your current rankings, traffic gaps,
            and a prioritised action plan to climb Google in 90 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-emerald-500/25 text-sm group">
              Get Free SEO Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all text-sm">
              <Phone className="w-4 h-4" /> {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
