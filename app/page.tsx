"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Phone, Play, CheckCircle2, Star, Target, Search,
  Share2, Code2, TrendingUp, BarChart3, Megaphone, Globe,
  ChevronRight, Calendar, BookOpen, Quote, X, Sparkles, Zap
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface WordPressPost {
  id: number; date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: { "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }> };
}
const WP_API_URL = "https://cms.adshouz.com/wp-json/wp/v2";

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
const PHONE      = "+917840000618";
const PHONE_DISP = "+91 78400 00618";

const services = [
  { icon: Target,     href: "/services/google-ads",              title: "Google Ads (PPC)",        desc: "Conversion-focused Search, Display & YouTube campaigns engineered for maximum ROAS with daily optimisation." },
  { icon: Search,     href: "/services/seo",                     title: "SEO & Organic Growth",    desc: "White-hat SEO that earns Page 1 rankings and sustains compounding organic traffic month after month." },
  { icon: Share2,     href: "/services/social-media-ads",        title: "Social Media Ads",        desc: "High-ROI paid campaigns on Meta, Instagram & LinkedIn — precision-targeted to your ideal global audience." },
  { icon: Code2,      href: "/services/website-development",     title: "Website Development",     desc: "High-speed, conversion-optimised sites on WordPress & Next.js that turn every visitor into a qualified lead." },
  { icon: Megaphone,  href: "/services/brand-bidding",           title: "Brand Bidding",           desc: "Dominate branded search terms on Google — protect your brand and ensure competitors never steal your leads." },
  { icon: BarChart3,  href: "/services/analytics-reporting",     title: "Analytics & Reporting",   desc: "Real-time dashboards and weekly performance reports. Every rupee tracked, every decision data-backed." },
  { icon: TrendingUp, href: "/services/performance-marketing",   title: "Performance Marketing",   desc: "CPA/CPS/CPL campaigns built to maximise ROI with aggressive data-driven optimisation at every stage." },
  { icon: Globe,      href: "/services/international-campaigns", title: "International Campaigns", desc: "Scale to US, UK, UAE, Canada & Singapore with geo-targeted, locally resonant digital ad strategies." },
];

const stats = [
  { value: 500, suffix: "+", label: "Campaigns Managed" },
  { value: 150, suffix: "+", label: "Global Clients" },
  { value: 8,   suffix: "+", label: "Years Experience" },
  { value: 300, suffix: "%", label: "Average ROI" },
];

const expertise = [
  "Google Search, Display & Shopping Advertising",
  "Facebook & Instagram Paid Campaigns",
  "YouTube Ad Production & Management",
  "Brand Protection & Competitor Bidding",
  "Conversion Rate Optimisation (CRO)",
  "Multi-market International Campaigns",
];

const testimonials = [
  { name: "James Whitfield",  role: "CEO, E-commerce Brand — UK",        rating: 5, text: "AdsHouz tripled our leads within 30 days of onboarding. Full transparency, brilliant strategy, and a team that genuinely understands global performance marketing." },
  { name: "Sara Al Mansouri",  role: "Founder, D2C Brand — UAE",          rating: 5, text: "Their international campaign strategy took us from zero to profitable in the US market in under 60 days. ROAS hit 4.8x within the first month." },
  { name: "Michael Brennan",   role: "Director, SaaS Startup — Canada",   rating: 5, text: "We scaled our Google Ads spend 5x without sacrificing efficiency. AdsHouz Digital delivered a 320% ROI increase. Genuinely world-class execution." },
  { name: "Priya Nair",        role: "CMO, HealthTech Company — Singapore",rating: 5, text: "Best performance marketing agency we have ever worked with. Deep product understanding, sharp copy, and relentless optimisation. CPA dropped 48%." },
];

const process = [
  { step: "01", title: "Free Audit",        desc: "We analyse your existing ads, website and competitors — completely free, zero commitment required." },
  { step: "02", title: "Build Strategy",    desc: "Custom campaign blueprint tailored to your industry, budget and global growth targets." },
  { step: "03", title: "Launch & Optimise", desc: "Live campaigns with daily monitoring, A/B testing and aggressive bid optimisation from day one." },
  { step: "04", title: "Scale & Report",    desc: "Transparent weekly reports as we scale winners, cut waste, and compound your ROI each month." },
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

const markets = ["🇺🇸 United States", "🇬🇧 United Kingdom", "🇦🇪 UAE", "🇨🇦 Canada", "🇸🇬 Singapore", "🇦🇺 Australia"];

// ─── Sub-components ───────────────────────────────────────────────────────────
const Label = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 mb-4">
    <span className="w-1.5 h-1.5 bg-white rounded-full" />
    <span className="text-white/50 font-semibold text-xs uppercase tracking-widest">{text}</span>
  </div>
);

const StatItem = ({ value, suffix, label, trigger, delay = 0 }: {
  value: number; suffix: string; label: string; trigger: boolean; delay?: number;
}) => {
  const count = useCountUp(value, 2200, trigger);
  return (
    <ScaleIn delay={delay}>
      <div className="text-center group">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tabular-nums group-hover:scale-110 transition-transform duration-300">
          {count}<span className="text-white/40">{suffix}</span>
        </div>
        <div className="text-white/30 text-xs uppercase tracking-widest font-semibold mt-2">
          {label}
        </div>
      </div>
    </ScaleIn>
  );
};

const Marquee = () => {
  const items = [...ticker, ...ticker, ...ticker, ...ticker];
  return (
    <div className="border-y border-white/[0.06] bg-white/[0.02] py-3.5 overflow-hidden select-none">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span key={i}
            className="inline-flex items-center gap-2.5 text-white/25 text-[11px] font-bold uppercase tracking-widest flex-shrink-0 hover:text-white/70 transition-colors duration-200">
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

// AdsHouz Logo Component — matches the exact logo style in the brand assets
const AdsHouzLogo = ({ size = "default" }: { size?: "sm" | "default" | "lg" }) => {
  const scales = { sm: "text-xl", default: "text-2xl", lg: "text-4xl" };
  return (
    <span className={`inline-flex items-baseline gap-0 font-sans ${scales[size]} select-none`}>
      <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", fontWeight: 400 }}
        className="text-white tracking-tight">ads</span>
      <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
        className="text-white">Houz</span>
      <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 700, fontSize: "0.45em", letterSpacing: "0.12em" }}
        className="text-white/70 ml-1 self-start mt-0.5 uppercase">Digital</span>
    </span>
  );
};

function stripHtml(html: string) { return html.replace(/<[^>]*>/g, "").substring(0, 130) + "..."; }
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
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
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden">

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center pt-10 pb-6 overflow-hidden">

        {/* BG — subtle noise grid + soft glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-20 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-white/[0.03] rounded-full blur-[140px] animate-pulse-slow" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-white/[0.02] rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
          {/* Dot-grid overlay */}
          <div className="absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "38px 38px" }}
          />
          {/* Top border line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* LEFT */}
            <div>
              {/* Badge */}
              <div style={{ animation: "heroFadeIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both" }}>
                <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2 mb-6 hover:bg-white/[0.09] transition-colors duration-300 cursor-default">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-white/70 text-xs sm:text-sm font-semibold tracking-wide">
                    Global Performance Marketing Agency
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-white/50" />
                </div>
              </div>

              {/* Headline */}
              <div style={{ animation: "heroFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both" }}>
                <h1 className="text-[42px] sm:text-5xl lg:text-[68px] font-black leading-[1.05] mb-5 tracking-tight">
                  <span className="text-white">Performance</span>
                  <br />
                  <span className="text-white">Ads That</span>{" "}
                  <span className="text-white/20">Actually</span>
                  <br />
                  <span className="text-white/20">Scale</span>{" "}
                  <span className="text-white">Your Brand.</span>
                </h1>
              </div>

              <div style={{ animation: "heroFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both" }}>
                <p className="text-base sm:text-lg text-white/45 mb-8 max-w-md leading-relaxed">
                  AdsHouz Digital delivers data-driven Google Ads, SEO and global performance
                  marketing campaigns that generate real, measurable ROI — for premium brands worldwide.
                </p>
              </div>

              {/* CTAs */}
              <div style={{ animation: "heroFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both" }}>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-7 py-4 rounded-2xl hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 active:scale-95 transition-all duration-200 shadow-xl shadow-white/10 text-sm sm:text-base group">
                    Get Free Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <a href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 border border-white/12 text-white font-semibold px-7 py-4 rounded-2xl hover:bg-white/[0.06] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-sm sm:text-base">
                    <Phone className="w-4 h-4 text-white/50" /> {PHONE_DISP}
                  </a>
                </div>
              </div>

              {/* Social proof */}
              <div style={{ animation: "heroFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.45s both" }}>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {avatars.map((src, i) => (
                      <img key={i} src={src} alt="client"
                        className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] object-cover hover:scale-110 hover:z-10 transition-transform duration-200 relative"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-white text-white"
                          style={{ animation: `starPop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.5 + i * 0.07}s both` }}
                        />
                      ))}
                    </div>
                    <p className="text-white/35 text-xs">
                      <span className="text-white font-bold">500+</span> Five-Star Reviews Globally
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — hero image */}
            <div style={{ animation: "heroSlideRight 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
              className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.07] group">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Global digital marketing analytics"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/60 via-transparent to-white/5" />
              </div>

              {/* Floating ROI card */}
              <div className="absolute -left-10 top-10 bg-[#141414]/90 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-5 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/[0.06] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">
                      300<span className="text-white/40">%</span>
                    </div>
                    <div className="text-white/35 text-xs">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Floating Live card */}
              <div className="absolute -right-8 bottom-12 bg-[#141414]/90 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-5 shadow-2xl animate-float" style={{ animationDelay: "0.7s" }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/35 text-[10px] font-bold uppercase tracking-wider">
                    Live Campaigns
                  </span>
                </div>
                <div className="text-3xl font-black text-white">
                  150<span className="text-white/40">+</span>
                </div>
                <div className="text-white/35 text-xs mt-0.5">Active Global Clients</div>
              </div>

              {/* Play button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-white/10 animate-ping-slow" />
                  <button onClick={() => setVideoOpen(true)}
                    className="relative w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200 shadow-xl">
                    <Play className="w-6 h-6 fill-white text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile mini-stats */}
          <div className="grid grid-cols-2 gap-3 mt-10 lg:hidden">
            {[
              { label: "Campaigns", value: "500+" },
              { label: "Avg ROI",   value: "300%" },
              { label: "Clients",   value: "150+" },
              { label: "Experience",value: "8 Yrs" },
            ].map(({ label, value }, i) => (
              <div key={label}
                className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center hover:border-white/15 hover:-translate-y-0.5 transition-all duration-200"
                style={{ animation: `heroFadeIn 0.5s ease ${0.5 + i * 0.08}s both` }}
              >
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-white/30 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ MARQUEE ═══════════════════════════════ */}
      <Marquee />

      {/* ══════════════════════════ MARKETS ══════════════════════════════ */}
      <section className="py-14 lg:py-16 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-8">
            <p className="text-white/25 text-xs font-bold uppercase tracking-widest">We run campaigns in</p>
          </FadeUp>
          <FadeUp delay={80} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {markets.map((market, i) => (
              <div key={i}
                className="bg-white/[0.04] border border-white/[0.06] rounded-xl px-5 py-2.5 text-white/55 text-sm font-semibold hover:bg-white/[0.07] hover:text-white hover:border-white/12 transition-all duration-200 cursor-default">
                {market}
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════ EXPERTISE ══════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image collage */}
            <FadeLeft>
              <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Team"
                    className="rounded-2xl lg:rounded-3xl w-full h-44 sm:h-56 lg:h-64 object-cover hover:scale-[1.03] transition-transform duration-500 brightness-75"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Analytics"
                    className="rounded-2xl lg:rounded-3xl w-full h-44 sm:h-56 lg:h-64 object-cover mt-8 sm:mt-10 hover:scale-[1.03] transition-transform duration-500 brightness-75"
                  />
                </div>
                <ScaleIn delay={200}>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#141414] border border-white/[0.08] rounded-2xl px-7 py-4 text-center shadow-2xl w-48 sm:w-56">
                    <div className="text-4xl sm:text-5xl font-black text-white">
                      8<span className="text-white/30">+</span>
                    </div>
                    <div className="text-white/35 text-xs mt-1 leading-snug">
                      Years in Performance Marketing
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </FadeLeft>

            {/* Content */}
            <FadeRight delay={100}>
              <Label text="Our Expertise" />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6 tracking-tight">
                <span className="text-white">Data Driven</span><br />
                <span className="text-white/20">Strategies,</span><br />
                <span className="text-white">Measurable</span><br />
                <span className="text-white/20">Results</span>
              </h2>
              <p className="text-white/45 mb-7 leading-relaxed text-sm sm:text-base">
                At AdsHouz Digital, we craft performance-first digital marketing strategies that drive
                real business growth for premium brands — with full transparency and zero guesswork.
              </p>

              <p className="text-xs font-bold text-white/20 uppercase tracking-widest mb-4">
                What We Do Best
              </p>
              <div className="space-y-3 mb-8">
                {expertise.map((item, i) => (
                  <FadeUp key={i} delay={i * 60}>
                    <div className="flex items-center gap-3 group">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 flex-shrink-0 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
                      <span className="text-white/55 text-sm group-hover:text-white transition-colors duration-200">{item}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white text-black font-bold px-7 py-3.5 rounded-2xl hover:bg-white/90 hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-white/10 text-sm sm:text-base group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ════════════════════════════ SERVICES ═══════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12 lg:mb-16">
            <Label text="What We Offer" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
              Full Range of{" "}
              <span className="text-white/30">
                Digital Marketing
              </span>
            </h2>
            <p className="text-white/30 max-w-xl mx-auto text-sm mt-2 px-4">
              Leverage our expertise to multiply your ROI across every digital channel — globally.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.map(({ icon: Icon, title, desc, href }, i) => (
              <ScaleIn key={i} delay={i * 70}>
                <Link
                  href={href}
                  className="group bg-[#111111] border border-white/[0.06] rounded-2xl p-5 sm:p-6 hover:border-white/20 hover:bg-[#161616] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50 h-full flex flex-col"
                >
                  <div className="w-10 h-10 bg-white/[0.06] rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/[0.10] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-white group-hover:rotate-6 transition-all duration-300" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-[14px] sm:text-[15px] group-hover:text-white transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-white/35 text-xs leading-relaxed flex-1">{desc}</p>
                  <div className="mt-4 flex items-center text-white/50 text-xs font-semibold opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════ STATS ═════════════════════════════ */}
      <div ref={statsSection.ref} className="py-16 lg:py-20 border-b border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-white/[0.03] rounded-full blur-[80px]" />
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <FadeUp className="text-center mb-12 lg:mb-16">
            <Label text="How It Works" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              <span className="text-white">Our </span>
              <span className="text-white/20">Proven </span>
              <span className="text-white">Process</span>
            </h2>
          </FadeUp>

          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map(({ step, title, desc }, i) => (
              <FadeUp key={i} delay={i * 120}>
                <div className="relative flex lg:block gap-5 lg:gap-0 bg-[#111111] border border-white/[0.06] rounded-2xl p-5 sm:p-7 hover:border-white/15 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:-translate-y-2 h-full group">
                  <div className="text-5xl sm:text-6xl font-black text-white/[0.07] group-hover:text-white/15 transition-colors duration-300 tabular-nums flex-shrink-0 lg:mb-4 leading-none">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1.5 text-sm sm:text-base">{title}</h3>
                    <p className="text-white/35 text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-7 left-full w-full h-px z-10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-white/20 to-transparent animate-line-grow" />
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS ═════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12 lg:mb-14">
            <Label text="Client Success" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              <span className="text-white">Why Global Brands </span>
              <span className="text-white/25">Trust Us</span>
            </h2>
          </FadeUp>

          <FadeUp delay={100} className="max-w-2xl lg:max-w-3xl mx-auto">
            <div className="bg-[#111111] border border-white/[0.07] rounded-3xl p-7 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />
              <Quote className="w-10 h-10 text-white/[0.07] absolute top-6 right-6" />

              <div className="flex gap-1 mb-5">
                {[...Array(testimonials[activeT].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-white/80 text-white/80"
                    style={{ animation: `starPop 0.3s cubic-bezier(0.34,1.56,0.64,1) ${i * 60}ms both` }}
                  />
                ))}
              </div>

              <p key={activeT}
                className="text-white/70 text-base sm:text-xl leading-relaxed mb-7 italic relative z-10"
                style={{ animation: "testimonialIn 0.5s cubic-bezier(0.22,1,0.36,1) both" }}>
                {testimonials[activeT].text}
              </p>

              <div className="flex items-center justify-between gap-4">
                <div style={{ animation: "testimonialIn 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}>
                  <div className="font-black text-white text-sm sm:text-base">
                    {testimonials[activeT].name}
                  </div>
                  <div className="text-white/35 text-xs sm:text-sm mt-0.5">
                    {testimonials[activeT].role}
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setActiveT(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === activeT
                          ? "bg-white w-7"
                          : "bg-white/15 w-1.5 hover:bg-white/30 hover:w-3"
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
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                    Latest from the Blog
                  </h2>
                </div>
                <Link href="/blogs"
                  className="hidden sm:inline-flex items-center gap-1 text-white/45 font-semibold hover:text-white transition-colors text-sm flex-shrink-0 group">
                  View All
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <FadeUp key={post.id} delay={i * 120}>
                  <article className="bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden group hover:border-white/15 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden flex-shrink-0">
                      {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                        <img
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/[0.03] flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-white/15 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <div className="text-white/20 text-xs mb-3 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {fmtDate(post.date)}
                      </div>
                      <h3 className="font-bold text-white mb-2 group-hover:text-white/80 transition-colors duration-200 line-clamp-2 text-sm flex-1">
                        <Link href={`/blogs/${post.slug}`}>{post.title.rendered}</Link>
                      </h3>
                      <p className="text-white/30 text-xs line-clamp-2 mb-4 leading-relaxed">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                      <Link href={`/blogs/${post.slug}`}
                        className="inline-flex items-center text-white/50 text-xs font-semibold hover:text-white transition-colors group/link">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-0.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link href="/blogs"
                className="inline-flex items-center gap-2 border border-white/10 text-white/50 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/[0.05] hover:text-white transition-all">
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════ BOTTOM CTA ═══════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/[0.02]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] animate-pulse-slow" />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Ready to{" "}
            <span className="text-white/30">
              10x Your ROI?
            </span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base mb-8 leading-relaxed">
            Join 500+ premium businesses worldwide already scaling with AdsHouz Digital.
            Get your free audit today — no obligation, just actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/15 active:scale-95 transition-all duration-200 shadow-xl shadow-white/10 text-sm sm:text-base group">
              Get Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/[0.06] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-sm sm:text-base">
              <Phone className="w-4 h-4 text-white/50" /> {PHONE_DISP}
            </a>
          </div>
        </FadeUp>
      </section>

      {/* ══════════════════════════ VIDEO MODAL ═══════════════════════════ */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
          style={{ animation: "modalIn 0.3s ease both" }}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="AdsHouz Digital"
              allow="autoplay; fullscreen"
              className="w-full h-full"
            />
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
