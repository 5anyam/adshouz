// app/services/international-campaigns/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  Globe, Target, BarChart3, Shield,
  Zap, TrendingUp, Users, Languages,
  MapPin, DollarSign, Clock, Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "International Digital Marketing Campaigns India | Global Google & Meta Ads | Adshouz Digital",
  description:
    "Run international digital marketing campaigns from India — Google Ads, Meta Ads, SEO and landing pages targeting USA, UK, UAE, Australia, Canada and global markets. Google-certified agency with multi-currency, multilingual campaign expertise.",
  keywords: [
    "international digital marketing India",
    "international Google Ads agency India",
    "global PPC campaigns India",
    "USA Google Ads from India",
    "UK digital marketing agency India",
    "UAE marketing campaigns India",
    "international SEO agency India",
    "multilingual ad campaigns",
    "global Meta Ads management India",
    "cross-border digital marketing",
  ],
  alternates: { canonical: "https://adshouz.com/services/international-campaigns" },
  openGraph: {
    title: "International Digital Marketing Campaigns | Adshouz Digital",
    description:
      "Target USA, UK, UAE, Australia and global markets with Google Ads, Meta Ads and SEO campaigns managed from India. Cost-efficient, Google-certified, results-driven.",
    url: "https://adshouz.com/services/international-campaigns",
    images: [{ url: "https://adshouz.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

// ─── Data ─────────────────────────────────────────────────────────────────────
const markets = [
  { flag: "🇺🇸", country: "United States",   currency: "USD", note: "Highest intent, premium CPC — we optimise for max ROAS" },
  { flag: "🇬🇧", country: "United Kingdom",  currency: "GBP", note: "Strong e-commerce & B2B SaaS market" },
  { flag: "🇦🇪", country: "UAE & Gulf",       currency: "AED", note: "High-value consumers, low competition keywords" },
  { flag: "🇦🇺", country: "Australia",        currency: "AUD", note: "English-speaking, high purchase intent" },
  { flag: "🇨🇦", country: "Canada",           currency: "CAD", note: "Bilingual targeting — English & French" },
  { flag: "🇸🇬", country: "Singapore & SEA", currency: "SGD", note: "Fast-growing digital ad market" },
  { flag: "🇩🇪", country: "Germany & EU",    currency: "EUR", note: "Multilingual campaigns across EU markets" },
  { flag: "🇳🇿", country: "New Zealand",     currency: "NZD", note: "High English-language purchase intent" },
];

const services = [
  {
    icon: Target,
    title: "International Google Ads",
    tag: "Most Popular",
    tagColor: "violet",
    desc: "Search, Display, Shopping, and YouTube campaigns targeting international markets — with geo-specific bidding, currency, and audience strategy.",
    points: [
      "Country-specific campaign structure",
      "Multi-currency bid management",
      "Geo-targeted keyword research",
      "Time-zone aware ad scheduling",
    ],
  },
  {
    icon: Users,
    title: "Global Meta Ads",
    tag: "Widest Reach",
    tagColor: "blue",
    desc: "Facebook and Instagram campaigns targeting international audiences — lookalike audiences, interest targeting, and retargeting across borders.",
    points: [
      "Country-specific audience building",
      "International lookalike audiences",
      "Multi-currency ad accounts",
      "Cross-border retargeting",
    ],
  },
  {
    icon: Globe,
    title: "International SEO",
    tag: "Long-Term Growth",
    tagColor: "green",
    desc: "Rank in Google.com, Google.co.uk, Google.com.au — hreflang, geo-targeting, local backlinks and country-specific content strategy.",
    points: [
      "Hreflang implementation",
      "Country-specific GSC setup",
      "International keyword research",
      "Local backlink building",
    ],
  },
  {
    icon: Languages,
    title: "Multilingual Campaigns",
    tag: "Language Targeting",
    tagColor: "orange",
    desc: "Ads and landing pages in multiple languages — English, Arabic, German, French — to maximise relevance and Quality Score in each market.",
    points: [
      "Native language ad copy",
      "Translated landing pages",
      "Language-specific keyword sets",
      "Cultural relevance review",
    ],
  },
  {
    icon: MapPin,
    title: "Landing Page Localisation",
    tag: "Higher Conversions",
    tagColor: "pink",
    desc: "Market-specific landing pages with local currency, local trust signals, local phone numbers, and culturally relevant copy.",
    points: [
      "Currency & pricing localisation",
      "Local testimonials & trust badges",
      "Country-specific CTAs",
      "Local compliance (GDPR, etc.)",
    ],
  },
  {
    icon: BarChart3,
    title: "International Reporting",
    tag: "Full Visibility",
    tagColor: "gray",
    desc: "Unified Looker Studio dashboard showing performance by country, currency, and channel — all in one view with INR/local currency toggle.",
    points: [
      "Country-level performance breakdown",
      "Multi-currency reporting",
      "Cross-market ROAS comparison",
      "Monthly strategy recommendations",
    ],
  },
];

const advantages = [
  {
    icon: DollarSign,
    title: "60% Lower Agency Cost",
    desc: "Get the same quality of international campaign management at a fraction of what US/UK agencies charge — without compromising results.",
  },
  {
    icon: Clock,
    title: "Overlap-Friendly Timezone",
    desc: "IST overlaps with UAE mornings, UK afternoons, and US early mornings — we cover international business hours effectively.",
  },
  {
    icon: Globe,
    title: "Multi-Market Experience",
    desc: "We've managed campaigns across USA, UK, UAE, Australia, Canada, and Southeast Asia — we know what works in each market.",
  },
  {
    icon: Shield,
    title: "Compliance Aware",
    desc: "GDPR for EU, CCPA for California, ASA guidelines for UK — we ensure your campaigns meet local advertising regulations.",
  },
];

const process = [
  { step: "01", title: "Market Research",         desc: "Deep dive into your target markets — search volume, CPC benchmarks, competitor landscape, and audience behaviour in each country." },
  { step: "02", title: "Campaign Architecture",   desc: "Country-separated campaign structure, currency setup, geo-bidding strategy, and market-specific landing page plan." },
  { step: "03", title: "Launch & Localise",       desc: "Campaigns go live with market-specific ad copy, extensions, and landing pages. First 2 weeks: intensive optimisation." },
  { step: "04", title: "Scale & Report",          desc: "Monthly cross-market performance reports. We scale budgets into top-performing markets and pull back from underperformers." },
];

const results = [
  { metric: "12+",  label: "Countries managed",     sub: "Active international campaigns" },
  { metric: "60%",  label: "Lower agency cost",      sub: "vs US/UK agencies" },
  { metric: "3.5×", label: "Average ROAS",           sub: "International campaigns" },
  { metric: "48h",  label: "Campaign launch time",   sub: "After brief & approval" },
];

const faqs = [
  {
    q: "Can an Indian agency really manage international campaigns effectively?",
    a: "Yes — and more cost-effectively than a local US or UK agency. Google Ads and Meta Ads platforms are global. Our team is Google-certified, has managed campaigns across 12+ countries, and understands the nuances of each market. The only difference is you pay Indian agency rates for international-quality work.",
  },
  {
    q: "How do you handle different currencies and billing?",
    a: "Google Ads and Meta Ads allow multi-currency campaign management. We set up country-specific campaigns with appropriate currency bidding. Your ad spend is billed in the currency of your ad account (USD, GBP, AED, etc.) while our management fee is billed in INR.",
  },
  {
    q: "Do you handle GDPR compliance for EU campaigns?",
    a: "Yes. For EU/UK campaigns, we ensure consent mode v2 is implemented, cookie banners are compliant, and audience targeting follows GDPR guidelines. We also advise on landing page compliance requirements for each target market.",
  },
  {
    q: "What markets do you have the most experience with?",
    a: "Our strongest markets are USA, UK, UAE, and Australia — particularly for e-commerce, B2B SaaS, real estate, and education verticals. We also have experience in Canada, Singapore, Germany, and Southeast Asia.",
  },
  {
    q: "Do you create language-specific ad copy?",
    a: "For English-speaking markets (USA, UK, Australia, Canada), we write native-quality copy in-house. For Arabic (UAE), German, French, and other languages, we use native-speaker translators and copywriters to ensure cultural accuracy — not just Google Translate.",
  },
  {
    q: "How is international SEO different from regular SEO?",
    a: "International SEO requires hreflang tags to signal language/country targeting, country-specific Google Search Console properties, geo-targeted hosting or CDN, and local backlink building in each market. Without these, your site may rank in India but be completely invisible in the UK or US.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Digital Marketing Campaigns",
  provider: {
    "@type": "Organization",
    name: "Adshouz Digital Agency Pvt. Ltd.",
    url: "https://adshouz.com",
  },
  description:
    "International digital marketing campaigns targeting USA, UK, UAE, Australia and global markets — Google Ads, Meta Ads, SEO and multilingual campaigns managed from India.",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://adshouz.com/services/international-campaigns",
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
export default function InternationalCampaignsPage() {
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
              <span className="text-gray-700 dark:text-white font-medium">International Campaigns</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
                <Globe className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                  USA · UK · UAE · Australia · Canada · Global Markets
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.06] tracking-tight mb-5">
                <span className="text-gray-900 dark:text-white">Reach Global Markets</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500">
                  From India —
                </span><br />
                <span className="text-gray-900 dark:text-white">At Indian Agency Rates</span>
              </h1>

              <p className="text-gray-500 dark:text-white text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Why pay $5,000/month to a US agency when you can get the same Google-certified
                expertise for a fraction of the cost? We manage high-performing Google Ads,
                Meta Ads, and SEO campaigns targeting USA, UK, UAE, Australia, and beyond —
                from our base in India.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                  Start International Campaign
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-sm">
                  <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {["Google Certified", "12+ Countries", "GDPR Compliant", "Multi-Currency"].map((b) => (
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

        {/* ══ MARKETS ═══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">Markets We Cover</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Countries We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Actively Manage
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                Every market has different CPCs, audience behaviour, and compliance requirements. We know them all.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {markets.map(({ flag, country, currency, note }, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/40 hover:-translate-y-1 transition-all group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{flag}</span>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{country}</div>
                      <div className="text-[11px] text-violet-500 font-bold">{currency}</div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">What We Offer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                International Campaign{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Services
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                Full-stack international marketing — from Google Ads to multilingual SEO and localised landing pages.
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

        {/* ══ INDIA ADVANTAGE ═══════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">The India Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Why Hire an Indian Agency for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  International Campaigns?
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                Same Google-certified expertise. Same platforms. Same results. 60% less cost.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {advantages.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-violet-400/40 hover:-translate-y-1 transition-all group text-center">
                  <div className="w-10 h-10 bg-violet-500/10 group-hover:bg-violet-500/20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all">
                    <Icon className="w-5 h-5 text-violet-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Cost Compare Table */}
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-100 dark:bg-white/[0.04] border-b border-gray-200 dark:border-white/[0.06]">
                  <div className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-white">Agency Type</div>
                  <div className="px-4 py-3 text-xs font-bold text-gray-700 dark:text-white text-center">Monthly Mgmt Fee</div>
                  <div className="px-4 py-3 text-xs font-bold text-violet-600 dark:text-violet-400 text-center">Adshouz Digital</div>
                </div>
                {[
                  ["US / UK Agency",      "$3,000–$8,000/mo",   "✅ 60–70% less"],
                  ["UAE Agency",          "AED 5,000–15,000/mo","✅ 50–65% less"],
                  ["Australian Agency",   "AUD 2,500–6,000/mo", "✅ 55–70% less"],
                  ["Freelancer (Global)", "Varies, no team",    "✅ Full team & tools"],
                ].map(([type, cost, saving], i) => (
                  <div key={i} className={`grid grid-cols-3 border-b border-gray-100 dark:border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white dark:bg-white/[0.01]"}`}>
                    <div className="px-4 py-3 text-xs font-medium text-gray-700 dark:text-white">{type}</div>
                    <div className="px-4 py-3 text-xs text-gray-500 dark:text-white text-center">{cost}</div>
                    <div className="px-4 py-3 text-xs text-violet-600 dark:text-violet-400 font-bold text-center">{saving}</div>
                  </div>
                ))}
              </div>
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
                Our International{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Campaign Launch Process
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
                  Global Reach,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                    Indian Efficiency
                  </span>
                </h2>
                <p className="text-gray-500 dark:text-white text-sm leading-relaxed mb-6">
                  We are not just a local agency that also does international. International campaigns
                  are one of our core specialisations — we understand cross-border targeting, currency
                  bidding, compliance differences, and cultural nuances that generic agencies miss.
                </p>
                <div className="space-y-3">
                  {[
                    "Google-certified team managing 12+ country campaigns",
                    "Country-separated campaign structure — no budget mixing",
                    "Native-quality ad copy for English-speaking markets",
                    "GDPR, CCPA, ASA compliance built into every campaign",
                    "Multi-currency Looker Studio reporting dashboard",
                    "Time-zone coverage across UAE, UK, and US business hours",
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
                  { icon: Globe,       title: "12+ Countries",        desc: "Active campaigns across USA, UK, UAE, AU, CA, SG and more." },
                  { icon: DollarSign,  title: "60% Cost Saving",      desc: "vs US/UK agencies — same quality, fraction of the price." },
                  { icon: Languages,   title: "Multilingual Ads",     desc: "Native-quality copy for English, Arabic, German, French." },
                  { icon: Shield,      title: "Compliance Ready",     desc: "GDPR, CCPA, ASA — compliant in every target market." },
                  { icon: TrendingUp,  title: "3.5× Avg ROAS",        desc: "Average return on ad spend across international accounts." },
                  { icon: Star,        title: "No Lock-in",           desc: "Month-to-month. Stay for results, not contracts." },
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
              Ready to Go{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-200">
                Global?
              </span>
            </h2>
            <p className="text-white/70 text-sm mb-7 max-w-md mx-auto">
              Free consultation — tell us which markets you want to target and we will send you a market analysis, campaign strategy, and pricing within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                Start International Campaign
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
