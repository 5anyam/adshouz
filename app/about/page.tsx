// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award, Users, TrendingUp, Shield, Target,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  Zap, Globe, Heart, Star, BarChart3, Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Rigveda Ads Agency | Digital Marketing Experts Delhi",
  description:
    "Learn about Rigveda Ads — a performance-driven digital marketing agency with 8+ years of experience, ₹50Cr+ ad spend managed, and 500+ clients served across India and internationally.",
  keywords:
    "about rigveda ads, digital marketing agency Delhi, performance marketing agency, google ads agency India",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";

// ─── Data ──────────────────────────────────────────────────────
const stats = [
  { value: "8+",     label: "Years Experience",     sub: "In performance marketing" },
  { value: "500+",   label: "Clients Served",       sub: "Across India & globally" },
  { value: "₹50Cr+", label: "Ad Spend Managed",     sub: "Across all channels" },
  { value: "300%",   label: "Average ROI",          sub: "Delivered to clients" },
];

const values = [
  {
    icon: Target,
    title: "ROI Obsessed",
    desc: "Every decision — channel, creative, bid — is made with one question in mind: does this generate more return for our client?",
    color: "text-violet-500",
    bg: "bg-violet-500/10 group-hover:bg-violet-500/20",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    desc: "You own your accounts, see every rupee spent, and get weekly reports in plain English — no smoke, no mirrors.",
    color: "text-blue-500",
    bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
  },
  {
    icon: Lightbulb,
    title: "Always Testing",
    desc: "We run structured experiments across creatives, audiences, and channels every week. Standing still means falling behind.",
    color: "text-amber-500",
    bg: "bg-amber-500/10 group-hover:bg-amber-500/20",
  },
  {
    icon: Heart,
    title: "Client First",
    desc: "A named strategist on every account. No offshore handoffs. No ticket queues. Just real people who care about your growth.",
    color: "text-pink-500",
    bg: "bg-pink-500/10 group-hover:bg-pink-500/20",
  },
  {
    icon: Globe,
    title: "Full Funnel",
    desc: "We don't just run ads — we think across awareness, consideration, and conversion to build sustainable growth engines.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
  },
  {
    icon: TrendingUp,
    title: "Long-term Thinking",
    desc: "Quick wins are great. But we always build toward compounding results that grow your business for years, not weeks.",
    color: "text-orange-500",
    bg: "bg-orange-500/10 group-hover:bg-orange-500/20",
  },
];

const milestones = [
  { year: "2016", title: "Founded in Delhi",          desc: "Started as a boutique Google Ads consultancy serving local Delhi businesses." },
  { year: "2018", title: "SEO Practice Launched",     desc: "Expanded into technical SEO and content marketing — serving national brands." },
  { year: "2020", title: "Crossed 200 Clients",       desc: "Scaled the team and crossed ₹10Cr in annual ad spend under management." },
  { year: "2022", title: "Went International",        desc: "Onboarded first UK and UAE clients. Added LinkedIn and YouTube Ads practice." },
  { year: "2024", title: "₹50Cr+ Managed",            desc: "Full-service agency with 5 specialised practices and a dedicated team of 20+." },
  { year: "2025", title: "Web Dev Practice Added",    desc: "Launched Next.js and WordPress development to deliver end-to-end digital solutions." },
];

const team = [
  {
    name: "Vikram Sharma",
    role: "Founder & Head of Strategy",
    exp: "8+ years · Ex-Google Partner",
    initials: "VS",
    color: "from-violet-500 to-indigo-600",
  },
  {
    name: "Priya Nair",
    role: "Head of SEO & Content",
    exp: "7 years · 100+ SEO Projects",
    initials: "PN",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Arjun Mehta",
    role: "Head of Paid Social",
    exp: "6 years · Meta & LinkedIn Certified",
    initials: "AM",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Riya Kapoor",
    role: "Head of Web Development",
    exp: "5 years · Next.js & WordPress Expert",
    initials: "RK",
    color: "from-orange-500 to-amber-600",
  },
];

const services = [
  { name: "Google Ads",           href: "/services/google-ads" },
  { name: "SEO",                  href: "/services/seo" },
  { name: "Social Media Ads",     href: "/services/social-media-ads" },
  { name: "Performance Marketing",href: "/services/performance-marketing" },
  { name: "Web Development",      href: "/services/website-development" },
  { name: "Brand Bidding",        href: "/services/brand-bidding" },
];

const certifications = [
  "Google Ads Certified Partner",
  "Google Analytics 4 Certified",
  "Meta Blueprint Certified",
  "LinkedIn Marketing Certified",
  "HubSpot Content Marketing",
  "Semrush SEO Certified",
];

const faqs = [
  {
    q: "Where is Rigveda Ads based and do you work with clients outside Delhi?",
    a: "We're headquartered in Delhi, India, but operate as a remote-first agency. We serve clients across India — Mumbai, Bangalore, Hyderabad, Pune — and internationally in the UK, UAE, and beyond. All engagements are managed remotely with weekly calls and real-time reporting.",
  },
  {
    q: "How is Rigveda Ads different from other digital marketing agencies?",
    a: "Three things set us apart: first, every client gets a named senior strategist — not a junior account manager. Second, we obsess over attribution — you always know which channel, campaign, and ad drove each conversion. Third, we have no lock-in contracts — we earn your business every month.",
  },
  {
    q: "Do you work with early-stage startups or only established businesses?",
    a: "Both. We've worked with bootstrapped startups on ₹20,000/month budgets and enterprise brands spending ₹50L+/month. Our recommendations are always calibrated to your current stage, budget, and goals — not a one-size-fits-all playbook.",
  },
  {
    q: "Can I see case studies or speak to existing clients before signing up?",
    a: "Absolutely. During our free discovery call, we share relevant case studies for your industry and budget range. We can also arrange client reference calls for larger engagements. We believe in full transparency before any commitment.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rigveda Ads Agency Pvt. Ltd.",
  url: "https://rigvedaadds.com",
  foundingDate: "2016",
  description: "Performance-driven digital marketing agency based in Delhi, India.",
  areaServed: ["India", "UK", "UAE"],
};

export default function AboutPage() {
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
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">About Us</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
              <Zap className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                Founded 2016 · Delhi, India · Google Certified Partner
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">We are a Team That </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500">
                Lives for Your ROI
              </span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Rigveda Ads is a performance-driven digital marketing agency
              founded in Delhi in 2016. We have managed{" "}
              <strong className="text-gray-900 dark:text-white">₹50Cr+ in ad spend</strong>,
              served <strong className="text-gray-900 dark:text-white">500+ clients</strong>, and
              built a reputation for one thing: measurable results with zero BS.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group"
              >
                Work With Us
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
              {["No Lock-in Contracts", "Dedicated Strategist", "Full Account Ownership", "Weekly Reporting"].map((b) => (
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
            {stats.map(({ value, label, sub }, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-violet-400/40 hover:-translate-y-0.5 transition-all"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
              >
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{value}</div>
                <div className="text-sm font-bold text-gray-700 dark:text-white/80">{label}</div>
                <div className="text-xs text-gray-400 dark:text-white/35 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div style={{ animation: "fadeSlideUp 0.6s ease both" }}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-5">
                Built on a Simple{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  Belief
                </span>
              </h2>
              <div className="space-y-4 text-gray-500 dark:text-white/55 text-sm sm:text-base leading-relaxed">
                <p>
                  Rigveda Ads was founded in 2016 by a team frustrated with one
                  thing: digital marketing agencies that prioritised impressions
                  over impact. We built this agency around the opposite belief —
                  that every rupee spent should be traceable to revenue.
                </p>
                <p>
                  We started with Google Ads for Delhi businesses. Over 8 years,
                  we have grown into a full-service performance agency — covering
                  SEO, Social Media Ads, Web Development, and Performance
                  Marketing — while staying obsessed with the same core question:{" "}
                  <strong className="text-gray-900 dark:text-white">
                    what actually moves the needle?
                  </strong>
                </p>
                <p>
                  Today we serve 500+ clients across India, UK, and UAE. Our
                  team of 20+ certified specialists manages ₹50Cr+ in annual
                  ad spend — and counts ourselves as genuine growth partners,
                  not vendors.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {services.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {name} <ChevronRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 sm:p-8"
              style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}>
              <h3 className="font-black text-gray-900 dark:text-white text-lg mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-violet-500" /> Certifications & Credentials
              </h3>
              <div className="space-y-3 mb-6">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm shadow-violet-500/20">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-white/75 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="pt-5 border-t border-gray-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-gray-900 dark:text-white ml-1">5.0</span>
                  <span className="text-xs text-gray-400 dark:text-white/40">· 120+ Google Reviews</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-white/40 italic">
                  Rigveda Ads tripled our leads in 3 months — with the same budget. — Client, E-commerce
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Stand For
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Six values that guide every campaign, every report, every client conversation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}
              >
                <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">{title}</h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Journey
              </span>
            </h2>
          </div>
          <div className="space-y-3">
            {milestones.map(({ year, title, desc }, i) => (
              <div
                key={i}
                className="flex gap-5 bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-9 bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
                    {year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-violet-400/30 to-transparent mt-2 min-h-[16px]" />
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

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Core Team
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Senior specialists — not juniors — on every account.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map(({ name, role, exp, initials, color }, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/30 hover:-translate-y-1 transition-all duration-300 group text-center"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.08}s both` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-black text-lg">{initials}</span>
                </div>
                <h3 className="font-black text-gray-900 dark:text-white text-sm mb-0.5">{name}</h3>
                <p className="text-gray-500 dark:text-white/50 text-xs mb-2">{role}</p>
                <div className="inline-flex items-center gap-1 bg-gray-100 dark:bg-white/[0.05] px-2.5 py-1 rounded-full">
                  <BarChart3 className="w-3 h-3 text-violet-500" />
                  <span className="text-[11px] font-medium text-gray-500 dark:text-white/40">{exp}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 dark:text-white/35 mt-6">
            + 16 more specialists across PPC, SEO, Content, Social, and Development
          </p>
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
            Ready to Work With a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-200">
              Team That Delivers?
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Free audit — no obligation. We will review your current setup and
            show you exactly where you are leaving growth on the table.
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
