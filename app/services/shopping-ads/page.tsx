// app/services/shopping-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag, Tag, TrendingUp, BarChart3, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  Star, RefreshCw, Target, Zap, Package, Filter
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Shopping Ads | Product Listing Ads | Adshouz Digital",
  description:
    "Drive e-commerce sales with Google Shopping Ads. Product listing campaigns with price, image, and ratings shown directly in search results — managed by Adshouz Digital.",
  keywords: "google shopping ads, product listing ads, pla ads, shopping campaign management, ecommerce ads Delhi",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const services = [
  { icon: Package,   title: "Product Feed Optimisation",  desc: "Title, description, category, and GTIN optimised in your Merchant Center feed — the #1 factor in Shopping ad performance." },
  { icon: Target,    title: "Smart Shopping Campaigns",   desc: "Google's AI-powered campaigns that automatically optimise bids and placements across Search, Display, YouTube, and Gmail." },
  { icon: Filter,    title: "Standard Shopping Setup",    desc: "Manual campaign structure with product group segmentation for full control over bids by category, brand, or margin." },
  { icon: RefreshCw, title: "Remarketing Lists (RLSA)",   desc: "Higher bids for past visitors and cart abandoners — the highest-converting audience in any Shopping account." },
  { icon: BarChart3, title: "Competitor Price Tracking",  desc: "Benchmark your product prices against competitors in real time and adjust bids to win the Shopping Box." },
  { icon: Star,      title: "Merchant Centre Management", desc: "Feed error resolution, product disapprovals, and rating management to keep every product eligible and visible." },
];

const stats = [
  { value: "76%",  label: "Of retail search clicks go to Shopping" },
  { value: "30%",  label: "Higher CTR vs text ads for products" },
  { value: "2×",   label: "Higher purchase intent than Search" },
  { value: "↑25%", label: "Avg. ROAS improvement in 60 days" },
];

const process = [
  { step: "01", title: "Merchant Centre Audit",  desc: "We audit your product feed, fix disapprovals, and ensure every product is eligible before spending a single rupee." },
  { step: "02", title: "Feed Optimisation",      desc: "Product titles, descriptions, and categories rewritten with high-intent keywords shoppers actually search for." },
  { step: "03", title: "Campaign Launch",        desc: "Campaigns structured by product category with separate ad groups for top sellers, high-margin, and clearance items." },
  { step: "04", title: "Bid & Feed Optimisation", desc: "Weekly bid adjustments per product group, negative keyword additions, and feed updates as inventory changes." },
];

const faqs = [
  {
    q: "Do I need a website to run Shopping Ads?",
    a: "Yes — Google Shopping Ads require a live e-commerce website with individual product pages, a return policy page, and secure checkout. We help you ensure your site meets all Merchant Centre requirements before campaign launch.",
  },
  {
    q: "What's the difference between Smart Shopping and Standard Shopping?",
    a: "Smart Shopping uses Google's machine learning to automatically optimise bids and placements across all Google networks. Standard Shopping gives you manual control over bids by product group. We typically start with Standard Shopping to gather data, then layer in Smart Shopping for scaling top performers.",
  },
  {
    q: "My products keep getting disapproved — can you fix it?",
    a: "Yes. Product disapprovals are one of the most common Shopping Ads issues and almost always fixable. Common causes include missing GTINs, mismatched prices, landing page issues, or restricted categories. We audit your full feed, identify every disapproval reason, and resolve them within 3–5 business days.",
  },
  {
    q: "Can Shopping Ads work for Indian e-commerce brands?",
    a: "Absolutely. Google Shopping is fully available in India and works excellently for fashion, electronics, home goods, health, and most product categories. We've managed Shopping campaigns for Indian D2C brands with significant ROAS improvements over general Search campaigns.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Shopping Ads",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

export default function ShoppingAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-amber-500/10 dark:bg-amber-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-orange-600/8 dark:bg-orange-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services/google-ads" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Google Ads</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Shopping Ads</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-5">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-amber-700 dark:text-amber-300 text-xs font-semibold">
                Google Shopping · Product Listing Ads · E-commerce
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Show Your Products </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                Before Competitors
              </span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Google Shopping Ads show your product image, price, and brand
              directly in search results — before the buyer even clicks.
              We manage your feed and campaigns to
              <strong className="text-gray-900 dark:text-white"> maximise ROAS and product visibility.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-amber-500/25 text-sm group">
                Start Shopping Ads
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-amber-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Feed Optimisation Included", "Merchant Centre Setup", "Disapproval Fixes", "Weekly Reports"].map((b) => (
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
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-amber-400/40 hover:-translate-y-0.5 transition-all"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Feed management, campaign setup, and ongoing optimisation — all in one package.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-amber-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{title}</h3>
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
                className="flex gap-5 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-amber-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-amber-400/30 to-transparent mt-2 min-h-[16px]" />
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
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-amber-500 group-open:text-amber-500 group-open:bg-amber-500/10 transition-all font-bold text-base">
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
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-orange-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Put Your Products{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">
              in Front of Buyers
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Free Shopping Ads audit — we will check your Merchant Centre feed health,
            identify disapprovals, and show you where your ROAS is leaking.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-amber-500/25 text-sm group">
              Get Free Shopping Audit
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
