"use client";

import React from "react";
import { cn } from "@/lib/utils";

/** Subtle dot grid used as a section backdrop. */
export const DotBackground = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 [background-size:22px_22px]",
      "[background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)]",
      "dark:[background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)]",
      className
    )}
  />
);

/** Subtle line grid used behind the hero. */
export const GridBackground = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 [background-size:56px_56px]",
      "[background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)]",
      className
    )}
  />
);
