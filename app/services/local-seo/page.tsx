// app/services/local-seo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin, Star, Search, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  Building2, Globe, BarChart3, MessageSquare, Smartphone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO Services | Google Maps Ranking | Adshouz Digital",
  description:
    "Dominate local search results and Google Maps. Local SEO services that drive foot traffic, calls, and leads from customers near you.",
  keywords: "local seo, google maps seo, local search optimization, google my business, local seo agency Delhi",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const services = [
  { icon: MapPin,       title: "Google Business Profile",  desc: "Full GBP setup and optimisation — categories, services, photos, posts, and Q&A — to rank in the Local Pack." },
  { icon: Star,         title: "Review Management",        desc: "Strategy to generate more 5-star reviews, respond to existing ones, and build the trust signals Google rewards." },
  { icon: Search,       title: "Local Keyword Targeting",  desc: "'Near me' and geo-modified keyword research targeting buyers in your city, locality, and service area." },
  { icon: Building2,    title: "Citation Building",        desc: "Consistent NAP (Name, Address, Phone) listings across JustDial, Sulekha, IndiaMART, and 50+ directories." },
  { icon: Globe,        title: "Local Landing Pages",      desc: "Area-specific pages for each location you serve — built to rank for hyper-local search queries." },
  { icon: Smartphone,   title: "Mobile & Maps Optimisation", desc: "70% of local searches happen on mobile. We ensure your listing and site convert on every screen size." },
];

const stats = [
  { value: "46%",  label: "Of Google searches are local" },
  { value: "76%",  label: "Of local searches visit within a day" },
  { value: "3×",   label: "More calls from optimised GBP" },
  { value: "28%",  label: "Local searches result in a purchase" },
];

const process = [
  { step: "01", title: "Local Audit",         desc: "We audit your GBP, existing citations, reviews, and local keyword rankings to find every gap hurting your visibility." },
  { step: "02", title: "GBP Optimisation",    desc: "Complete profile overhaul — correct categories, service areas, business description, photos, and weekly posts." },
  { step: "03", title: "On-Page Local SEO",   desc: "Location-specific schema markup, title tags, and landing pages aligned to your target city and service areas." },
  { step: "04", title: "Citations & Reviews", desc: "Consistent directory listings built and cleaned. Review generation system set up to grow your rating steadily." },
];

const faqs = [
  {
    q: "How long does Local SEO take to show results?",
    a: "GBP improvements can show results within 4–8 weeks. Ranking in the Local Pack (map results) typically takes 2–4 months depending on competition in your area. Citation building and review growth have a compounding effect that strengthens rankings month over month.",
  },
  {
    q: "My business already has a Google listing — do I still need Local SEO?",
    a: "Having a listing is just the starting point. Most unclaimed or unoptimised listings rank far below competitors. We optimise every signal Google uses — completeness, reviews, citations, proximity, and on-site relevance — to push you into the top 3 map results.",
  },
  {
    q: "Can you help with multiple locations?",
    a: "Yes. We manage multi-location Local SEO — separate GBP profiles, location-specific landing pages, and individual citation strategies for each branch. Pricing scales with the number of locations.",
  },
  {
    q: "What's the difference between Local SEO and regular SEO?",
    a: "Regular SEO targets national or global rankings. Local SEO focuses specifically on appearing in Google Maps, the Local Pack (top 3 map results), and geo-specific searches like 'dentist in Lajpat Nagar'. It's faster, cheaper, and drives direct calls and footfall from nearby buyers.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "NCR"],
  serviceType: "Digital Marketing",
};

export default function LocalSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-green-500/10 dark:bg-green-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-violet-600/8 dark:bg-violet-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services/seo" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">SEO</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Local SEO</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-5">
              <MapPin className="w-3.5 h-3.5 text-green-500" />
              <span className="text-green-700 dark:text-green-300 text-xs font-semibold">
                Local SEO · Google Maps · Near Me Searches
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Rank #1 on </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
                Google Maps
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">in Your City</span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              When someone searches for your service nearby, are you showing up?
              We optimise your local presence so customers in your area
              find <strong className="text-gray-900 dark:text-white">you first — not your competitors.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-green-500/25 text-sm group">
                Get Free Local SEO Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-green-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Google Maps Ranking", "GBP Optimisation", "Review Strategy", "Multi-location Support"].map((b) => (
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
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-green-400/40 hover:-translate-y-0.5 transition-all"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Every signal Google uses to rank local businesses — covered and optimised.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-green-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-green-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-green-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-green-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{title}</h3>
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
                className="flex gap-5 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-green-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-green-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-green-400/30 to-transparent mt-2 min-h-[16px]" />
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
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-green-500 group-open:text-green-500 group-open:bg-green-500/10 transition-all font-bold text-base">
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-emerald-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Get Found by Customers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              Near You
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Free local SEO audit — we will check your Google Maps ranking, citation consistency,
            and show exactly whats stopping you from reaching position #1.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-green-500/25 text-sm group">
              Get Free Local SEO Audit
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
