"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "X", label: "Average Growth" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative border-y border-ink/10 bg-bg">
      {/* marquee tag strip */}
      <div className="overflow-hidden border-b border-ink/10 py-4">
        <div className="marquee-track animate-marquee whitespace-nowrap font-anton text-xl uppercase tracking-wide text-ink/60">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              {[
                "Branding",
                "AI Automation",
                "Performance Marketing",
                "Content Production",
                "Web Development",
                "Social Strategy",
                "Creative Direction",
                "Growth Engineering",
              ].map((t, j) => (
                <span key={j} className="flex items-center gap-10">
                  <span>{t}</span>
                  <span className="text-electric">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] grid-cols-2 divide-x divide-y divide-ink/10 md:grid-cols-4 md:divide-y-0">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group relative px-6 py-12 md:px-10 md:py-16"
          >
            <span className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 md:left-10 md:top-10">
              0{i + 1} /
            </span>
            <div className="font-anton text-6xl leading-none tracking-tight md:text-7xl lg:text-8xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-4 text-sm uppercase tracking-widest text-ink/65">
              {stat.label}
            </div>
            <div className="mt-6 h-px w-12 bg-ink/30 transition-all duration-500 group-hover:w-full group-hover:bg-electric" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
