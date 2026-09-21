// app/services/nextjs-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap, Code2, Globe, Shield, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  BarChart3, Layers, RefreshCw, Database, Smartphone, Lock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js Development | React Web Apps | Adshouz Digital",
  description:
    "Custom Next.js web applications — blazing fast, SEO-optimised, and built to scale. Full-stack Next.js development for SaaS, e-commerce, and business websites.",
  keywords: "nextjs development, next.js developer, react web app, nextjs agency Delhi, full stack nextjs, nextjs SEO",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const services = [
  { icon: Globe,      title: "Business Websites",      desc: "Fast, SEO-ready marketing sites with perfect Core Web Vitals — built to rank and convert from day one." },
  { icon: Layers,     title: "SaaS Platforms",         desc: "Full-stack Next.js SaaS apps with auth, billing, dashboards, and multi-tenancy — production-ready architecture." },
  { icon: Database,   title: "Headless CMS",           desc: "Next.js frontend connected to Sanity, Strapi, or Contentful — editorial control without touching code." },
  { icon: RefreshCw,  title: "App Migration",          desc: "Migrate slow WordPress or legacy sites to Next.js for 10× speed improvement and better Core Web Vitals." },
  { icon: Smartphone, title: "PWA Development",        desc: "Progressive Web Apps that work offline, install like native apps, and load instantly on any device." },
  { icon: Lock,       title: "API & Integrations",     desc: "REST and GraphQL API routes, third-party integrations — Razorpay, Stripe, CRMs, and custom backends." },
];

const stats = [
  { value: "100",  label: "Lighthouse score target" },
  { value: "<1s",  label: "Target page load time" },
  { value: "3×",   label: "Faster than average WordPress" },
  { value: "App Router", label: "Next.js 14/15 ready" },
];

const techStack = [
  { label: "Framework",  value: "Next.js 14 / 15 (App Router)" },
  { label: "Styling",    value: "Tailwind CSS + shadcn/ui" },
  { label: "Database",   value: "PostgreSQL / MongoDB / Supabase" },
  { label: "Auth",       value: "NextAuth.js / Clerk" },
  { label: "Deployment", value: "Vercel / Railway / AWS" },
  { label: "CMS",        value: "Sanity / Strapi / Contentful" },
];

const process = [
  { step: "01", title: "Scoping & Architecture",  desc: "We map your requirements, define the tech stack, and plan the component and data architecture before writing a single line of code." },
  { step: "02", title: "Design & Prototype",      desc: "Figma wireframes or Tailwind prototypes reviewed and approved before full development begins." },
  { step: "03", title: "Development & Review",    desc: "Iterative sprints with staging deployments — you see real progress weekly and give feedback continuously." },
  { step: "04", title: "Launch & Handover",       desc: "Production deployment on Vercel/Railway, full documentation, and knowledge transfer so your team can manage the codebase." },
];

const faqs = [
  {
    q: "Why Next.js over WordPress or plain React?",
    a: "Next.js gives you the best of both worlds — React's component-based UI with server-side rendering and static generation for SEO. It's 3–10× faster than WordPress, scores 95+ on Core Web Vitals, and scales effortlessly from 100 to 10M users without infra headaches.",
  },
  {
    q: "Can you build a full SaaS product with Next.js?",
    a: "Yes — we've built production SaaS platforms with Next.js including auth (NextAuth/Clerk), subscription billing (Stripe/Razorpay), role-based dashboards, and API layers. Next.js App Router handles both frontend and backend in one codebase, reducing complexity significantly.",
  },
  {
    q: "How long does a Next.js project take?",
    a: "A marketing website takes 2–3 weeks. A mid-complexity web app with auth and dashboards takes 6–10 weeks. A full SaaS platform with payments and multi-tenancy takes 12–20 weeks. We provide accurate estimates after a scoping call.",
  },
  {
    q: "Do you provide source code and post-launch support?",
    a: "Yes — you own 100% of the code. We push to your GitHub repository throughout development. Post-launch support packages (bug fixes, feature additions, hosting management) are available monthly.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Next.js Development",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Web Development",
};

export default function NextjsDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-slate-600/8 dark:bg-slate-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services/website-development" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Website Development</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Next.js Development</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
              <Code2 className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                Next.js 14/15 · React · Full-Stack
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Blazing Fast </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-slate-500">
                Next.js Apps
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Built to Scale</span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              From marketing websites to full SaaS platforms — we build with
              Next.js App Router, Tailwind CSS, and modern tooling for
              <strong className="text-gray-900 dark:text-white"> perfect performance and developer experience.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["App Router", "TypeScript", "100 Lighthouse Score", "You Own the Code"].map((b) => (
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
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-violet-400/40 hover:-translate-y-0.5 transition-all"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-1">{value}</div>
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
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
                Build
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Every project ships with TypeScript, Tailwind, and production-ready code.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-violet-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-violet-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Our Tech Stack
            </h2>
          </div>
          <div className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden shadow-sm"
            style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}>
            {techStack.map(({ label, value }, i) => (
              <div key={i}
                className={`flex items-center justify-between px-5 py-4 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors ${
                  i < techStack.length - 1 ? "border-b border-gray-100 dark:border-white/[0.04]" : ""
                }`}>
                <span className="text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest w-28 flex-shrink-0">{label}</span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/85">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              How We Work
            </h2>
          </div>
          <div className="space-y-3">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-violet-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
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

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i}
                className="group bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors list-none">
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
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-slate-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Lets Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-200">
              Fast
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Share your project idea — we will scope it, estimate a timeline, and
            recommend the right architecture before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
              Discuss My Project
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
