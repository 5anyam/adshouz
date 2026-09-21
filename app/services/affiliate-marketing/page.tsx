// app/services/affiliate-marketing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  DollarSign, MousePointerClick, Smartphone, CheckCircle,
  ArrowRight, Phone, ChevronRight, Zap, TrendingUp,
  BarChart3, Globe, Shield, Users, Target, Bot,
  HelpCircle, FileText, Info, Clock,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Affiliate Marketing (CPS, CPL, CPI) | Adshouz",
  description:
    "AI-powered affiliate marketing campaigns — CPS (Cost Per Sale), CPL (Cost Per Lead) and CPI (Cost Per Install). Pay only for real results. Zero upfront risk. Scale across India and international markets.",
  keywords:
    "affiliate marketing India, CPS campaigns, CPL lead generation, CPI app installs, performance affiliate agency, pay per sale, pay per lead, Adshouz",
  openGraph: {
    title: "Affiliate Marketing — CPS, CPL & CPI | Adshouz",
    description:
      "Pay only for verified sales, leads, and app installs. AI-optimised affiliate campaigns with real-time attribution and zero wasted budget.",
    type: "article",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const models = [
  {
    icon: DollarSign,
    model: "CPS",
    title: "Cost Per Sale",
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    desc: "Pay only when a verified, trackable sale is completed. Zero upfront risk — pure revenue-share performance that aligns our incentives 100% with yours.",
    bestFor: ["E-commerce", "D2C Brands", "Product Launches", "Subscription Boxes", "Fashion & Lifestyle"],
    metrics: ["Revenue Share %", "AOV Tracking", "Repeat Purchase Rate", "Conversion Rate"],
  },
  {
    icon: MousePointerClick,
    model: "CPL",
    title: "Cost Per Lead",
    gradient: "from-sky-500 to-cyan-500",
    glow: "shadow-sky-500/20",
    border: "border-sky-500/30",
    bg: "bg-sky-500/10",
    tagColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    desc: "Pay per qualified lead captured — form fills, phone enquiries, demo signups. Fixed, predictable cost per acquisition with AI-verified lead quality.",
    bestFor: ["Real Estate", "Finance & Insurance", "SaaS & B2B", "EdTech", "Healthcare"],
    metrics: ["Cost Per Lead", "Lead Quality Score", "Contact Rate", "Lead-to-Close %"],
  },
  {
    icon: Smartphone,
    model: "CPI",
    title: "Cost Per Install",
    gradient: "from-violet-500 to-indigo-500",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    tagColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    desc: "Pay per verified app install from high-intent users on Android & iOS. AI targeting filters bot traffic — every install is a real, active user.",
    bestFor: ["Mobile Apps", "Gaming", "Fintech Apps", "Health & Fitness", "Food Delivery"],
    metrics: ["Install Rate", "Day-1 Retention", "In-App Events", "LTV Prediction"],
  },
];

const whyUs = [
  {
    icon: Bot,
    title: "AI-Powered Optimisation",
    desc: "Machine learning models adjust targeting, creatives, and bids in real time — maximising your conversion rate continuously.",
  },
  {
    icon: Shield,
    title: "Fraud-Free Traffic",
    desc: "Multi-layer fraud detection filters bots, click farms, and fake leads — every result we bill is 100% genuine.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Attribution",
    desc: "Every sale, lead, and install is traced to its exact source with live dashboards — full transparency, no black boxes.",
  },
  {
    icon: Globe,
    title: "India + International",
    desc: "Run affiliate campaigns across India, US, UK, UAE and beyond — with geo-specific creatives and publisher networks.",
  },
  {
    icon: Users,
    title: "Premium Publisher Network",
    desc: "Access to 5,000+ vetted publishers, influencers, coupon sites, and content creators across every niche.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Without Risk",
    desc: "Start small, scale infinitely — you only pay when results happen. No budget burn on testing.",
  },
];

const process = [
  {
    step: "01",
    title: "Campaign Brief",
    desc: "Tell us your product, target audience, and desired action (sale / lead / install). We map the right affiliate model and commission structure.",
  },
  {
    step: "02",
    title: "AI Strategy Build",
    desc: "Our AI analyses top-performing campaigns in your vertical and builds a publisher mix, creative strategy, and tracking setup.",
  },
  {
    step: "03",
    title: "Publisher Onboarding",
    desc: "We activate relevant publishers, affiliates, and media buyers from our network — briefed, approved, and live within days.",
  },
  {
    step: "04",
    title: "Launch & Track",
    desc: "Campaigns go live with real-time tracking. Every conversion is attributed, verified, and reported in your live dashboard.",
  },
  {
    step: "05",
    title: "Optimise & Scale",
    desc: "AI identifies top publishers and creatives — we scale winners, cut underperformers, and push volume aggressively.",
  },
  {
    step: "06",
    title: "Weekly Reports",
    desc: "Transparent weekly snapshots with CPA, ROAS, conversion rates and full attribution. No jargon, just clear numbers.",
  },
];

const stats = [
  { value: "₹0",    label: "Upfront Risk",        sub: "Pay only for results" },
  { value: "5K+",   label: "Publisher Network",    sub: "Vetted affiliates" },
  { value: "99.2%", label: "Fraud-Free Rate",      sub: "AI-verified traffic" },
  { value: "48hrs", label: "Campaign Go-Live",     sub: "From brief to live" },
];

const verticals = [
  "E-commerce & D2C",
  "Real Estate",
  "BFSI & Insurance",
  "EdTech & Courses",
  "SaaS & B2B",
  "Mobile Apps & Games",
  "Travel & Hospitality",
  "Healthcare & Wellness",
  "Food & Grocery",
  "Crypto & Fintech",
];

const faqs = [
  {
    q: "What is the difference between CPS, CPL, and CPI?",
    a: "CPS (Cost Per Sale) means you pay when a customer makes a verified purchase. CPL (Cost Per Lead) means you pay when someone submits a qualified enquiry or form. CPI (Cost Per Install) means you pay when a user installs your app. All three are outcome-based — you only pay for the specific result you want.",
  },
  {
    q: "How do you prevent fraudulent leads and fake installs?",
    a: "We use multi-layer AI fraud detection that analyses IP patterns, device fingerprints, click velocity, and behavioural signals. All leads are cross-verified before billing. Fake installs are filtered through post-install event tracking — if a 'user' doesn't perform any in-app action, the install isn't billed.",
  },
  {
    q: "What is the minimum budget to start an affiliate campaign?",
    a: "There's no fixed minimum — since you pay per result, your budget scales with performance. However, we recommend a test budget of ₹50,000–₹1,00,000 to gather initial data, optimise, and identify the best-performing publishers before scaling.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most campaigns see first conversions within 48–72 hours of going live. Meaningful volume and optimisation data typically comes within 2 weeks. We strongly recommend a 30-day test period before drawing performance conclusions.",
  },
  {
    q: "Do you work with international affiliate campaigns?",
    a: "Yes — we run affiliate campaigns across India, US, UK, UAE, Canada, and Australia. We have publisher networks in each market and build geo-specific creatives and landing pages for each region.",
  },
  {
    q: "Can I run affiliate marketing alongside my existing Google Ads or SEO?",
    a: "Absolutely — and we recommend it. Affiliate marketing fills different parts of the funnel. We coordinate campaigns across all channels to ensure there's no cannibalisation and that attribution is clean across every touchpoint.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Affiliate Marketing — CPS, CPL & CPI",
  description:
    "AI-powered affiliate marketing campaigns with Cost Per Sale, Cost Per Lead, and Cost Per Install models. Pay only for verified results.",
  provider: {
    "@type": "Organization",
    name: "Adshouz",
    url: "https://adshouz.com",
  },
  serviceType: "Affiliate Marketing",
  areaServed: ["India", "United States", "United Kingdom", "UAE"],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AffiliateMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#020C1B] via-[#051525] to-[#020C1B] pt-12 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-cyan-800/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle, #0EA5E9 1px, transparent 1px)", backgroundSize: "36px 36px" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <span className="text-white/70">Affiliate Marketing</span>
          </nav>

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-500/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
            <span className="text-sky-300 text-xs font-semibold tracking-wide">Performance Marketing · Outcome-Based</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            Affiliate Marketing That Pays{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
              Only for Results
            </span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            CPS, CPL & CPI campaigns powered by AI — pay only for verified sales,
            qualified leads, and real app installs. Zero upfront risk, 100%
            outcome-based billing.
          </p>

          {/* Quick stats row */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>Go-Live: <strong className="text-white">48 Hours</strong></span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Coverage: <strong className="text-white">India + International</strong></span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Bot className="w-4 h-4 text-sky-400" />
              <span>Type: <strong className="text-white">AI-Powered Affiliate</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-[#030E1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">

            {/* ── LEFT: Main content ───────────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Overview */}
              <div className="bg-white border border-gray-200 dark:bg-[#071828] dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                <div className="h-1 bg-gradient-to-r from-sky-500 to-cyan-400" />
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center">
                      <Info className="w-4 h-4 text-sky-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">What is Affiliate Marketing?</h2>
                  </div>
                  <p className="text-gray-600 dark:text-white/65 leading-relaxed text-base mb-3">
                    Affiliate marketing is a performance-based model where you pay publishers,
                    influencers, and media buyers only when they deliver a specific, verified
                    result — a sale, a lead, or an app install. It is the most risk-free form
                    of digital advertising because your cost is tied directly to revenue.
                  </p>
                  <p className="text-gray-500 dark:text-white/50 leading-relaxed text-sm">
                    At Adshouz, we run AI-powered affiliate campaigns with real-time fraud
                    detection, live attribution dashboards, and access to a network of 5,000+
                    vetted publishers across India and international markets.
                  </p>
                </div>
              </div>

              {/* 3 Models */}
              <div className="bg-white border border-gray-200 dark:bg-[#071828] dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-sky-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Our Three Affiliate Models</h2>
                  </div>

                  <div className="space-y-5">
                    {models.map(({ icon: Icon, model, title, gradient, glow, border, bg, tagColor, desc, bestFor, metrics }) => (
                      <div key={model}
                        className={`border ${border} rounded-2xl p-5 hover:shadow-lg ${glow} transition-all duration-300 group`}>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <Icon className="w-5 h-5 text-current" />
                            </div>
                            <div>
                              <div className="font-black text-gray-900 dark:text-white text-base">{title}</div>
                              <div className="text-gray-400 dark:text-white/40 text-xs">Pay per verified {model === "CPS" ? "sale" : model === "CPL" ? "lead" : "install"}</div>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white text-xs font-black tracking-wider`}>
                            {model}
                          </div>
                        </div>

                        <p className="text-gray-500 dark:text-white/55 text-sm leading-relaxed mb-4">{desc}</p>

                        {/* Best for + Metrics */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs font-bold text-gray-400 dark:text-white/25 uppercase tracking-wider mb-2">Best For</p>
                            <div className="flex flex-wrap gap-1.5">
                              {bestFor.map(tag => (
                                <span key={tag} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${tagColor}`}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-400 dark:text-white/25 uppercase tracking-wider mb-2">Key Metrics</p>
                            <div className="space-y-1">
                              {metrics.map(m => (
                                <div key={m} className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-sky-500 flex-shrink-0" />
                                  <span className="text-xs text-gray-500 dark:text-white/50">{m}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Adshouz */}
              <div className="bg-white border border-gray-200 dark:bg-[#071828] dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-sky-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Why Adshouz for Affiliate?</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {whyUs.map(({ icon: Icon, title, desc }, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-gray-50 dark:bg-white/[0.03] rounded-xl border border-gray-100 dark:border-white/5 hover:border-sky-500/20 transition-colors group">
                        <div className="w-9 h-9 bg-sky-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors">
                          <Icon className="w-4 h-4 text-sky-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                          <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verticals */}
              <div className="bg-white border border-gray-200 dark:bg-[#071828] dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-sky-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Industries We Serve</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {verticals.map((v) => (
                      <span key={v}
                        className="inline-flex items-center gap-1.5 bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/8 hover:border-sky-500/30 hover:bg-sky-500/5 text-gray-600 dark:text-white/60 text-xs font-semibold px-3.5 py-2 rounded-full transition-all cursor-default">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-white border border-gray-200 dark:bg-[#071828] dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-sky-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">How We Launch Your Campaign</h2>
                  </div>
                  <div className="space-y-4">
                    {process.map(({ step, title, desc }, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-cyan-500 text-white rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform duration-200">
                            {step}
                          </div>
                          {i < process.length - 1 && (
                            <div className="w-px flex-1 bg-gradient-to-b from-sky-500/30 to-transparent mt-1 mb-1 min-h-[16px]" />
                          )}
                        </div>
                        <div className="pb-4 flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</h4>
                          <p className="text-gray-500 dark:text-white/45 text-sm leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white border border-gray-200 dark:bg-[#071828] dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 text-sky-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-3">
                    {faqs.map(({ q, a }, i) => (
                      <details key={i}
                        className="group border border-gray-200 dark:border-white/8 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors list-none">
                          <span className="text-sm font-semibold text-gray-800 dark:text-white/90 pr-4">{q}</span>
                          <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 text-gray-400 group-open:border-sky-500 group-open:text-sky-500 group-open:bg-sky-500/10 transition-all flex-shrink-0 font-bold text-base">
                            <span className="group-open:hidden">+</span>
                            <span className="hidden group-open:block">−</span>
                          </span>
                        </summary>
                        <div className="px-5 pb-4 pt-1 text-gray-500 dark:text-white/50 text-sm leading-relaxed border-t border-gray-100 dark:border-white/[0.05] bg-gray-50/50 dark:bg-white/[0.02]">
                          {a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Sticky Sidebar ────────────────────────────── */}
            <div className="space-y-5">
              <div className="lg:sticky lg:top-24 space-y-5">

                {/* Stats Card */}
                <div className="bg-white border border-gray-200 dark:bg-[#071828] dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                  <div className="h-1 bg-gradient-to-r from-sky-500 to-cyan-400" />
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-base">At a Glance</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {stats.map(({ value, label, sub }, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-white/[0.03] rounded-xl p-3 text-center hover:bg-sky-50 dark:hover:bg-sky-500/5 transition-colors">
                          <div className="text-xl font-black text-gray-900 dark:text-white">{value}</div>
                          <div className="text-xs font-bold text-gray-600 dark:text-white/60 mt-0.5">{label}</div>
                          <div className="text-[10px] text-gray-400 dark:text-white/30">{sub}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 space-y-2.5 mt-2">
                      <Link href="/contact"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold py-3 px-5 rounded-xl text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md shadow-sky-500/20 w-full">
                        Start Affiliate Campaign
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <p className="text-[11px] text-gray-400 dark:text-white/30 text-center">
                        No setup fee · Pay only for results
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl overflow-hidden shadow-lg shadow-sky-500/20">
                  <div className="p-5">
                    <h3 className="font-bold text-white text-base mb-2">Zero-Risk Campaign Audit</h3>
                    <p className="text-white/80 text-xs leading-relaxed mb-4">
                      Share your product/app details — we'll audit your affiliate potential
                      and recommend the best model (CPS/CPL/CPI) for your goals. Free.
                    </p>
                    <div className="space-y-2 mb-5">
                      {[
                        "Free Affiliate Potential Audit",
                        "Right Model Recommendation",
                        "Publisher Network Preview",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-white/90 text-xs font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact"
                      className="flex items-center justify-center gap-2 bg-white text-sky-600 font-bold py-2.5 px-4 rounded-xl text-sm hover:bg-white/90 transition-all w-full shadow-sm">
                      Get Free Audit <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-white border border-gray-200 dark:bg-[#071828] dark:border-white/5 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Quick Contact</h3>
                  <div className="space-y-2">
                    <a href={`tel:${PHONE}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] hover:bg-sky-50 dark:hover:bg-sky-500/5 border border-transparent hover:border-sky-100 dark:hover:border-sky-500/20 transition-all text-sm text-gray-700 dark:text-white/70 hover:text-sky-600 dark:hover:text-sky-400 font-medium group">
                      <Phone className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      {PHONE_DISP}
                      <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href={`mailto:${EMAIL}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] hover:bg-sky-50 dark:hover:bg-sky-500/5 border border-transparent hover:border-sky-100 dark:hover:border-sky-500/20 transition-all text-sm text-gray-700 dark:text-white/70 hover:text-sky-600 dark:hover:text-sky-400 font-medium group">
                      <Bot className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      {EMAIL}
                      <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                {/* Related Services */}
                <div className="bg-white border border-gray-200 dark:bg-[#071828] dark:border-white/5 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Related Services</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Performance Marketing", href: "/services/performance-marketing" },
                      { name: "Google Ads (PPC)",       href: "/services/google-ads" },
                      { name: "Social Media Ads",       href: "/services/social-media-ads" },
                      { name: "International Campaigns",href: "/services/international-campaigns" },
                    ].map(({ name, href }) => (
                      <Link key={name} href={href}
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group py-1">
                        <ChevronRight className="w-3.5 h-3.5 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/35 to-cyan-900/25" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Pay Only for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
              Real Results?
            </span>
          </h2>
          <p className="text-white/55 text-sm sm:text-base mb-8 leading-relaxed">
            Launch your CPS, CPL, or CPI affiliate campaign with Adshouz.
            Free audit — we'll tell you exactly which model suits your business
            and what ROI to expect before you spend a single rupee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/40 active:scale-95 transition-all shadow-xl shadow-sky-500/30 text-sm sm:text-base group">
              Start Affiliate Campaign
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 transition-all text-sm sm:text-base">
              <Phone className="w-4 h-4" /> {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
