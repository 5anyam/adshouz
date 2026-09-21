// app/services/analytics-reporting/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  BarChart3, TrendingUp, Target, Shield,
  Zap, Settings, Eye, Database,
  LineChart, PieChart, Clock, Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Analytics & Reporting Services India | Google Analytics 4, Data Studio & Campaign Reporting | Adshouz Digital",
  description:
    "Expert analytics and reporting services in India — GA4 setup, Google Tag Manager, Looker Studio dashboards, conversion tracking and monthly campaign performance reports. Make data-driven decisions.",
  keywords: [
    "analytics reporting services India",
    "Google Analytics 4 setup India",
    "GA4 implementation agency",
    "Google Tag Manager setup",
    "Looker Studio dashboard India",
    "conversion tracking setup",
    "marketing analytics agency Delhi",
    "campaign performance reporting",
    "data-driven marketing India",
    "Google Analytics agency India",
  ],
  alternates: { canonical: "https://adshouz.com/services/analytics-reporting" },
  openGraph: {
    title: "Analytics & Reporting Services India | Adshouz Digital",
    description:
      "GA4, GTM, Looker Studio dashboards and conversion tracking — stop guessing, start growing with data-driven marketing from Adshouz Digital.",
    url: "https://adshouz.com/services/analytics-reporting",
    images: [{ url: "https://adshouz.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: BarChart3,
    title: "Google Analytics 4 Setup",
    tag: "Foundation",
    tagColor: "violet",
    desc: "Correct GA4 implementation from scratch — events, conversions, audiences, and enhanced measurement all configured properly.",
    points: [
      "GA4 property creation & configuration",
      "Custom event & conversion setup",
      "Cross-domain tracking",
      "Universal Analytics → GA4 migration",
    ],
  },
  {
    icon: Settings,
    title: "Google Tag Manager",
    tag: "No-Code Tracking",
    tagColor: "blue",
    desc: "Full GTM setup — all your tracking tags (GA4, Google Ads, Meta Pixel, LinkedIn) managed in one place without touching code.",
    points: [
      "GTM container setup & audit",
      "GA4 via GTM implementation",
      "Form submission & button tracking",
      "E-commerce data layer setup",
    ],
  },
  {
    icon: Target,
    title: "Conversion Tracking",
    tag: "Revenue Critical",
    tagColor: "green",
    desc: "Track every lead, call, purchase, and micro-conversion across Google Ads, Meta, and organic — see exactly what's driving revenue.",
    points: [
      "Google Ads conversion tracking",
      "Enhanced conversions setup",
      "Call tracking integration",
      "Multi-channel attribution",
    ],
  },
  {
    icon: LineChart,
    title: "Looker Studio Dashboards",
    tag: "Live Reporting",
    tagColor: "orange",
    desc: "Beautiful, automated Looker Studio (Data Studio) dashboards pulling data from all your marketing channels in real time.",
    points: [
      "Custom branded dashboards",
      "Google Ads + SEO + Social in one view",
      "Automated daily data refresh",
      "Shareable client-ready reports",
    ],
  },
  {
    icon: PieChart,
    title: "Monthly Campaign Reports",
    tag: "Actionable Insights",
    tagColor: "pink",
    desc: "Clear, jargon-free monthly reports covering every campaign — what worked, what didn't, and exactly what we're doing next month.",
    points: [
      "Cross-channel performance summary",
      "ROAS, CPL, CPA breakdown",
      "Month-over-month trend analysis",
      "Next-month strategy recommendations",
    ],
  },
  {
    icon: Eye,
    title: "Audience & Behaviour Analysis",
    tag: "Deep Insights",
    tagColor: "gray",
    desc: "Understand who your visitors are, how they behave, where they drop off, and which pages drive the most conversions.",
    points: [
      "GA4 audience segmentation",
      "Funnel analysis & drop-off points",
      "User journey mapping",
      "Heatmap integration (Hotjar/MS Clarity)",
    ],
  },
];

const tools = [
  { category: "Analytics",    items: ["Google Analytics 4", "Universal Analytics", "Firebase Analytics", "Mixpanel"] },
  { category: "Tag Management", items: ["Google Tag Manager", "Meta Pixel", "LinkedIn Insight", "TikTok Pixel"] },
  { category: "Dashboards",   items: ["Looker Studio", "Google Sheets", "BigQuery", "Supermetrics"] },
  { category: "Ads Platforms",items: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Mgr", "YouTube Analytics"] },
  { category: "CRO Tools",    items: ["Microsoft Clarity", "Hotjar", "Google Optimize", "VWO"] },
  { category: "SEO Analytics",items: ["Google Search Console", "Semrush", "Ahrefs", "Screaming Frog"] },
];

const process = [
  { step: "01", title: "Tracking Audit",         desc: "We audit your existing analytics setup — find broken tags, missing conversions, and data gaps that are costing you insights." },
  { step: "02", title: "Implementation Plan",    desc: "Full tracking plan document — every event, conversion, and data source mapped out before any changes are made." },
  { step: "03", title: "Setup & QA",             desc: "GA4, GTM, and conversion tracking implemented and QA-tested across all devices and browsers before going live." },
  { step: "04", title: "Dashboard & Reporting",  desc: "Looker Studio dashboard built, connected, and handed over. Monthly reports delivered on a fixed schedule every month." },
];

const results = [
  { metric: "100%",  label: "Conversion tracking accuracy", sub: "After our GA4 setup" },
  { metric: "48h",   label: "Dashboard delivery",           sub: "After data access granted" },
  { metric: "Zero",  label: "Missing conversion data",      sub: "With enhanced conversions" },
  { metric: "1 view",label: "All channels in one report",   sub: "Looker Studio dashboard" },
];

const problems = [
  { title: "GA4 Not Set Up Correctly",   desc: "Most businesses migrated from UA to GA4 incorrectly — missing key events, no conversions tracked, and inaccurate data." },
  { title: "No Conversion Tracking",     desc: "Running Google Ads without conversion tracking is like driving blindfolded — you can't optimise what you can't measure." },
  { title: "No Idea What's Working",     desc: "Budget split across Google, Meta, SEO, and email — but no unified view to see which channel is actually driving revenue." },
  { title: "Agency Reports Are Vague",   desc: "Impressions and clicks don't pay bills. You need CPL, ROAS, and revenue attribution — not vanity metrics." },
  { title: "Data Discrepancies",         desc: "GA4 shows 500 conversions, Google Ads shows 200, CRM shows 50. Someone's tracking is broken — we find and fix it." },
  { title: "No Audience Insights",       desc: "Without proper analytics, you're targeting blind — wasting budget on audiences that don't convert." },
];

const faqs = [
  {
    q: "What is GA4 and why do I need it set up properly?",
    a: "GA4 (Google Analytics 4) is Google's current analytics platform. Unlike Universal Analytics, GA4 uses an event-based model — meaning every click, scroll, form submit, and purchase needs to be properly configured as an event. Most businesses have GA4 installed but 70% of the important events are missing or misconfigured, leading to incomplete data and bad decisions.",
  },
  {
    q: "What's the difference between GA4 and Google Tag Manager?",
    a: "GA4 is the analytics platform that stores and reports your data. Google Tag Manager (GTM) is the tool used to deploy tracking tags (including GA4) without modifying your website code. We use GTM to install GA4, Google Ads conversion tracking, Meta Pixel, and other tags — all managed from one interface.",
  },
  {
    q: "Do you set up conversion tracking for Google Ads?",
    a: "Yes — this is one of the most critical services we offer. Without proper Google Ads conversion tracking, your Smart Bidding campaigns (Target CPA, ROAS) can't optimise correctly. We set up primary conversions, enhanced conversions, and view-through conversions across all your campaigns.",
  },
  {
    q: "What does a Looker Studio dashboard include?",
    a: "Our standard dashboard includes: Google Ads performance (spend, clicks, conversions, ROAS), organic traffic (GSC data), social media performance, lead/revenue summary, and month-over-month trends — all in one shareable view that updates automatically every day.",
  },
  {
    q: "How often will I receive reports?",
    a: "You get a live Looker Studio dashboard you can check any time. Additionally, we send a monthly performance report with analysis and next-month recommendations. For active ad campaigns, we also send weekly performance summaries.",
  },
  {
    q: "My current agency sends reports — why do I need this?",
    a: "Most agency reports show clicks and impressions — not business outcomes. We set up attribution models that show you CPL (cost per lead), CAC (customer acquisition cost), and ROAS by channel. If your current reports don't show these metrics, your strategy is flying blind.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Analytics & Reporting Services",
  provider: {
    "@type": "Organization",
    name: "Adshouz Digital LLP",
    url: "https://adshouz.com",
  },
  description:
    "Expert analytics and reporting services — GA4 setup, Google Tag Manager, Looker Studio dashboards, conversion tracking and monthly campaign performance reports.",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://adshouz.com/services/analytics-reporting",
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
export default function AnalyticsReportingPage() {
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
              <span className="text-gray-700 dark:text-white font-medium">Analytics & Reporting</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
                <BarChart3 className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                  GA4 · GTM · Looker Studio · Conversion Tracking · Monthly Reports
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.06] tracking-tight mb-5">
                <span className="text-gray-900 dark:text-white">Stop Guessing.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500">
                  Start Making
                </span><br />
                <span className="text-gray-900 dark:text-white">Data-Driven Decisions</span>
              </h1>

              <p className="text-gray-500 dark:text-white text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Most businesses have analytics installed but not configured correctly — missing
                conversions, broken tags, and vague reports. We fix your tracking foundation
                and build dashboards that show exactly what is driving revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                  Get Free Analytics Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-sm">
                  <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {["GA4 Certified", "GTM Implementation", "Live Dashboards", "No Lock-in Contract"].map((b) => (
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

        {/* ══ PROBLEMS ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">Common Problems</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Is Your Analytics{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Lying to You?
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                Broken tracking leads to bad decisions. Here are the most common analytics problems we fix.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {problems.map(({ title, desc }, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-red-400/30 hover:-translate-y-1 transition-all group">
                  <div className="w-2 h-2 bg-red-500 rounded-full mb-3" />
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">What We Do</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Our Analytics &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Reporting Services
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                End-to-end analytics — from tracking setup to automated dashboards and monthly insights.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ icon: Icon, title, tag, tagColor, desc, points }, i) => (
                <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 transition-all group flex flex-col">
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

        {/* ══ TOOLS ═════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">Tools & Platforms</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3">
                Industry-Leading{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Analytics Stack
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-md mx-auto">
                We work with every major analytics and tracking platform — certified and experienced.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map(({ category, items }, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-4 h-4 text-violet-500" />
                    <span className="font-bold text-gray-900 dark:text-white text-sm">{category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item}
                        className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
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
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">How It Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                Our Analytics{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Setup Process
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map(({ step, title, desc }, i) => (
                <div key={i} className="relative bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-violet-400/40 hover:-translate-y-1 transition-all group">
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
        <section className="py-16 lg:py-20">
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
                  Analytics That Shows{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                    Revenue, Not Just Traffic
                  </span>
                </h2>
                <p className="text-gray-500 dark:text-white text-sm leading-relaxed mb-6">
                  Most analytics setups track pageviews and sessions — but not the metrics that
                  actually matter to your business. We configure analytics to track leads, calls,
                  purchases, and revenue so you can make decisions backed by real data.
                </p>
                <div className="space-y-3">
                  {[
                    "GA4 certified — correct setup, not just installed",
                    "Every conversion tracked — leads, calls, purchases",
                    "Attribution models that show true channel ROI",
                    "Live Looker Studio dashboard updated daily",
                    "Monthly reports with real recommendations — not just numbers",
                    "Works with all ad platforms — Google, Meta, LinkedIn",
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
                  { icon: BarChart3,   title: "GA4 Certified",        desc: "Proper GA4 implementation — events, conversions, audiences all set up correctly." },
                  { icon: Target,      title: "Conversion Tracking",  desc: "Every lead, call, and purchase tracked across all your ad platforms." },
                  { icon: LineChart,   title: "Live Dashboards",      desc: "Looker Studio dashboards updated automatically every day." },
                  { icon: TrendingUp,  title: "Revenue Attribution",  desc: "See exactly which channel, campaign, and keyword is driving your revenue." },
                  { icon: Shield,      title: "Data Accuracy",        desc: "QA-tested tracking — no more discrepancies between platforms." },
                  { icon: Star,        title: "Monthly Insights",     desc: "Clear, actionable monthly reports — not just data dumps." },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-4 hover:border-violet-400/40 hover:-translate-y-1 transition-all group">
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
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Questions
              </span>
            </h2>
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                <details key={i} className="group bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors list-none">
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
              Know Exactly What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-200">
                Driving Your Revenue
              </span>
            </h2>
            <p className="text-white/70 text-sm mb-7 max-w-md mx-auto">
              Free analytics audit — we will review your GA4 setup, identify broken conversions, and show you exactly what data you are missing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                Get Free Analytics Audit
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
