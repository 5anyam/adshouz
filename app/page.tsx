"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Star, Target, Search, Share2, Code2, TrendingUp,
  BarChart3, Globe, ChevronRight, Calendar, BookOpen, Bot, Cpu, Sparkles,
  Link2, DollarSign, MousePointerClick, Smartphone, Zap, ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import { Spotlight } from "@/components/aceternity/spotlight";
import { FlipWords } from "@/components/aceternity/flip-words";
import { AnimatedTooltip } from "@/components/aceternity/animated-tooltip";
import { MovingBorderButton } from "@/components/aceternity/moving-border";
import { HoverEffect } from "@/components/aceternity/card-hover-effect";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { Timeline } from "@/components/aceternity/timeline";
import { LampContainer } from "@/components/aceternity/lamp";
import { DotBackground, GridBackground } from "@/components/aceternity/grid-pattern";

// ─── Types ────────────────────────────────────────────────────────────────────
interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: { "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }> };
}

const WP_API_URL = "https://cms.adshouz.com/wp-json/wp/v2";
const PHONE = "+918588837072";
const PHONE_DISP = "+91 85888 37072";

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useCountUp(end: number, duration = 2200, trigger = false) {
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
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  { icon: <Target className="h-5 w-5" />,               link: "/services/google-ads",              title: "Google Ads (PPC)",        description: "AI-assisted Search, Display & YouTube campaigns with smart bidding that adjusts hourly to protect ROI." },
  { icon: <Search className="h-5 w-5" />,               link: "/services/seo",                     title: "SEO & Organic Growth",    description: "Technical, local and content SEO built for Page-1 rankings — traffic that compounds month after month." },
  { icon: <Share2 className="h-5 w-5" />,               link: "/services/social-media-ads",        title: "Social Media Ads",        description: "Meta, Instagram and LinkedIn campaigns with precision audience targeting and creative that converts." },
  { icon: <Link2 className="h-5 w-5" />,                link: "/services/affiliate-marketing",     title: "Affiliate Marketing",     description: "CPS, CPL and CPI campaigns where you pay only for verified results — sales, leads and installs." },
  { icon: <TrendingUp className="h-5 w-5" />,           link: "/services/performance-marketing",   title: "Performance Marketing",   description: "Full-funnel CPA/CPL/CPS execution with complete attribution. Every rupee tracked, every lead counted." },
  { icon: <Code2 className="h-5 w-5" />,                link: "/services/website-development",     title: "Website Development",     description: "Fast, conversion-ready builds on Next.js and WordPress — engineered to turn visitors into customers." },
  { icon: <BarChart3 className="h-5 w-5" />,            link: "/services/analytics-reporting",     title: "Analytics & Reporting",   description: "GA4, server-side tracking and live dashboards so you always know exactly what your budget is doing." },
  { icon: <Globe className="h-5 w-5" />,                link: "/services/international-campaigns", title: "International Campaigns", description: "Scale into the US, UK, UAE, Canada and Australia with geo-tuned, locally-relevant strategy." },
];

const stats = [
  { value: 450, suffix: "+", label: "Campaigns Delivered" },
  { value: 120, suffix: "+", label: "Clients Scaled" },
  { value: 7,   suffix: "+", label: "Years of Expertise" },
  { value: 320, suffix: "%", label: "Average ROI" },
];

const aiFeatures = [
  {
    icon: <Bot className="h-5 w-5 text-sky-500" />,
    title: "AI Bid Optimisation",
    description: "Machine-learning bid strategies rebalance every hour — cutting wasted spend while holding your target CPA.",
    className: "md:col-span-2",
    tag: "Smart Bidding",
  },
  {
    icon: <Cpu className="h-5 w-5 text-cyan-500" />,
    title: "Predictive Analytics",
    description: "Forecast audience behaviour and budget allocation before you spend.",
    className: "md:col-span-1",
    tag: "Data Intelligence",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
    title: "Creative Testing at Scale",
    description: "Hundreds of copy and creative variants tested in parallel to find winners faster.",
    className: "md:col-span-1",
    tag: "Creative AI",
  },
  {
    icon: <Zap className="h-5 w-5 text-sky-500" />,
    title: "Real-Time Optimisation",
    description: "Live monitoring pauses underperformers instantly and scales what is working — no human lag between signal and action.",
    className: "md:col-span-2",
    tag: "Auto-Optimise",
  },
];

const affiliateModels = [
  {
    icon: DollarSign,
    model: "CPS",
    title: "Cost Per Sale",
    desc: "Pay only when a verified sale completes. Zero upfront risk — built for e-commerce, D2C brands and product launches that want pure revenue-share performance.",
    tags: ["E-commerce", "D2C", "Revenue Share"],
    color: "16, 185, 129",
    accent: "text-emerald-500",
    chip: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: MousePointerClick,
    model: "CPL",
    title: "Cost Per Lead",
    desc: "Pay per qualified lead captured. Ideal for real estate, finance, insurance, SaaS and education — scalable lead generation at a fixed, predictable cost.",
    tags: ["Real Estate", "Finance", "SaaS", "EdTech"],
    color: "14, 165, 233",
    accent: "text-sky-500",
    chip: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    icon: Smartphone,
    model: "CPI",
    title: "Cost Per Install",
    desc: "Pay per verified install from high-intent users on Android and iOS. Downloads that actually retain, with targeting tuned for active user acquisition.",
    tags: ["Mobile Apps", "Gaming", "Fintech", "Health"],
    color: "139, 92, 246",
    accent: "text-violet-500",
    chip: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
];

const testimonials = [
  { name: "Vikram Mehta",   title: "Founder, D2C Brand — Mumbai",   quote: "Adshouz completely flipped our digital performance. Within 45 days our leads tripled and cost-per-acquisition dropped by half. The team is sharp, transparent and genuinely invested." },
  { name: "Divya Joshi",    title: "CEO, E-commerce Startup",       quote: "Their restructuring of our Shopping and Search campaigns took ROAS from 2x to over 6x in a few weeks. We finally know which products are actually profitable." },
  { name: "Manish Agarwal", title: "MD, Real Estate Group — Delhi", quote: "We expanded from India into the UAE and UK with Adshouz running international campaigns. 320% ROI in under 90 days — genuinely beyond what we expected." },
  { name: "Kavya Reddy",    title: "Co-Founder, HealthTech SaaS",   quote: "Best performance marketing team we have worked with. Deep product understanding, copy that converts, and reporting that hides nothing." },
  { name: "Rohit Nair",     title: "Growth Lead, Fintech App",      quote: "The CPI affiliate programme they built drove installs at a third of our previous blended cost, and retention actually went up rather than down." },
];

const process = [
  { step: "01", title: "Free Audit",        desc: "We pull apart your campaigns, site and competitive landscape and hand you a full findings report within 24 hours. No cost, no obligation, no lock-in." },
  { step: "02", title: "Build Strategy",    desc: "A bespoke blueprint mapped to your goals, commercial model (CPS/CPL/CPI or PPC) and budget. Nothing off-the-shelf, nothing recycled from another client." },
  { step: "03", title: "Launch & Optimise", desc: "Campaigns go live with continuous monitoring, structured A/B testing and active bid management — optimised daily, not monthly." },
  { step: "04", title: "Scale & Report",    desc: "We scale what wins and cut what does not. You get transparent weekly reports with clear attribution, every single week." },
];

const expertise = [
  "Google Search, Display & Shopping Campaigns",
  "AI-Powered Bid Strategies & Smart Automation",
  "Facebook & Instagram Performance Ads",
  "Affiliate Marketing — CPS, CPL & CPI Models",
  "Conversion Rate & Landing Page Optimisation",
  "YouTube Video Strategy & Ad Management",
  "GA4, Server-Side Tracking & Attribution",
  "Global Multi-Market Campaign Execution",
];

const people = [
  { id: 1, name: "Vikram Mehta",   designation: "D2C Founder",     image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Divya Joshi",    designation: "E-commerce CEO",  image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Manish Agarwal", designation: "Real Estate MD",  image: "https://randomuser.me/api/portraits/men/68.jpg" },
  { id: 4, name: "Kavya Reddy",    designation: "SaaS Co-Founder", image: "https://randomuser.me/api/portraits/women/17.jpg" },
];

const ticker = [
  "Google Ads", "AI Marketing", "Performance Marketing", "SEO",
  "Facebook Ads", "Affiliate Marketing", "CPS Campaigns", "CPL Lead Gen",
  "CPI App Installs", "YouTube Campaigns", "Conversion Optimisation",
  "Web Development", "Landing Pages", "CRO", "GA4 Analytics",
];

// ─── Small shared pieces ──────────────────────────────────────────────────────
const Eyebrow = ({ text }: { text: string }) => (
  <div className="mb-4 inline-flex items-center gap-2">
    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-sky-500">
      <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
    </span>
    <span className="text-sm font-semibold text-sky-600 dark:text-sky-400">{text}</span>
  </div>
);

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const StatItem = ({
  value,
  suffix,
  label,
  trigger,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  trigger: boolean;
  delay?: number;
}) => {
  const count = useCountUp(value, 2200, trigger);
  return (
    <Reveal delay={delay}>
      <div className="group text-center">
        <div className="font-display text-4xl font-black tabular-nums text-gray-900 transition-transform duration-300 group-hover:scale-110 sm:text-5xl lg:text-6xl dark:text-white">
          {count}
          <span className="text-sky-500 dark:text-sky-400">{suffix}</span>
        </div>
        <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-white/40">
          {label}
        </div>
      </div>
    </Reveal>
  );
};

const Marquee = () => {
  const items = [...ticker, ...ticker, ...ticker, ...ticker];
  return (
    <div className="select-none overflow-hidden border-y border-gray-200 bg-gray-50 py-3.5 dark:border-white/[0.06] dark:bg-[#040F1E]">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex flex-shrink-0 items-center gap-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-400 transition-colors duration-200 hover:text-sky-500 dark:text-white/35 dark:hover:text-sky-400"
          >
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").substring(0, 130) + "...";
}
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const statsSection = useInView(0.2);

  useEffect(() => {
    fetch(`${WP_API_URL}/posts?_embed&per_page=3`)
      .then((r) => (r.ok ? r.json() : []))
      .then(setPosts)
      .catch(() => {});
  }, []);

  const timelineData = process.map((p) => ({
    title: p.step,
    content: (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/[0.08] dark:bg-[#071828]">
        <h3 className="mb-2 font-display text-xl font-black text-gray-900 dark:text-white">
          {p.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-white/50">{p.desc}</p>
      </div>
    ),
  }));

  return (
    <div className="overflow-x-hidden bg-white text-gray-900 dark:bg-[#030E1C] dark:text-white">

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#020C1B] pb-16 pt-24">
        <GridBackground className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,black,transparent)]" />
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#38bdf8" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,165,233,0.14),transparent)]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-2">
              <span className="h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-sky-400" />
              <span className="text-xs font-semibold tracking-wide text-sky-300 sm:text-sm">
                Meta &amp; Google Certified · AI-Powered · CPS / CPL / CPI Affiliate
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-display text-[44px] font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[78px]"
          >
            Marketing that
            <br />
            <FlipWords
              words={["pays back.", "compounds.", "scales.", "converts."]}
              className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
          >
            Adshouz is a performance-first agency running Google Ads, SEO, affiliate
            campaigns (CPS, CPL, CPI) and full-funnel media for brands across India and
            international markets — measured on revenue, not impressions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <MovingBorderButton
              as={Link}
              href="/contact"
              borderRadius="1.75rem"
              containerClassName="h-14 w-full sm:w-52"
              className="gap-2 px-6 hover:bg-slate-900/90"
              duration={3200}
            >
              Get Free Audit
              <ArrowRight className="h-4 w-4" />
            </MovingBorderButton>

            <a
              href={`tel:${PHONE}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[1.75rem] border border-white/10 px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:border-sky-500/30 hover:bg-white/5 active:scale-95 sm:h-14 sm:w-auto sm:text-base"
            >
              <Phone className="h-4 w-4 text-sky-400" /> {PHONE_DISP}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <div className="flex items-center">
              <AnimatedTooltip items={people} />
            </div>
            <div className="text-left">
              <div className="mb-0.5 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-white/45">
                <span className="font-bold text-white">450+</span> five-star reviews
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ MARQUEE ══════════════════════════ */}
      <Marquee />

      {/* ══════════════════════════ EXPERTISE ══════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <DotBackground className="[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] opacity-60" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow text="Who We Are" />
              <h2 className="mb-5 font-display text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
                A growth partner,{" "}
                <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                  not a vendor.
                </span>
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-white/55">
                Seven years, 450+ campaigns and 120+ brands scaled. We plan every channel
                as one system — awareness through conversion — and we report on the only
                number that matters: what you got back for what you spent.
              </p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {expertise.map((item, i) => (
                  <Reveal key={item} delay={i * 0.05}>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                      <span className="text-sm text-gray-600 dark:text-white/55">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400"
              >
                More about Adshouz
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, title: "Certified Partners", desc: "Google Ads, GA4 and Meta Blueprint certified strategists on every account." },
                  { icon: BarChart3,   title: "Transparent Reporting", desc: "Weekly snapshots and monthly deep-dives. You own every dashboard and ad account." },
                  { icon: Target,      title: "ROI-First Planning", desc: "Budgets allocated against modelled return, not channel habit or gut feel." },
                  { icon: Sparkles,    title: "Dedicated Team", desc: "A named strategist and account manager per client. No ticket queues, no hand-offs." },
                ].map((card, i) => (
                  <div
                    key={card.title}
                    className={`rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5 dark:border-white/[0.08] dark:bg-[#071828] ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-display text-base font-bold text-gray-900 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-white/45">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ AI CAPABILITIES (BENTO) ══════════════════════════ */}
      <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-24 dark:bg-[#040F1E]">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <Eyebrow text="AI-Powered" />
            <h2 className="mx-auto mb-4 max-w-4xl font-display text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Machines handle the maths.{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                We handle the strategy.
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-sm text-gray-500 sm:text-base dark:text-white/45">
              Automation is a tool, not a strategy. We pair it with senior humans who know
              when to overrule the algorithm.
            </p>
          </Reveal>

          <BentoGrid className="md:auto-rows-[20rem]">
            {aiFeatures.map((f, i) => (
              <BentoGridItem
                key={f.title}
                className={f.className}
                icon={
                  <div className="mb-1 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10">
                      {f.icon}
                    </span>
                    <span className="rounded-full bg-sky-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      {f.tag}
                    </span>
                  </div>
                }
                title={f.title}
                description={f.description}
                header={
                  <div className="relative flex min-h-[6rem] w-full flex-1 overflow-hidden rounded-xl bg-gradient-to-br from-sky-500/[0.07] to-cyan-400/[0.03]">
                    <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(14,165,233,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.10)_1px,transparent_1px)] [background-size:28px_28px]" />
                    <motion.div
                      initial={{ opacity: 0.35 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08 }}
                      className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl"
                    />
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ══════════════════════════ SERVICES ══════════════════════════ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <Eyebrow text="What We Do" />
            <h2 className="mb-4 font-display text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                grow online
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-sm text-gray-500 sm:text-base dark:text-white/45">
              Eight core services, one accountable team, a single view of performance.
            </p>
          </Reveal>

          <HoverEffect items={services} />

          <Reveal className="mt-10 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-2xl border border-sky-500/30 px-6 py-3 text-sm font-semibold text-sky-600 transition-all hover:bg-sky-500/10 dark:text-sky-400"
            >
              Explore all services
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════ AFFILIATE MODELS ══════════════════════════ */}
      <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-28 dark:bg-[#040F1E]">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <Eyebrow text="Affiliate Marketing" />
            <h2 className="mb-4 font-display text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Pay only for{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                verified results
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-sm text-gray-500 sm:text-base dark:text-white/45">
              Three performance models. No retainer risk, no paying for impressions that
              never turned into anything.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {affiliateModels.map((m, i) => (
              <Reveal key={m.model} delay={i * 0.1}>
                <CardSpotlight color={m.color} className="h-full">
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 ${m.accent}`}
                    >
                      <m.icon className="h-5 w-5" />
                    </span>
                    <span className={`font-display text-3xl font-black ${m.accent} opacity-40`}>
                      {m.model}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-black text-gray-900 dark:text-white">
                    {m.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-white/50">
                    {m.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${m.chip}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardSpotlight>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/services/affiliate-marketing"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400"
            >
              See how our affiliate programmes work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════ STATS ══════════════════════════ */}
      <section ref={statsSection.ref} className="border-y border-gray-200 py-16 lg:py-20 dark:border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatItem key={s.label} {...s} trigger={statsSection.inView} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PROCESS (TIMELINE) ══════════════════════════ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal className="mb-4 text-center">
            <Eyebrow text="How We Work" />
            <h2 className="mb-4 font-display text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Four steps from{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                audit to scale
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-sm text-gray-500 sm:text-base dark:text-white/45">
              The same process for every client, whether the budget is ₹50k or ₹50 lakh a month.
            </p>
          </Reveal>
        </div>
        <Timeline data={timelineData} />
      </section>

      {/* ══════════════════════════ TESTIMONIALS ══════════════════════════ */}
      <section className="overflow-hidden bg-gray-50 py-20 lg:py-24 dark:bg-[#040F1E]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <Eyebrow text="Client Results" />
            <h2 className="mb-4 font-display text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              What founders{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                actually say
              </span>
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto flex max-w-7xl justify-center px-5 sm:px-6 lg:px-8">
          <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        </div>
      </section>

      {/* ══════════════════════════ BLOG ══════════════════════════ */}
      {posts.length > 0 && (
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mb-10 flex items-end justify-between lg:mb-12">
                <div>
                  <Eyebrow text="Insights" />
                  <h2 className="font-display text-2xl font-black tracking-tight text-gray-900 sm:text-3xl lg:text-4xl dark:text-white">
                    From the Adshouz blog
                  </h2>
                </div>
                <Link
                  href="/blogs"
                  className="group hidden flex-shrink-0 items-center gap-1 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 sm:inline-flex dark:text-sky-400"
                >
                  View all
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={i * 0.12}>
                  <Link
                    href={`/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/[0.06] dark:bg-[#071828] dark:shadow-none"
                  >
                    <div className="aspect-video flex-shrink-0 overflow-hidden">
                      {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                        <img
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post.title.rendered}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-100 to-cyan-100 dark:from-sky-900/30 dark:to-cyan-900/10">
                          <BookOpen className="h-10 w-10 text-sky-400 transition-transform duration-300 group-hover:scale-110 dark:text-sky-500/30" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-3 flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/50">
                        <Calendar className="h-3.5 w-3.5 flex-shrink-0 text-sky-500" />
                        {fmtDate(post.date)}
                      </div>
                      <h3 className="mb-2 line-clamp-2 flex-1 text-sm font-bold text-gray-900 transition-colors duration-200 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-300">
                        {post.title.rendered}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-gray-400 dark:text-white/40">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                      <div className="inline-flex items-center text-xs font-semibold text-sky-600 transition-colors group-hover:text-sky-500 dark:text-sky-400">
                        Read more
                        <ChevronRight className="ml-0.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-xl border border-sky-500/30 px-6 py-3 text-sm font-semibold text-sky-600 transition-all hover:bg-sky-500/10 dark:text-sky-400"
              >
                View all articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════ BOTTOM CTA (LAMP) ══════════════════════════ */}
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-center font-display text-3xl font-black tracking-tight text-transparent sm:text-4xl lg:text-5xl"
        >
          Ready to scale smarter?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mx-auto mt-5 max-w-lg text-center text-sm leading-relaxed text-white/55 sm:text-base"
        >
          Join 450+ businesses growing with Adshouz. Start with a free audit of your
          current campaigns — no obligation, no lock-in, and you keep the report either way.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-sky-500/30 transition-all duration-200 hover:-translate-y-1 hover:opacity-90 hover:shadow-2xl hover:shadow-sky-500/40 active:scale-95 sm:text-base"
          >
            Get Free Audit
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 active:scale-95 sm:text-base"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISP}
          </a>
        </motion.div>
      </LampContainer>
    </div>
  );
}
