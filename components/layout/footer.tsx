import Link from "next/link";
import {
  Phone, Mail, MapPin, MessageSquare,
  Facebook, Twitter, Linkedin, Instagram,
  ArrowUpRight, Zap
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE      = "+918588837072";
const PHONE_DISP = "+91 85888 37072";
const EMAIL      = "marketing@adshouz.com";

// ─── Text Logo ────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <div className="flex flex-col leading-none select-none">
      <img src="/adshouz-logo.jpg" alt="adshouz" />
      <span className="font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300 text-[24px]">
        Adshouz Digital LLP.
      </span>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const quickLinks = [
  { label: "About Us",        href: "/about" },
  { label: "Our Services",    href: "/services" },
  { label: "Case Studies",    href: "/case-studies" },
  { label: "Blog & Insights", href: "/blogs" },
  { label: "Careers",         href: "/career" },
  { label: "Contact Us",      href: "/contact" },
];

const services = [
  { label: "Google Ads (PPC)",         href: "/services/google-ads" },
  { label: "SEO & Organic Growth",     href: "/services/seo" },
  { label: "Facebook & Instagram Ads", href: "/services/social-media-ads" },
  { label: "Brand Bidding",            href: "/services/brand-bidding" },
  { label: "Performance Marketing",    href: "/services/performance-marketing" },
  { label: "International Campaigns",  href: "/services/international-campaigns" },
  { label: "YouTube Advertising",      href: "/services/youtube-ads" },
  { label: "Website Development",      href: "/services/website-development" },
];

const usefulLinks = [
  { label: "Google Ads Manager",    href: "https://ads.google.com" },
  { label: "Google Analytics",      href: "https://analytics.google.com" },
  { label: "Google Search Console", href: "https://search.google.com/search-console" },
  { label: "Meta Ads Manager",      href: "https://www.facebook.com/adsmanager" },
  { label: "Google Merchant Center",href: "https://merchants.google.com" },
  { label: "Disclaimer",            href: "/disclaimer", internal: true },
];

const socialLinks = [
  { icon: Facebook,  href: "https://www.facebook.com/rigvedaadds",       label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/rigvedaadds",      label: "Instagram" },
  { icon: Linkedin,  href: "https://www.linkedin.com/company/rigvedaadds",label: "LinkedIn" },
  { icon: Twitter,   href: "https://twitter.com/rigvedaadds",             label: "X (Twitter)" },
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-white relative overflow-hidden">

      {/* Top glow border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

      {/* Background blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* ── Company Info */}
            <div className="lg:col-span-1">
              {/* Text logo — replaces <Image> */}
              <Link href="/" className="inline-block mb-6">
                <Logo />
              </Link>

              <p className="text-white/40 mb-7 leading-relaxed text-sm">
                Ads Houz is a certified Google Ads &amp; performance marketing agency
                delivering data-driven campaigns with proven ROI — across all industries in
                India and internationally.
              </p>

              <div className="space-y-3.5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-white/50 leading-snug">
                    NU-296<br />
                    Pitampura, New Delhi — 110036
                  </div>
                </div>

                {/* Phone — single updated number */}
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <a
                    href={`tel:${PHONE}`}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {PHONE_DISP}
                  </a>
                </div>

                {/* WhatsApp — same number */}
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  <a
                    href={`https://wa.me/${PHONE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {PHONE_DISP} (WhatsApp)
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* ── Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-1.5 text-white/45 hover:text-white text-sm transition-colors duration-200 group">
                    <span className="w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Services */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                Our Services
              </h3>
              <div className="space-y-3">
                {services.map(({ label, href }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-1.5 text-white/45 hover:text-white text-sm transition-colors duration-200 group">
                    <span className="w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Useful Links */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                Useful Links
              </h3>
              <div className="space-y-3">
                {usefulLinks.map(({ label, href, internal }) =>
                  internal ? (
                    <Link key={href} href={href}
                      className="flex items-center gap-1.5 text-white/45 hover:text-white text-sm transition-colors duration-200 group">
                      <span className="w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </Link>
                  ) : (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white/45 hover:text-white text-sm transition-colors duration-200 group">
                      <span className="w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity ml-auto" />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* ── Agency Info + Social */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                Agency Info
              </h3>

              {/* Working Hours */}
              <div className="mb-6 bg-white/[0.03] border border-white/5 rounded-xl p-4">
                <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">
                  Working Hours
                </p>
                <div className="space-y-1.5 text-xs text-white/50">
                  <div className="flex justify-between">
                    <span>Mon – Sat</span>
                    <span className="text-white/70">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-400/70">Closed</span>
                  </div>
                </div>
              </div>

              {/* Why Us */}
              <div className="mb-7 bg-white/[0.03] border border-white/5 rounded-xl p-4">
                <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">
                  Why Us
                </p>
                <div className="space-y-2">
                  {[
                    "Google Certified Partner",
                    "8+ Years of Experience",
                    "500+ Campaigns Managed",
                    "Pan-India + International",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-violet-400 flex-shrink-0" />
                      <span className="text-xs text-white/50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 bg-white/5 border border-white/8 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-200">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Bar */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/25 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Rigveda Ads Agency Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {[
                { label: "Privacy Policy",   href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Disclaimer",       href: "/disclaimer" },
              ].map(({ label, href }) => (
                <Link key={href} href={href}
                  className="text-white/25 hover:text-white/70 text-xs transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
