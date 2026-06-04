"use client";

import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  Film,
  Code2,
  TrendingUp,
  Brush,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    n: "01",
    title: "Search Engine Optimization",
    desc: "Rank higher on Google with technical, on-page and local SEO that compounds.",
    Icon: Search,
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80",
    tags: ["Local SEO", "Technical", "Content"],
  },
  {
    n: "02",
    title: "Social Media Marketing",
    desc: "Always-on social ecosystems engineered for community, reach and sales.",
    Icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80",
    tags: ["Strategy", "Reels", "Community"],
  },
  {
    n: "03",
    title: "Performance Marketing",
    desc: "Full-funnel Google & Meta ads with creative testing as the growth engine.",
    Icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    tags: ["Google Ads", "Meta Ads", "PPC"],
  },
  {
    n: "04",
    title: "Web Design & Development",
    desc: "Fast, conversion-focused websites and landing pages that turn clicks into clients.",
    Icon: Code2,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    tags: ["Next.js", "WordPress", "Shopify"],
  },
  {
    n: "05",
    title: "Content & Creative",
    desc: "Shoots, editorial design and motion that move the metric, not just the eye.",
    Icon: Film,
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    tags: ["Film", "Photo", "Design"],
  },
  {
    n: "06",
    title: "Branding & Strategy",
    desc: "Positioning, identity systems and brand books built to compound over time.",
    Icon: Brush,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=900&q=80",
    tags: ["Identity", "Naming", "Guidelines"],
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative isolate bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink/60"
            >
              <span className="h-px w-8 bg-electric" />
              [ Capabilities ]
            </motion.span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-anton uppercase leading-[0.9] tracking-tightest text-[clamp(2.5rem,6vw,6rem)]"
            >
              Everything your <br />
              brand needs <br />
              <span className="text-stroke">to grow.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 max-w-xl text-ink/65"
            >
              Six in-house craft disciplines, one velocity. We plug in where
              you need us — or run the entire operating system for your brand.
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.Icon;
            const active = hovered === i;
            return (
              <motion.article
                key={s.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
                className={cn(
                  "group relative isolate overflow-hidden bg-bg p-8 transition-colors duration-500 md:p-10",
                  active && "bg-ink text-bg"
                )}
                data-cursor="hover"
              >
                {/* Image preview overlay on hover */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500",
                    active ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover scale-105 transition-transform duration-700 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-ink/70" />
                </div>

                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "font-mono text-xs tracking-widest",
                      active ? "text-cyan" : "text-ink/40"
                    )}
                  >
                    [ {s.n} ]
                  </span>
                  <Icon
                    className={cn(
                      "h-7 w-7 transition-transform duration-500",
                      active ? "text-cyan" : "text-ink/70",
                      "group-hover:rotate-6"
                    )}
                  />
                </div>

                <h3
                  className={cn(
                    "mt-14 font-anton text-3xl uppercase tracking-tight md:text-4xl"
                  )}
                >
                  {s.title}
                </h3>

                <p
                  className={cn(
                    "mt-4 max-w-md text-sm leading-relaxed",
                    active ? "text-bg/75" : "text-ink/65"
                  )}
                >
                  {s.desc}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={cn(
                        "rounded-full border px-3 py-1 text-[11px] uppercase tracking-widest",
                        active
                          ? "border-bg/30 text-bg/80"
                          : "border-ink/15 text-ink/65"
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-between border-t pt-6 transition-colors"
                  style={{
                    borderColor: active
                      ? "rgba(248,248,246,0.18)"
                      : "rgba(5,5,5,0.1)",
                  }}
                >
                  <span className="text-xs uppercase tracking-widest opacity-70">
                    Explore
                  </span>
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-full transition-all",
                      active
                        ? "bg-electric text-white"
                        : "bg-ink text-bg group-hover:bg-electric"
                    )}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Glow border */}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-none ring-0 transition-all duration-500",
                    active && "ring-1 ring-cyan/40"
                  )}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
