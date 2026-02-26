"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  Menu, X, Phone, Mail, ChevronDown,
  ArrowRight, Zap, Sun, Moon, MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE      = "+917840000618";
const PHONE_DISP = "+91 78400 00618";
const EMAIL      = "info@rigvedaadds.com";

type DropdownItem = { name: string; href: string; };
type NavItem = {
  name: string; href: string;
  hasDropdown?: boolean; dropdownItems?: DropdownItem[];
};

// ─── Theme Toggle ──────────────────────────────────────────────
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return (
    <div className="w-8 h-8 flex-shrink-0 rounded-lg border border-gray-200 dark:border-white/10" />
  );
  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 flex-shrink-0"
    >
      {isDark
        ? <Sun  className="w-4 h-4 text-yellow-400" />
        : <Moon className="w-4 h-4 text-violet-600" />
      }
    </button>
  );
}

// ─── Logo ──────────────────────────────────────────────────────
function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <div className="flex flex-col leading-none select-none">
      <span className={cn(
        "font-black tracking-tight pb-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400",
        size === "md" ? "text-[22px]" : "text-[18px]"
      )}>
        Rigveda
      </span>
      {/* ✅ solid white instead of white/40 */}
      <span className={cn(
        "font-semibold tracking-widest uppercase text-black/40 dark:text-white",
        size === "md" ? "text-[8px]" : "text-[7px]"
      )}>
        Ads Agency Pvt. Ltd.
      </span>
    </div>
  );
}

// ─── Nav Data ──────────────────────────────────────────────────
const mainNav: NavItem[] = [
  {
    name: "Google Ads", href: "/services/google-ads", hasDropdown: true,
    dropdownItems: [
      { name: "Search Ads",   href: "/services/google-search-ads" },
      { name: "Display Ads",  href: "/services/google-display-ads" },
      { name: "YouTube Ads",  href: "/services/youtube-ads" },
      { name: "Shopping Ads", href: "/services/shopping-ads" },
    ],
  },
  {
    name: "SEO", href: "/services/seo", hasDropdown: true,
    dropdownItems: [
      { name: "Local SEO",         href: "/services/local-seo" },
      { name: "Technical SEO",     href: "/services/technical-seo" },
      { name: "Content Marketing", href: "/services/content-marketing" },
    ],
  },
  {
    name: "Social Media", href: "/services/social-media-ads", hasDropdown: true,
    dropdownItems: [
      { name: "Facebook & Instagram", href: "/services/facebook-instagram-ads" },
      { name: "LinkedIn Ads",         href: "/services/linkedin-ads" },
    ],
  },
  {
    name: "Web Dev", href: "/services/website-development", hasDropdown: true,
    dropdownItems: [
      { name: "Next.js",       href: "/services/nextjs-development" },
      { name: "WordPress",     href: "/services/wordpress-development" },
      { name: "Landing Pages", href: "/services/landing-pages" },
    ],
  },
  { name: "Performance",   href: "/services/performance-marketing" },
  { name: "Brand Bidding", href: "/services/brand-bidding" },
];

const moreNav: NavItem[] = [
  { name: "About Us",     href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog",         href: "/blogs" },
  { name: "Contact",      href: "/contact" },
];

const mobileNav: NavItem[] = [{ name: "Home", href: "/" }, ...mainNav, ...moreNav];

// ─── Dropdown Panel ────────────────────────────────────────────
function DropdownPanel({ item, isOpen, align = "left", onClose }: {
  item: NavItem; isOpen: boolean; align?: "left" | "right"; onClose: () => void;
}) {
  return (
    <div className={cn(
      "absolute top-[calc(100%+8px)] min-w-[190px] z-50",
      align === "right" ? "right-0" : "left-0",
      "bg-white dark:bg-[#13131A]",
      "border border-gray-200 dark:border-white/10",
      "rounded-xl shadow-xl shadow-black/10 dark:shadow-black/60",
      "overflow-hidden transition-all duration-200",
      align === "right" ? "origin-top-right" : "origin-top-left",
      isOpen
        ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
        : "opacity-0 scale-[0.96] pointer-events-none -translate-y-1"
    )}>
      <div className="h-0.5 bg-gradient-to-r from-violet-500 to-purple-500" />
      {item.href && (
        <Link href={item.href} onClick={onClose}
          className="flex items-center gap-2 px-4 py-2.5 text-[12px] font-bold text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-colors border-b border-gray-100 dark:border-white/[0.06]">
          <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
          View All {item.name}
          <ArrowRight className="w-3 h-3 ml-auto" />
        </Link>
      )}
      {item.dropdownItems?.map((sub, si) => (
        <Link key={si} href={sub.href} onClick={onClose}
          // ✅ solid dark:text-white — no opacity
          className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all group">
          <span className="w-1 h-1 bg-gray-300 dark:bg-white/40 rounded-full group-hover:bg-violet-500 transition-colors flex-shrink-0" />
          {sub.name}
        </Link>
      ))}
    </div>
  );
}

const moreNavItem: NavItem = {
  name: "More", href: "",
  dropdownItems: moreNav.map((i) => ({ name: i.name, href: i.href })),
};

// ─── Navbar ────────────────────────────────────────────────────
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
      {/* ── Top bar ─────────────────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-[#08080C] border-b border-gray-200 dark:border-white/[0.06] py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-[11px] font-medium">
              <Phone className="w-3 h-3 flex-shrink-0" /> {PHONE_DISP}
            </a>
            <span className="w-px h-3 bg-gray-200 dark:bg-white/20" />
            <a href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 text-gray-500 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-[11px] font-medium">
              <Mail className="w-3 h-3 flex-shrink-0" /> {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            {/* ✅ solid white */}
            <span className="text-gray-400 dark:text-white text-[11px] font-medium tracking-wide">
              Google Certified Partner · 8+ Years of Performance Marketing
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ─────────────────────────────────────── */}
      <nav ref={dropdownRef} className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/40"
          : "bg-white dark:bg-[#0B0B0F] border-b border-gray-100 dark:border-white/[0.06]"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-4">

            <Link href="/" onClick={closeAll} className="flex-shrink-0">
              <Logo size="md" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {mainNav.map((item) => (
                <div key={item.name} className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}>
                  <Link href={item.href}
                    onClick={() => !item.hasDropdown && closeAll()}
                    className={cn(
                      "inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200 whitespace-nowrap",
                      activeDropdown === item.name
                        ? "text-gray-900 dark:text-white bg-black/5 dark:bg-white/10"
                        : "text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                    )}>
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        activeDropdown === item.name ? "rotate-180 text-violet-400" : "text-gray-400 dark:text-white/60"
                      )} />
                    )}
                  </Link>
                  {item.hasDropdown && (
                    <DropdownPanel item={item} isOpen={activeDropdown === item.name} align="left" onClose={closeAll} />
                  )}
                </div>
              ))}

              <div className="relative"
                onMouseEnter={() => handleMouseEnter("__more__")}
                onMouseLeave={handleMouseLeave}>
                <button aria-label="More pages"
                  className={cn(
                    "inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200",
                    activeDropdown === "__more__"
                      ? "text-gray-900 dark:text-white bg-black/5 dark:bg-white/10"
                      : "text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                  )}>
                  <MoreHorizontal className="w-4 h-4" />
                </button>
                <DropdownPanel item={moreNavItem} isOpen={activeDropdown === "__more__"} align="right" onClose={closeAll} />
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <ThemeToggle />
              <Link href="/contact"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[13px] font-bold px-4 py-2 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md shadow-violet-500/25 whitespace-nowrap">
                <Zap className="w-3.5 h-3.5" /> Free Audit
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button onClick={() => setIsOpen(!isOpen)}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/20 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                aria-label={isOpen ? "Close menu" : "Open menu"}>
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════
          MOBILE DRAWER — ALL TEXT SOLID WHITE IN DARK MODE
      ════════════════════════════════════════════════════════ */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}>
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeAll}
        />

        {/* Drawer panel */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-full max-w-[320px] flex flex-col",
          // ✅ SOLID backgrounds — no opacity tricks
          "bg-white dark:bg-[#0F0F15]",
          "border-l border-gray-100 dark:border-white/10",
          "shadow-2xl",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-white/10 flex-shrink-0 bg-white dark:bg-[#0F0F15]">
            <Link href="/" onClick={closeAll}>
              <Logo size="sm" />
            </Link>
            <button onClick={closeAll}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav list */}
          <div className="flex-1 overflow-y-auto bg-white dark:bg-[#0F0F15]">
            {mobileNav.map((item) => (
              <div key={item.name} className="border-b border-gray-100 dark:border-white/[0.06] last:border-0">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-colors">
                      {/* ✅ SOLID white text */}
                      <span className="text-[15px] font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </span>
                      <span className={cn(
                        "w-6 h-6 flex items-center justify-center rounded-full border text-base font-bold leading-none flex-shrink-0 transition-all duration-200",
                        mobileExpanded === item.name
                          ? "border-violet-500 text-violet-500 bg-violet-500/10 rotate-45"
                          : "border-gray-300 dark:border-white/30 text-gray-500 dark:text-white"
                      )}>+</span>
                    </button>

                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      "bg-gray-50 dark:bg-[#0A0A10]",
                      mobileExpanded === item.name ? "max-h-[400px]" : "max-h-0"
                    )}>
                      <Link href={item.href} onClick={closeAll}
                        className="flex items-center gap-3 px-6 py-3 border-b border-gray-100 dark:border-white/[0.05] hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                        {/* ✅ solid violet */}
                        <span className="text-[13px] font-semibold text-violet-600 dark:text-violet-400">
                          View All {item.name}
                        </span>
                        <ArrowRight className="w-3 h-3 ml-auto text-violet-500" />
                      </Link>

                      {item.dropdownItems?.map((sub, si) => (
                        <Link key={si} href={sub.href} onClick={closeAll}
                          className={cn(
                            "flex items-center gap-3 px-6 py-3 hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors",
                            si < (item.dropdownItems?.length ?? 0) - 1
                              ? "border-b border-gray-100 dark:border-white/[0.05]" : ""
                          )}>
                          <span className="w-1 h-1 bg-gray-300 dark:bg-white/40 rounded-full flex-shrink-0" />
                          {/* ✅ SOLID white text */}
                          <span className="text-[13px] text-gray-600 dark:text-white">
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} onClick={closeAll}
                    className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-colors">
                    {/* ✅ SOLID white text */}
                    <span className="text-[15px] font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="px-5 py-3 border-t border-gray-100 dark:border-white/10 flex items-center gap-4 bg-gray-50 dark:bg-[#0A0A10] flex-shrink-0">
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 text-gray-500 dark:text-white text-[11px] font-medium">
              <Phone className="w-3 h-3 text-violet-500" /> {PHONE_DISP}
            </a>
            <span className="w-px h-3 bg-gray-200 dark:bg-white/20" />
            <a href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 text-gray-500 dark:text-white text-[11px] font-medium truncate">
              <Mail className="w-3 h-3 text-violet-500 flex-shrink-0" /> {EMAIL}
            </a>
          </div>

          {/* Footer CTAs */}
          <div className="flex-shrink-0">
            <Link href="/contact" onClick={closeAll}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-4 text-sm hover:opacity-90 active:scale-[0.99] transition-all w-full">
              <Zap className="w-4 h-4" /> GET FREE AUDIT NOW
            </Link>
            <a href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3.5 text-sm font-bold transition-colors w-full">
              <Phone className="w-4 h-4" /> CALL US NOW
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
