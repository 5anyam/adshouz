"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: window.location.href });
      } catch {
        // user cancelled — do nothing
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 border border-gray-200 dark:border-white/[0.1] text-gray-600 dark:text-white/60 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-500" />
          Link Copied!
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Share Article
        </>
      )}
    </button>
  );
}
