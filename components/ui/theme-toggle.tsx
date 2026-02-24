"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme(); // ← resolvedTheme, not theme
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
  
    if (!mounted) return <div className="w-8 h-8 flex-shrink-0" />;
  
    const isDark = resolvedTheme === "dark"; // ← always "light" or "dark", never undefined
  
    return (
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-200 flex-shrink-0",
          "dark:border-white/[0.12] border-black/10",
          "dark:hover:bg-white/5 hover:bg-black/5",
          "dark:hover:border-white/25 hover:border-black/20"
        )}
      >
        {isDark
          ? <Sun  className="w-4 h-4 text-yellow-400" />
          : <Moon className="w-4 h-4 text-violet-600" />
        }
      </button>
    );
  }
  