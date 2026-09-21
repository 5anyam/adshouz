"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    // Duplicate the list so the marquee loops seamlessly.
    Array.from(scroller.children).forEach((child) => {
      scroller.appendChild(child.cloneNode(true));
    });

    container.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    container.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "30s" : speed === "normal" ? "50s" : "80s"
    );
    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[85vw] max-w-full shrink-0 rounded-2xl border border-gray-200 bg-white px-8 py-6 md:w-[420px] dark:border-white/[0.08] dark:bg-[#071828]"
          >
            <blockquote>
              <span className="relative z-20 text-sm font-normal leading-[1.7] text-gray-600 dark:text-white/60">
                &ldquo;{item.quote}&rdquo;
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-xs font-black text-white">
                  {item.name.charAt(0)}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-white/40">{item.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
