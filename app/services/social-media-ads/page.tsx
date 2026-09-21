// app/services/social-media-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Share2, Target, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  BarChart3, Users, Zap, Play, Briefcase, Instagram
} from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Ads | Paid Social Agency | Adshouz Digital",
  description:
    "High-ROI social media advertising across Facebook, Instagram, LinkedIn, and YouTube. Expert paid social campaigns for lead generation, brand awareness, and e-commerce sales.",
  keywords: "social media ads, paid social, facebook ads, instagram ads, linkedin ads, youtube ads, social media agency Delhi",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const platforms = [
  {
    icon: Share2,
    title: "Facebook & Instagram",
    href: "/services/facebook-instagram-ads",
    desc: "Reach 500M+ Indian users with feed, Reels, Stories, and retargeting campaigns. Best for B2C lead gen and e-commerce.",
    badge: "Most Popular",
    color: "text-pink-500",
    bg: "bg-pink-500/10 group-hover:bg-pink-500/20",
    border: "hover:border-pink-400/40",
    badgeColor: "bg-pink-500/10 text-pink-600 dark:text-pink-300 border-pink-500/20",
  },
  {
    icon: Briefcase,
    title: "LinkedIn Ads",
    href: "/services/linkedin-ads",
    desc: "Target C-suite, managers, and decision-makers by job title, industry, and company size. Best for B2B pipeline.",
    badge: "Best for B2B",
    color: "text-sky-500",
    bg: "bg-sky-500/10 group-hover:bg-sky-500/20",
    border: "hover:border-sky-400/40",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20",
  },
  {
    icon: Play,
    title: "YouTube Ads",
    href: "/services/youtube-ads",
    desc: "Skippable, non-skippable, and Shorts ads to build brand awareness and retarget high-intent audiences at low CPV.",
    badge: "Lowest CPV",
    color: "text-red-500",
    bg: "bg-red-500/10 group-hover:bg-red-500/20",
    border: "hover:border-red-400/40",
    badgeColor: "bg-red-500/10 text-red-600 dark:text-red-300 border-red-500/20",
  },
];

const services = [
  { icon: Target,    title: "Audience Research",        desc: "Custom, lookalike, and in-market audiences built from your CRM data and competitor research across every platform." },
  { icon: Zap,       title: "Creative Strategy",        desc: "Ad copy, image, and video briefs designed for each platform's format — Reels, Stories, Carousels, and InMail." },
  { icon: Users,     title: "Lead Generation",          desc: "Native lead forms on Meta and LinkedIn with CRM integration — zero friction, maximum volume at lowest CPL." },
  { icon: Share2,    title: "Multi-Platform Retargeting", desc: "Cross-platform retargeting sequences that follow your warmest prospects across every social channel they use." },
  { icon: BarChart3, title: "Unified Reporting",        desc: "One dashboard covering all platforms — spend, CPL, ROAS, and conversions — every week, no spreadsheet digging." },
  { icon: TrendingUp,"title": "Budget Scaling",         desc: "We identify winning ad sets early and scale budgets methodically — doubling down on what works, fast." },
];

const stats = [
  { value: "4.9B",  label: "Social media users worldwide" },
  { value: "2.5hr", label: "Avg. time spent on social daily" },
  { value: "73%",   label: "Marketers say social ads are effective" },
  { value: "3×",    label: "Higher engagement vs organic" },
];

const platformComparison = [
  { platform: "Facebook & Instagram", audience: "B2C, All ages",    strength: "Volume & retargeting",  cpc: "Low–Medium" },
  { platform: "LinkedIn",             audience: "B2B professionals", strength: "Decision-maker reach",  cpc: "High" },
  { platform: "YouTube",              audience: "All demographics",  strength: "Video storytelling",    cpc: "Very Low CPV" },
];

const process = [
  { step: "01", title: "Platform Selection",    desc: "We match your audience and offer to the right platform mix — not every business needs every channel from day one." },
  { step: "02", title: "Creative & Copy",       desc: "Platform-native creatives built for each format — what works on LinkedIn InMail is very different from Instagram Reels." },
  { step: "03", title: "Launch & Test",         desc: "Multiple audiences and creatives tested simultaneously. Data drives every decision from week one." },
  { step: "04", title: "Optimise & Scale",      desc: "Weekly optimisation, monthly budget reallocation across platforms based on where your cost per result is lowest." },
];

const faqs = [
  {
    q: "Which social media platform should I advertise on?",
    a: "It depends on your business type and target customer. B2C businesses selling to consumers benefit most from Facebook and Instagram. B2B companies targeting professionals should prioritise LinkedIn. Businesses with strong video content or looking for the lowest CPM should add YouTube. We recommend a platform mix after understanding your audience and margins.",
  },
  {
    q: "Can I run ads on multiple platforms simultaneously?",
    a: "Yes — and for most businesses, a multi-platform approach delivers better results than concentrating all budget in one place. We manage cross-platform campaigns with unified strategy and reporting so you always know the combined impact and per-platform ROI.",
  },
  {
    q: "How much should I spend on social media ads?",
    a: "We recommend starting with ₹20,000–₹30,000/month per platform to gather meaningful data. For multi-platform campaigns, ₹60,000–₹80,000/month total is a solid starting point. Budget scales up as we identify winning audiences and creatives.",
  },
  {
    q: "Do you create video ads and creatives?",
    a: "We provide creative strategy, scripts, ad copy, and static image design. For video ads, we work with your existing footage or provide a detailed brief for simple, high-performing videos you can shoot on a smartphone. Full video production is available as an add-on.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Ads",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

export default function SocialMediaAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-pink-500/10 dark:bg-pink-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-violet-600/8 dark:bg-violet-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Social Media Ads</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1.5 mb-5">
              <Share2 className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-pink-700 dark:text-pink-300 text-xs font-semibold">
                Facebook · Instagram · LinkedIn · YouTube
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Social Ads That </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500">
                Fill Your Funnel
              </span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              4.9 billion people use social media. We run paid campaigns across
              the right platforms for your business — with creative strategy,
              precise targeting, and{" "}
              <strong className="text-gray-900 dark:text-white">
                ROI you can measure every week.
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-pink-500/25 text-sm group">
                Get Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-pink-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["All Major Platforms", "Creative Strategy", "Weekly Reports", "No Lock-in"].map((b) => (
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

      {/* ── PLATFORMS ────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
              Platforms We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Manage
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Each platform requires a different strategy. We specialise in all three.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {platforms.map(({ icon: Icon, title, href, desc, badge, color, bg, border, badgeColor }, i) => (
              <Link key={i} href={href}
                className={`bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 ${border} hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group block relative`}
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.1}s both` }}>
                <div className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full border ${badgeColor}`}>
                  {badge}
                </div>
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

      {/* ── PLATFORM COMPARISON ──────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Which Platform Is Right For You?
            </h2>
          </div>
          <div className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden shadow-sm"
            style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}>
            <div className="grid grid-cols-4 px-5 py-3 bg-gray-50 dark:bg-white/[0.03] border-b border-gray-200 dark:border-white/[0.06]">
              {["Platform", "Audience", "Best Strength", "Cost"].map((h) => (
                <span key={h} className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">{h}</span>
              ))}
            </div>
            {platformComparison.map(({ platform, audience, strength, cpc }, i) => (
              <div key={i}
                className={`grid grid-cols-4 px-5 py-4 items-center hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors ${
                  i < platformComparison.length - 1 ? "border-b border-gray-100 dark:border-white/[0.04]" : ""
                }`}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/85">{platform}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-white/50">{audience}</span>
                <span className="text-xs text-gray-500 dark:text-white/50">{strength}</span>
                <span className="text-xs text-pink-600 dark:text-pink-400 font-medium">{cpc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Across all social platforms — one team, one strategy, one report.
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
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              How We Work
            </h2>
          </div>
          <div className="space-y-3">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-pink-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-pink-500/20 group-hover:scale-110 transition-transform">
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
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-rose-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Grow on Social —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-200">
              With Results to Show
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Free social ads strategy call — we will identify the best platform mix
            for your business and estimate your potential CPL before you spend a rupee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-pink-500/25 text-sm group">
              Get Free Strategy Call
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
