"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Phone, CheckCircle2, Star, Target, Search,
  Share2, Code2, TrendingUp, BarChart3, Megaphone, Globe,
  ChevronRight, Calendar, BookOpen, Quote, X,
  Bot, Cpu, Sparkles, Link2, DollarSign, MousePointerClick, Smartphone, Zap,
} from "lucide-react";
import WaveCanvas from "../components/Wavecanvas";

// ─── Types ────────────────────────────────────────────────────────────────────
interface WordPressPost {
  id: number; date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: { 'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }> };
}
const WP_API_URL = 'https://cms.adshouz.com/wp-json/wp/v2';

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useCountUp(end: number, duration = 2400, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let s: number | null = null;
    const step = (ts: number) => {
      if (!s) s = ts;
      const p = Math.min((ts - s) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, trigger]);
  return count;
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Animation Primitives ─────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, inView } = useInView(0.08);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0px)" : "translateY(44px)",
      transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                   transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function FadeLeft({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, inView } = useInView(0.08);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : "translateX(-64px)",
      transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                   transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function FadeRight({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, inView } = useInView(0.08);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : "translateX(64px)",
      transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                   transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function ScaleIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, inView } = useInView(0.08);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "scale(1) translateY(0px)" : "scale(0.85) translateY(28px)",
      transition: `opacity 0.65s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms,
                   transform 0.65s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";

// ── Updated: AI mentions + Affiliate card added ──
const services = [
  { icon: Target,     href: "/services/google-ads",              title: "Google Ads (PPC)",        desc: "AI-powered Search, Display & YouTube — smart bidding auto-adjusts every hour to maximise ROI and cut waste." },
  { icon: Search,     href: "/services/seo",                     title: "SEO & Organic Growth",    desc: "AI-assisted keyword research and white-hat SEO for Page 1 rankings — traffic that compounds over time." },
  { icon: Share2,     href: "/services/social-media-ads",        title: "Social Media Ads",        desc: "AI audience targeting on Meta, Instagram & LinkedIn — precision ads that flood your pipeline at scale." },
  { icon: Code2,      href: "/services/website-development",     title: "Website Development",     desc: "Blazing-fast, conversion-ready sites on WordPress & Next.js — engineered to turn visitors into customers." },
  { icon: Megaphone,  href: "/services/brand-bidding",           title: "Brand Bidding",           desc: "Own your brand on Google. Block competitors from hijacking your clicks and stealing hard-earned leads." },
  { icon: Link2,      href: "/services/affiliate-marketing",     title: "Affiliate Marketing",     desc: "CPS, CPL & CPI affiliate campaigns — pay only for real results. Sales, leads, and app installs at scale." },
  { icon: TrendingUp, href: "/services/performance-marketing",   title: "Performance Marketing",   desc: "Full-funnel CPA/CPL/CPS campaigns powered by AI optimisation — zero guesswork, maximum compounding return." },
  { icon: Globe,      href: "/services/international-campaigns", title: "International Campaigns", desc: "Scale to US, UK, UAE, Canada & Australia with AI-personalised, geo-targeted digital strategies." },
];

const stats = [
  { value: 450, suffix: "+", label: "Campaigns Delivered" },
  { value: 120, suffix: "+", label: "Clients Scaled" },
  { value: 7,   suffix: "+", label: "Years of Expertise" },
  { value: 320, suffix: "%", label: "Average ROI" },
];

// ── Updated: AI + Affiliate items added ──
const expertise = [
  "Google Search, Display & Shopping Campaigns",
  "AI-Powered Bid Strategies & Smart Automation",
  "Facebook & Instagram Performance Ads",
  "Affiliate Marketing — CPS, CPL & CPI Models",
  "Brand Protection & Competitor Conquest Bidding",
  "Conversion Rate & Landing Page Optimisation",
  "YouTube Video Strategy & Ad Management",
  "Global Multi-Market Campaign Execution",
];

// ── NEW: AI Features data ──
const aiFeatures = [
  {
    icon: Bot,
    title: "AI Bid Optimisation",
    desc: "ML-powered bid strategies auto-adjust every hour — cutting wasted spend while maximising conversions around the clock.",
    tag: "Smart Bidding",
  },
  {
    icon: Cpu,
    title: "Predictive Analytics",
    desc: "AI models forecast audience behaviour and budget allocation so you know expected returns before spending a single rupee.",
    tag: "Data Intelligence",
  },
  {
    icon: Sparkles,
    title: "AI Creative Testing",
    desc: "Multi-variant testing across hundreds of ad copies — AI identifies winning creatives 10× faster than manual testing.",
    tag: "Creative AI",
  },
  {
    icon: Zap,
    title: "Real-Time Optimisation",
    desc: "Live AI monitoring — underperforming ads paused instantly, winning ads scaled aggressively. No human lag, pure efficiency.",
    tag: "Auto-Optimise",
  },
];

// ── NEW: Affiliate Models data ──
const affiliateModels = [
  {
    icon: DollarSign,
    model: "CPS",
    title: "Cost Per Sale",
    desc: "Pay only when a verified sale is completed. Zero upfront risk — perfect for e-commerce, D2C brands, and product launches looking for pure revenue-share performance.",
    tags: ["E-commerce", "D2C", "Revenue Share"],
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
    border: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10",
    tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: MousePointerClick,
    model: "CPL",
    title: "Cost Per Lead",
    desc: "Pay per qualified lead captured. Ideal for real estate, finance, insurance, SaaS and education — scalable lead generation at a fixed, predictable cost.",
    tags: ["Real Estate", "Finance", "SaaS", "EdTech"],
    gradient: "from-sky-500 to-cyan-500",
    glow: "shadow-sky-500/20",
    border: "hover:border-sky-500/40",
    iconBg: "bg-sky-500/10",
    tagColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    icon: Smartphone,
    model: "CPI",
    title: "Cost Per Install",
    desc: "Pay per verified app install from high-intent users on Android & iOS. Drive downloads that actually convert — targeting optimised by AI for active user acquisition.",
    tags: ["Mobile Apps", "Gaming", "Fintech", "Health"],
    gradient: "from-violet-500 to-indigo-500",
    glow: "shadow-violet-500/20",
    border: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/10",
    tagColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
];

const testimonials = [
  { name: "Vikram Mehta",   role: "Founder, D2C Brand — Mumbai",      rating: 5, text: "Adshouz completely flipped our digital performance. Within 45 days, our leads tripled and cost-per-acquisition dropped by half. The team is sharp, transparent, and genuinely invested." },
  { name: "Divya Joshi",    role: "CEO, E-commerce Startup",          rating: 5, text: "Their brand bidding play stopped competitors from eating our traffic overnight. ROAS jumped from 2x to over 6x in just a few weeks. Remarkable results." },
  { name: "Manish Agarwal", role: "MD, Real Estate Group — Delhi",    rating: 5, text: "We expanded from India to UAE and the UK with Adshouz's international campaigns. 320% ROI in under 90 days — genuinely exceeded every expectation." },
  { name: "Kavya Reddy",    role: "Co-Founder, HealthTech SaaS",      rating: 5, text: "Best performance marketing team we've ever worked with. Deep product understanding, copy that converts, and reporting that's fully transparent. Exactly what we needed." },
];

// ── Updated: AI mentioned in process steps ──
const process = [
  { step: "01", title: "Free AI Audit",     desc: "Our AI scans your campaigns, site, and competition — we present a full findings report in 24 hours. Zero cost, zero obligation." },
  { step: "02", title: "Build Strategy",    desc: "A bespoke AI-assisted blueprint tailored to your goals, model (CPS/CPL/CPI or PPC), and budget. Nothing off-the-shelf." },
  { step: "03", title: "Launch & Optimise", desc: "Live campaigns with AI monitoring, automated A/B testing, and real-time bid management — optimising 24/7." },
  { step: "04", title: "Scale & Report",    desc: "AI identifies what wins and scales it aggressively. You get transparent weekly reports with clear attribution — every time." },
];

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/68.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
];

// ── Updated: AI + Affiliate items in ticker ──
const ticker = [
  "Google Ads", "AI Marketing", "Performance Marketing", "SEO", "Brand Bidding",
  "Facebook Ads", "Affiliate Marketing", "CPS Campaigns", "CPL Lead Gen", "CPI App Installs",
  "YouTube Campaigns", "AI Bid Optimisation", "Conversion Optimisation",
  "Web Development", "Landing Pages", "CRO", "Lead Generation", "AI Creative Testing",
];

// ─── Sub-components ───────────────────────────────────────────────────────────
const Label = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 mb-4">
    <span className="w-4 h-4 rounded-full border-2 border-sky-500 flex items-center justify-center">
      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
    </span>
    <span className="text-sky-600 dark:text-sky-400 font-semibold text-sm">{text}</span>
  </div>
);

const StatItem = ({ value, suffix, label, trigger, delay = 0 }: {
  value: number; suffix: string; label: string; trigger: boolean; delay?: number;
}) => {
  const count = useCountUp(value, 2200, trigger);
  return (
    <ScaleIn delay={delay}>
      <div className="text-center group">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tabular-nums group-hover:scale-110 transition-transform duration-300">
          {count}<span className="text-sky-500 dark:text-sky-400">{suffix}</span>
        </div>
        <div className="text-gray-500 dark:text-white/40 text-xs uppercase tracking-widest font-semibold mt-2">
          {label}
        </div>
      </div>
    </ScaleIn>
  );
};

const Marquee = () => {
  const items = [...ticker, ...ticker, ...ticker, ...ticker];
  return (
    <div className="border-y border-gray-200 dark:border-white/8 bg-gray-50 dark:bg-[#040F1E] py-3.5 overflow-hidden select-none">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span key={i}
            className="inline-flex items-center gap-2.5 text-gray-400 dark:text-white/35 text-[11px] font-bold uppercase tracking-widest flex-shrink-0 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200">
            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

function stripHtml(html: string) { return html.replace(/<[^>]*>/g, '').substring(0, 130) + '...'; }
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [posts, setPosts]         = useState<WordPressPost[]>([]);
  const [activeT, setActiveT]     = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const statsSection              = useInView(0.2);

  useEffect(() => {
    fetch(`${WP_API_URL}/posts?_embed&per_page=3`)
      .then(r => r.ok ? r.json() : []).then(setPosts).catch(() => {});
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveT(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = videoOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [videoOpen]);

  return (
    <div className="bg-white dark:bg-[#030E1C] text-gray-900 dark:text-white overflow-x-hidden">

{/* ══════════════════════════════ HERO ══════════════════════════════ */}
<section className="relative min-h-[100svh] flex items-center justify-center pt-4 pb-6 overflow-hidden bg-[#020C1B]">
  <WaveCanvas />

  <div className="absolute inset-0 pointer-events-none"
    style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(2,12,27,0.60) 0%, rgba(2,12,27,0.0) 100%)' }}
  />

  <div className="max-w-4xl mx-auto px-5 sm:px-8 w-full relative z-10 text-center">

    {/* Badge — updated: AI + Affiliate mention */}
    <div style={{ animation: "heroFadeIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both" }}>
      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/25 rounded-full px-4 py-2 mb-6 hover:bg-sky-500/15 transition-colors duration-300 cursor-default">
        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse flex-shrink-0" />
        <span className="text-sky-300 text-xs sm:text-sm font-semibold tracking-wide">
          Meta & Google Certified · AI-Powered · CPS / CPL / CPI Affiliate
        </span>
      </div>
    </div>

    {/* Headline */}
    <div style={{ animation: "heroFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both" }}>
      <h1 className="text-[46px] sm:text-6xl lg:text-[80px] font-black leading-[1.03] mb-6 tracking-tight">
        <span className="text-white">Performance</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-300 animate-gradient">
          {" "}Marketing
        </span>
        <br />
        <span className="text-white">That </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-300 animate-gradient">
          Pays Back.
        </span>
      </h1>
    </div>

    {/* Subtext — updated: AI + Affiliate */}
    <div style={{ animation: "heroFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both" }}>
      <p className="text-base sm:text-xl text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed">
        Adshouz is a performance-first agency delivering AI-powered Google Ads, SEO,
        Affiliate Marketing (CPS, CPL, CPI) and full-funnel campaigns
        that generate real, measurable ROI — across every market.
      </p>
    </div>

    {/* CTAs */}
    <div style={{ animation: "heroFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both" }}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
        <Link href="/contact"
          className="inline-flex items-center justify-between gap-4
                     bg-[#061828] border border-white/10 text-white font-bold
                     pl-8 pr-2 py-2 rounded-full w-full sm:w-auto
                     hover:border-sky-500/50 hover:bg-[#0A2035]
                     active:scale-95 transition-all duration-200
                     shadow-xl shadow-black/40 text-sm sm:text-base group">
          <span>Get Free Audit</span>
          <span className="w-11 h-11 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0
                           group-hover:bg-sky-500 group-hover:scale-105 transition-all duration-200
                           shadow-lg shadow-sky-500/40">
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-200" />
          </span>
        </Link>
        <a href={`tel:${PHONE}`}
          className="inline-flex items-center justify-center gap-2 border border-white/10 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/5 hover:border-sky-500/30 active:scale-95 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto">
          <Phone className="w-4 h-4 text-sky-400" /> {PHONE_DISP}
        </a>
      </div>
    </div>

    {/* Social proof */}
    <div style={{ animation: "heroFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.45s both" }}>
      <div className="flex items-center justify-center gap-4">
        <div className="flex -space-x-3">
          {avatars.map((src, i) => (
            <div key={i}
              className="w-12 h-12 rounded-full p-[2.5px] flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #0EA5E9, #22D3EE)' }}>
              <img src={src} alt="client"
                className="w-full h-full rounded-full object-cover border-2 border-[#020C1B]"
              />
            </div>
          ))}
        </div>
        <div className="text-left">
          <div className="flex gap-0.5 mb-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                style={{ animation: `starPop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.5 + i * 0.07}s both` }}
              />
            ))}
          </div>
          <p className="text-white/45 text-xs">
            <span className="text-white font-bold">450+</span> Five-Star Reviews
          </p>
        </div>
      </div>
    </div>

    {/* Mini-stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 lg:mt-14">
      {[
        { label: "Campaigns",  value: "450+" },
        { label: "Avg ROI",    value: "320%" },
        { label: "Clients",    value: "120+" },
        { label: "Experience", value: "7 Yrs" },
      ].map(({ label, value }, i) => (
        <div key={label}
          className="bg-white/[0.04] border border-white/8 rounded-2xl p-4 text-center hover:border-sky-500/30 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
          style={{ animation: `heroFadeIn 0.5s ease ${0.5 + i * 0.08}s both` }}
        >
          <div className="text-2xl font-black text-white">{value}</div>
          <div className="text-white/35 text-xs mt-0.5">{label}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ══════════════════════════ MARQUEE ═══════════════════════════════ */}
      <Marquee />

      {/* ════════════════════════════ EXPERTISE ══════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeLeft>
              <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Team at work"
                    className="rounded-2xl lg:rounded-3xl w-full h-44 sm:h-56 lg:h-64 object-cover hover:scale-[1.03] transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Analytics dashboard"
                    className="rounded-2xl lg:rounded-3xl w-full h-44 sm:h-56 lg:h-64 object-cover mt-8 sm:mt-10 hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <ScaleIn delay={200}>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-[#071A2E] border border-sky-500/20 rounded-2xl px-7 py-4 text-center shadow-2xl shadow-black/10 dark:shadow-black/70 w-48 sm:w-56">
                    <div className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
                      7<span className="text-sky-500 dark:text-sky-400">+</span>
                    </div>
                    <div className="text-gray-400 dark:text-white/45 text-xs mt-1 leading-snug">
                      Years in Performance Marketing
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </FadeLeft>

            <FadeRight delay={100}>
              <Label text="Our Expertise" />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6 tracking-tight">
                <span className="text-gray-900 dark:text-white">Decisions</span><br />
                <span className="text-sky-500 dark:text-sky-400">Backed by</span><br />
                <span className="text-gray-900 dark:text-white">Data, Results</span><br />
                <span className="text-sky-500 dark:text-sky-400">Backed by Us</span>
              </h2>
              <p className="text-gray-500 dark:text-white/55 mb-7 leading-relaxed text-sm sm:text-base">
                At Adshouz, we engineer AI-powered digital marketing strategies — combining
                performance advertising, affiliate campaigns, and data analytics for
                zero-guesswork, compounding business growth.
              </p>
              <p className="text-xs font-bold text-gray-400 dark:text-white/25 uppercase tracking-widest mb-4">
                What We Do Best
              </p>
              <div className="space-y-3 mb-8">
                {expertise.map((item, i) => (
                  <FadeUp key={i} delay={i * 60}>
                    <div className="flex items-center gap-3 group">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 dark:text-sky-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-gray-600 dark:text-white/70 text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">{item}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold px-7 py-3.5 rounded-2xl hover:opacity-90 hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-sky-500/25 text-sm sm:text-base group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ════════════════════ AI-POWERED MARKETING (NEW) ═════════════════ */}
      <section className="py-20 lg:py-24 bg-[#020C1B] relative overflow-hidden">
        {/* BG effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-[500px] h-[300px] bg-sky-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-600/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle, #0EA5E9 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <FadeUp className="text-center mb-12 lg:mb-16">
            {/* AI badge */}
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-5">
              <Bot className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-sky-300 text-xs font-semibold tracking-wide uppercase">Powered by Artificial Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
              Marketing That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                Thinks for Itself
              </span>
            </h2>
            <p className="text-white/45 max-w-xl mx-auto text-sm mt-2 px-4">
              Every campaign we run is backed by AI — smarter bidding, faster testing,
              and real-time optimisation that never sleeps.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiFeatures.map(({ icon: Icon, title, desc, tag }, i) => (
              <ScaleIn key={i} delay={i * 80}>
                <div className="group bg-white/[0.04] border border-white/8 rounded-2xl p-5 sm:p-6 hover:border-sky-500/40 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10 h-full flex flex-col">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-1.5 bg-sky-500/15 border border-sky-500/20 rounded-full px-2.5 py-1 mb-4 w-fit">
                    <span className="w-1 h-1 bg-sky-400 rounded-full" />
                    <span className="text-sky-300 text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                  </div>
                  {/* Icon */}
                  <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-sky-400 group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-[14px] sm:text-[15px] group-hover:text-sky-300 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed flex-1">{desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <FadeUp delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/[0.03] border border-white/8 rounded-2xl px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-sky-500/15 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-white/60 text-sm">
                  <span className="text-white font-bold">AI is not a buzzword for us</span> — it's how every rupee of your budget gets maximised.
                </p>
              </div>
              <Link href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:opacity-90 transition-all group">
                See AI in Action <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════ SERVICES ═══════════════════════════ */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-[#040F1E]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12 lg:mb-16">
            <Label text="What We Offer" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-3">
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 dark:from-sky-400 dark:to-cyan-300">
                Grow Online
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 max-w-xl mx-auto text-sm mt-2 px-4">
              AI-powered, full-service capability — from Google Ads and SEO to Affiliate
              Marketing (CPS / CPL / CPI) across every digital channel.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.map(({ icon: Icon, title, desc, href }, i) => (
              <ScaleIn key={i} delay={i * 70}>
                <Link
                  href={href}
                  className="group bg-white dark:bg-[#071828] border border-gray-200 dark:border-white/5 rounded-2xl p-5 sm:p-6 hover:border-sky-500/50 hover:bg-gray-50 dark:hover:bg-[#0A2035] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10 h-full shadow-sm dark:shadow-none flex flex-col"
                >
                  <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-sky-500 dark:text-sky-400 group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-[14px] sm:text-[15px] group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed flex-1">{desc}</p>
                  <div className="mt-4 flex items-center text-sky-500 dark:text-sky-400 text-xs font-semibold opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ AFFILIATE MARKETING (NEW) ════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-sky-500/5 dark:bg-sky-500/[0.06] rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

          <FadeUp className="text-center mb-12 lg:mb-16">
            <Label text="Affiliate Marketing" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-3">
              Pay Only for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 dark:from-sky-400 dark:to-cyan-300">
                Real Results
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 max-w-2xl mx-auto text-sm mt-2 px-4">
              Adshouz runs AI-optimised affiliate campaigns across three proven
              performance models — zero wasted budget, 100% outcome-based billing.
            </p>
          </FadeUp>

          {/* 3 Model Cards */}
          <div className="grid sm:grid-cols-3 gap-5 lg:gap-6 mb-12">
            {affiliateModels.map(({ icon: Icon, model, title, desc, tags, gradient, glow, border, iconBg, tagColor }, i) => (
              <ScaleIn key={i} delay={i * 100}>
                <div className={`group bg-white dark:bg-[#071828] border border-gray-200 dark:border-white/5 rounded-2xl p-6 sm:p-7 ${border} hover:-translate-y-2 hover:shadow-xl ${glow} transition-all duration-300 h-full flex flex-col shadow-sm dark:shadow-none`}>
                  {/* Model badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-current" style={{ color: 'inherit' }} />
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white text-xs font-black tracking-wider`}>
                      {model}
                    </div>
                  </div>

                  <h3 className="font-black text-gray-900 dark:text-white text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-5 flex-1">{desc}</p>

                  {/* Industry tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${tagColor}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>

          {/* Bottom info strip */}
          <FadeUp delay={200}>
            <div className="bg-gray-50 dark:bg-[#071828] border border-gray-200 dark:border-white/5 rounded-2xl p-6 sm:p-8">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                {[
                  { value: "0 Upfront", label: "No Setup Risk", sub: "Pay only when results happen" },
                  { value: "AI-Tracked", label: "Real-Time Attribution", sub: "Every conversion traced & verified" },
                  { value: "All Niches", label: "Flexible Verticals", sub: "E-commerce, apps, leads & more" },
                ].map(({ value, label, sub }, i) => (
                  <div key={i} className="group">
                    <div className="text-2xl font-black text-gray-900 dark:text-white mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{value}</div>
                    <div className="text-sm font-bold text-gray-700 dark:text-white/70">{label}</div>
                    <div className="text-xs text-gray-400 dark:text-white/35 mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold px-8 py-3.5 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-sky-500/25 text-sm group">
                  Start Affiliate Campaign
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═════════════════════════════ STATS ═════════════════════════════ */}
      <div ref={statsSection.ref} className="py-16 lg:py-20 border-y border-gray-200 dark:border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-sky-500/5 dark:bg-sky-500/[0.07] rounded-full blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16">
            {stats.map((s, i) => (
              <StatItem key={i} {...s} trigger={statsSection.inView} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>

      {/* ═════════════════════════════ PROCESS ═══════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-800/8 dark:bg-sky-800/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <FadeUp className="text-center mb-12 lg:mb-16">
            <Label text="How It Works" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              <span className="text-gray-900 dark:text-white">Simple. </span>
              <span className="text-sky-500 dark:text-sky-400">Transparent. </span>
              <span className="text-gray-900 dark:text-white">Effective.</span>
            </h2>
          </FadeUp>

          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map(({ step, title, desc }, i) => (
              <FadeUp key={i} delay={i * 120}>
                <div className="relative flex lg:block gap-5 lg:gap-0 bg-white dark:bg-[#071828] border border-gray-200 dark:border-white/5 rounded-2xl p-5 sm:p-7 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/8 transition-all duration-300 hover:-translate-y-2 h-full shadow-sm dark:shadow-none group">
                  <div className="text-5xl sm:text-6xl font-black text-sky-500/15 group-hover:text-sky-500/25 transition-colors duration-300 tabular-nums flex-shrink-0 lg:mb-4 leading-none">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 text-sm sm:text-base group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors duration-200">{title}</h3>
                    <p className="text-gray-400 dark:text-white/45 text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-7 left-full w-full h-px z-10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-sky-500/40 to-transparent animate-line-grow" />
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS ═════════════════════════ */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-[#040F1E]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12 lg:mb-14">
            <Label text="Client Stories" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              <span className="text-gray-900 dark:text-white">Results That </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 dark:from-sky-400 dark:to-cyan-300">
                Speak for Us
              </span>
            </h2>
          </FadeUp>

          <FadeUp delay={100} className="max-w-2xl lg:max-w-3xl mx-auto">
            <div className="bg-white dark:bg-[#071828] border border-gray-200 dark:border-white/5 rounded-3xl p-7 sm:p-10 relative overflow-hidden shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-700/5 rounded-full blur-2xl pointer-events-none" />
              <Quote className="w-10 h-10 text-sky-500/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {[...Array(testimonials[activeT].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    style={{ animation: `starPop 0.3s cubic-bezier(0.34,1.56,0.64,1) ${i * 60}ms both` }}
                  />
                ))}
              </div>
              <p key={activeT}
                className="text-gray-700 dark:text-white/80 text-base sm:text-xl leading-relaxed mb-7 italic relative z-10"
                style={{ animation: "testimonialIn 0.5s cubic-bezier(0.22,1,0.36,1) both" }}>
                {testimonials[activeT].text}
              </p>
              <div className="flex items-center justify-between gap-4">
                <div style={{ animation: "testimonialIn 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}>
                  <div className="font-black text-gray-900 dark:text-white text-sm sm:text-base">
                    {testimonials[activeT].name}
                  </div>
                  <div className="text-sky-600 dark:text-sky-400 text-xs sm:text-sm mt-0.5">
                    {testimonials[activeT].role}
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setActiveT(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === activeT
                          ? 'bg-sky-500 w-7'
                          : 'bg-gray-200 dark:bg-white/15 w-1.5 hover:bg-gray-300 dark:hover:bg-white/30 hover:w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════ BLOG ════════════════════════════ */}
      {posts.length > 0 && (
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="flex items-end justify-between mb-10 lg:mb-12">
                <div>
                  <Label text="Insights" />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
                    From the Adshouz Blog
                  </h2>
                </div>
                <Link href="/blogs"
                  className="hidden sm:inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 font-semibold hover:text-sky-500 dark:hover:text-sky-300 transition-colors text-sm flex-shrink-0 group">
                  View All
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <FadeUp key={post.id} delay={i * 120}>
                  <Link
                    href={`/${post.slug}`}
                    className="group block bg-white dark:bg-[#071828] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden hover:border-sky-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/8 transition-all duration-300 h-full flex flex-col shadow-sm dark:shadow-none"
                  >
                    <div className="aspect-video overflow-hidden flex-shrink-0">
                      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                        <img
                          src={post._embedded['wp:featuredmedia'][0].source_url}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-sky-100 dark:from-sky-900/30 to-cyan-100 dark:to-cyan-900/10 flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-sky-400 dark:text-sky-500/30 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <div className="text-gray-400 dark:text-white/50 text-xs mb-3 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                        {fmtDate(post.date)}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors duration-200 line-clamp-2 text-sm flex-1">
                        {post.title.rendered}
                      </h3>
                      <p className="text-gray-400 dark:text-white/40 text-xs line-clamp-2 mb-4 leading-relaxed">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                      <div className="inline-flex items-center text-sky-600 dark:text-sky-400 text-xs font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link href="/blogs"
                className="inline-flex items-center gap-2 border border-sky-500/30 text-sky-600 dark:text-sky-400 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-sky-500/10 transition-all">
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════ BOTTOM CTA ═══════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/35 to-cyan-900/25" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[120px] animate-pulse-slow" />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
              Scale Smarter?
            </span>
          </h2>
          <p className="text-white/55 text-sm sm:text-base mb-8 leading-relaxed">
            Join 450+ businesses already growing with Adshouz — AI-powered ads,
            affiliate campaigns (CPS/CPL/CPI), and zero-guesswork performance marketing.
            Free audit, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/40 active:scale-95 transition-all duration-200 shadow-xl shadow-sky-500/30 text-sm sm:text-base group">
              Get Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
                        <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-sm sm:text-base">
              <Phone className="w-4 h-4" /> {PHONE_DISP}
            </a>
          </div>
        </FadeUp>
      </section>

      {/* ══════════════════════════ VIDEO MODAL ═══════════════════════════ */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
          style={{ animation: "modalIn 0.3s ease both" }}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/?autoplay=1"
              title="Adshouz"
              allow="autoplay; fullscreen"
              className="w-full h-full"
            />
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}