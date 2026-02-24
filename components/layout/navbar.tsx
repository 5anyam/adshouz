"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  Menu, X, Phone, Mail, ChevronDown,
  ArrowRight, Zap, Sun, Moon
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE      = "+917840000618";
const PHONE_DISP = "+91 78400 00618";
const EMAIL      = "info@rigvedaadds.com";

// ─── Theme Toggle ─────────────────────────────────────────────────────────────
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme(); // ← resolvedTheme, not theme
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8 flex-shrink-0" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-lg border border-black/10 dark:border-white/[0.12] hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 flex-shrink-0"
    >
      {/* JS conditional — not CSS dark: classes */}
      {isDark
        ? <Sun  className="w-4 h-4 text-yellow-400" />
        : <Moon className="w-4 h-4 text-violet-600" />
      }
    </button>
  );
} 

// ─── Text Logo ────────────────────────────────────────────────────────────────
function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <div className="flex flex-col leading-none select-none">
      <span className={cn(
        "font-black tracking-tight pb-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400",
        size === "md" ? "text-[22px]" : "text-[18px]"
      )}>
        Rigveda
      </span>
      <span className={cn(
        "font-semibold tracking-widest uppercase text-black/35 dark:text-white/40",
        size === "md" ? "text-[8px]" : "text-[7px]"
      )}>
        Ads Agency Pvt. Ltd.
      </span>
    </div>
  );
}

// ─── Navigation Data ──────────────────────────────────────────────────────────
const navigation = [
  { name: "Home",         href: "/" },
  { name: "About",        href: "/about" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        category: "Paid Advertising",
        items: [
          { name: "Google Search Ads",        href: "/services/google-search-ads" },
          { name: "Google Display Ads",       href: "/services/google-display-ads" },
          { name: "YouTube Advertising",      href: "/services/youtube-ads" },
          { name: "Google Shopping Ads",      href: "/services/shopping-ads" },
          { name: "Facebook & Instagram Ads", href: "/services/social-media-ads" },
          { name: "LinkedIn Advertising",     href: "/services/linkedin-ads" },
        ],
      },
      {
        category: "Organic Growth",
        items: [
          { name: "Search Engine Optimisation", href: "/services/seo" },
          { name: "Local SEO",                  href: "/services/local-seo" },
          { name: "Technical SEO Audit",        href: "/services/technical-seo" },
          { name: "Content Marketing",          href: "/services/content-marketing" },
        ],
      },
      {
        category: "Strategy & Analytics",
        items: [
          { name: "Brand Bidding Campaigns",      href: "/services/brand-bidding" },
          { name: "Performance Marketing",        href: "/services/performance-marketing" },
          { name: "Conversion Rate Optimisation", href: "/services/cro" },
          { name: "Analytics & Reporting",        href: "/services/analytics" },
        ],
      },
      {
        category: "International & Dev",
        items: [
          { name: "International Campaigns", href: "/services/international-campaigns" },
          { name: "US / UK Market Entry",    href: "/services/us-uk-campaigns" },
          { name: "Website Development",     href: "/services/website-development" },
          { name: "Landing Page Design",     href: "/services/landing-pages" },
        ],
      },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog",         href: "/blogs" },
  { name: "Contact",      href: "/contact" },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar() {
  const [isOpen, setIsOpen]                 = useState(false);
  const [isScrolled, setIsScrolled]         = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleMouseEnter = (name: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-[#08080C] border-b border-black/[0.06] dark:border-white/[0.06] py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            <div className="flex items-center gap-5">
              <a href={`tel:${PHONE}`}
                className="flex items-center gap-1.5 text-black/50 dark:text-white/60 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 text-[11px] font-medium">
                <Phone className="w-3 h-3 flex-shrink-0" />
                {PHONE_DISP}
              </a>
              <span className="w-px h-3 bg-black/10 dark:bg-white/10" />
              <a href={`mailto:${EMAIL}`}
                className="flex items-center gap-1.5 text-black/50 dark:text-white/60 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 text-[11px] font-medium">
                <Mail className="w-3 h-3 flex-shrink-0" />
                {EMAIL}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-black/40 dark:text-white/45 text-[11px] font-medium tracking-wide">
                Google Certified Partner · 8+ Years of Performance Marketing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ─────────────────────────────────────────── */}
      <nav
        ref={dropdownRef}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/85 dark:bg-[#0B0B0F]/85 backdrop-blur-xl border-b border-black/[0.07] dark:border-white/[0.07] shadow-xl shadow-black/10 dark:shadow-black/40"
            : "bg-white dark:bg-[#0B0B0F] border-b border-black/[0.06] dark:border-white/[0.06]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" onClick={closeAll} className="flex-shrink-0">
              <Logo size="md" />
            </Link>

            {/* Desktop Nav links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={item.href}
                    onClick={() => !item.hasDropdown && closeAll()}
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200",
                      activeDropdown === item.name
                        ? "text-gray-900 dark:text-white bg-black/5 dark:bg-white/8"
                        : "text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === item.name
                          ? "rotate-180 text-violet-500"
                          : "text-black/30 dark:text-white/40"
                      )} />
                    )}
                  </Link>

                  {/* Mega Dropdown */}
                  {item.hasDropdown && (
                    <div className={cn(
                      "absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-[840px]",
                      "bg-white/98 dark:bg-[#0F0F15]/98 backdrop-blur-2xl",
                      "border border-black/[0.08] dark:border-white/[0.09]",
                      "rounded-2xl shadow-2xl shadow-black/15 dark:shadow-black/80",
                      "overflow-hidden transition-all duration-200 origin-top",
                      activeDropdown === item.name
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-[0.97] pointer-events-none"
                    )}>
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

                      <div className="p-5 grid grid-cols-4 gap-5">
                        {item.dropdownItems?.map((cat, ci) => (
                          <div key={ci}>
                            <p className="text-[10px] font-bold text-violet-500 dark:text-violet-400 uppercase tracking-widest mb-2.5 pb-2 border-b border-black/[0.06] dark:border-white/[0.07]">
                              {cat.category}
                            </p>
                            <ul className="space-y-0.5">
                              {cat.items.map((sub, si) => (
                                <li key={si}>
                                  <Link
                                    href={sub.href}
                                    onClick={closeAll}
                                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[13px] text-gray-500 dark:text-white/65 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150 group"
                                  >
                                    <span className="w-1 h-1 bg-violet-400/50 rounded-full group-hover:bg-violet-500 dark:group-hover:bg-violet-400 transition-colors flex-shrink-0" />
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-black/[0.05] dark:border-white/[0.06] bg-violet-500/[0.04] dark:bg-violet-500/[0.06] px-5 py-3.5 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[13px] font-semibold text-gray-900 dark:text-white">
                            Not sure which service you need?
                          </p>
                          <p className="text-[11px] text-gray-500 dark:text-white/50 mt-0.5">
                            Free audit — we will recommend the right strategy for your business.
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          onClick={closeAll}
                          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[13px] font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all flex-shrink-0 shadow-lg shadow-violet-500/20"
                        >
                          Free Audit <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA + Toggle */}
            <div className="hidden lg:flex items-center gap-2">
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center gap-1.5 text-gray-600 dark:text-white/65 hover:text-gray-900 dark:hover:text-white text-[13px] font-medium transition-colors duration-200 px-2 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
                <Phone className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
                {PHONE_DISP}
              </a>

              {/* ── Theme toggle — desktop */}
              <ThemeToggle />

              <Link href="/contact"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[13px] font-bold px-4 py-2 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md shadow-violet-500/25">
                <Zap className="w-3.5 h-3.5" /> Free Audit
              </Link>
            </div>

            {/* Mobile: Toggle + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* ── Theme toggle — mobile */}
              <ThemeToggle />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-black/[0.12] dark:border-white/[0.12] text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:border-black/25 dark:hover:border-white/25 transition-all"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ────────────────────────────────────────── */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden transition-all duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-black/75 dark:bg-black/75 backdrop-blur-sm" onClick={closeAll} />

        <div className={cn(
          "absolute top-0 right-0 h-full w-[300px] max-w-[90vw]",
          "bg-white dark:bg-[#0F0F15]",
          "border-l border-black/[0.08] dark:border-white/[0.08]",
          "flex flex-col transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>

          {/* Drawer header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-black/[0.07] dark:border-white/[0.07]">
            <Link href="/" onClick={closeAll}>
              <Logo size="sm" />
            </Link>
            <button
              onClick={closeAll}
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-black/[0.1] dark:border-white/[0.1] text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Contact strip */}
          <div className="px-4 py-2.5 bg-black/[0.02] dark:bg-white/[0.03] border-b border-black/[0.05] dark:border-white/[0.05] flex items-center gap-4">
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 text-gray-500 dark:text-white/65 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-[11px] font-medium">
              <Phone className="w-3 h-3 text-violet-500 dark:text-violet-400" />
              {PHONE_DISP}
            </a>
            <a href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 text-gray-500 dark:text-white/65 hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-[11px] font-medium truncate">
              <Mail className="w-3 h-3 text-violet-500 dark:text-violet-400 flex-shrink-0" />
              {EMAIL}
            </a>
          </div>

          {/* Nav items */}
          <div className="flex-1 overflow-y-auto py-2 px-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-700 dark:text-white/75 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all text-sm font-medium"
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        mobileExpanded === item.name
                          ? "rotate-180 text-violet-500"
                          : "text-black/25 dark:text-white/35"
                      )} />
                    </button>

                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      mobileExpanded === item.name ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="ml-2 pl-3 border-l border-violet-400/30 dark:border-violet-500/25 py-1.5 space-y-3 mb-1">
                        {item.dropdownItems?.map((cat, ci) => (
                          <div key={ci}>
                            <p className="text-[9px] font-bold text-violet-500 dark:text-violet-400 uppercase tracking-widest mb-1.5 px-2">
                              {cat.category}
                            </p>
                            {cat.items.map((sub, si) => (
                              <Link key={si} href={sub.href} onClick={closeAll}
                                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                                <span className="w-1 h-1 bg-violet-400/50 rounded-full flex-shrink-0" />
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={item.href} onClick={closeAll}
                    className="flex items-center px-3 py-2.5 rounded-xl text-gray-700 dark:text-white/75 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all text-sm font-medium">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Footer CTAs */}
          <div className="p-3 border-t border-black/[0.07] dark:border-white/[0.07] space-y-2">
            <Link href="/contact" onClick={closeAll}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-3 rounded-xl text-sm hover:opacity-90 transition-all w-full shadow-lg shadow-violet-500/20">
              <Zap className="w-4 h-4" /> Get Free Audit
            </Link>
            <a href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 border border-black/[0.12] dark:border-white/[0.12] text-gray-600 dark:text-white/75 hover:text-gray-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 py-2.5 rounded-xl text-sm font-medium transition-all w-full">
              <Phone className="w-4 h-4 text-violet-500 dark:text-violet-400" /> {PHONE_DISP}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
