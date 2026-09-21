// app/services/landing-pages/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Layout, Zap, Target, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  BarChart3, MousePointer, FileText, Smartphone, TestTube, Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Landing Page Design | High-Converting Pages | Adshouz Digital",
  description:
    "Custom landing pages designed to convert ad traffic into leads and sales. Fast, mobile-first, A/B tested landing pages built for Google Ads, Meta Ads, and SEO campaigns.",
  keywords: "landing page design, high converting landing page, PPC landing page, lead generation page, landing page agency Delhi",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const services = [
  { icon: Target,       title: "Campaign-Specific Pages",  desc: "Dedicated pages for each ad campaign — matched messaging means higher Quality Score and lower CPC." },
  { icon: Smartphone,   title: "Mobile-First Design",      desc: "60%+ of ad traffic is mobile. Every page we build is optimised for speed and conversions on small screens." },
  { icon: Zap,          title: "Speed Optimised",          desc: "Sub-2s load time with optimised images, minimal scripts, and Next.js or HTML delivery." },
  { icon: FileText,     title: "Conversion Copywriting",   desc: "Headlines, subheads, and CTAs written to match search intent and push visitors to act immediately." },
  { icon: TestTube,     title: "A/B Testing Ready",        desc: "Pages built with A/B testing in mind — headline variants, CTA colours, form length all tested systematically." },
  { icon: BarChart3,    title: "Analytics & Heatmaps",     desc: "GA4, GTM, and Hotjar/Microsoft Clarity set up on every page so we know exactly where visitors drop off." },
];

const stats = [
  { value: "3×",   label: "Higher conversions vs homepages" },
  { value: "<2s",  label: "Target page load time" },
  { value: "5–7",  label: "Days to deliver" },
  { value: "↑40%", label: "Avg. conversion rate improvement" },
];

const process = [
  { step: "01", title: "Brief & Research",   desc: "We study your offer, target audience, ad campaigns, and top competitors to define the page structure and messaging." },
  { step: "02", title: "Wireframe & Copy",   desc: "Wireframe approved first — layout, sections, and copy finalized before any design work begins." },
  { step: "03", title: "Design & Build",     desc: "Pixel-perfect design built in Next.js or WordPress. Fast, responsive, and connected to your CRM or lead system." },
  { step: "04", title: "Track & Optimise",   desc: "Post-launch we monitor heatmaps, form completions, and bounce rates — and iterate until conversion goals are met." },
];

const faqs = [
  {
    q: "Why can't I just send ad traffic to my homepage?",
    a: "Homepages serve many audiences and goals — they distract visitors with too many options. A landing page has one job: convert a specific visitor from a specific ad. Businesses using dedicated landing pages see 3–5× higher conversion rates than those sending traffic to homepages.",
  },
  {
    q: "What platform do you build landing pages on?",
    a: "We build on Next.js for maximum speed and SEO performance, or WordPress/Elementor if you need to manage content yourself. For quick tests we can also use Unbounce or Instapage. The choice depends on your tech stack and timeline.",
  },
  {
    q: "How long does it take to build a landing page?",
    a: "A standard landing page takes 5–7 business days from brief to live. Rush delivery in 2–3 days is available. Complex pages with custom animations or integrations may take 8–10 days.",
  },
  {
    q: "Do you integrate with CRMs and email tools?",
    a: "Yes. We connect forms to any CRM — HubSpot, Zoho, Salesforce, Leadsquared — and email platforms like Mailchimp or Klaviyo. WhatsApp API and instant email/SMS lead alerts are also available.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landing Page Design",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

export default function LandingPagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-500/10 dark:bg-orange-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-violet-600/8 dark:bg-violet-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services/website-development" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Website Development</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Landing Pages</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-5">
              <MousePointer className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-orange-700 dark:text-orange-300 text-xs font-semibold">
                Landing Pages · CRO · Lead Generation
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Pages Built to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-violet-500">
                Convert,
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Not Just Look Good</span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Ad clicks are expensive. A poorly designed page wastes every rupee.
              We build fast, focused landing pages that turn your ad traffic into
              <strong className="text-gray-900 dark:text-white"> leads and sales.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-orange-500/25 text-sm group">
                Get a Landing Page
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-orange-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Delivered in 5–7 Days", "Mobile-First", "CRM Integration", "A/B Test Ready"].map((b) => (
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
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-orange-400/40 hover:-translate-y-0.5 transition-all"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Every landing page we build is engineered for one goal — maximum conversions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-orange-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-orange-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{title}</h3>
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
                className="flex gap-5 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-orange-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-rose-500 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-orange-400/30 to-transparent mt-2 min-h-[16px]" />
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
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-orange-500 group-open:text-orange-500 group-open:bg-orange-500/10 transition-all font-bold text-base">
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
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 to-rose-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Stop Wasting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-200">
              Ad Budget
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Tell us about your campaign and we will recommend the right landing page
            structure to maximise your conversions from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-orange-500/25 text-sm group">
              Build My Landing Page
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
