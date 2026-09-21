"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const measure = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) setHeight(rect.height);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full font-sans">
      <div ref={ref} className="relative mx-auto max-w-7xl pb-16">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-24">
            <div className="sticky top-32 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 md:left-3 dark:bg-[#071828]">
                <div className="h-4 w-4 rounded-full border border-sky-500/40 bg-sky-500/20 p-2" />
              </div>
              <h3 className="hidden font-display text-xl font-black text-gray-400 md:block md:pl-20 md:text-4xl dark:text-white/25">
                {item.title}
              </h3>
            </div>
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left font-display text-2xl font-black text-gray-400 md:hidden dark:text-white/25">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.08)_10%,rgba(0,0,0,0.08)_90%,transparent_100%)] md:left-8 dark:bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.08)_10%,rgba(255,255,255,0.08)_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-sky-500 via-cyan-400 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
