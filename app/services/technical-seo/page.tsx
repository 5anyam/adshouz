// app/services/technical-seo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  Zap, Search, Shield, BarChart3, Globe, Code2,
  TrendingUp, AlertTriangle, Settings, FileSearch,
  Layers, Lock, Smartphone, Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO Services India | Site Audit, Core Web Vitals & Speed Optimisation | Adshouz Digital",
  description:
    "Expert Technical SEO services in India — site audits, Core Web Vitals optimisation, crawl error fixes, schema markup, page speed & structured data. Google-certified team with proven results.",
  keywords: [
    "technical SEO services India",
    "site audit SEO",
    "core web vitals optimisation",
    "page speed optimisation",
    "crawl error fix",
    "schema markup service",
    "technical SEO agency Delhi",
    "structured data SEO",
    "website speed SEO",
    "Google Search Console errors",
  ],
  alternates: { canonical: "https://adshouz.com/services/technical-seo" },
  openGraph: {
    title: "Technical SEO Services India | Adshouz Digital",
    description:
      "Fix crawl errors, boost Core Web Vitals, and rank higher with expert Technical SEO from Adshouz Digital — India's performance-first digital marketing agency.",
    url: "https://adshouz.com/services/technical-seo",
    images: [{ url: "https://adshouz.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

// ─── Data ─────────────────────────────────────────────────────────────────────
const issues = [
  { icon: AlertTriangle, title: "Crawl Errors",         desc: "Google can't crawl or index your pages — you're invisible in search results." },
  { icon: Clock,         title: "Slow Page Speed",      desc: "Pages taking 4s+ to load lose 80% of mobile visitors before they even see your content." },
  { icon: Smartphone,    title: "Poor Mobile UX",       desc: "Non-mobile-friendly sites are penalised by Google's mobile-first indexing algorithm." },
  { icon: Code2,         title: "Missing Structured Data", desc: "No schema = no rich snippets = lower CTR even when you rank on Page 1." },
  { icon: Lock,          title: "HTTPS / Security Issues", desc: "HTTP sites lose trust signals and Google ranking factors simultaneously." },
  { icon: Layers,        title: "Duplicate Content",    desc: "Competing pages split your ranking authority and confuse search engine crawlers." },
];

const services = [
  {
    icon: FileSearch,
    title: "Full Technical SEO Audit",
    desc: "200+ point audit covering crawlability, indexation, site architecture, internal linking, canonicals, redirects, and more.",
    points: ["Google Search Console deep-dive", "Screaming Frog crawl analysis", "Log file analysis", "Competitor benchmark"],
  },
  {
    icon: Zap,
    title: "Core Web Vitals & Page Speed",
    desc: "LCP, FID, CLS fixes across your entire site — we target 90+ PageSpeed scores on both mobile and desktop.",
    points: ["Image optimisation & WebP conversion", "CSS/JS minification & deferral", "Server response time (TTFB)", "CDN setup & caching strategy"],
  },
  {
    icon: Globe,
    title: "Crawl & Index Optimisation",
    desc: "Ensure Google crawls the right pages, skips the thin ones, and indexes your money pages fast.",
    points: ["Robots.txt & sitemap fix", "Crawl budget optimisation", "Noindex/canonical strategy", "Orphan page resolution"],
  },
  {
    icon: Code2,
    title: "Schema & Structured Data",
    desc: "Implement the right schema markup to earn rich snippets — FAQ, Review, Product, Article, LocalBusiness and more.",
    points: ["JSON-LD implementation", "Google Rich Results testing", "Organisation & LocalBusiness schema", "BreadcrumbList schema"],
  },
  {
    icon: Shield,
    title: "HTTPS & Security",
    desc: "Migrate to HTTPS correctly, fix mixed-content errors, and protect your site's Google trust signals.",
    points: ["SSL certificate setup", "HTTP → HTTPS migration", "Mixed content error fix", "Security header implementation"],
  },
  {
    icon: Layers,
    title: "Site Architecture & Internal Linking",
    desc: "Build a logical site structure that distributes PageRank efficiently and helps Google discover all your important content.",
    points: ["URL structure optimisation", "Silo architecture setup", "Internal link audit & fix", "Pagination & canonicalisation"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Optimisation",
    desc: "Pass Google's mobile-first indexing requirements with responsive design, touch-friendly UX and fast mobile load times.",
    points: ["Viewport & responsive fixes", "Tap target optimisation", "Mobile Core Web Vitals", "AMP review & implementation"],
  },
  {
    icon: BarChart3,
    title: "Technical Reporting & Monitoring",
    desc: "Monthly technical health reports so you always know what's been fixed and what's being monitored.",
    points: ["Google Search Console reporting", "Weekly crawl monitoring", "Ranking impact tracking", "Monthly health scorecard"],
  },
];

const process = [
  { step: "01", title: "Discovery Call",       desc: "30-min call to understand your site, goals, history, and any known technical issues." },
  { step: "02", title: "200-Point Audit",       desc: "Full crawl + manual review. We document every issue with severity and fix priority." },
  { step: "03", title: "Fix Implementation",   desc: "Our dev team fixes issues directly or provides developers ready-to-implement code." },
  { step: "04", title: "Monitor & Report",     desc: "Monthly reports track ranking improvement, Core Web Vitals scores, and crawl health." },
];

const results = [
  { metric: "40%",  label: "Average crawl error reduction", sub: "Within 30 days of audit" },
  { metric: "90+",  label: "PageSpeed score achieved",      sub: "Mobile & Desktop" },
  { metric: "2.3×", label: "Organic traffic increase",      sub: "Average 6-month result" },
  { metric: "48h",  label: "First fixes delivered",         sub: "After audit sign-off" },
];

const faqs = [
  {
    q: "What is Technical SEO and why does it matter?",
    a: "Technical SEO covers the behind-the-scenes factors that affect how Google crawls, indexes, and ranks your site — page speed, mobile-friendliness, structured data, site architecture, and more. Without a solid technical foundation, even great content won't rank.",
  },
  {
    q: "How long does a Technical SEO audit take?",
    a: "Our full 200-point audit typically takes 5–7 business days depending on site size. You receive a detailed report with every issue categorised by priority (critical, high, medium, low) along with fix recommendations.",
  },
  {
    q: "Do you fix the issues or just report them?",
    a: "Both. For WordPress and common CMS sites, our team implements fixes directly. For custom-built sites, we provide your developer with precise, implementation-ready instructions. We stay involved until every critical issue is resolved.",
  },
  {
    q: "Will fixing Technical SEO issues immediately improve rankings?",
    a: "Critical fixes like crawl errors and mobile issues can show results within 2–4 weeks. Core Web Vitals improvements typically show ranking impact within 4–8 weeks. Technical SEO is a foundational investment — results compound over time.",
  },
  {
    q: "How is this different from regular SEO?",
    a: "Regular SEO focuses on keywords, content, and backlinks. Technical SEO ensures the infrastructure supports all of that. Think of it as fixing the road before racing — without it, even the best content strategy stalls.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical SEO Services",
  provider: {
    "@type": "Organization",
    name: "Adshouz Digital LLP",
    url: "https://adshouz.com",
  },
  description:
    "Expert Technical SEO services including site audits, Core Web Vitals, page speed optimisation, schema markup, crawl error fixes and mobile-first optimisation.",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://adshouz.com/services/technical-seo",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TechnicalSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-white overflow-x-hidden">

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section className="relative pt-10 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-purple-800/8 rounded-full blur-[80px]" />
            <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(circle,#8B5CF6 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs mb-8 flex-wrap">
              <Link href="/" className="text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white" />
              <Link href="/services/seo" className="text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">SEO</Link>
              <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white" />
              <span className="text-gray-700 dark:text-white font-medium">Technical SEO</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
                <Settings className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                  Technical SEO · Google Certified · 8+ Years
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.06] tracking-tight mb-5">
                <span className="text-gray-900 dark:text-white">Technical SEO That</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500">
                  Makes Google Love
                </span><br />
                <span className="text-gray-900 dark:text-white">Your Website</span>
              </h1>

              <p className="text-gray-500 dark:text-white text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                A perfectly written page means nothing if Google can not crawl it. We fix the
                technical foundation of your website — speed, indexation, schema, mobile UX —
                so your SEO efforts actually deliver rankings.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                  Get Free Technical Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-sm">
                  <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {["200-Point Audit", "Core Web Vitals Fix", "Schema Markup", "No Lock-in Contract"].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-white font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" /> {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ RESULTS STATS ═════════════════════════════════════════════ */}
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

        {/* ══ PROBLEMS WE SOLVE ═════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">Common Problems</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Is Your Site Silently{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Losing Rankings?
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                Most websites have critical technical issues they are completely unaware of. These are the most common ones we fix.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {issues.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-red-400/40 hover:-translate-y-1 transition-all group">
                  <div className="w-9 h-9 bg-red-500/10 group-hover:bg-red-500/20 rounded-xl flex items-center justify-center mb-3 transition-colors">
                    <Icon className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">What We Fix</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Our Technical SEO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Services
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                End-to-end technical SEO — from audit to implementation to ongoing monitoring.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map(({ icon: Icon, title, desc, points }, i) => (
                <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 transition-all group flex flex-col">
                  <div className="w-9 h-9 bg-violet-500/10 group-hover:bg-violet-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all">
                    <Icon className="w-4 h-4 text-violet-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed mb-3 flex-1">{desc}</p>
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

        {/* ══ PROCESS ═══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                </span>
                <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">How It Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                Our 4-Step Technical SEO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Process
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map(({ step, title, desc }, i) => (
                <div key={i} className="relative bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-violet-400/40 hover:-translate-y-1 transition-all group">
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
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
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
                  Technical SEO Done{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                    Right — Not Just Reported
                  </span>
                </h2>
                <p className="text-gray-500 dark:text-white text-sm leading-relaxed mb-6">
                  Most SEO agencies hand you a PDF report and disappear. We stay until every
                  critical issue is resolved — our team implements fixes, not just recommendations.
                </p>
                <div className="space-y-3">
                  {[
                    "Google Search Console certified specialists",
                    "200+ point audit — not a template checklist",
                    "We fix issues directly, not just report them",
                    "Weekly monitoring after implementation",
                    "Transparent before/after impact reporting",
                    "Works alongside your existing SEO strategy",
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
                  { icon: Search,     title: "200+ Point Audit",    desc: "Every technical factor checked and documented." },
                  { icon: Zap,        title: "90+ PageSpeed Score", desc: "Mobile and desktop speed optimised to the max." },
                  { icon: TrendingUp, title: "Ranking Impact",      desc: "Average 2.3× organic traffic in 6 months." },
                  { icon: Shield,     title: "Ongoing Monitoring",  desc: "Weekly crawl health checks post-implementation." },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/40 hover:-translate-y-1 transition-all group">
                    <div className="w-9 h-9 bg-violet-500/10 group-hover:bg-violet-500/20 rounded-xl flex items-center justify-center mb-3 transition-colors">
                      <Icon className="w-4 h-4 text-violet-500" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 dark:text-white text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQs ══════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Questions
              </span>
            </h2>
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                <details key={i} className="group bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/[0.03] transition-colors list-none">
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
              Ready to Fix Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-200">
                Technical SEO?
              </span>
            </h2>
            <p className="text-white/70 text-sm mb-7 max-w-md mx-auto">
              Get a free technical audit — we will identify your top 10 critical issues within 48 hours, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                Get Free Technical Audit
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
