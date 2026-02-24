"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Phone, Play, CheckCircle2, Star, Target, Search,
  Share2, Code2, TrendingUp, BarChart3, Megaphone, Globe,
  ChevronRight, Calendar, BookOpen, Quote, Zap, X
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface WordPressPost {
  id: number; date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: { 'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }> };
}
const WP_API_URL = 'https://cms.rigvedaadds.com/wp-json/wp/v2';

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

function useInView(threshold = 0.15) {
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

function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PHONE      = "+917840000618";
const PHONE_DISP = "+91 78400 00618";

const services = [
  { icon: Target,     title: "Google Ads (PPC)",        desc: "Conversion-focused Search, Display & YouTube campaigns with same-day performance tracking." },
  { icon: Search,     title: "SEO & Organic Growth",    desc: "White-hat SEO that ranks you on Page 1 and keeps you there with sustained organic traffic." },
  { icon: Share2,     title: "Social Media Ads",        desc: "High-ROI paid campaigns on Meta, Instagram & LinkedIn to grow your audience and drive leads." },
  { icon: Code2,      title: "Website Development",     desc: "High-speed, conversion-optimised sites on WordPress & Next.js that turn visitors into leads." },
  { icon: Megaphone,  title: "Brand Bidding",           desc: "Protect your brand on Google — dominate branded search and never lose a lead to competitors." },
  { icon: BarChart3,  title: "Analytics & Reporting",   desc: "Transparent dashboards and weekly reports. Know where every rupee of ad spend goes." },
  { icon: TrendingUp, title: "Performance Marketing",   desc: "CPA/CPS/CPL campaigns built to maximise ROI with data-driven optimisation at every stage." },
  { icon: Globe,      title: "International Campaigns", desc: "Scale to US, UK, UAE, Canada & Singapore with geo-targeted, localised digital strategies." },
];

const stats = [
  { value: 500, suffix: "+",  label: "Campaigns Managed" },
  { value: 126, suffix: "+",  label: "Happy Clients" },
  { value: 8,   suffix: "+",  label: "Years Experience" },
  { value: 300, suffix: "%",  label: "Average ROI" },
];

const expertise = [
  "Google Search & Display Advertising",
  "Facebook & Instagram Paid Campaigns",
  "YouTube Ad Production & Management",
  "Brand Protection & Competitor Bidding",
  "Conversion Rate Optimisation (CRO)",
  "Multi-market International Campaigns",
];

const testimonials = [
  { name: "Arjun Sharma",  role: "Business Owner, Delhi",        rating: 5, text: "Rigveda Ads tripled our leads within 30 days. Outstanding results, full transparency, and the team actually understands our business goals." },
  { name: "Priya Singh",   role: "Founder, E-commerce Brand",    rating: 5, text: "Their brand bidding strategy stopped competitors from stealing our traffic overnight. CPC dropped 40% and conversions shot up immediately." },
  { name: "Rahul Verma",   role: "Director, HealthCare Startup", rating: 5, text: "We expanded from India to UAE and UK through Rigveda's international strategy. Over 350% ROI in just 3 months — genuinely impressed." },
  { name: "Sneha Kapoor",  role: "CEO, SaaS Company",            rating: 5, text: "Best PPC agency we've worked with. They understand the product deeply and write ad copy that actually converts. True performance marketing." },
];

const process = [
  { step: "01", title: "Free Audit",        desc: "We analyse your current ads, website and competitors — completely free, no commitment." },
  { step: "02", title: "Build Strategy",    desc: "Custom campaign strategy tailored to your industry, budget and growth targets." },
  { step: "03", title: "Launch & Optimise", desc: "Live campaigns with daily monitoring, A/B testing, and aggressive bid optimisation." },
  { step: "04", title: "Scale & Report",    desc: "Transparent weekly reports as we scale winners and cut what doesn't convert." },
];

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/68.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
];

const ticker = [
  "Google Ads", "SEO", "Performance Marketing", "Brand Bidding",
  "Facebook Ads", "YouTube Campaigns", "Conversion Optimisation",
  "International Ads", "Analytics & Reporting", "Landing Pages", "CRO", "Lead Generation",
];

// ─── Sub-components ───────────────────────────────────────────────────────────
const Label = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 mb-4">
    <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
      <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
    </span>
    <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">{text}</span>
  </div>
);

const StatItem = ({ value, suffix, label, trigger }: {
  value: number; suffix: string; label: string; trigger: boolean;
}) => {
  const count = useCountUp(value, 2200, trigger);
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tabular-nums">
        {count}<span className="text-violet-500 dark:text-violet-400">{suffix}</span>
      </div>
      <div className="text-gray-500 dark:text-white/40 text-xs uppercase tracking-widest font-semibold mt-2">
        {label}
      </div>
    </div>
  );
};

const Marquee = () => {
  const items = [...ticker, ...ticker, ...ticker, ...ticker];
  return (
    <div className="border-y border-gray-200 dark:border-white/8 bg-gray-50 dark:bg-[#0F0F14] py-3.5 overflow-hidden select-none">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span key={i}
            className="inline-flex items-center gap-2.5 text-gray-400 dark:text-white/35 text-[11px] font-bold uppercase tracking-widest flex-shrink-0">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
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
  const statsSection              = useInView(0.25);

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
    // ↓ Root bg — white in light, dark in dark
    <div className="bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-white overflow-x-hidden">

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-20 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-violet-700/20 dark:bg-violet-700/25 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-purple-800/10 dark:bg-purple-800/15 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
            style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* LEFT */}
            <div style={{ animation: "heroFadeIn 0.9s cubic-bezier(0.22,1,0.36,1) both" }}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-violet-500 dark:bg-violet-400 rounded-full animate-pulse" />
                <span className="text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-semibold tracking-wide">
                  Google Certified Partner Agency
                </span>
              </div>

              <h1 className="text-[42px] sm:text-5xl lg:text-[68px] font-black leading-[1.05] mb-5 tracking-tight">
                <span className="text-gray-900 dark:text-white">Ads That </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-400 to-pink-400 dark:from-violet-400 dark:via-purple-300 dark:to-pink-300">
                  Actually
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Convert </span>
                <span className="text-gray-300 dark:text-white/20">&amp; Scale.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-500 dark:text-white/55 mb-8 max-w-md leading-relaxed">
                Rigveda Ads specialises in data-driven Google Ads, SEO and performance
                marketing that delivers real, measurable ROI — across every industry and market.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/30 text-sm sm:text-base">
                  Get Free Audit <ArrowRight className="w-5 h-5" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm sm:text-base">
                  <Phone className="w-4 h-4 text-violet-500 dark:text-violet-400" /> {PHONE_DISP}
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img key={i} src={src} alt="client"
                      className="w-9 h-9 rounded-full border-2 border-white dark:border-[#0B0B0F] object-cover" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-400 dark:text-white/45 text-xs">
                    <span className="text-gray-900 dark:text-white font-bold">500+</span> Five-Star Reviews
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/8">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Digital marketing analytics"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 dark:from-[#0B0B0F]/70 via-transparent to-violet-900/20" />
              </div>

              {/* Floating ROI */}
              <div className="absolute -left-10 top-10 bg-white dark:bg-[#13131A]/90 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-violet-500 dark:text-violet-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900 dark:text-white">
                      300<span className="text-violet-500 dark:text-violet-400">%</span>
                    </div>
                    <div className="text-gray-400 dark:text-white/40 text-xs">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Floating Live */}
              <div className="absolute -right-8 bottom-12 bg-white dark:bg-[#13131A]/90 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-400 dark:text-white/40 text-[10px] font-bold uppercase tracking-wider">
                    Live Campaigns
                  </span>
                </div>
                <div className="text-3xl font-black text-gray-900 dark:text-white">
                  126<span className="text-violet-500 dark:text-violet-400">+</span>
                </div>
                <div className="text-gray-400 dark:text-white/40 text-xs mt-0.5">Active Clients</div>
              </div>

              {/* Play */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button onClick={() => setVideoOpen(true)}
                  className="w-16 h-16 rounded-full bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 hover:scale-110 transition-all shadow-xl">
                  <Play className="w-6 h-6 fill-gray-900 dark:fill-white text-gray-900 dark:text-white ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile mini-stats */}
          <div className="grid grid-cols-2 gap-3 mt-10 lg:hidden">
            {[
              { label: "Campaigns", value: "500+" },
              { label: "Avg ROI",   value: "300%" },
              { label: "Clients",   value: "126+" },
              { label: "Experience",value: "8 Yrs" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/8 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-gray-900 dark:text-white">{value}</div>
                <div className="text-gray-400 dark:text-white/35 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ MARQUEE TICKER ════════════════════════ */}
      <Marquee />

      {/* ════════════════════════════ EXPERTISE ══════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image collage */}
            <FadeUp>
              <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Team"
                    className="rounded-2xl lg:rounded-3xl w-full h-44 sm:h-56 lg:h-64 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Analytics"
                    className="rounded-2xl lg:rounded-3xl w-full h-44 sm:h-56 lg:h-64 object-cover mt-8 sm:mt-10"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-[#13131A] border border-violet-500/20 rounded-2xl px-7 py-4 text-center shadow-2xl shadow-black/10 dark:shadow-black/70 w-48 sm:w-56">
                  <div className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
                    8<span className="text-violet-500 dark:text-violet-400">+</span>
                  </div>
                  <div className="text-gray-400 dark:text-white/45 text-xs mt-1 leading-snug">
                    Years in Performance Marketing
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Content */}
            <FadeUp delay={150}>
              <Label text="Our Expertise" />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6 tracking-tight">
                <span className="text-gray-900 dark:text-white">Data Driven</span><br />
                <span className="text-gray-300 dark:text-white/20">Strategies,</span><br />
                <span className="text-gray-900 dark:text-white">Measurable</span><br />
                <span className="text-gray-300 dark:text-white/20">Results</span>
              </h2>
              <p className="text-gray-500 dark:text-white/55 mb-7 leading-relaxed text-sm sm:text-base">
                At Rigveda Ads, we craft innovative digital marketing strategies that drive
                real business growth — with full transparency and zero guesswork.
              </p>

              <p className="text-xs font-bold text-gray-400 dark:text-white/25 uppercase tracking-widest mb-4">
                What We Do Best
              </p>
              <div className="space-y-3 mb-8">
                {expertise.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500 dark:text-violet-400 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-7 py-3.5 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-violet-500/25 text-sm sm:text-base">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SERVICES ═══════════════════════════ */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12 lg:mb-16">
            <Label text="What We Offer" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-3">
              Full Range of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400 dark:from-violet-400 dark:to-purple-300">
                Digital Marketing
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 max-w-xl mx-auto text-sm mt-2 px-4">
              Leverage our expertise to multiply your ROI across every digital channel.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div className="group bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/5 rounded-2xl p-5 sm:p-6 hover:border-violet-500/40 hover:bg-gray-50 dark:hover:bg-[#16161F] transition-all duration-300 hover:-translate-y-1.5 cursor-default h-full shadow-sm dark:shadow-none">
                  <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-violet-500 dark:text-violet-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-[14px] sm:text-[15px]">{title}</h3>
                  <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
                  <div className="mt-4 flex items-center text-violet-500 dark:text-violet-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all">
                    Learn more <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════ STATS ═════════════════════════════ */}
      <div ref={statsSection.ref} className="py-16 lg:py-20 border-y border-gray-200 dark:border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16">
            {stats.map((s, i) => (
              <StatItem key={i} {...s} trigger={statsSection.inView} />
            ))}
          </div>
        </div>
      </div>

      {/* ═════════════════════════════ PROCESS ═══════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-800/8 dark:bg-violet-800/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <FadeUp className="text-center mb-12 lg:mb-16">
            <Label text="How It Works" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              <span className="text-gray-900 dark:text-white">Our </span>
              <span className="text-gray-300 dark:text-white/20">Proven </span>
              <span className="text-gray-900 dark:text-white">Process</span>
            </h2>
          </FadeUp>

          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map(({ step, title, desc }, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="relative flex lg:block gap-5 lg:gap-0 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/5 rounded-2xl p-5 sm:p-7 hover:border-violet-500/30 transition-all hover:-translate-y-1 duration-300 h-full shadow-sm dark:shadow-none">
                  <div className="text-5xl sm:text-6xl font-black text-violet-500/15 tabular-nums flex-shrink-0 lg:mb-4 leading-none">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 text-sm sm:text-base">{title}</h3>
                    <p className="text-gray-400 dark:text-white/45 text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-violet-500/40 to-transparent z-10" />
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS ═════════════════════════ */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12 lg:mb-14">
            <Label text="Client Success" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              <span className="text-gray-900 dark:text-white">Why People </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400 dark:from-violet-400 dark:to-purple-300">
                Love Us
              </span>
            </h2>
          </FadeUp>

          <FadeUp delay={100} className="max-w-2xl lg:max-w-3xl mx-auto">
            <div className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/5 rounded-3xl p-7 sm:p-10 relative overflow-hidden shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-700/5 rounded-full blur-2xl pointer-events-none" />
              <Quote className="w-10 h-10 text-violet-500/15 absolute top-6 right-6" />

              <div className="flex gap-1 mb-5">
                {[...Array(testimonials[activeT].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p key={activeT}
                className="text-gray-700 dark:text-white/80 text-base sm:text-xl leading-relaxed mb-7 italic relative z-10"
                style={{ animation: "fadeIn 0.4s ease" }}>
                "{testimonials[activeT].text}"
              </p>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-black text-gray-900 dark:text-white text-sm sm:text-base">
                    {testimonials[activeT].name}
                  </div>
                  <div className="text-violet-600 dark:text-violet-400 text-xs sm:text-sm mt-0.5">
                    {testimonials[activeT].role}
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setActiveT(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeT
                          ? 'bg-violet-500 w-7'
                          : 'bg-gray-200 dark:bg-white/15 w-1.5 hover:bg-gray-300 dark:hover:bg-white/30'
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
                    Latest from the Blog
                  </h2>
                </div>
                <Link href="/blogs"
                  className="hidden sm:inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-500 dark:hover:text-violet-300 transition-colors text-sm flex-shrink-0">
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <FadeUp key={post.id} delay={i * 100}>
                  <article className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden group hover:border-violet-500/30 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col shadow-sm dark:shadow-none">
                    <div className="aspect-video overflow-hidden flex-shrink-0">
                      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                        <img
                          src={post._embedded['wp:featuredmedia'][0].source_url}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-violet-100 dark:from-violet-900/30 to-purple-100 dark:to-purple-900/10 flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-violet-400 dark:text-violet-500/30" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <div className="text-gray-400 dark:text-white/25 text-xs mb-3 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {fmtDate(post.date)}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors line-clamp-2 text-sm flex-1">
                        <Link href={`/blogs/${post.slug}`}>{post.title.rendered}</Link>
                      </h3>
                      <p className="text-gray-400 dark:text-white/35 text-xs line-clamp-2 mb-4 leading-relaxed">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                      <Link href={`/blogs/${post.slug}`}
                        className="inline-flex items-center text-violet-600 dark:text-violet-400 text-xs font-semibold hover:text-violet-500 dark:hover:text-violet-300 transition-colors">
                        Read More <ChevronRight className="w-4 h-4 ml-0.5" />
                      </Link>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link href="/blogs"
                className="inline-flex items-center gap-2 border border-violet-500/30 text-violet-600 dark:text-violet-400 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-violet-500/10 transition-all">
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════ BOTTOM CTA ═══════════════════════════ */}
      {/* Gradient overlay — white text stays valid here in both themes */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/35 to-purple-900/25" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)', backgroundSize: '44px 44px' }}
          />
        </div>
        <FadeUp className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-200">
              Grow?
            </span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed px-2">
            Get a free Google Ads audit and custom strategy — see exactly how we'll grow
            your business before you spend a single rupee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-2xl shadow-violet-500/35 text-base sm:text-lg">
              Start Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-white/10 transition-all text-base sm:text-lg">
              <Phone className="w-5 h-5" /> {PHONE_DISP}
            </a>
          </div>
        </FadeUp>
      </section>

      {/* ══════════════════════════ VIDEO MODAL ══════════════════════════ */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-[#13131A] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 transition-colors">
              <X className="w-4 h-4 text-gray-700 dark:text-white" />
            </button>
            <div className="aspect-video bg-gray-100 dark:bg-[#0B0B0F] flex items-center justify-center">
              <p className="text-gray-400 dark:text-white/30 text-sm">Add your video embed here</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
