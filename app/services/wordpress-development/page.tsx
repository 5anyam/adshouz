// app/services/wordpress-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  Zap, Globe, Shield, BarChart3, Settings,
  Layers, TrendingUp, Palette, Database,
  ShoppingCart, Clock, Star, Code2, Smartphone
} from "lucide-react";

export const metadata: Metadata = {
  title: "WordPress Development Services India | Custom Themes, WooCommerce & Speed Optimisation | Adshouz Digital",
  description:
    "Expert WordPress development in India — custom themes, WooCommerce stores, speed optimisation, security hardening and ongoing maintenance. Google-certified agency delivering fast, SEO-ready WordPress sites.",
  keywords: [
    "WordPress development services India",
    "custom WordPress theme development",
    "WooCommerce development India",
    "WordPress speed optimisation",
    "WordPress security hardening",
    "WordPress agency Delhi",
    "WordPress maintenance India",
    "WordPress SEO optimisation",
    "WordPress website design India",
    "WordPress plugin development",
  ],
  alternates: { canonical: "https://adshouz.com/services/wordpress-development" },
  openGraph: {
    title: "WordPress Development Services India | Adshouz Digital",
    description:
      "Custom WordPress websites, WooCommerce stores and landing pages — fast, secure, SEO-optimised. Built by Adshouz Digital, India's performance marketing agency.",
    url: "https://adshouz.com/services/wordpress-development",
    images: [{ url: "https://adshouz.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";
// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Palette,
    title: "Custom WordPress Theme",
    tag: "Most Popular",
    tagColor: "violet",
    desc: "Pixel-perfect custom themes built from scratch — no bloated page builders, pure clean code that loads in under 2 seconds.",
    points: [
      "Figma → WordPress pixel-perfect build",
      "No unnecessary plugins or bloat",
      "Custom Gutenberg blocks",
      "Child theme architecture",
    ],
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Development",
    tag: "E-Commerce",
    tagColor: "green",
    desc: "Full-featured WooCommerce stores with payment gateways, inventory management, and conversion-optimised product pages.",
    points: [
      "Razorpay, PayU, Stripe setup",
      "Custom product filters & catalogues",
      "Cart abandonment recovery",
      "Order management & invoicing",
    ],
  },
  {
    icon: Zap,
    title: "WordPress Speed Optimisation",
    tag: "90+ PageSpeed",
    tagColor: "orange",
    desc: "Transform a slow, clunky WordPress site into a lightning-fast experience — we target 90+ PageSpeed on mobile and desktop.",
    points: [
      "Image compression & WebP conversion",
      "Caching (Redis / WP Rocket / LiteSpeed)",
      "CSS/JS minification & deferral",
      "CDN setup & TTFB optimisation",
    ],
  },
  {
    icon: Shield,
    title: "WordPress Security & Hardening",
    tag: "Enterprise Grade",
    tagColor: "blue",
    desc: "Protect your WordPress site from malware, brute-force attacks, and vulnerabilities with a comprehensive security audit and hardening.",
    points: [
      "Malware scan & removal",
      "Login protection & 2FA",
      "File permission hardening",
      "WAF & Cloudflare integration",
    ],
  },
  {
    icon: Settings,
    title: "Plugin Development",
    tag: "Custom Functionality",
    tagColor: "pink",
    desc: "Can't find a plugin that does exactly what you need? We build custom WordPress plugins tailored to your business logic.",
    points: [
      "Custom post types & taxonomies",
      "REST API integrations",
      "Payment & CRM plugin hooks",
      "Admin dashboard customisation",
    ],
  },
  {
    icon: Globe,
    title: "WordPress Maintenance",
    tag: "Ongoing Support",
    tagColor: "gray",
    desc: "Monthly maintenance plans so your WordPress site stays updated, secure, backed up, and running at peak performance.",
    points: [
      "Core, theme & plugin updates",
      "Daily automated backups",
      "Uptime monitoring (99.9% SLA)",
      "Priority bug fix support",
    ],
  },
];

const techStack = [
  { category: "Core",         items: ["WordPress 6.x", "PHP 8.2", "MySQL 8", "REST API", "WP CLI"] },
  { category: "Page Builders", items: ["Gutenberg", "Elementor Pro", "Bricks Builder", "Oxygen Builder"] },
  { category: "E-Commerce",   items: ["WooCommerce", "Razorpay", "PayU", "Stripe", "YITH Plugins"] },
  { category: "Performance",  items: ["WP Rocket", "LiteSpeed Cache", "Cloudflare", "Redis", "WebP Express"] },
  { category: "SEO",          items: ["Rank Math", "Yoast SEO", "Schema Pro", "Google Search Console"] },
  { category: "Hosting",      items: ["Hostinger", "SiteGround", "Cloudways", "Kinsta", "AWS Lightsail"] },
];

const process = [
  { step: "01", title: "Discovery & Audit",      desc: "We review your existing site (or brief), define scope, and recommend the right stack — theme, plugins, hosting." },
  { step: "02", title: "Design in Figma",         desc: "Every page designed in Figma first. You approve the complete UI before a single line of code is written." },
  { step: "03", title: "Development & QA",        desc: "Built on a staging server, tested across browsers and devices. Speed and security audit before go-live." },
  { step: "04", title: "Launch & Training",       desc: "We deploy, configure backups, set up Google Search Console, and train your team to manage content independently." },
];

const results = [
  { metric: "<2s",   label: "Average page load time",  sub: "After our speed optimisation" },
  { metric: "90+",   label: "PageSpeed score",          sub: "Mobile & Desktop" },
  { metric: "3×",    label: "Lead increase",            sub: "vs old website average" },
  { metric: "14 days", label: "Average delivery",      sub: "Business websites" },
];

const faqs = [
  {
    q: "Do you build on existing WordPress sites or only new ones?",
    a: "Both. We rebuild existing WordPress sites (redesign, speed fix, security hardening) and build new ones from scratch. For existing sites, we start with a full audit before recommending what to fix vs rebuild.",
  },
  {
    q: "Will I be able to manage my WordPress site myself?",
    a: "Yes — that's the whole point. We build a clean, easy-to-manage WordPress site and provide a hands-on training session covering how to add pages, posts, products, and images. No technical knowledge needed.",
  },
  {
    q: "Which is better — WordPress or Next.js for my business?",
    a: "WordPress is ideal if you need a content-heavy site, blog, e-commerce store, or want to manage content without a developer. Next.js is better for performance-critical apps, complex functionality, or when you have a developer team. We'll recommend the right one for your specific needs — free of charge.",
  },
  {
    q: "Do you work with Elementor?",
    a: "Yes, we work with Elementor Pro, Bricks Builder, and Oxygen Builder — but we recommend custom Gutenberg builds for speed-critical projects since page builders add code weight. We'll guide you on the best approach for your goals.",
  },
  {
    q: "How do you handle WordPress security?",
    a: "Every site we deliver includes: HTTPS setup, login URL change, 2FA, file permission hardening, and a WAF via Cloudflare. For existing sites, we do a full malware scan and security audit before hardening.",
  },
  {
    q: "What's included in your WordPress maintenance plan?",
    a: "Monthly plans include: core + plugin + theme updates, daily automated backups, uptime monitoring, monthly speed check, and priority support for bug fixes. Plans start from ₹3,999/month.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress Development Services",
  provider: {
    "@type": "Organization",
    name: "Adshouz Digital LLP",
    url: "https://adshouz.com",
  },
  description:
    "Expert WordPress development in India — custom themes, WooCommerce stores, speed optimisation, security hardening and ongoing maintenance.",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://adshouz.com/services/wordpress-development",
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
export default function WordPressDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-white overflow-x-hidden">

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section className="relative pt-10 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-violet-800/8 rounded-full blur-[80px]" />
            <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(circle,#8B5CF6 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs mb-8 flex-wrap">
              <Link href="/" className="text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white" />
              <Link href="/services/website-development" className="text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">Website Development</Link>
              <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white" />
              <span className="text-gray-700 dark:text-white font-medium">WordPress Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-blue-700 dark:text-blue-300 text-xs font-semibold">
                  WordPress · WooCommerce · Custom Themes · Speed & Security
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.06] tracking-tight mb-5">
                <span className="text-gray-900 dark:text-white">WordPress Sites</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500">
                  Fast, Secure & Built
                </span><br />
                <span className="text-gray-900 dark:text-white">to Rank on Google</span>
              </h1>

              <p className="text-gray-500 dark:text-white text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                We build clean, fast, and secure WordPress websites — from custom themes to full
                WooCommerce stores. No bloated page builders. No unnecessary plugins. Just a
                site that loads fast, ranks well, and converts visitors into customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-blue-500/25 text-sm group">
                  Get Free WordPress Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-sm">
                  <Phone className="w-4 h-4 text-blue-500" /> {PHONE_DISP}
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {["90+ PageSpeed Score", "SEO-Optimised", "30-Day Support", "Full Code Ownership"].map((b) => (
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
                <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-blue-400/40 hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{metric}</div>
                  <div className="text-xs font-bold text-gray-700 dark:text-white">{label}</div>
                  <div className="text-[11px] text-gray-400 dark:text-white mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">What We Build</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
                Our WordPress{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                  Services
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-xl mx-auto">
                From custom themes to WooCommerce stores — every WordPress project delivered fast, clean, and secure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ icon: Icon, title, tag, tagColor, desc, points }, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all group flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all">
                      <Icon className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className={`inline-flex items-center border text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tagColors[tagColor]}`}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed mb-4 flex-1">{desc}</p>
                  <ul className="space-y-1.5">
                    {points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-white">
                        <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TECH STACK ════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Tech Stack</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3">
                Tools &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                  Technologies We Use
                </span>
              </h2>
              <p className="text-gray-500 dark:text-white text-sm max-w-md mx-auto">
                Industry-standard tools chosen for performance, security, and ease of management.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map(({ category, items }, i) => (
                <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-blue-400/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-4 h-4 text-blue-500" />
                    <span className="font-bold text-gray-900 dark:text-white text-sm">{category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item}
                        className="bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                        {item}
                      </span>
                    ))}
                  </div>
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
                <span className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">How It Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                Our WordPress{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                  Development Process
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map(({ step, title, desc }, i) => (
                <div key={i} className="relative bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-blue-400/40 hover:-translate-y-1 transition-all group">
                  <div className="text-5xl font-black text-blue-500/15 group-hover:text-blue-500/25 transition-colors mb-3 leading-none">{step}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-white text-xs leading-relaxed">{desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px z-10">
                      <div className="h-full bg-gradient-to-r from-blue-500/30 to-transparent" />
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
                  <span className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Why Adshouz Digital</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-5">
                  WordPress Done{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                    Right — Clean, Fast & Secure
                  </span>
                </h2>
                <p className="text-gray-500 dark:text-white text-sm leading-relaxed mb-6">
                  Most WordPress agencies install a premium theme, add 30 plugins, and call it
                  done. We take a different approach — custom-built, lean code, security-first,
                  and optimised for both speed and search rankings from day one.
                </p>
                <div className="space-y-3">
                  {[
                    "Custom code — no bloated themes or unnecessary plugins",
                    "SEO baked in — Rank Math, schema, GSC setup included",
                    "Speed-first — we target 90+ PageSpeed before handover",
                    "Security hardened — WAF, 2FA, file permissions, SSL",
                    "You own everything — full code and admin handover",
                    "30-day post-launch support on every project",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap,         title: "90+ PageSpeed",       desc: "Mobile and desktop speed optimised before every handover." },
                  { icon: Shield,      title: "Security Hardened",   desc: "WAF, 2FA, Cloudflare and file-level hardening on every site." },
                  { icon: Smartphone,  title: "Mobile-First",        desc: "Designed for mobile, responsive across all screen sizes." },
                  { icon: BarChart3,   title: "SEO From Day 1",      desc: "Rank Math, schema, sitemap and GSC setup included." },
                  { icon: Star,        title: "30-Day Support",      desc: "Free fixes and changes for 30 days post-launch." },
                  { icon: Clock,       title: "14-Day Delivery",     desc: "Business website delivered in 14 days — guaranteed." },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-4 hover:border-blue-400/40 hover:-translate-y-1 transition-all group">
                    <div className="w-8 h-8 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-blue-500" />
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
                WordPress vs{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                  Next.js
                </span>
                {" "}— Which is Right for You?
              </h2>
              <p className="text-gray-500 dark:text-white text-sm mt-3">
                Not sure which platform to choose? Here is our honest comparison.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-100 dark:bg-white/[0.04] border-b border-gray-200 dark:border-white/[0.06]">
                <div className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-white">Feature</div>
                <div className="px-4 py-3 text-xs font-bold text-blue-600 dark:text-blue-400 text-center">WordPress</div>
                <div className="px-4 py-3 text-xs font-bold text-violet-600 dark:text-violet-400 text-center">Next.js</div>
              </div>
              {[
                ["Self-manage content", "✅ Easy", "⚠️ Needs CMS"],
                ["Page speed",         "⚠️ Needs optimisation", "✅ Blazing fast"],
                ["E-commerce",        "✅ WooCommerce", "✅ Custom"],
                ["Blog / CMS",        "✅ Native", "✅ Headless CMS"],
                ["Developer needed",  "❌ Not required", "✅ Required"],
                ["SEO",               "✅ With Rank Math", "✅ Built-in"],
                ["Best for",          "Content sites, SMBs", "Apps, SaaS, High-perf"],
              ].map(([feature, wp, next], i) => (
                <div key={i} className={`grid grid-cols-3 border-b border-gray-100 dark:border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white dark:bg-white/[0.01]"}`}>
                  <div className="px-4 py-3 text-xs font-medium text-gray-700 dark:text-white">{feature}</div>
                  <div className="px-4 py-3 text-xs text-gray-600 dark:text-white text-center">{wp}</div>
                  <div className="px-4 py-3 text-xs text-gray-600 dark:text-white text-center">{next}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-400 dark:text-white mt-4">
              Not sure? <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Talk to us — we will recommend the right one for free.</Link>
            </p>
          </div>
        </section>

        {/* ══ FAQs ══════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50 dark:bg-[#0F0F14]">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                Questions
              </span>
            </h2>
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                <details key={i} className="group bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors list-none">
                    <span className="text-sm font-semibold text-gray-800 dark:text-white pr-4">{q}</span>
                    <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/20 text-gray-400 dark:text-white group-open:border-blue-500 group-open:text-blue-500 group-open:bg-blue-500/10 transition-all font-bold">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-violet-900/35" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
          <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Ready to Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-200">
                WordPress Site?
              </span>
            </h2>
            <p className="text-white/70 text-sm mb-7 max-w-md mx-auto">
              Free consultation — tell us your requirements and we will send you a detailed scope,
              timeline, and fixed price within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-blue-500/25 text-sm group">
                Start Your WordPress Project
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
