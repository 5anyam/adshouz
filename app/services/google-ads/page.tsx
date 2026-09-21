// app/services/google-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Target, Search, Play, ShoppingBag, Monitor,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  BarChart3, TrendingUp, Zap, DollarSign, Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Ads Management | PPC Agency Delhi | Adshouz Digital",
  description:
    "Expert Google Ads management — Search, Display, YouTube, and Shopping campaigns. Data-driven PPC that maximises ROI and delivers measurable results.",
  keywords: "google ads management, ppc agency, google ads agency Delhi, search ads, display ads, youtube ads",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const adTypes = [
  {
    icon: Search,
    title: "Search Ads",
    href: "/services/google-search-ads",
    desc: "Appear at the top of Google when buyers are actively searching for your product or service.",
  },
  {
    icon: Monitor,
    title: "Display Ads",
    href: "/services/google-display-ads",
    desc: "Banner and image ads across 2M+ websites to build brand awareness and retarget visitors.",
  },
  {
    icon: Play,
    title: "YouTube Ads",
    href: "/services/youtube-ads",
    desc: "Skippable and non-skippable video ads that reach engaged audiences at low CPV.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Ads",
    href: "/services/shopping-ads",
    desc: "Product listing ads for e-commerce — show price, image, and reviews directly in search results.",
  },
  {
    icon: Target,
    title: "Performance Max",
    href: "/services/google-ads",
    desc: "AI-powered campaigns across all Google channels — Search, Display, YouTube, Gmail, and Maps.",
  },
  {
    icon: Eye,
    title: "Remarketing",
    href: "/services/google-ads",
    desc: "Re-engage past visitors and cart abandoners with personalised ads across the Google network.",
  },
];

const stats = [
  { value: "8+",   label: "Years Google Ads Experience" },
  { value: "500+", label: "Campaigns Managed" },
  { value: "300%", label: "Average ROI Delivered" },
  { value: "126+", label: "Active Clients" },
];

const whyUs = [
  "Certified Google Ads specialists — not generalists",
  "Dedicated account manager for every client",
  "Weekly performance reports with full transparency",
  "Conversion tracking and GTM setup included",
  "No long-term lock-in contracts",
  "Landing page recommendations included free",
];

const process = [
  { step: "01", title: "Account Audit",      desc: "Full audit of your existing campaigns, wasted spend, and missed opportunities. Free, no commitment." },
  { step: "02", title: "Strategy & Setup",   desc: "Campaign structure, keyword research, negative keywords, ad copy, and bidding strategy built from scratch." },
  { step: "03", title: "Launch & Track",     desc: "Campaigns go live with full conversion tracking, GTM, and call tracking configured from day one." },
  { step: "04", title: "Optimise & Scale",   desc: "Daily monitoring, weekly optimisations, and monthly scaling of what converts. You see every change we make." },
];

const faqs = [
  {
    q: "What budget do I need to start Google Ads?",
    a: "We recommend a minimum of ₹20,000–₹30,000/month in ad spend for Search campaigns to generate enough data for optimisation. The management fee is separate. We work with your budget and set realistic expectations upfront.",
  },
  {
    q: "How quickly will I see results?",
    a: "Search campaigns can generate leads from day one. However, meaningful optimisation and consistent results typically emerge after 30–60 days as the algorithm gathers data and we refine targeting.",
  },
  {
    q: "Do you work with existing Google Ads accounts?",
    a: "Yes. We take over existing accounts, conduct a full audit to identify wasted spend, and restructure campaigns for better performance — often improving results significantly within the first month.",
  },
  {
    q: "What's included in the management fee?",
    a: "Strategy, campaign setup, ad copywriting, keyword research, bid management, A/B testing, conversion tracking, and weekly reports. No hidden costs — everything is covered in one flat fee.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads Management",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

export default function GoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-violet-600/8 dark:bg-violet-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Google Ads</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <Target className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-blue-700 dark:text-blue-300 text-xs font-semibold">
                Google Certified Partner · PPC Management
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Google Ads That </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500">
                Actually Convert
              </span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Stop burning ad budget on clicks that do not convert. We build and manage
              high-performance Google Ads campaigns with full transparency and measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-blue-500/25 text-sm group">
                Get Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-blue-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Google Certified", "48-hr Setup", "Weekly Reports", "No Lock-in"].map((b) => (
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
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-blue-400/40 hover:-translate-y-0.5 transition-all"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{value}</div>
                <div className="text-xs text-gray-400 dark:text-white/35 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD TYPES ─────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
              All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                Google Ad Types
              </span>
              {" "}We Manage
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              One agency, all Google channels — managed together for maximum reach and efficiency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {adTypes.map(({ icon: Icon, title, href, desc }, i) => (
              <Link key={i} href={href}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group block"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-blue-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                  {title} <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div style={{ animation: "fadeSlideUp 0.6s ease both" }}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">Why Adshouz Digital</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3">
                We Do not Just Run Ads —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                  We Grow Your Business
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed">
                Most agencies set up campaigns and forget them. We monitor, optimise, and
                report every week — so you always know what is working and why.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3"
              style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}>
              {whyUs.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-xl hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-white/75">{item}</span>
                </div>
              ))}
            </div>
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
                className="flex gap-5 bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-blue-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-violet-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-blue-400/30 to-transparent mt-2 min-h-[16px]" />
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
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-blue-500 group-open:text-blue-500 group-open:bg-blue-500/10 transition-all font-bold text-base">
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-violet-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Stop Wasting Budget.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-200">
              Start Converting.
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Get a free Google Ads audit — we will show you exactly where your budget is leaking and how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-blue-500/25 text-sm group">
              Get Free Google Ads Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
