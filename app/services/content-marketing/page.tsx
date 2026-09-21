// app/services/content-marketing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  PenTool, BarChart3, TrendingUp, Search, Share2,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  FileText, Globe, Zap, Star, Users, Eye, BookOpen,
  MessageSquare, Layers, Target
} from "lucide-react";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Content Marketing Services | SEO Content Strategy | Adshouz Digital",
  description:
    "Drive organic traffic, build authority, and generate leads with data-driven content marketing. Adshouz Digital creates SEO-optimised blogs, landing pages, and content strategies that rank and convert.",
  keywords:
    "content marketing, SEO content writing, blog writing services, content strategy, digital content marketing, Delhi",
  openGraph: {
    title: "Content Marketing Services — Adshouz Digital",
    description:
      "SEO-driven content that ranks on Page 1, builds brand authority, and converts readers into customers.",
    type: "website",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const problems = [
  {
    icon: Eye,
    title: "No Organic Traffic",
    desc: "Without consistent, SEO-optimised content, Google has nothing to rank. Competitors publishing regularly are capturing traffic that should be yours.",
  },
  {
    icon: Users,
    title: "Low Brand Authority",
    desc: "Prospects research before buying. If your site has no useful content, they trust your competitors more — even if your product is better.",
  },
  {
    icon: TrendingUp,
    title: "Expensive Paid Dependency",
    desc: "Relying only on ads means the moment you stop spending, traffic stops. Content builds compounding organic value that pays forever.",
  },
  {
    icon: Target,
    title: "Poor Lead Quality",
    desc: "Content marketing attracts buyers who are already researching your solution — these leads convert 6× better than cold outbound leads.",
  },
];

const stats = [
  { stat: "6×",    label: "More leads vs outbound marketing" },
  { stat: "62%",   label: "Lower cost per lead than paid ads" },
  { stat: "3×",    label: "More traffic for brands that blog" },
  { stat: "13×",   label: "Higher ROI with consistent content" },
];

const whatWeOffer = [
  {
    icon: PenTool,
    title: "SEO Blog Writing",
    desc: "Keyword-researched, long-form blog posts (1,500–3,000 words) that target buyer-intent keywords and rank on Page 1 within 90 days.",
  },
  {
    icon: FileText,
    title: "Landing Page Copy",
    desc: "High-converting landing page content built around search intent — designed to rank and turn visitors into leads simultaneously.",
  },
  {
    icon: Search,
    title: "Keyword & Topic Strategy",
    desc: "Full content gap analysis, competitor keyword mapping, and a 6-month editorial calendar tailored to your industry and buyer funnel.",
  },
  {
    icon: Globe,
    title: "Website Content",
    desc: "Home, About, Service, and product page copy that communicates your value clearly, builds trust, and is optimised for search.",
  },
  {
    icon: Share2,
    title: "Social & Email Content",
    desc: "Repurposed content for LinkedIn, Instagram, and email newsletters that extends your reach and drives traffic back to your site.",
  },
  {
    icon: Layers,
    title: "Content Audit & Refresh",
    desc: "We audit your existing content, identify underperforming pages, and refresh them with updated copy and keywords for quick ranking wins.",
  },
  {
    icon: BarChart3,
    title: "Content Performance Tracking",
    desc: "Monthly reports showing rankings, traffic, time-on-page, and leads generated per piece — so you see the exact ROI of every article.",
  },
  {
    icon: MessageSquare,
    title: "Case Studies & Whitepapers",
    desc: "Authority-building long-form content that demonstrates real results and is used as sales collateral, lead magnets, and PR assets.",
  },
];

const contentTypes = [
  { type: "Blog Posts",          freq: "4–12/month",   goal: "Organic traffic + SEO" },
  { type: "Landing Pages",       freq: "As needed",     goal: "Conversions + rankings" },
  { type: "Case Studies",        freq: "1–2/month",    goal: "Trust + authority" },
  { type: "Email Newsletters",   freq: "Weekly",        goal: "Retention + nurturing" },
  { type: "Social Media Posts",  freq: "Daily/weekly",  goal: "Brand awareness" },
  { type: "Whitepapers / eBooks",freq: "Quarterly",     goal: "Lead generation" },
];

const process = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We audit your existing content, analyse competitors, and identify keyword gaps. You get a clear picture of what content opportunities are being missed right now.",
  },
  {
    step: "02",
    title: "Content Strategy",
    desc: "We build a prioritised content roadmap — topics, target keywords, word counts, and publishing schedule — mapped to your funnel stages (awareness, consideration, decision).",
  },
  {
    step: "03",
    title: "Research & Writing",
    desc: "Our SEO writers research each topic in depth, write engaging long-form content, and optimise every element — title, H-tags, meta, internal links, and schema.",
  },
  {
    step: "04",
    title: "Review & Publish",
    desc: "You review and approve content before publishing. We handle CMS upload, image optimisation, and on-page SEO formatting across WordPress, Next.js, or any platform.",
  },
  {
    step: "05",
    title: "Promote & Distribute",
    desc: "Published content is promoted via social, email, and outreach. We build internal links and track rankings from day one.",
  },
  {
    step: "06",
    title: "Track & Optimise",
    desc: "Monthly performance reviews — we identify what's ranking, what needs a refresh, and what new opportunities to target. Content strategy evolves with your results.",
  },
];

const faqs = [
  {
    q: "How long does it take to see results from content marketing?",
    a: "SEO-driven content typically starts ranking within 60–120 days for low-competition keywords, and 4–8 months for competitive terms. However, you'll see engagement, social traffic, and brand authority improvements much sooner. Content marketing is a compounding investment — results grow month over month.",
  },
  {
    q: "How many blog posts do I need per month?",
    a: "For most businesses, 4–8 high-quality, long-form posts per month is the sweet spot for meaningful organic growth. Quality beats quantity — one well-researched 2,000-word post outperforms five thin 300-word posts every time. We recommend a publishing cadence based on your competition level and goals.",
  },
  {
    q: "Do you write content in Hindi as well as English?",
    a: "Yes. We write content in both English and Hindi depending on your target audience. For businesses targeting Indian regional markets, bilingual content strategy significantly increases reach and engagement.",
  },
  {
    q: "Who owns the content you write?",
    a: "You do. All content we create is 100% yours upon delivery. We do not resell, repurpose, or republish your content on any other platform.",
  },
  {
    q: "Can you write content for technical or niche industries?",
    a: "Absolutely. We have writers with backgrounds across healthcare, SaaS, legal, finance, e-commerce, manufacturing, and B2B services. Every piece is researched in depth and reviewed for accuracy before delivery.",
  },
  {
    q: "How is your content different from AI-generated content?",
    a: "Our content is written by human SEO specialists who research intent, analyse SERPs, and write for real readers — not just algorithms. While we use AI tools for research and outlines, all final content is human-written, fact-checked, and brand-voiced. Google rewards helpful, experience-based content, and that's exactly what we produce.",
  },
];

const testimonials = [
  {
    name: "Sneha Kapoor",
    role: "CEO, SaaS Company",
    text: "Adshouz's content team doubled our organic traffic in 4 months. The blog posts they write are genuinely useful — not fluff. We now get 60% of our leads from content.",
    rating: 5,
  },
  {
    name: "Arjun Sharma",
    role: "Founder, E-commerce Brand",
    text: "We had zero content strategy before Adshouz. Within 6 months they built us a library of 40+ ranking articles. Our brand is now seen as the authority in our niche.",
    rating: 5,
  },
];

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Content Marketing Services",
  description:
    "SEO-driven content marketing including blog writing, landing page copy, content strategy, and performance tracking.",
  provider: {
    "@type": "Organization",
    name: "Adshouz Digital LLP",
    url: "https://adshouz.com",
  },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContentMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══════════════════════ HERO ══════════════════════════════ */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-12 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-emerald-500/8 dark:bg-emerald-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-violet-600/8 dark:bg-violet-800/12 rounded-full blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)", backgroundSize: "36px 36px" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services/seo" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">SEO</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Content Marketing</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-14 lg:pb-20">
            {/* Left */}
            <div style={{ animation: "heroFadeIn 0.7s ease 0.05s both" }}>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-5">
                <PenTool className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                  SEO Content · Brand Authority
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.05] tracking-tight mb-5">
                <span className="text-gray-900 dark:text-white">Content That </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-violet-500">
                  Ranks,
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Builds Trust</span>
                <br />
                <span className="text-gray-300 dark:text-white/20">&amp; Converts.</span>
              </h1>

              <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-lg">
                Stop publishing content nobody reads. We build data-driven content strategies
                that put you on Page 1 of Google and turn organic visitors into paying customers —
                <strong className="text-gray-900 dark:text-white"> month after month.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                  Get Free Content Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                  <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4">
                {[
                  "Human-written Content",
                  "SEO-Optimised",
                  "Hindi + English",
                  "You Own It",
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-white/50 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — content preview card */}
            <div style={{ animation: "heroSlideRight 0.8s ease 0.2s both" }}
              className="hidden lg:block">
              <div className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/8 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/50">
                {/* Mock article header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">
                    Published Article
                  </span>
                  <span className="ml-auto text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full font-bold">
                    Ranking #1
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-black text-gray-900 dark:text-white text-base mb-1 leading-snug">
                  10 Proven Google Ads Strategies for B2B SaaS in 2025
                </h3>
                <p className="text-xs text-gray-400 dark:text-white/35 mb-4">
                  2,400 words · Last updated Feb 2025 · 8 min read
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Monthly Visits",  value: "4,820", color: "text-emerald-600 dark:text-emerald-400" },
                    { label: "Avg. Position",   value: "#1.4",  color: "text-violet-600 dark:text-violet-400" },
                    { label: "Leads Generated", value: "38",    color: "text-blue-600 dark:text-blue-400" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-gray-50 dark:bg-white/[0.03] rounded-xl p-2.5 text-center">
                      <div className={`text-base font-black ${color}`}>{value}</div>
                      <div className="text-[10px] text-gray-400 dark:text-white/30 mt-0.5 leading-tight">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Keyword targets */}
                <div className="mb-4">
                  <p className="text-[10px] font-bold text-gray-400 dark:text-white/25 uppercase tracking-widest mb-2">
                    Ranking Keywords
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["google ads b2b", "saas ppc strategy", "b2b google ads tips", "+12 more"].map((kw) => (
                      <span key={kw}
                        className="text-[10px] bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-500/20 px-2 py-0.5 rounded-full font-medium">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="pt-3 border-t border-gray-100 dark:border-white/[0.05]">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-white/40 mb-1.5">
                    <span>Domain Authority Growth</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">+18 pts in 6mo</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 dark:bg-white/[0.07] rounded-full overflow-hidden">
                    <div className="h-full w-[72%] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
              className="fill-gray-50 dark:fill-[#0F0F14]" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════ PROBLEM ══════════════════════════ */}
      <section className="bg-gray-50 dark:bg-[#0F0F14] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              </span>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">The Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-3">
              Why Most Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                Stay Invisible
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-lg mx-auto">
              Without a content strategy, you are invisible to the 68% of online experiences that start with a search engine.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-orange-300 dark:hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300 shadow-sm group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.08}s both` }}>
                <div className="w-10 h-10 bg-orange-50 dark:bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ STATS BAND ════════════════════════ */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map(({ stat, label }, i) => (
              <div key={i} className="text-center"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1">{stat}</div>
                <div className="text-white/70 text-xs font-medium leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHAT WE OFFER ════════════════════ */}
      <section className="py-16 lg:py-24 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              </span>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-3">
              Everything in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Content Marketing
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              From strategy to writing to publishing — we handle the full content lifecycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatWeOffer.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-emerald-400/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/8 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${0.05 + i * 0.06}s both` }}>
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-200">
                  <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">{title}</h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CONTENT TYPES TABLE ══════════════ */}
      <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              </span>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">Content Types</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              What We Create for You
            </h2>
          </div>

          <div className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden shadow-sm"
            style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}>
            {/* Header */}
            <div className="grid grid-cols-3 px-5 py-3 bg-gray-50 dark:bg-white/[0.03] border-b border-gray-200 dark:border-white/[0.06]">
              <span className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Content Type</span>
              <span className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Frequency</span>
              <span className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Goal</span>
            </div>
            {contentTypes.map(({ type, freq, goal }, i) => (
              <div key={i}
                className={`grid grid-cols-3 px-5 py-4 items-center hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors ${
                  i < contentTypes.length - 1 ? "border-b border-gray-100 dark:border-white/[0.04]" : ""
                }`}>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/85">{type}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-white/50">{freq}</span>
                <span className="text-xs text-violet-600 dark:text-violet-400 font-medium">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROCESS ══════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              </span>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Strategy
              </span>{" "}
              to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
                Rankings
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 sm:gap-7 bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.09}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-emerald-400/30 to-transparent mt-2 min-h-[20px]" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 dark:text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ═════════════════════ */}
      <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Content That Delivers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Real Results
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {testimonials.map(({ name, role, text, rating }, i) => (
              <div key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-emerald-400/30 transition-all duration-300"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.1}s both` }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(rating)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-white/75 text-sm leading-relaxed italic mb-5">
                  {text}
                </p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{name}</div>
                  <div className="text-emerald-600 dark:text-emerald-400 text-xs mt-0.5">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FAQs ══════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              </span>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i}
                className="group bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/[0.03] transition-colors list-none">
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/90 pr-4">{q}</span>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-emerald-500 group-open:text-emerald-500 group-open:bg-emerald-500/10 transition-all font-bold text-base">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-gray-500 dark:text-white/50 text-sm leading-relaxed border-t border-gray-100 dark:border-white/[0.05] bg-white/50 dark:bg-white/[0.02]">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ BOTTOM CTA ═══════════════════════ */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-teal-900/30 dark:from-emerald-900/50 dark:to-teal-900/40" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.7s ease both" }}>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Zap className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-white/80 text-xs font-semibold">Free Content Audit — No Commitment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Start Ranking with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              Better Content
            </span>
          </h2>
          <p className="text-white/65 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Get a free content audit — we will show you exactly which keywords you should be targeting
            and what content gaps your competitors are already exploiting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-2xl shadow-emerald-500/30 text-sm sm:text-base group">
              Get Free Content Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all text-sm sm:text-base">
              <Phone className="w-4 h-4" /> {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
