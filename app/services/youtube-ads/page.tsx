// app/services/youtube-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  Zap, BarChart3, Shield, TrendingUp,
  Target, Play, Eye, Users, Clock,
  Star, Settings, Video, Tv
} from "lucide-react";

export const metadata: Metadata = {
  title: "YouTube Ads Services India | Video Advertising & YouTube Marketing | Adshouz Digital",
  description:
    "Expert YouTube Ads management in India — In-Stream, Discovery, Bumper & Shorts ads. Google-certified team managing YouTube video campaigns that drive brand awareness, leads and sales.",
  keywords: [
    "YouTube ads services India",
    "YouTube advertising agency India",
    "YouTube video ads management",
    "YouTube in-stream ads",
    "YouTube bumper ads",
    "YouTube ads agency Delhi",
    "YouTube marketing India",
    "video advertising India",
    "YouTube lead generation",
    "YouTube Shorts ads",
  ],
  alternates: { canonical: "https://adshouz.com/services/youtube-ads" },
  openGraph: {
    title: "YouTube Ads Services India | Adshouz Digital",
    description:
      "Google-certified YouTube Ads management — In-Stream, Discovery, Bumper & Shorts. Drive brand awareness and leads with video advertising from Adshouz Digital.",
    url: "https://adshouz.com/services/youtube-ads",
    images: [{ url: "https://adshouz.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

// ─── Data ─────────────────────────────────────────────────────────────────────
const adFormats = [
  {
    icon: Play,
    title: "Skippable In-Stream Ads",
    tag: "Most Popular",
    tagColor: "red",
    desc: "Ads that play before or during YouTube videos. Viewers can skip after 5 seconds — you only pay when they watch 30s or interact.",
    points: [
      "Pay only for engaged views",
      "Full targeting — demographics, interests, keywords",
      "Ideal for brand storytelling & product demos",
      "Works with all budgets",
    ],
  },
  {
    icon: Tv,
    title: "Non-Skippable In-Stream Ads",
    tag: "Max Visibility",
    tagColor: "orange",
    desc: "15-second ads viewers must watch completely — guaranteed 100% view-through for your message. Perfect for launches and brand awareness.",
    points: [
      "100% message delivery guaranteed",
      "CPM-based pricing",
      "Ideal for product launches",
      "Strong brand recall impact",
    ],
  },
  {
    icon: Video,
    title: "YouTube Shorts Ads",
    tag: "Trending",
    tagColor: "violet",
    desc: "Vertical video ads in the YouTube Shorts feed — reach India's fastest-growing video audience with mobile-first creative.",
    points: [
      "Vertical 9:16 format",
      "Massive reach among 18–34 age group",
      "Lower CPM vs standard in-stream",
      "Ideal for product awareness & offers",
    ],
  },
  {
    icon: Eye,
    title: "In-Feed Video Ads",
    tag: "High Engagement",
    tagColor: "blue",
    desc: "Ads that appear in YouTube search results and the homepage feed — viewers choose to click and watch, signalling high purchase intent.",
    points: [
      "Pay only when viewer clicks to watch",
      "Appears in YouTube search results",
      "Ideal for tutorials & comparisons",
      "High-intent audience targeting",
    ],
  },
  {
    icon: Zap,
    title: "Bumper Ads",
    tag: "Brand Recall",
    tagColor: "green",
    desc: "Non-skippable 6-second ads — short, punchy messages designed to maximise brand recall at the lowest CPM on YouTube.",
    points: [
      "6 seconds — perfect for retargeting",
      "Lowest CPM format on YouTube",
      "Best for brand recall campaigns",
      "Pairs well with in-stream campaigns",
    ],
  },
  {
    icon: Target,
    title: "YouTube Remarketing",
    tag: "Highest ROI",
    tagColor: "pink",
    desc: "Re-engage viewers who watched your videos, visited your website, or interacted with your channel — convert warm audiences.",
    points: [
      "Retarget website visitors via YouTube",
      "Audience from Google Ads lists",
      "Sequential ad storytelling",
      "Higher conversion vs cold audience",
    ],
  },
];

const services = [
  {
    icon: Settings,
    title: "Campaign Strategy & Setup",
    desc: "Full campaign architecture — ad formats, bidding strategy, targeting layers, and budget allocation built for your specific goal.",
    points: ["Goal-based campaign structure", "Audience research & segmentation", "Competitor ad analysis", "Budget & bid strategy planning"],
  },
  {
    icon: Users,
    title: "Advanced Audience Targeting",
    desc: "Reach the exact right people — custom intent, affinity, life events, remarketing, and customer match targeting.",
    points: ["Custom intent audiences", "In-market & affinity segments", "Customer match (email lists)", "YouTube channel remarketing"],
  },
  {
    icon: Video,
    title: "Video Creative Guidance",
    desc: "We brief, script, and guide your video creative for maximum ad performance — or work with your existing videos.",
    points: ["Hook script writing (0–5s)", "CTA placement guidance", "Thumbnail & title optimisation", "A/B creative testing"],
  },
  {
    icon: BarChart3,
    title: "Performance Optimisation",
    desc: "Weekly optimisation — placement exclusions, audience refinement, bid adjustments, and creative rotation.",
    points: ["Placement & site exclusions", "View-through conversion tracking", "Weekly performance review", "Monthly strategy report"],
  },
];

const process = [
  { step: "01", title: "Goal & Audience Discovery", desc: "We define your campaign goal (awareness, leads, sales), identify your target audience, and research competitor creatives." },
  { step: "02", title: "Campaign Architecture",     desc: "Build campaign structure — ad groups, formats, targeting layers, and bidding strategy. Full setup before a single rupee is spent." },
  { step: "03", title: "Launch & Optimise",         desc: "Campaigns go live. First 7 days are intensive — we monitor hourly, exclude bad placements, and adjust bids daily." },
  { step: "04", title: "Scale & Report",            desc: "Monthly performance reports with CPV, view rate, conversions, and recommendations. Scale what works, cut what doesn't." },
];

const results = [
  { metric: "₹0.15",  label: "Average CPV",           sub: "Cost per view achieved" },
  { metric: "35%",    label: "Average view rate",      sub: "Industry avg is 25%" },
  { metric: "4×",     label: "ROAS on remarketing",    sub: "Warm audience campaigns" },
  { metric: "2.8×",   label: "Brand recall lift",      sub: "vs no video ads" },
];

const faqs = [
  {
    q: "How much does YouTube advertising cost in India?",
    a: "You can start YouTube Ads with as little as ₹500/day. CPV (cost per view) in India typically ranges from ₹0.10 to ₹0.50 depending on targeting and ad format. Our management fee is separate and based on your monthly ad spend.",
  },
  {
    q: "Do I need to produce a video before starting?",
    a: "Yes — YouTube Ads require video creative. We can guide you on exactly what to shoot (script, hook, CTA placement) and work with your existing videos if you have them. We also partner with video production agencies if you need end-to-end production.",
  },
  {
    q: "How is YouTube Ads different from Google Search Ads?",
    a: "Google Search Ads target people actively searching for your product — high intent, higher cost. YouTube Ads target people based on interests and behaviours — great for awareness, remarketing, and reaching audiences before they search. Both work best together.",
  },
  {
    q: "What video length works best for YouTube Ads?",
    a: "For skippable in-stream: deliver your key message in the first 5 seconds, keep total length 30–90 seconds. For bumper ads: 6 seconds max. For in-feed: 2–3 minutes works well. We guide you on the right length for each format.",
  },
  {
    q: "Can YouTube Ads generate leads directly?",
    a: "Yes. We use YouTube Ads with lead form extensions, send traffic to optimised landing pages, and set up view-through conversion tracking so you can see exactly how many leads came from your video ads.",
  },
  {
    q: "How long before I see results from YouTube Ads?",
    a: "Brand awareness results (views, impressions) are immediate. Lead and sales results typically take 2–4 weeks as the algorithm learns and we optimise placements and audiences. Remarketing campaigns usually show results faster.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "YouTube Ads Services",
  provider: {
    "@type": "Organization",
    name: "Adshouz Digital LLP",
    url: "https://adshouz.com",
  },
  description:
    "Expert YouTube Ads management in India — In-Stream, Discovery, Bumper & Shorts ads. Google-certified team driving brand awareness, leads and sales through video advertising.",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://adshouz.com/services/youtube-ads",
};

const tagColors: Record<string, string> = {
  red:    "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  blue:   "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  green:  "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  pink:   "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function YouTubeAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-white overflow-x-hidden">

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section className="relative pt-10 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-red-600/10 dark:bg-red-600/12 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-orange-800/8 rounded-full blur-[80px]" />
            <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(circle,#EF4444 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs mb-8 flex-wrap">
              <Link href="/" className="text-gray-500 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white" />
              <Link href="/services/google-ads" className="text-gray-500 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium">Google Ads</Link>
              <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white" />
              <span className="text-gray-700 dark:text-white font-medium">YouTube Ads</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-5">
                <Play className="w-3.5 h-3.5 text-red-500" />
                <span className="text-red-700 dark:text-red-300 text-xs font-semibold">
                  YouTube Ads · In-Stream · Shorts · Bumper · Remarketing
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.06] tracking-tight mb-5">
                <span className="text-gray-900 dark:text-white">YouTube Ads That</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                  Build Your Brand
                </span><br />
                <span className="text-gray-900 dark:text-white">& Drive Real Leads</span>
              </h1>

              <p className="text-gray-500 dark:text-white text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                India has 462 million YouTube users. We help your business reach the right ones —
                with the right video, at the right moment — through expertly managed YouTube Ads
                campaigns that build awareness and generate measurable ROI.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-red-500/25 text-sm group">
                  Start YouTube Ads Campaign
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-sm">
                  <Phone className="w-4 h-4 text-red-500" /> {PHONE_DISP}
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {["Google Certified", "₹0.15 Avg CPV", "All Ad Formats", "No Lock-in Contract"].map((b) => (
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
                <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-red-400/40 hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{metric}</div>
                  <div className="text-xs font-bold text-gray-700 dark:text-white">{label}</div>
                  <div className="text-[11px] text-gray-400 dark:text-white mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ AD FORMATS ════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                </span>
                <span className="text-red-600 dark:text-red-400 font-semibold text-sm">Ad Formats</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Every YouTube Ad Format,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  Expertly Managed
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                We run all YouTube ad formats — and recommend the right mix based on your goal and budget.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {adFormats.map(({ icon: Icon, title, tag, tagColor, desc, points }, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-red-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/5 transition-all group flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 bg-red-500/10 group-hover:bg-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all">
                      <Icon className="w-4 h-4 text-red-500" />
                    </div>
                    <span className={`inline-flex items-center border text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tagColors[tagColor]}`}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed mb-4 flex-1">{desc}</p>
                  <ul className="space-y-1.5">
                    {points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-white">
                        <CheckCircle className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHAT WE DO ════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                </span>
                <span className="text-red-600 dark:text-red-400 font-semibold text-sm">Our Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Whats is Included in Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  YouTube Ads Management
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map(({ icon: Icon, title, desc, points }, i) => (
                <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-red-400/40 hover:-translate-y-1 transition-all group flex flex-col">
                  <div className="w-9 h-9 bg-red-500/10 group-hover:bg-red-500/20 rounded-xl flex items-center justify-center mb-3 transition-all group-hover:scale-110">
                    <Icon className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed mb-3 flex-1">{desc}</p>
                  <ul className="space-y-1.5">
                    {points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-white">
                        <CheckCircle className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROCESS ═══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                </span>
                <span className="text-red-600 dark:text-red-400 font-semibold text-sm">How It Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                Our YouTube Ads{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  Launch Process
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map(({ step, title, desc }, i) => (
                <div key={i} className="relative bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-red-400/40 hover:-translate-y-1 transition-all group">
                  <div className="text-5xl font-black text-red-500/15 group-hover:text-red-500/25 transition-colors mb-3 leading-none">{step}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed">{desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px z-10">
                      <div className="h-full bg-gradient-to-r from-red-500/30 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY US ════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  </span>
                  <span className="text-red-600 dark:text-red-400 font-semibold text-sm">Why Adshouz Digital</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-5">
                  YouTube Ads Managed by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                    Google-Certified Specialists
                  </span>
                </h2>
                <p className="text-gray-500 dark:text-white text-sm leading-relaxed mb-6">
                  YouTube Ads are more than just uploading a video and pressing go. Targeting
                  the wrong audience, poor creative hooks, and bad bidding strategies waste
                  thousands of rupees. Our certified team manages every detail so your budget
                  goes to viewers most likely to convert.
                </p>
                <div className="space-y-3">
                  {[
                    "Google-certified YouTube Ads specialists",
                    "View-through conversion tracking setup",
                    "Creative hook scripting (first 5 seconds)",
                    "Placement exclusion to avoid wasted spend",
                    "Integrated with Google Search & Display",
                    "Transparent CPV, view rate & ROI reporting",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Play,       title: "All Ad Formats",     desc: "In-Stream, Shorts, Bumper, In-Feed — we run and optimise all formats." },
                  { icon: Target,     title: "Precision Targeting", desc: "Demographics, interests, custom intent, remarketing — pinpoint accuracy." },
                  { icon: TrendingUp, title: "₹0.15 Avg CPV",      desc: "Industry-leading cost-per-view through smart bidding and targeting." },
                  { icon: BarChart3,  title: "Monthly Reports",    desc: "Clear CPV, view rate, and conversion reports every month." },
                  { icon: Shield,     title: "Brand Safety",       desc: "Exclusion lists to ensure your ads never appear on unsafe content." },
                  { icon: Star,       title: "No Lock-in",         desc: "Month-to-month management — stay because of results, not contracts." },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-4 hover:border-red-400/40 hover:-translate-y-1 transition-all group">
                    <div className="w-8 h-8 bg-red-500/10 group-hover:bg-red-500/20 rounded-xl flex items-center justify-center mb-2 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xs mb-1">{title}</h3>
                    <p className="text-gray-500 dark:text-white text-[11px] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ COMPARE ═══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                YouTube Ads vs{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  Other Ad Channels
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm mt-3">
                How YouTube stacks up against other paid advertising options.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-100 dark:bg-white/[0.04] border-b border-gray-200 dark:border-white/[0.06]">
                <div className="px-3 py-3 text-xs font-bold text-gray-500 dark:text-white">Feature</div>
                <div className="px-3 py-3 text-xs font-bold text-red-600 dark:text-red-400 text-center">YouTube</div>
                <div className="px-3 py-3 text-xs font-bold text-blue-600 dark:text-blue-400 text-center">Google Search</div>
                <div className="px-3 py-3 text-xs font-bold text-pink-600 dark:text-pink-400 text-center">Meta Ads</div>
              </div>
              {[
                ["Avg CPM India",      "₹40–80",    "₹200–500",  "₹60–150"],
                ["Brand awareness",    "✅ Best",   "⚠️ Limited", "✅ Good"],
                ["Purchase intent",    "⚠️ Medium", "✅ Highest", "⚠️ Medium"],
                ["Visual storytelling","✅ Video",  "❌ Text only","✅ Image/Video"],
                ["Remarketing",        "✅ Strong", "✅ Strong",  "✅ Strong"],
                ["Audience size",      "462M India","High intent","500M+ India"],
              ].map(([feature, yt, gs, meta], i) => (
                <div key={i} className={`grid grid-cols-4 border-b border-gray-100 dark:border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white dark:bg-white/[0.01]"}`}>
                  <div className="px-3 py-3 text-xs font-medium text-gray-700 dark:text-white">{feature}</div>
                  <div className="px-3 py-3 text-xs text-gray-600 dark:text-white text-center">{yt}</div>
                  <div className="px-3 py-3 text-xs text-gray-600 dark:text-white text-center">{gs}</div>
                  <div className="px-3 py-3 text-xs text-gray-600 dark:text-white text-center">{meta}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQs ══════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Questions
              </span>
            </h2>
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                <details key={i} className="group bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors list-none">
                    <span className="text-sm font-semibold text-gray-800 dark:text-white pr-4">{q}</span>
                    <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/20 text-gray-400 dark:text-white group-open:border-red-500 group-open:text-red-500 group-open:bg-red-500/10 transition-all font-bold">
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
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-orange-900/35" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
          </div>
          <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Ready to Reach{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-200">
                462 Million YouTube Users?
              </span>
            </h2>
            <p className="text-white/70 text-sm mb-7 max-w-md mx-auto">
              Free consultation — we will audit your existing campaigns or build a fresh YouTube Ads strategy tailored to your business and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-red-500/25 text-sm group">
                Start YouTube Ads Campaign
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
