// app/not-found.tsx
import Link from "next/link";
import { Home, Search, Phone, ArrowRight, Zap } from "lucide-react";

const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";

const quickLinks = [
  { name: "Google Ads",            href: "/services/google-ads" },
  { name: "SEO",                   href: "/services/seo" },
  { name: "Social Media Ads",      href: "/services/social-media-ads" },
  { name: "Affiliate Marketing",   href: "/services/affiliate-marketing" },
  { name: "Performance Marketing", href: "/services/performance-marketing" },
  { name: "Website Development",   href: "/services/website-development" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030E1C] text-gray-900 dark:text-white flex flex-col">

      {/* ── BG Glows ─────────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-10 w-[400px] h-[400px] bg-cyan-800/8 dark:bg-cyan-800/12 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #0EA5E9 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      {/* ── Main ─────────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-5 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-2xl w-full text-center">

          {/* 404 big number */}
          <div className="relative mb-6">
            <span className="text-[130px] sm:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-sky-500/30 to-sky-500/5 select-none">
              404
            </span>
            {/* Centered badge over number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/25 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
                <span className="text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-semibold">
                  Page Not Found
                </span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-gray-900 dark:text-white">
            Oops! Wrong Turn
          </h1>

          {/* Description */}
          <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
            Let us get you back to growing your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 active:scale-95 transition-all shadow-xl shadow-sky-500/25 text-sm group">
              <Home className="w-4 h-4" />
              Go to Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/services"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 hover:-translate-y-0.5 transition-all text-sm">
              <Search className="w-4 h-4 text-sky-500" />
              Browse Services
            </Link>

            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 hover:-translate-y-0.5 transition-all text-sm">
              <Phone className="w-4 h-4 text-green-500" />
              {PHONE_DISP}
            </a>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100 dark:border-white/8" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-[#030E1C] px-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">
                Our Services
              </span>
            </div>
          </div>

          {/* Quick service links */}
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map(({ name, href }) => (
              <Link key={name} href={href}
                className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-white/[0.05] hover:bg-sky-500/10 dark:hover:bg-sky-500/15 border border-gray-200 dark:border-white/8 hover:border-sky-500/30 text-gray-700 dark:text-white/70 hover:text-sky-600 dark:hover:text-sky-400 text-xs font-semibold px-4 py-2 rounded-full transition-all">
                <Zap className="w-3 h-3 text-sky-500" />
                {name}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom CTA strip ─────────────────────────────────────────── */}
      <div className="border-t border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-[#040F1E] py-5 px-5 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-gray-900 dark:text-white text-sm">
              Looking for a performance marketing agency?
            </p>
            <p className="text-gray-500 dark:text-white/40 text-xs mt-0.5">
              Adshouz — Meta & Google Certified · 7+ Years · 450+ Campaigns · AI-Powered
            </p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-md shadow-sky-500/20 text-sm group">
            <Zap className="w-3.5 h-3.5" />
            Get Free Audit
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}
