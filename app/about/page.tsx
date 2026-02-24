import { Metadata } from "next";
import {
  Users, Clock, Trophy, Award, Target, Zap,
  Globe, BarChart3, TrendingUp, Shield, Heart,
  Lightbulb, ArrowRight, CheckCircle2, Star
} from "lucide-react";
import Link from "next/link";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Rigveda Ads — Google Ads & Performance Marketing Agency India",
  description:
    "Learn about Rigveda Ads, a certified Google Ads and performance marketing agency with 8+ years of experience delivering data-driven campaigns with proven ROI across India and internationally.",
  keywords: [
    "about Rigveda Ads",
    "Google Ads agency India",
    "performance marketing company",
    "PPC agency Delhi",
    "digital marketing agency India",
    "certified Google partner",
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { icon: Users,    number: "126+",  label: "Happy Clients" },
  { icon: Trophy,   number: "8+",    label: "Years Experience" },
  { icon: BarChart3,number: "500+",  label: "Campaigns Managed" },
  { icon: TrendingUp,number: "300%", label: "Average Client ROI" },
];

const timeline = [
  {
    year: "2016",
    title: "Agency Founded",
    description:
      "Rigveda Ads was founded with a clear mission — to bring honest, data-driven Google Ads management to Indian businesses tired of agencies with zero accountability.",
  },
  {
    year: "2018",
    title: "Google Certification",
    description:
      "Achieved Google Partner certification. Expanded service offering to include Facebook Ads, SEO and brand bidding campaign management.",
  },
  {
    year: "2020",
    title: "Performance Marketing Focus",
    description:
      "Pivoted to full-funnel performance marketing — combining PPC, landing page CRO and analytics to deliver measurable end-to-end ROI for clients.",
  },
  {
    year: "2022",
    title: "International Expansion",
    description:
      "Launched international campaign management for clients targeting US, UK, UAE, Canada and Singapore markets. 50+ global campaigns delivered.",
  },
  {
    year: "2025",
    title: "300%+ Average ROI",
    description:
      "Crossed 500 campaigns managed and 126+ active clients across all major sectors. Recognised as a leading performance marketing agency in North India.",
  },
];

const values = [
  {
    icon: Target,
    title: "Results First",
    description:
      "Every decision we make is tied to your business outcomes. We optimise for conversions, leads and revenue — not vanity metrics.",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description:
      "Weekly reports, live dashboards, zero hidden fees. You always know exactly where every rupee of your ad budget is going.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "Digital advertising evolves daily. We stay ahead of algorithm changes, beta features and new ad formats so you always have the edge.",
  },
  {
    icon: Heart,
    title: "Long-term Partnership",
    description:
      "We don't chase quick wins. We build sustainable ad systems that grow your business month over month, year over year.",
  },
];

const serviceAreas = [
  {
    icon: Target,
    title: "Paid Advertising",
    description:
      "Google Search, Display, Shopping, YouTube, Facebook, Instagram and LinkedIn ads — managed end-to-end for maximum ROI.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Full-funnel CPA/CPS/CPL campaigns with aggressive A/B testing, bid optimisation and conversion tracking at every stage.",
  },
  {
    icon: Globe,
    title: "International Campaigns",
    description:
      "Geo-targeted, localised campaigns for US, UK, UAE, Canada and Singapore markets with proven cross-border strategies.",
  },
];

const expertise = [
  "Google Search & Display Network",
  "YouTube Video Advertising",
  "Facebook & Instagram Ads",
  "Brand Protection & Competitor Bidding",
  "Conversion Rate Optimisation (CRO)",
  "Search Engine Optimisation (SEO)",
  "Analytics, Tracking & Reporting",
  "International Market Campaigns",
  "Landing Page Design & Development",
  "E-commerce Performance Marketing",
];

const industries = [
  "E-commerce",       "Healthcare",     "Real Estate",    "Education",
  "Finance & NBFC",   "SaaS & Tech",    "Hospitality",    "Legal Services",
  "Manufacturing",    "Retail & D2C",   "Startups",       "NGOs & Trusts",
];

// ─── Reusable Label ───────────────────────────────────────────────────────────
const Label = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 mb-4">
    <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
      <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
    </span>
    <span className="text-violet-400 font-semibold text-sm">{text}</span>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="bg-[#0B0B0F] text-white overflow-x-hidden">

      {/* ════════════ PAGE HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-violet-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-purple-800/10 rounded-full blur-[80px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)", backgroundSize: "44px 44px" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
            <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <Label text="Our Story" />
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.03] mb-6 tracking-tight">
              <span className="text-white">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-pink-300">
                Rigveda Ads
              </span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              A certified Google Ads &amp; performance marketing agency delivering data-driven
              campaigns with transparent reporting and proven ROI — for every type of business,
              in every market.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ COMPANY OVERVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Label text="Who We Are" />
              <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-8">
                <span className="text-white">Performance Marketing </span>
                <span className="text-white/20">Done Right</span>
              </h2>

              <div className="space-y-5 text-white/55 leading-relaxed">
                <p>
                  Rigveda Ads is a certified Google Ads and performance marketing agency founded
                  with one goal — to help Indian businesses grow profitably through digital advertising.
                  We combine deep platform expertise with data-driven strategy to deliver campaigns
                  that produce real, measurable business results.
                </p>
                <p>
                  Our clients range from early-stage startups to established enterprises across
                  e-commerce, healthcare, real estate, SaaS, finance and more. Whether you need
                  pan-India coverage or targeted international campaigns in US, UK or UAE, we have
                  the experience to deliver.
                </p>
                <p>
                  We are a team of young, certified professionals committed to transparency, continuous
                  optimisation, and long-term client partnerships. No lock-in contracts, no vanity
                  metrics — just results you can measure.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Google Certified Partner", "8+ Years Experience", "500+ Campaigns", "Pan-India + Global"].map(b => (
                  <div key={b} className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-4 py-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span className="text-white/70 text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-violet-500/25"
              >
                Work With Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, number, label }, i) => (
                <div
                  key={i}
                  className="bg-[#13131A] border border-white/5 rounded-2xl p-7 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">{number}</div>
                  <div className="text-white/40 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ MISSION & VISION */}
      <section className="py-20 bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="relative bg-[#13131A] border border-white/5 rounded-2xl p-8 overflow-hidden group hover:border-violet-500/30 transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-purple-600 rounded-l-2xl" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
              <div className="pl-4">
                <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-4">Our Mission</p>
                <h3 className="text-2xl font-black text-white mb-4">Why We Exist</h3>
                <p className="text-white/50 leading-relaxed">
                  To deliver honest, transparent and results-focused digital advertising that empowers
                  businesses to grow profitably. We exist to be the agency we wished existed when we
                  started — no fluff, no jargon, just performance.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-[#13131A] border border-white/5 rounded-2xl p-8 overflow-hidden group hover:border-violet-500/30 transition-all">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-l-2xl" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
              <div className="pl-4">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">Our Vision</p>
                <h3 className="text-2xl font-black text-white mb-4">Where We are Going</h3>
                <p className="text-white/50 leading-relaxed">
                  To be India most trusted performance marketing agency — recognised for delivering
                  measurable growth, building long-term partnerships, and pioneering data-driven
                  advertising strategies that set the benchmark for the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SERVICE AREAS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Label text="What We Do" />
            <h2 className="text-3xl lg:text-5xl font-black">
              <span className="text-white">Our Core </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                Capabilities
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {serviceAreas.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="bg-[#13131A] border border-white/5 rounded-2xl p-8 text-center hover:border-violet-500/30 hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Expertise pills */}
          <div className="bg-[#13131A] border border-white/5 rounded-2xl p-8">
            <p className="text-xs font-bold text-violet-400 uppercase tracking-widest text-center mb-6">
              Expertise Areas
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-white/5 border border-white/8 hover:border-violet-500/30 hover:bg-violet-500/5 rounded-full px-4 py-2 transition-all cursor-default"
                >
                  <Zap className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  <span className="text-white/60 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ VALUES */}
      <section className="py-24 bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Label text="Our Values" />
            <h2 className="text-3xl lg:text-5xl font-black text-white">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="bg-[#13131A] border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="font-black text-white text-lg mb-2">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ INDUSTRIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Label text="Industries" />
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-3">
              Sectors We Serve
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm">
              We have delivered profitable campaigns across every major industry in India and internationally.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-[#13131A] border border-white/5 rounded-xl p-4 text-center hover:border-violet-500/30 hover:-translate-y-0.5 hover:bg-[#16161F] transition-all duration-300 cursor-default group"
              >
                <span className="w-2 h-2 bg-violet-500/50 rounded-full block mx-auto mb-2 group-hover:bg-violet-400 transition-colors" />
                <span className="text-white/55 text-xs font-semibold group-hover:text-white/80 transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TIMELINE */}
      <section className="py-24 bg-[#0F0F14] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-800/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Label text="Our Journey" />
            <h2 className="text-3xl lg:text-5xl font-black">
              <span className="text-white">8 Years of </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
                Growth
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0 group">
                {/* Year bubble + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
                    <span className="text-white font-black text-sm">{item.year}</span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-violet-500/30 to-transparent mt-3 min-h-[32px]" />
                  )}
                </div>

                {/* Content */}
                <div className="bg-[#13131A] border border-white/5 rounded-2xl p-6 flex-1 hover:border-violet-500/20 transition-all mb-2">
                  <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ LEADERSHIP */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Label text="Leadership" />
            <h2 className="text-3xl lg:text-5xl font-black text-white">The People Behind It</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative bg-[#13131A] border border-white/5 rounded-3xl p-10 text-center overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-violet-500/25">
                  <span className="text-white font-black text-2xl">RA</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-1">Founder, Rigveda Ads</h3>
                <p className="text-violet-400 font-semibold text-sm mb-6">
                  Google Certified Ads Expert · Performance Marketing Strategist
                </p>

                <p className="text-white/50 leading-relaxed text-sm mb-6 max-w-lg mx-auto">
                  With over 8 years of hands-on experience in Google Ads, performance marketing
                  and international campaign management, the founder of Rigveda Ads has led
                  500+ campaigns across diverse industries — delivering transparent, ROI-focused
                  digital advertising for clients across India and globally.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {["Google Ads Certified", "Meta Blueprint", "Analytics Expert", "CRO Specialist"].map(b => (
                    <div key={b} className="flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1.5">
                      <Star className="w-3 h-3 text-violet-400 fill-violet-400" />
                      <span className="text-violet-300 text-xs font-semibold">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why Work With Us card */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/15 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-black text-white mb-3">Why Work With Rigveda Ads?</h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-xl mx-auto">
                We treat your ad budget like our own. Every campaign gets daily monitoring,
                aggressive optimisation and a weekly report — so you always know your numbers.
                No lock-in, no fluff, just performance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-violet-500/25 text-sm"
              >
                Start with a Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ BOTTOM CTA */}
      <section className="py-20 relative overflow-hidden bg-[#0F0F14]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-purple-900/15" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)", backgroundSize: "44px 44px" }}
          />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">
              Scale Your Ads?
            </span>
          </h2>
          <p className="text-white/45 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation Google Ads audit. We will show you exactly what is
            working, what is not, and how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black px-10 py-5 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-2xl shadow-violet-500/30 text-lg"
            >
              Get Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/12 text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/5 transition-all text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
