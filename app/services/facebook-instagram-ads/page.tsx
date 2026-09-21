// app/services/facebook-instagram-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Share2, Target, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight, Star,
  Users, BarChart3, Zap, Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facebook & Instagram Ads | Social Media Advertising | Adshouz Digital",
  description:
    "High-ROI Facebook and Instagram ad campaigns that grow your audience, generate leads, and drive sales. Expert Meta Ads management by Adshouz Digital.",
  keywords: "facebook ads, instagram ads, meta ads, social media advertising, facebook ad agency Delhi",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const services = [
  { icon: Target,    title: "Lead Generation Ads",   desc: "Instant Forms and landing page campaigns targeting high-intent audiences at the lowest CPL." },
  { icon: Eye,       title: "Brand Awareness",        desc: "Reach & frequency campaigns that put your brand in front of the right people, repeatedly." },
  { icon: Share2,    title: "Retargeting Campaigns",  desc: "Re-engage website visitors, video viewers, and past customers with personalised creatives." },
  { icon: Users,     title: "Lookalike Audiences",    desc: "We build custom + lookalike audiences from your customer data to find high-value prospects." },
  { icon: BarChart3, title: "Conversion Campaigns",   desc: "Purchase and sign-up optimised campaigns with pixel tracking and A/B tested creatives." },
  { icon: TrendingUp,"title": "Scaling & Optimisation", desc: "Daily bid management, creative refresh, and budget scaling as winning ad sets emerge." },
];

const stats = [
  { value: "3.2×",  label: "Average ROAS" },
  { value: "60%",   label: "Lower CPL vs Google" },
  { value: "48hr",  label: "Campaign Go-live" },
  { value: "2.9B+", label: "Meta Monthly Users" },
];

const process = [
  { step: "01", title: "Audience Research",   desc: "We map your ideal customer using demographics, interests, and behavioural data on Meta." },
  { step: "02", title: "Creative Strategy",   desc: "Ad copy, images, and video briefs tailored for Reels, Stories, Feed, and Carousel formats." },
  { step: "03", title: "Launch & Test",        desc: "Multiple ad sets launched simultaneously with A/B testing on audiences and creatives." },
  { step: "04", title: "Optimise & Scale",    desc: "Winners are scaled, losers are cut. Weekly reports with full transparency on every rupee spent." },
];

const faqs = [
  {
    q: "What budget do I need to start Facebook Ads?",
    a: "We recommend a minimum of ₹15,000–₹20,000/month in ad spend to get enough data for optimisation. Our management fee is separate. Smaller budgets can work for local businesses with tight targeting.",
  },
  {
    q: "Facebook Ads vs Google Ads — which is better?",
    a: "They serve different purposes. Google captures existing demand (people searching for your product). Meta creates demand (showing your product to people who don't know they need it yet). For most businesses, both channels together deliver the best results.",
  },
  {
    q: "How long before I see results?",
    a: "Most campaigns enter the learning phase in the first 7–14 days. You'll see initial data within a week and meaningful results by week 3–4 as optimisation kicks in.",
  },
  {
    q: "Do you create the ad creatives?",
    a: "We provide creative strategy, copy, and briefs. For static image ads, we can design them. For video ads, we work with your existing footage or guide you on shooting simple, high-performing content.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Facebook & Instagram Ads",
  provider: { "@type": "Organization", name: "Adshouz Digital Agency Pvt. Ltd.", url: "https://adshouz.com" },
  areaServed: "India",
  serviceType: "Digital Marketing",
};

export default function FacebookInstagramAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-pink-500/10 dark:bg-pink-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-blue-600/8 dark:bg-blue-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services/social-media-ads" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Social Media Ads</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Facebook & Instagram</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1.5 mb-5">
              <Share2 className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-pink-700 dark:text-pink-300 text-xs font-semibold">Meta Ads · Facebook · Instagram</span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Facebook &amp; Instagram </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400">
                Ads That Sell
              </span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              We run high-ROI Meta ad campaigns — from lead generation to e-commerce sales —
              with creative strategy, precise targeting, and weekly performance reports.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-pink-500/25 text-sm group">
                Start Meta Ads <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-pink-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Meta Business Partner", "Pixel & CAPI Setup", "A/B Tested Creatives", "No Lock-in"].map((b) => (
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
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-pink-400/40 hover:-translate-y-0.5 transition-all"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Full-service Meta Ads management — strategy, creatives, targeting, and reporting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-pink-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-pink-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-pink-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-pink-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{title}</h3>
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
              How We Run Your Campaigns
            </h2>
          </div>
          <div className="space-y-3">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-pink-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-pink-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-pink-400/30 to-transparent mt-2 min-h-[16px]" />
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
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
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
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-pink-500 group-open:text-pink-500 group-open:bg-pink-500/10 transition-all font-bold text-base">
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
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-rose-900/30" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Ready to Run{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-200">
              Meta Ads?
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Get a free Meta Ads audit — we will show you exactly how to reach your target audience and what results to expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-pink-500/25 text-sm group">
              Get Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
