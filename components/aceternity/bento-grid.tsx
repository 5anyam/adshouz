"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className)}>
    {children}
  </div>
);

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => (
  <div
    className={cn(
      "group/bento row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5 dark:border-white/[0.08] dark:bg-[#071828] dark:shadow-none",
      className
    )}
  >
    {header}
    <div className="transition duration-200 group-hover/bento:translate-x-1">
      {icon}
      <div className="mb-2 mt-2 font-display text-base font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </div>
      <div className="text-sm leading-relaxed text-gray-500 dark:text-white/45">
        {description}
      </div>
    </div>
  </div>
);
