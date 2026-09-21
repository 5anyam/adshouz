// app/services/linkedin-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase, Target, Users, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  BarChart3, MessageSquare, Building2, Zap, Filter
} from "lucide-react";

export const metadata: Metadata = {
  title: "LinkedIn Ads | B2B Advertising | Adshouz Digital",
  description:
    "Reach decision-makers, CTOs, and C-suite executives with LinkedIn Ads. Expert B2B campaign management for lead generation, brand awareness, and account-based marketing.",
  keywords: "linkedin ads, linkedin advertising, b2b ads, linkedin lead generation, linkedin ad agency Delhi",
};

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "contact@adshouz.com";

const services = [
  { icon: Filter,     title: "Precise B2B Targeting",    desc: "Target by job title, seniority, company size, industry, and skills — reaching exactly the decision-makers you need." },
  { icon: MessageSquare, title: "Lead Gen Forms",        desc: "Native LinkedIn Lead Gen Forms auto-fill from profiles — zero friction, 3× higher conversion than external pages." },
  { icon: Building2,  title: "Account-Based Marketing",  desc: "Upload a list of target companies and serve ads specifically to people within those accounts." },
  { icon: Users,      title: "Sponsored Content",        desc: "Single image, carousel, and video ads in the LinkedIn feed — high visibility with professional context." },
  { icon: Target,     title: "Message & InMail Ads",     desc: "Personalised messages delivered directly to target prospects' LinkedIn inboxes with high open rates." },
  { icon: BarChart3,  title: "Pipeline Tracking",        desc: "CRM integration and UTM tracking to map LinkedIn spend directly to pipeline value and closed deals." },
];

const stats = [
  { value: "4×",   label: "Higher lead quality vs other social" },
  { value: "900M+",label: "LinkedIn professionals" },
  { value: "80%",  label: "B2B leads come from LinkedIn" },
  { value: "2×",   label: "Higher purchase intent on LinkedIn" },
];

const process = [
  { step: "01", title: "ICP & Targeting Setup",   desc: "We define your Ideal Customer Profile and build precise audience segments by title, industry, seniority, and company." },
  { step: "02", title: "Creative & Copy",          desc: "Ad creative and copy tailored for a professional audience — credibility-first messaging that earns the click." },
  { step: "03", title: "Campaign Launch",          desc: "Sponsored Content, Lead Gen Forms, and/or Message Ads launched with proper bid strategy and budget pacing." },
  { step: "04", title: "Optimise & Report",        desc: "Weekly performance reviews, audience refinement, and creative rotation. Full pipeline impact tracked and reported." },
];

const faqs = [
  {
    q: "Is LinkedIn Ads worth it for Indian B2B businesses?",
    a: "Yes — if your target customer is a professional, manager, or C-suite executive. LinkedIn CPCs are higher than other platforms but lead quality is significantly better. For SaaS, consulting, HR tech, finance, and enterprise sales, LinkedIn typically delivers the highest-quality pipeline of any paid channel.",
  },
  {
    q: "What's the minimum budget for LinkedIn Ads?",
    a: "LinkedIn recommends a minimum of $10/day per campaign. For meaningful results in India, we suggest ₹50,000–₹80,000/month in ad spend. CPCs typically range from ₹200–₹800 depending on audience targeting and format.",
  },
  {
    q: "What ad formats work best on LinkedIn?",
    a: "For lead generation, LinkedIn Lead Gen Forms with Sponsored Content deliver the best results — low friction and auto-filled from profiles. For awareness and retargeting, single image and video ads work well. Message Ads work best for high-intent, personalised outreach to a tight prospect list.",
  },
  {
    q: "Can you retarget website visitors on LinkedIn?",
    a: "Yes. With the LinkedIn Insight Tag installed on your site, we can retarget all website visitors, specific page visitors, and video viewers on LinkedIn — serving them relevant ads as they browse their professional feed.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LinkedIn Ads",
  provider: { "@type": "Organization", name: "Adshouz Digital LLP", url: "https://adshouz.com" },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

export default function LinkedInAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-10 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-sky-500/10 dark:bg-sky-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-blue-600/8 dark:bg-blue-800/12 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services/social-media-ads" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Social Media Ads</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">LinkedIn Ads</span>
          </nav>

          <div className="max-w-3xl pb-14 lg:pb-16" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-5">
              <Briefcase className="w-3.5 h-3.5 text-sky-500" />
              <span className="text-sky-700 dark:text-sky-300 text-xs font-semibold">
                LinkedIn Ads · B2B · Decision-Maker Targeting
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight mb-5">
              <span className="text-gray-900 dark:text-white">Reach the </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-violet-500">
                Decision-Makers
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Who Buy From You</span>
            </h1>

            <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              LinkedIn is the only platform where you can target by job title,
              company, and seniority. We run B2B campaigns that put your offer
              in front of <strong className="text-gray-900 dark:text-white">the exact people</strong> who
              have the authority to say yes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-sky-500/25 text-sm group">
                Start LinkedIn Campaign
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                <Phone className="w-4 h-4 text-sky-500" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Job Title Targeting", "Lead Gen Forms", "CRM Integration", "ABM Campaigns"].map((b) => (
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
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 text-center hover:border-sky-400/40 hover:-translate-y-0.5 transition-all"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">{value}</div>
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
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">
                Included
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Full-service LinkedIn Ads management built for B2B pipeline generation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-sky-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-sky-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-sky-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{title}</h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              How We Work
            </h2>
          </div>
          <div className="space-y-3">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-sky-400/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-sky-400/30 to-transparent mt-2 min-h-[16px]" />
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
      <section className="py-14 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i}
                className="group bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/[0.03] transition-colors list-none">
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/90 pr-4">{q}</span>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-sky-500 group-open:text-sky-500 group-open:bg-sky-500/10 transition-all font-bold text-base">
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
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/40 to-blue-900/35" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Start Reaching{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
              B2B Decision-Makers
            </span>
          </h2>
          <p className="text-white/60 text-sm mb-7 max-w-md mx-auto">
            Get a free LinkedIn Ads strategy — we will map your ICP, estimate reach,
            and recommend the best campaign format for your pipeline goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-sky-500/25 text-sm group">
              Get Free Strategy Call
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
