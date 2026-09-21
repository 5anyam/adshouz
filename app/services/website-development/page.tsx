// app/services/website-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  Zap, Code2, Globe, Smartphone, BarChart3,
  Shield, Layers, TrendingUp, Palette, Database,
  ShoppingCart, Clock, Star, Settings
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Services India | Next.js, WordPress & Landing Pages | Adshouz Digital",
  description:
    "Professional website development in India — Next.js, WordPress, WooCommerce, Landing Pages. Fast, SEO-optimised, mobile-first websites that generate real leads. Google-certified agency.",
  keywords: [
    "website development services India",
    "Next.js development agency India",
    "WordPress development India",
    "WooCommerce development",
    "landing page development",
    "website development Delhi",
    "business website design India",
    "SEO-friendly website development",
    "mobile-first website design",
    "lead generation website India",
  ],
  alternates: { canonical: "https://adshouz.com/services/website-development" },
  openGraph: {
    title: "Website Development Services India | Adshouz Digital",
    description:
      "Fast, SEO-optimised, mobile-first websites built on Next.js and WordPress. Adshouz Digital builds websites that rank and convert.",
    url: "https://adshouz.com/services/website-development",
    images: [{ url: "https://adshouz.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Code2,
    title: "Next.js Development",
    tag: "Most Popular",
    tagColor: "violet",
    desc: "Blazing-fast, SEO-friendly websites and web apps built on Next.js 14 with App Router, TypeScript, and Tailwind CSS.",
    points: [
      "Server-side rendering (SSR) & Static Generation",
      "90+ PageSpeed score guaranteed",
      "TypeScript + Tailwind CSS",
      "API integrations & headless CMS",
    ],
  },
  {
    icon: Globe,
    title: "WordPress Development",
    tag: "Best for Content Sites",
    tagColor: "blue",
    desc: "Custom WordPress sites with premium themes, page builders, and full SEO optimisation — easy for your team to manage.",
    points: [
      "Custom theme development",
      "Elementor / Gutenberg blocks",
      "WooCommerce integration",
      "Speed & security hardening",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    tag: "High Converting",
    tagColor: "green",
    desc: "Conversion-optimised online stores on WooCommerce or custom Next.js with payment gateway integration and inventory management.",
    points: [
      "WooCommerce / Shopify setup",
      "Razorpay, PayU, Stripe integration",
      "Product catalogue & filters",
      "Abandoned cart & upsell flows",
    ],
  },
  {
    icon: Zap,
    title: "Landing Page Development",
    tag: "Highest ROI",
    tagColor: "orange",
    desc: "High-converting, ad-specific landing pages designed to maximise Quality Score and lower your Google Ads CPA.",
    points: [
      "A/B test ready structure",
      "Ultra-fast load (<2s)",
      "Lead form with CRM integration",
      "Google Ads Quality Score optimised",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    tag: "Design First",
    tagColor: "pink",
    desc: "Figma-first design process — wireframes, prototypes, and pixel-perfect handoff before a single line of code is written.",
    points: [
      "Wireframes & prototypes in Figma",
      "Mobile-first responsive design",
      "Brand-consistent UI system",
      "User journey mapping",
    ],
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    tag: "Ongoing Support",
    tagColor: "gray",
    desc: "Monthly maintenance plans — updates, backups, speed checks, uptime monitoring, and priority support.",
    points: [
      "WordPress core & plugin updates",
      "Daily automated backups",
      "Uptime monitoring (99.9% SLA)",
      "Priority bug fixes",
    ],
  },
];

const techStack = [
  { category: "Frontend",  items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "CMS",       items: ["WordPress", "Strapi", "Contentful", "Sanity", "Payload CMS"] },
  { category: "E-Commerce",items: ["WooCommerce", "Shopify", "Custom Cart", "Razorpay", "Stripe"] },
  { category: "Backend",   items: ["Node.js", "Next.js API", "PHP", "REST APIs", "Webhooks"] },
  { category: "Database",  items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"] },
  { category: "DevOps",    items: ["Vercel", "Railway", "AWS", "Cloudflare", "Git CI/CD"] },
];

const process = [
  { step: "01", title: "Discovery & Scope",     desc: "We understand your business, goals, competitors, and define exact deliverables, timeline, and cost upfront." },
  { step: "02", title: "Design in Figma",        desc: "Wireframes → UI design → prototype. You approve every screen before development starts." },
  { step: "03", title: "Development & Testing",  desc: "Clean code, mobile-first, cross-browser tested. You get a staging URL to review before go-live." },
  { step: "04", title: "Launch & Handover",      desc: "Live deployment, Google Search Console setup, speed audit, and full training for your team." },
];

const results = [
  { metric: "3×",   label: "Average lead increase",    sub: "vs old website" },
  { metric: "<2s",  label: "Page load time",           sub: "Mobile & Desktop" },
  { metric: "90+",  label: "PageSpeed score",          sub: "Google guaranteed" },
  { metric: "7 days", label: "Average delivery",       sub: "Landing pages" },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Landing pages: 5–7 days. Business websites: 2–3 weeks. E-commerce stores: 3–5 weeks. Next.js custom apps: 4–8 weeks depending on complexity. We give you a fixed timeline before starting.",
  },
  {
    q: "Do you work on fixed price or hourly?",
    a: "We work on fixed project pricing only. No hourly billing surprises. You get a detailed scope document with every deliverable, milestone, and cost before we start.",
  },
  {
    q: "Will my website rank on Google?",
    a: "Yes — every website we build follows on-page SEO best practices from day one: proper heading structure, meta tags, schema markup, Core Web Vitals, sitemap, and Google Search Console setup. We also offer ongoing SEO services if you need them.",
  },
  {
    q: "Can I edit the website myself after launch?",
    a: "Absolutely. WordPress sites are 100% self-manageable. For Next.js sites, we set up a CMS (like Strapi or Contentful) so you can edit content without touching code. We also provide a walkthrough training session.",
  },
  {
    q: "Do you provide hosting?",
    a: "We recommend and configure the best hosting for your site — Vercel for Next.js, managed WordPress hosting, or AWS/Cloudflare for high-traffic sites. We handle the entire setup and handover.",
  },
  {
    q: "What if I need changes after launch?",
    a: "We include a 30-day post-launch support period with every project. After that, we offer affordable monthly maintenance plans or per-change billing — whatever suits you.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Services",
  provider: {
    "@type": "Organization",
    name: "Adshouz Digital LLP",
    url: "https://adshouz.com",
  },
  description:
    "Professional website development services in India — Next.js, WordPress, WooCommerce, Landing Pages. Fast, SEO-optimised, mobile-first websites.",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://adshouz.com/services/website-development",
};

const tagColors: Record<string, string> = {
  violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  blue:   "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  green:  "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  pink:   "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  gray:   "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-white overflow-x-hidden">

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section className="relative pt-10 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-indigo-800/8 rounded-full blur-[80px]" />
            <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(circle,#8B5CF6 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs mb-8 flex-wrap">
              <Link href="/" className="text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white" />
              <span className="text-gray-700 dark:text-white font-medium">Website Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
                <Code2 className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                  Next.js · WordPress · E-Commerce · Landing Pages
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.06] tracking-tight mb-5">
                <span className="text-gray-900 dark:text-white">Websites That</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500">
                  Rank, Load Fast
                </span><br />
                <span className="text-gray-900 dark:text-white">& Convert Visitors</span>
              </h1>

              <p className="text-gray-500 dark:text-white text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                We do not just build websites — we build growth engines. Every site we deliver
                is SEO-optimised, mobile-first, and engineered to turn visitors into paying customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                  Get Free Website Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-sm">
                  <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {["90+ PageSpeed Score", "Mobile-First", "30-Day Support", "Fixed Price — No Surprises"].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-white font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" /> {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS ═════════════════════════════════════════════════════ */}
        <section className="py-10 bg-gray-50 dark:bg-[#0F0F14] border-y border-gray-100 dark:border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {results.map(({ metric, label, sub }, i) => (
                <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-violet-400/40 hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{metric}</div>
                  <div className="text-xs font-bold text-gray-700 dark:text-white">{label}</div>
                  <div className="text-[11px] text-gray-400 dark:text-white mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">What We Build</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Website Development{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Services
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                From single landing pages to full-scale e-commerce platforms — we build it all, fast and clean.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ icon: Icon, title, tag, tagColor, desc, points }, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 transition-all group flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 bg-violet-500/10 group-hover:bg-violet-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all">
                      <Icon className="w-4 h-4 text-violet-500" />
                    </div>
                    <span className={`inline-flex items-center border text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tagColors[tagColor]}`}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed mb-4 flex-1">{desc}</p>
                  <ul className="space-y-1.5">
                    {points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-white">
                        <CheckCircle className="w-3 h-3 text-violet-500 flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TECH STACK ════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">Tech Stack</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3">
                Built With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Modern Technology
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-md mx-auto">
                We use the same tech stack that powers the world fastest websites.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map(({ category, items }, i) => (
                <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-4 h-4 text-violet-500" />
                    <span className="font-bold text-gray-900 dark:text-white text-sm">{category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item}
                        className="bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROCESS ═══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">How It Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Development Process
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map(({ step, title, desc }, i) => (
                <div key={i} className="relative bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-violet-400/40 hover:-translate-y-1 transition-all group">
                  <div className="text-5xl font-black text-violet-500/15 group-hover:text-violet-500/25 transition-colors mb-3 leading-none">{step}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed">{desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px z-10">
                      <div className="h-full bg-gradient-to-r from-violet-500/30 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY US ════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                  </span>
                  <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">Why Adshouz Digital</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-5">
                  We Build Websites{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                    That Actually Work
                  </span>
                </h2>
                <p className="text-gray-500 dark:text-white text-sm leading-relaxed mb-6">
                  Most web agencies focus on making sites look pretty. We focus on making them
                  perform — faster load times, higher rankings, and more conversions. Because
                  a beautiful website that does not rank or convert is just an expensive brochure.
                </p>
                <div className="space-y-3">
                  {[
                    "Marketing-first approach — built to rank and convert",
                    "Fixed price, fixed timeline — no scope creep surprises",
                    "Google-certified team handling ads + SEO + dev together",
                    "30-day post-launch support included in every project",
                    "Staging environment — you approve before we go live",
                    "Full code ownership and handover — no lock-in",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap,        title: "90+ PageSpeed",      desc: "Every website we build scores 90+ on Google PageSpeed — mobile and desktop." },
                  { icon: Shield,     title: "SEO From Day 1",     desc: "Schema, meta tags, sitemaps, and Core Web Vitals baked in — not an afterthought." },
                  { icon: Smartphone, title: "Mobile-First",       desc: "Designed for mobile first, then scaled up — not desktop shrunk down." },
                  { icon: Star,       title: "30-Day Support",     desc: "Free bug fixes and changes for 30 days after every project launch." },
                  { icon: Clock,      title: "On-Time Delivery",   desc: "We set realistic timelines and stick to them — always." },
                  { icon: TrendingUp, title: "Built to Convert",   desc: "Every design decision is backed by CRO best practices and A/B data." },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-4 hover:border-violet-400/40 hover:-translate-y-1 transition-all group">
                    <div className="w-8 h-8 bg-violet-500/10 group-hover:bg-violet-500/20 rounded-xl flex items-center justify-center mb-2 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-violet-500" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xs mb-1">{title}</h3>
                    <p className="text-gray-500 dark:text-white text-[11px] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQs ══════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Questions
              </span>
            </h2>
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                <details key={i} className="group bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/[0.03] transition-colors list-none">
                    <span className="text-sm font-semibold text-gray-800 dark:text-white pr-4">{q}</span>
                    <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/20 text-gray-400 dark:text-white group-open:border-violet-500 group-open:text-violet-500 group-open:bg-violet-500/10 transition-all font-bold">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:block">−</span>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-1 text-gray-600 dark:text-white text-sm leading-relaxed border-t border-gray-100 dark:border-white/[0.05]">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ═══════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-indigo-900/35" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          </div>
          <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Let us Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-200">
                Next Website
              </span>
            </h2>
            <p className="text-white/70 text-sm mb-7 max-w-md mx-auto">
              Free consultation — tell us what you need and we will send you a detailed scope, timeline, and fixed price within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all text-sm">
                <Phone className="w-4 h-4" /> {PHONE_DISP}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
