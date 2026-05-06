"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    name: "Ganga Realty",
    sector: "Real Estate",
    metric: "+412%",
    metricLabel: "Qualified leads",
    tags: ["Brand", "Performance", "Web"],
    color: "#003BFF",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Parul University",
    sector: "Education",
    metric: "+1.2M",
    metricLabel: "Reach / quarter",
    tags: ["Content", "Social", "AI"],
    color: "#2DD4FF",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Max Healthcare",
    sector: "Healthcare",
    metric: "8.4×",
    metricLabel: "Patient inquiries",
    tags: ["Strategy", "Web", "Ads"],
    color: "#050505",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Eminent",
    sector: "Lifestyle",
    metric: "67%",
    metricLabel: "ROAS uplift",
    tags: ["Branding", "Production"],
    color: "#D9FF00",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll: translate -75% over scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative bg-ink text-bg"
      style={{ height: "320vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col px-5 pt-24 md:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-bg/55">
                <span className="h-px w-8 bg-electric" />
                [ Selected Work ]
              </span>
              <h2 className="mt-4 font-anton uppercase leading-[0.9] tracking-tightest text-[clamp(2.5rem,7vw,7rem)]">
                Real results. <br />
                <span className="text-stroke-white">Real impact.</span>
              </h2>
            </div>
            <p className="max-w-md text-bg/60">
              Brands we&apos;ve scaled into category leaders — across real
              estate, healthcare, education and lifestyle.
            </p>
          </div>
        </div>

        <motion.div
          style={{ x }}
          className="mt-12 flex flex-1 items-center gap-6 pl-5 md:gap-8 md:pl-8 lg:pl-12"
        >
          {PROJECTS.map((p, i) => (
            <article
              key={p.name}
              className="group relative h-[62vh] w-[80vw] shrink-0 overflow-hidden rounded-2xl bg-bg/5 md:w-[55vw] lg:w-[42vw]"
              data-cursor="hover"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 80vw, 42vw"
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

              {/* top meta */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 md:p-8">
                <span className="font-mono text-[11px] uppercase tracking-widest text-bg/80">
                  Case · 0{i + 1}
                </span>
                <span
                  className="rounded-full px-3 py-1 text-[11px] uppercase tracking-widest"
                  style={{
                    background: p.color,
                    color: p.color === "#D9FF00" ? "#050505" : "#fff",
                  }}
                >
                  {p.sector}
                </span>
              </div>

              {/* bottom content */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <h3 className="font-anton text-4xl uppercase leading-none tracking-tight md:text-6xl">
                    {p.name}
                  </h3>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-bg/40 transition-all group-hover:bg-electric group-hover:border-electric">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex items-end justify-between border-t border-bg/15 pt-4">
                  <div>
                    <div
                      className="font-anton text-3xl md:text-5xl"
                      style={{ color: p.color === "#050505" ? "#2DD4FF" : p.color }}
                    >
                      {p.metric}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-bg/55">
                      {p.metricLabel}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-bg/25 px-3 py-1 text-[11px] uppercase tracking-widest text-bg/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* End slate */}
          <div className="flex h-[62vh] w-[80vw] shrink-0 flex-col justify-between rounded-2xl border border-bg/15 bg-electric p-8 md:w-[42vw]">
            <span className="font-mono text-[11px] uppercase tracking-widest text-bg/85">
              [ The next case study ]
            </span>
            <div>
              <h3 className="font-anton text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
                Could be <br /> yours.
              </h3>
              <a
                href="#cta"
                data-cursor="hover"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 text-sm uppercase tracking-widest text-ink"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* progress bar */}
        <div className="mx-auto mb-8 mt-8 flex w-full max-w-[1500px] items-center gap-4 px-5 md:px-8 lg:px-12">
          <span className="font-mono text-[11px] uppercase tracking-widest text-bg/60">
            Drag · Scroll
          </span>
          <div className="relative h-px flex-1 bg-bg/15">
            <motion.div
              className="absolute inset-y-0 left-0 h-px bg-electric"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
