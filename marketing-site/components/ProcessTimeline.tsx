"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "Audits, immersion sessions and category teardown.",
    deliver: ["Brand audit", "Market mapping", "Insight doc"],
  },
  {
    n: "02",
    title: "Strategize",
    desc: "Positioning, narrative architecture and growth plan.",
    deliver: ["Strategy", "Voice & tone", "KPI tree"],
  },
  {
    n: "03",
    title: "Create",
    desc: "Identity, content systems, and product design.",
    deliver: ["Identity", "Content kits", "Site / Product"],
  },
  {
    n: "04",
    title: "Execute",
    desc: "Production, launch, and full-funnel deployment.",
    deliver: ["Production", "Paid media", "Activation"],
  },
  {
    n: "05",
    title: "Grow",
    desc: "Compounding loops powered by data and AI.",
    deliver: ["Iteration", "AI agents", "Reporting"],
  },
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      ref={ref}
      className="relative overflow-hidden bg-bg py-28 md:py-36"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink/60">
              <span className="h-px w-8 bg-electric" />
              [ The Method ]
            </span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8 }}
              className="font-anton uppercase leading-[0.9] tracking-tightest text-[clamp(2.5rem,6vw,6rem)]"
            >
              A process built <br />
              for <span className="text-electric">results.</span>
            </motion.h2>
          </div>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="relative mt-24 hidden md:block">
          <div className="absolute left-0 right-0 top-[68px] h-px bg-ink/10" />
          <motion.div
            style={{ scaleX: lineScale, transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[68px] h-px bg-electric"
          />

          <div className="grid grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="relative"
              >
                <div className="font-anton text-[5.5vw] leading-none tracking-tight text-ink/85">
                  {s.n}
                </div>
                {/* dot */}
                <div className="relative mt-2 flex h-12 items-center">
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-electric">
                    <span className="absolute inset-0 animate-ping rounded-full bg-electric/60" />
                  </span>
                </div>
                <h3 className="font-anton text-3xl uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[18ch] text-sm text-ink/65">
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-1.5 text-[11px] uppercase tracking-widest text-ink/55">
                  {s.deliver.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="h-px w-3 bg-ink/40" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="mt-16 grid gap-8 md:hidden">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative border-l-2 border-electric pl-6"
            >
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-electric" />
              <div className="font-anton text-6xl text-ink/85">{s.n}</div>
              <h3 className="font-anton text-3xl uppercase">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/65">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
