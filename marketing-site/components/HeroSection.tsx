"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const wordReveal = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function RevealWord({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        variants={wordReveal}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yOutline = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pt-32 md:pt-36"
    >
      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      {/* huge outlined backdrop word */}
      <motion.div
        style={{ y: yOutline }}
        aria-hidden
        className="pointer-events-none absolute -left-[4vw] top-[18vh] hidden select-none whitespace-nowrap font-anton text-[28vw] leading-none text-stroke opacity-[0.07] md:block"
      >
        TECHNO·BUZZLE
      </motion.div>

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-ink/60"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-electric" />
            Digital Marketing Agency — Dehradun
          </span>
          <span className="hidden md:inline">Est. 2019 — Based in Dehradun, India</span>
          <span className="font-mono text-[10px]">[ Issue 06 / Vol. 25 ]</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ opacity }}
            className="relative z-10 col-span-12 lg:col-span-7"
          >
            <h1 className="font-anton uppercase leading-[0.85] tracking-tightest text-[clamp(3.4rem,9vw,9.5rem)]">
              <span className="block">
                <RevealWord>WE&nbsp;BUILD</RevealWord>
              </span>
              <span className="block">
                <RevealWord className="text-electric">BRANDS</RevealWord>
              </span>
              <span className="block">
                <RevealWord>THAT&nbsp;</RevealWord>
                <RevealWord>
                  <span className="brush-highlight text-white">DOMINATE</span>
                </RevealWord>
              </span>
              <span className="block">
                <RevealWord className="text-stroke">THE</RevealWord>{" "}
                <RevealWord>DIGITAL</RevealWord>{" "}
                <RevealWord>WORLD.</RevealWord>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 max-w-xl text-balance text-base leading-relaxed text-ink/70 md:text-lg"
            >
              Technobuzzle is a{" "}
              <span className="text-ink">results-driven digital marketing agency</span>{" "}
              based in Dehradun. We blend creative campaigns with SEO, paid
              media and data to grow brands that scale — and dominate online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="#cta" variant="primary">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#services" variant="outline">
                Explore services
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* RIGHT — editorial image composition */}
          <div className="relative col-span-12 mt-10 lg:col-span-5 lg:mt-0">
            <motion.div
              style={{ y: yImage }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[520px]"
            >
              {/* huge blue circle */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric"
              />
              {/* Cyan glow */}
              <div className="absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full bg-cyan blur-3xl opacity-60" />
              {/* Image */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=900&q=80"
                  alt="Confident Indian marketing professional"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-electric/30 via-transparent to-transparent mix-blend-multiply" />
              </div>

              {/* Floating sticker — rotating badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -right-6 -top-6 hidden h-32 w-32 md:block"
              >
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <defs>
                    <path
                      id="circle"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <circle cx="100" cy="100" r="92" fill="#050505" />
                  <text fill="#F8F8F6" fontSize="14" letterSpacing="3" fontFamily="var(--font-bebas)">
                    <textPath href="#circle">
                      • TECHNOBUZZLE • SCROLL TO EXPLORE • SINCE 2019
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Floating sticker — Available */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-electric/70" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-electric" />
                </span>
                <span className="text-xs uppercase tracking-widest">
                  Booking Q3 — 2 spots left
                </span>
              </motion.div>

              {/* Brush stroke */}
              <svg
                viewBox="0 0 600 120"
                className="absolute -bottom-10 left-1/2 -z-10 h-24 w-[120%] -translate-x-1/2 opacity-80"
                aria-hidden
              >
                <path
                  d="M10 60 C 120 10, 240 110, 360 60 S 580 10, 590 60"
                  stroke="#2DD4FF"
                  strokeWidth="14"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-16 flex items-center justify-between gap-4 border-t border-ink/10 pt-6 text-xs uppercase tracking-widest text-ink/60"
        >
          <span className="inline-flex items-center gap-2">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Scroll
          </span>
          <span className="hidden md:inline">
            [ DEHRADUN · UTTARAKHAND · INDIA ]
          </span>
          <span className="font-mono">© {new Date().getFullYear()} Technobuzzle</span>
        </motion.div>
      </div>
    </section>
  );
}
