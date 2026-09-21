// app/services/performance-marketing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp, Target, BarChart3, Zap, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  DollarSign, Eye, RefreshCw, Users, Filter, LineChart
} from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing | ROI-Driven Campaigns | Adshouz Digital",
  description:
    "Full-funnel performance marketing — paid search, social, display, and retargeting campaigns optimised for measurable ROI. Every rupee tracked, every conversion attributed.",
  keywords: "performance marketing, ROI marketing, paid marketing agency, full funnel marketing, performance marketing Delhi",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const services = [
  { icon: Target,    title: "Paid Search (PPC)",         desc: "Google and Bing Search campaigns targeting high-intent buyers at every stage of the purchase funnel." },
  { icon: Users,     title: "Paid Social",               desc: "Facebook, Instagram, and LinkedIn campaigns built for lead generation, app installs, and direct sales." },
  { icon: Eye,       title: "Programmatic Display",      desc: "Data-driven banner and native ads served to in-market audiences across premium publisher networks." },
  { icon: RefreshCw, title: "Retargeting",               desc: "Multi-channel retargeting sequences that re-engage visitors across Google, Meta, and display networks." },
  { icon: Filter,    title: "Conversion Rate Optimisation", desc: "Landing page testing, funnel analysis, and form optimisation to maximise conversions from existing traffic." },
  { icon: LineChart, title: "Attribution & Reporting",   desc: "Multi-touch attribution models, GA4 setup, and unified dashboards so you see the true ROI of every channel." },
];

const stats = [
  { value: "300%",  label: "Average ROI delivered" },
  { value: "↓40%",  label: "Avg. CPA reduction in 90 days" },
  { value: "8+",    label: "Years managing ad budgets" },
  { value: "₹50Cr+",label: "Ad spend managed" },
];

const channels = [
  { name: "Google Search",     best: "High-intent buyers",     cost: "Medium CPC" },
  { name: "Google Display",    best: "Brand awareness",        cost: "Low CPM" },
  { name: "Meta (FB + IG)",    best: "Demand generation",      cost: "Low–Medium CPC" },
  { name: "LinkedIn Ads",      best: "B2B decision-makers",    cost: "High CPC, High Quality" },
  { name: "YouTube Ads",       best: "Video storytelling",     cost: "Low CPV" },
  { name: "Retargeting",       best: "Warm audience recovery", cost: "Lowest CPA" },
];

const process = [
  { step: "01", title: "Audit & Strategy",      desc: "Full audit of existing campaigns, funnel, and attribution. We identify wasted spend and map a multi-channel strategy aligned to your revenue goals." },
  { step: "02", title: "Funnel Architecture",   desc: "Awareness → consideration → conversion campaigns built across the right channels with dedicated budgets and KPIs at each stage." },
  { step: "03", title: "Launch & Track",        desc: "All campaigns launched with full conversion tracking, UTM parameters, and attribution configured from day one." },
  { step: "04", title: "Optimise & Scale",      desc: "Weekly optimisation cycles — cut losers, scale winners, test new creatives. Monthly strategy reviews with full P&L transparency." },
];

const faqs = [
  {
    q: "What is performance marketing and how is it different from branding?",
    a: "Performance marketing refers to any paid advertising where you only pay for measurable results — clicks, leads, or sales. Unlike branding campaigns focused on awareness, every performance campaign has a clear KPI (CPA, ROAS, CPL) and budget is optimised toward that metric. You get full visibility into what each rupee generates.",
  },
  {
    q: "Which channels do you recommend for my business?",
    a: "It depends on your funnel stage and audience. B2B businesses with long sales cycles benefit from LinkedIn + Google Search. E-commerce brands typically see the best ROAS from Google Shopping + Meta retargeting. We recommend a channel mix after auditing your current traffic, competition, and margin structure.",
  },
  {
    q: "What budget do I need for performance marketing?",
    a: "We recommend a minimum of ₹50,000/month in total ad spend across channels to run meaningful multi-channel campaigns. Smaller budgets are better focused on one channel (typically Google Search) before expanding. Our management fee is separate and scales with spend.",
  },
  {
    q: "How do you measure and report performance?",
    a: "We set up GA4, Google Ads conversion tracking, Meta Pixel/CAPI, and UTM parameters across all channels. You receive a weekly performance snapshot and a detailed monthly report covering spend, impressions, clicks, conversions, CPA, and ROAS — broken down per channel and campaign.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Marketing",
  provider: { "@type": "Organization", name: "Adshouz Digital Agency Pvt. Ltd.", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

export default function PerformanceMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            <Link href="/services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Performance Marketing</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
              <TrendingUp className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                Performance Marketing · Full-Funnel · ROI-Driven
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Every Rupee </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500">
                Tracked.
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Every Conversion </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500">
                Counted.
              </span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              We run multi-channel paid campaigns — Search, Social, Display, and Retargeting —
              with one obsession: <strong className="text-gray-900 dark:text-white">measurable ROI.</strong>{" "}
              No vanity metrics. No wasted budget. Just growth you can see in your revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                Get Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Multi-Channel", "Full Attribution", "Weekly Reports", "No Lock-in"].map((b) => (
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              One team managing all your paid channels — unified strategy, unified reporting.
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

      {/* ── CHANNEL MIX TABLE ────────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Channels We Manage
            </h2>
          </div>
          <div className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden shadow-sm"
            style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}>
            <div className="grid grid-cols-3 px-5 py-3 bg-gray-50 dark:bg-white/[0.03] border-b border-gray-200 dark:border-white/[0.06]">
              <span className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Channel</span>
              <span className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Best For</span>
              <span className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Cost Profile</span>
            </div>
            {channels.map(({ name, best, cost }, i) => (
              <div key={i}
                className={`grid grid-cols-3 px-5 py-4 items-center hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors ${
                  i < channels.length - 1 ? "border-b border-gray-100 dark:border-white/[0.04]" : ""
                }`}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/85">{name}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-white/50">{best}</span>
                <span className="text-xs text-violet-600 dark:text-violet-400 font-medium">{cost}</span>
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
                className="flex gap-5 bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform">
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Turn Ad Spend into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-200">
              Revenue
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Free performance audit — we will review your current campaigns, identify
            wasted spend, and show you a clear path to better ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
              Get Free Performance Audit
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
