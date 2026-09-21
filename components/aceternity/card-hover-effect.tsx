"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link + idx}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-sky-500/10 dark:bg-sky-400/10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div
            className={cn(
              "relative z-20 h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-colors duration-300",
              "group-hover:border-sky-500/50 dark:border-white/[0.08] dark:bg-[#071828]"
            )}
          >
            {item.icon && (
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition-transform duration-300 group-hover:scale-110 dark:text-sky-400">
                {item.icon}
              </div>
            )}
            <h3 className="mb-2 font-display text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-white/45">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
