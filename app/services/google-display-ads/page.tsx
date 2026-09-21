// app/services/google-display-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor, Target, Eye, TrendingUp, RefreshCw,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  BarChart3, Users, Zap, Layers, ImageIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Display Ads | Banner Advertising | Adshouz Digital",
  description:
    "Reach 90% of internet users with Google Display Ads. Banner, responsive, and remarketing ads across 2M+ websites managed by Adshouz Digital.",
  keywords: "google display ads, banner ads, display advertising, remarketing ads, GDN, google display network Delhi",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const services = [
  { icon: ImageIcon, title: "Responsive Display Ads",   desc: "Google auto-assembles your headlines and images into the best-performing ad format for every placement." },
  { icon: RefreshCw, title: "Remarketing Campaigns",    desc: "Show ads to people who visited your site but didn't convert — bring them back at a fraction of Search CPC." },
  { icon: Users,     title: "Audience Targeting",       desc: "In-market, affinity, custom intent, and similar audience targeting to reach buyers ready to purchase." },
  { icon: Layers,    title: "Placement Targeting",      desc: "Hand-pick specific websites, apps, and YouTube channels where your ideal customers spend time." },
  { icon: Target,    title: "Contextual Targeting",     desc: "Ads appear alongside relevant content — reaching users based on what they're reading, not just who they are." },
  { icon: BarChart3, title: "Display + Search Combo",   desc: "We pair display with search campaigns for full-funnel coverage — awareness at the top, conversions at the bottom." },
];

const stats = [
  { value: "90%",   label: "Internet users reached" },
  { value: "2M+",   label: "Websites & apps" },
  { value: "5×",    label: "Lower CPC vs Search" },
  { value: "43%",   label: "Lift in conversions with remarketing" },
];

const process = [
  { step: "01", title: "Audience & Placement Audit", desc: "We map your target customer, identify best-performing placements, and exclude irrelevant sites upfront." },
  { step: "02", title: "Creative Strategy",          desc: "Ad copy, image specs, and sizing guidelines for all formats — 300×250, 728×90, 160×600, and responsive." },
  { step: "03", title: "Campaign Launch",            desc: "Separate campaigns for prospecting and remarketing, with frequency caps to avoid ad fatigue." },
  { step: "04", title: "Optimise & Report",          desc: "Weekly bid adjustments, placement exclusions, and creative rotation. Full transparency on every placement." },
];

const faqs = [
  {
    q: "Are Display Ads effective for lead generation?",
    a: "Display Ads work best for brand awareness and remarketing rather than direct lead gen. However, combined with a strong landing page and remarketing strategy, they can significantly reduce your overall cost per acquisition by warming up cold audiences before they see your Search ads.",
  },
  {
    q: "What creative assets do I need?",
    a: "For Responsive Display Ads, you only need headlines, descriptions, and a few images/logos. Google does the assembly. For custom HTML5 or static banners, we provide size guidelines and can assist with design.",
  },
  {
    q: "How do I prevent my ads from showing on irrelevant sites?",
    a: "We build comprehensive placement exclusion lists from day one — blocking low-quality sites, mobile app placements (unless relevant), and non-brand-safe content. We review placement reports weekly and add exclusions continuously.",
  },
  {
    q: "What's the minimum budget for Display Ads?",
    a: "₹10,000–₹15,000/month in ad spend is sufficient for a well-targeted Display campaign. Remarketing campaigns can work with even smaller budgets since the audience pool is smaller but much more qualified.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Display Ads",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

export default function GoogleDisplayAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-blue-600/8 dark:bg-blue-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services/google-ads" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Google Ads</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Display Ads</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-5">
              <Monitor className="w-3.5 h-3.5 text-cyan-500" />
              <span className="text-cyan-700 dark:text-cyan-300 text-xs font-semibold">
                Google Display Network · Banner Ads · Remarketing
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Be Seen </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500">
                Everywhere
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Your Customers Go</span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Google Display Ads reach <strong className="text-gray-900 dark:text-white">90% of internet users</strong> across
              2M+ websites. We manage targeted display and remarketing campaigns that
              build brand recall and bring back visitors who did not convert the first time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-cyan-500/25 text-sm group">
                Start Display Campaign <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-cyan-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Google Certified", "Remarketing Included", "Placement Exclusions", "Weekly Reports"].map((b) => (
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
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Full-funnel display advertising — from first impression to final conversion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-cyan-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{title}</h3>
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
                className="flex gap-5 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-cyan-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-cyan-400/30 to-transparent mt-2 min-h-[16px]" />
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
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-cyan-500 group-open:text-cyan-500 group-open:bg-cyan-500/10 transition-all font-bold text-base">
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
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-blue-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Start Showing Up{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Everywhere
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Get a free Display Ads strategy — we will map out the best placements, audiences, and remarketing approach for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-cyan-500/25 text-sm group">
              Get Free Strategy Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
