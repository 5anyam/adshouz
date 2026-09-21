// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, Share2, ShoppingBag, TrendingUp, Globe,
  Play, Target, PenTool, MapPin, Settings, Briefcase,
  Monitor, Code2, FileText, Tag,
  ArrowRight, Phone, ChevronRight, CheckCircle, Zap,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Services | Digital Marketing Agency | Adshouz",
  description:
    "Explore all digital marketing and web development services by Adshouz — Google Ads, SEO, Social Media, Performance Marketing, and Web Development.",
  keywords:
    "digital marketing services, google ads agency, seo services, social media ads, web development, performance marketing Delhi",
};

const PHONE      = "+917840000618";
const PHONE_DISP = "+91 78400 00618";

// ─── All Service Categories ────────────────────────────────────
const categories = [
  {
    slug: "google-ads",
    label: "Google Ads",
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    border: "hover:border-blue-400/40",
    shadow: "hover:shadow-blue-500/5",
    accent: "from-blue-500 to-sky-500",
    badge: "Most Popular",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
    desc: "Intent-driven search, display, and shopping campaigns that put your brand in front of buyers at the right moment.",
    services: [
      { name: "Search Ads",   href: "/services/google-search-ads",   icon: Search,      desc: "High-intent PPC campaigns targeting buyers in the purchase funnel." },
      { name: "Display Ads",  href: "/services/google-display-ads",  icon: Monitor,     desc: "Visual banner campaigns across millions of Google partner sites." },
      { name: "YouTube Ads",  href: "/services/youtube-ads",         icon: Play,        desc: "Skippable and non-skippable video ads at the lowest CPV." },
      { name: "Shopping Ads", href: "/services/shopping-ads",        icon: ShoppingBag, desc: "Product listing ads with image, price, and ratings in search results." },
    ],
  },
  {
    slug: "seo",
    label: "SEO",
    icon: Search,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    border: "hover:border-emerald-400/40",
    shadow: "hover:shadow-emerald-500/5",
    accent: "from-emerald-500 to-teal-500",
    badge: "Long-term ROI",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20",
    desc: "Data-driven organic growth strategies that rank you on Page 1 and generate leads 24/7 without paying per click.",
    services: [
      { name: "Local SEO",         href: "/services/local-seo",         icon: MapPin,    desc: "Dominate Google Maps and 'near me' searches in your city." },
      { name: "Technical SEO",     href: "/services/technical-seo",     icon: Settings,  desc: "Core Web Vitals, crawl errors, and site structure optimisation." },
      { name: "Content Marketing", href: "/services/content-marketing", icon: PenTool,   desc: "SEO-optimised content that ranks and converts visitors into leads." },
    ],
  },
  {
    slug: "social-media-ads",
    label: "Social Media Ads",
    icon: Share2,
    color: "text-pink-500",
    bg: "bg-pink-500/10 group-hover:bg-pink-500/20",
    border: "hover:border-pink-400/40",
    shadow: "hover:shadow-pink-500/5",
    accent: "from-pink-500 to-rose-500",
    badge: "Best for B2C",
    badgeColor: "bg-pink-500/10 text-pink-600 dark:text-pink-300 border-pink-500/20",
    desc: "Paid social campaigns across Meta, LinkedIn, and YouTube — creative strategy, precise targeting, weekly ROI reports.",
    services: [
      { name: "Facebook & Instagram", href: "/services/facebook-instagram-ads", icon: Share2,    desc: "Reach 500M+ Indian users with feed, Reels, and Stories campaigns." },
      { name: "LinkedIn Ads",         href: "/services/linkedin-ads",           icon: Briefcase, desc: "Target decision-makers by job title, industry, and company size." },
      { name: "YouTube Ads",          href: "/services/youtube-ads",            icon: Play,      desc: "Video ads for brand awareness and retargeting at low CPV." },
    ],
  },
  {
    slug: "performance-marketing",
    label: "Performance Marketing",
    icon: TrendingUp,
    color: "text-violet-500",
    bg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    border: "hover:border-violet-400/40",
    shadow: "hover:shadow-violet-500/5",
    accent: "from-violet-500 to-indigo-500",
    badge: "Full Funnel",
    badgeColor: "bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/20",
    desc: "Full-funnel paid campaigns with complete attribution — every rupee tracked, every conversion counted.",
    services: [
      { name: "Performance Marketing", href: "/services/performance-marketing", icon: TrendingUp, desc: "Multi-channel campaigns optimised for measurable ROAS and CPL." },
      { name: "Affiliate Marketing",   href: "/services/affiliate-marketing",   icon: Tag,        desc: "CPS, CPL & CPI campaigns — pay only for verified results." },
      { name: "Retargeting",           href: "/services/retargeting",           icon: Target,     desc: "Re-engage warm audiences across Google, Meta, and display." },
    ],
  },
  {
    slug: "website-development",
    label: "Web Development",
    icon: Code2,
    color: "text-orange-500",
    bg: "bg-orange-500/10 group-hover:bg-orange-500/20",
    border: "hover:border-orange-400/40",
    shadow: "hover:shadow-orange-500/5",
    accent: "from-orange-500 to-amber-500",
    badge: "Conversion Focused",
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-300 border-orange-500/20",
    desc: "High-performance websites built for speed, SEO, and conversions — Next.js, WordPress, and custom landing pages.",
    services: [
      { name: "Next.js Development",  href: "/services/nextjs-development",    icon: Code2,    desc: "Blazing-fast, SEO-ready web apps built with Next.js and React." },
      { name: "WordPress Development",href: "/services/wordpress-development", icon: Globe,    desc: "Custom WordPress sites and WooCommerce stores built to convert." },
      { name: "Landing Pages",        href: "/services/landing-pages",         icon: FileText, desc: "High-converting standalone landing pages for paid campaigns." },
    ],
  },
];

const stats = [
  { value: "₹50Cr+", label: "Ad Spend Managed" },
  { value: "300%",   label: "Avg. ROI Delivered" },
  { value: "8+",     label: "Years Experience" },
  { value: "500+",   label: "Clients Served" },
];

const faqs = [
  {
    q: "Do you manage only Google Ads or all digital channels?",
    a: "We manage all major paid and organic digital channels — Google Search, Display, YouTube, Shopping, Meta (Facebook & Instagram), LinkedIn, and SEO. We also build high-performance websites optimised for conversions. Most clients engage us for a multi-channel strategy rather than a single channel.",
  },
  {
    q: "What budget do I need to get started?",
    a: "It depends on the channel mix. For Google Search, we recommend a minimum of ₹30,000/month in ad spend. For multi-channel campaigns, ₹75,000–₹1,00,000/month is a solid starting point. SEO and web development are one-time or monthly retainer engagements independent of ad spend.",
  },
  {
    q: "How quickly will I see results?",
    a: "Paid campaigns (Google Ads, Social Ads) typically show measurable results within 2–4 weeks as data accumulates and campaigns optimise. SEO takes 3–6 months for significant ranking gains but delivers compounding, long-term results. We set clear KPIs and timelines before every engagement.",
  },
  {
    q: "Do you work with businesses outside Delhi?",
    a: "Yes — we work with clients across India and internationally. All our services are delivered remotely with weekly reporting, monthly strategy calls, and real-time dashboard access. Location is never a barrier.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Adshouz Digital Marketing Services",
  itemListElement: categories.map((cat, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: cat.label,
    url: `https://adshouz.com/services/${cat.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-indigo-600/8 dark:bg-indigo-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Services</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
              <Zap className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                Google Ads · SEO · Social · Web Dev · Performance
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Every Service You Need </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500">
                to Grow Online
              </span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              From paid campaigns that drive leads today to SEO that compounds
              for years — we manage every channel your business needs with one
              <strong className="text-gray-900 dark:text-white"> unified strategy and clear ROI.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group"
              >
                Get Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Google Certified Partner", "8+ Years Experience", "₹50Cr+ Ad Spend Managed", "No Lock-in"].map((b) => (
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
              <div
                key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-violet-400/40 hover:-translate-y-0.5 transition-all"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
              >
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{value}</div>
                <div className="text-xs text-gray-400 dark:text-white/35 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CATEGORIES ───────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Service Categories
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Five specialised practices — one agency, one strategy, one point of contact.
            </p>
          </div>

          <div className="space-y-5">
            {categories.map(({ slug, label, icon: Icon, color, bg, border, shadow, accent, badge, badgeColor, desc, services: subs }, ci) => (
              <div
                key={slug}
                className={`bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden ${border} transition-all duration-300 group`}
                style={{ animation: `fadeSlideUp 0.6s ease ${ci * 0.08}s both` }}
              >
                {/* Category header */}
                <div className="flex items-center justify-between p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-black text-gray-900 dark:text-white text-base sm:text-lg">
                          {label}
                        </h3>
                        <span className={`hidden sm:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeColor}`}>
                          {badge}
                        </span>
                      </div>
                      <p className="text-gray-400 dark:text-white/40 text-xs sm:text-sm leading-relaxed max-w-xl hidden sm:block">
                        {desc}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/services/${slug}`}
                    className={`flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    View All
                    <ArrowRight className={`w-3.5 h-3.5 ${color}`} />
                  </Link>
                </div>

                {/* Mobile desc */}
                <p className="sm:hidden text-gray-400 dark:text-white/40 text-xs leading-relaxed px-5 pb-3">
                  {desc}
                </p>

                {/* Sub-services grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-white/[0.04] border-t border-gray-200 dark:border-white/[0.06]">
                  {subs.map(({ name, href, icon: SubIcon, desc: subDesc }, si) => (
                    <Link
                      key={si}
                      href={href}
                      className={`flex items-start gap-3 p-4 sm:p-5 bg-white dark:bg-[#0F0F14] hover:bg-gray-50 dark:hover:bg-[#13131A] ${shadow} hover:shadow-md transition-all group/sub`}
                    >
                      <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/sub:scale-110 transition-transform`}>
                        <SubIcon className={`w-3.5 h-3.5 ${color}`} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <span className={`font-bold text-sm text-gray-900 dark:text-white group-hover/sub:${color} transition-colors`}>
                            {name}
                          </span>
                          <ChevronRight className={`w-3 h-3 ${color} opacity-0 group-hover/sub:opacity-100 transition-opacity flex-shrink-0`} />
                        </div>
                        <p className="text-gray-400 dark:text-white/35 text-xs leading-relaxed mt-0.5 line-clamp-2">
                          {subDesc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ADSHOUZ ──────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Adshouz?
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              We are not a vendor. We are a growth partner obsessed with your ROI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Target,    title: "Full-Funnel Thinking",   desc: "Every channel, every stage — awareness to conversion — planned as one unified system." },
              { icon: TrendingUp,title: "ROI-First Approach",     desc: "We track every rupee spent and every lead generated. No vanity metrics, ever." },
              { icon: Settings,  title: "Deep Technical Skill",   desc: "From GA4 setup to Core Web Vitals — we fix what others miss at the technical layer." },
              { icon: FileText,  title: "Transparent Reporting",  desc: "Weekly snapshots, monthly deep-dives — you always know exactly where your budget goes." },
              { icon: Users,     title: "Dedicated Team",         desc: "A named strategist and account manager for every client. No ticket queues." },
              { icon: CheckCircle,title: "Google Certified",      desc: "Certified Google Ads and Analytics professionals managing your campaigns." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/40 hover:-translate-y-1 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.06}s both` }}
              >
                <div className="w-9 h-9 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-violet-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-violet-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
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
              <details
                key={i}
                className="group bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
              >
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
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-indigo-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        </div>
        <div
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Not Sure Where to Start?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-200">
              We will Tell You.
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Free audit — we will review your current digital presence, identify
            the highest-ROI channels for your business, and give you a
            prioritised action plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group"
            >
              Get Free Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all text-sm"
            >
              <Phone className="w-4 h-4" /> {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
