// app/services/google-search-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, Target, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  BarChart3, Zap, DollarSign, FileText, Settings, Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Search Ads | PPC Search Campaigns | Adshouz Digital",
  description:
    "Appear at the top of Google when buyers search for your product. Expert Search Ads management with keyword research, ad copy, and conversion tracking by Adshouz Digital.",
  keywords: "google search ads, ppc search campaigns, google search advertising, search ads management Delhi, pay per click",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const services = [
  { icon: Search,    title: "Keyword Research",         desc: "Deep keyword mining — exact, phrase, and broad match — with negative keyword lists built before launch to stop wasted spend." },
  { icon: FileText,  title: "Ad Copy Writing",           desc: "High-CTR headlines and descriptions written with emotional triggers and USPs that outperform competitor ads." },
  { icon: Target,    title: "Bid Strategy Management",   desc: "Smart bidding (tCPA, tROAS, Max Conversions) configured and monitored so every rupee goes toward actual conversions." },
  { icon: Settings,  title: "Campaign Restructuring",    desc: "SKAG or tightly themed ad groups for maximum Quality Score, lower CPC, and better ad relevance scores." },
  { icon: BarChart3, title: "Conversion Tracking",       desc: "Full GTM + Google Ads conversion setup — calls, form fills, purchases — so we optimise for what actually matters." },
  { icon: Users,     title: "Audience Layering",         desc: "Observation and targeting layers using in-market, remarketing, and customer match audiences for higher conversion rates." },
];

const stats = [
  { value: "4.4×",  label: "Average ROAS on Search" },
  { value: "65%",   label: "Of clicks go to top 3 paid ads" },
  { value: "48hr",  label: "Campaign go-live time" },
  { value: "↓35%",  label: "Avg. CPA reduction in 60 days" },
];

const process = [
  { step: "01", title: "Keyword & Competitor Audit", desc: "We analyse your search landscape — what competitors bid on, what you're missing, and where the highest-intent keywords sit." },
  { step: "02", title: "Campaign Architecture",      desc: "Campaigns structured by intent stage and product/service category for full control over budget and bidding at every level." },
  { step: "03", title: "Ad Copy & Extensions",       desc: "3–5 ad variations per group with sitelinks, callouts, structured snippets, and call extensions to maximise SERP real estate." },
  { step: "04", title: "Launch & Optimise",          desc: "Campaigns go live with conversion tracking verified. Weekly search term reviews, negative additions, and bid adjustments from day one." },
];

const faqs = [
  {
    q: "How is Search Ads different from SEO?",
    a: "SEO builds organic rankings over months. Search Ads get you to position #1 within 24 hours — but you pay per click. Together they provide full SERP dominance. Search Ads are ideal when you need immediate traffic and leads while SEO builds momentum in the background.",
  },
  {
    q: "What keywords should I bid on?",
    a: "We start with high-intent buyer keywords (e.g. 'buy', 'price', 'near me', 'best') and expand from there. We also research your competitors' keyword strategies and identify gaps they've missed. Every keyword is mapped to a specific intent stage before launch.",
  },
  {
    q: "Why is my Quality Score low and how do you fix it?",
    a: "Low Quality Score usually means poor ad relevance or weak landing page experience. We fix this by tightening keyword-to-ad-to-landing-page alignment, rewriting ad copy to match search intent, and improving landing page load speed and message match.",
  },
  {
    q: "Can you take over my existing Search Ads account?",
    a: "Yes — account takeovers are a big part of what we do. We audit your existing structure, identify wasted spend (typically 20–40% of budget in unmanaged accounts), pause underperformers, and restructure for efficiency. Most clients see improvement within the first 30 days.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Search Ads",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

export default function GoogleSearchAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-blue-600/8 dark:bg-blue-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services/google-ads" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Google Ads</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Search Ads</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
              <Search className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                Google Search · PPC · Intent-based Ads
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Be #1 on Google </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500">
                When Buyers Search
              </span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Google Search Ads put you in front of people actively looking for what you sell —
              right now. We build campaigns that capture high-intent traffic and convert it
              into <strong className="text-gray-900 dark:text-white">real leads and sales.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                Get Free Search Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Negative Keywords Day 1", "Conversion Tracking Included", "No Lock-in", "Weekly Reports"].map((b) => (
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
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-violet-400/40 hover:-translate-y-0.5 transition-all"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{value}</div>
                <div className="text-xs text-gray-400 dark:text-white/35 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Everything needed to launch, manage, and scale profitable Search campaigns.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-violet-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-violet-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              How We Work
            </h2>
          </div>
          <div className="space-y-3">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-violet-400/30 to-transparent mt-2 min-h-[16px]" />
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
      <section className="py-14 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i}
                className="group bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/[0.03] transition-colors list-none">
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
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-purple-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Rank #1 on Google{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-200">
              Tomorrow
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Free Search Ads audit — we will identify your top keywords, estimate traffic potential,
            and show you exactly what competitors are spending.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
              Get Free Audit
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
