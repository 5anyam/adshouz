"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "14, 165, 233",
  className,
}: {
  children: React.ReactNode;
  radius?: number;
  /** rgb triplet, e.g. "14, 165, 233" */
  color?: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, rgba(${color}, 0.18), transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn(
        "group/spotlight relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-sky-500/40 dark:border-white/[0.08] dark:bg-[#071828]",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{ background, opacity: hovering ? 1 : 0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
