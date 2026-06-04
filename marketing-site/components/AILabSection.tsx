"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, UserSearch, Workflow } from "lucide-react";

const CARDS = [
  {
    title: "AI Content Engine",
    desc: "Generative pipelines for performance-grade creative at scale.",
    Icon: Brain,
  },
  {
    title: "AI Analytics",
    desc: "Insight agents that read attribution and surface what matters.",
    Icon: BarChart3,
  },
  {
    title: "AI Lead Generation",
    desc: "Outbound systems with multi-channel personalization built in.",
    Icon: UserSearch,
  },
  {
    title: "AI Automation",
    desc: "Operational workflows and agents that compress time-to-impact.",
    Icon: Workflow,
  },
];

function HoloFace() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Concentric rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-bg/15"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-bg/15"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-14 rounded-full border border-bg/20"
      />

      {/* Glow core */}
      <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-electric via-cyan to-electric blur-3xl opacity-70" />

      {/* SVG face wireframe */}
      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0"
        aria-hidden
      >
        <defs>
          <linearGradient id="grad" x1="0" x2="1">
            <stop offset="0" stopColor="#2DD4FF" />
            <stop offset="1" stopColor="#003BFF" />
          </linearGradient>
          <radialGradient id="r" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#2DD4FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {/* Face silhouette */}
        <path
          d="M150 60 C 95 60 70 110 70 165 C 70 215 105 245 150 245 C 195 245 230 215 230 165 C 230 110 205 60 150 60 Z"
          stroke="url(#grad)"
          strokeWidth="1.2"
          fill="url(#r)"
          opacity="0.85"
        />
        {/* Vertical mesh lines */}
        {[80, 110, 140, 170, 200, 230].map((x, i) => (
          <motion.path
            key={i}
            d={`M ${x} 70 Q ${x + (i % 2 ? 5 : -5)} 150, ${x} 240`}
            stroke="#2DD4FF"
            strokeWidth="0.6"
            fill="none"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.05 * i }}
          />
        ))}
        {/* Horizontal mesh lines */}
        {[100, 130, 160, 190, 220].map((y, i) => (
          <motion.path
            key={`h${i}`}
            d={`M 70 ${y} Q 150 ${y + (i % 2 ? 6 : -6)}, 230 ${y}`}
            stroke="#003BFF"
            strokeWidth="0.6"
            fill="none"
            opacity="0.45"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.7 + 0.05 * i }}
          />
        ))}
        {/* Eye nodes */}
        <circle cx="120" cy="150" r="4" fill="#fff" />
        <circle cx="180" cy="150" r="4" fill="#fff" />
      </svg>

      {/* Particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan"
          style={{
            left: `${10 + (i * 53) % 80}%`,
            top: `${15 + (i * 37) % 70}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export default function AILabSection() {
  return (
    <section
      id="ai-lab"
      className="relative isolate overflow-hidden bg-ink py-28 text-bg md:py-36"
    >
      {/* Glow grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(45,212,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,212,255,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      />
      {/* Soft electric haze */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[40rem] w-[40rem] rounded-full bg-electric/30 blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan/20 blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          {/* Left — face */}
          <div className="col-span-12 lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-bg/55">
              <span className="h-px w-8 bg-cyan" />
              [ Marketing Intelligence ]
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-4 font-anton uppercase leading-[0.9] tracking-tightest text-[clamp(2.5rem,6vw,6rem)]"
            >
              Data &amp; AI <br />
              that powers <br />
              <span className="text-stroke-white">your growth.</span>
            </motion.h2>

            <div className="mt-12">
              <HoloFace />
            </div>
          </div>

          {/* Right — cards */}
          <div className="col-span-12 lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md text-bg/65"
            >
              We pair every campaign with data and AI — from content to
              targeting to reporting. The result: marketing that learns, adapts
              and out-performs the competition.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CARDS.map((c, i) => {
                const Icon = c.Icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-2xl border border-bg/10 bg-bg/[0.03] p-6 backdrop-blur-md transition-colors hover:border-cyan/40"
                    data-cursor="hover"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-electric/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <Icon className="h-7 w-7 text-cyan" />
                    <h3 className="mt-6 font-anton text-2xl uppercase tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm text-bg/65">{c.desc}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-bg/10 pt-4 text-[11px] uppercase tracking-widest text-bg/55">
                      <span>System / Live</span>
                      <span className="font-mono text-cyan">v3.{i + 1}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* status line */}
            <div className="mt-8 flex items-center gap-3 rounded-full border border-bg/15 bg-bg/[0.04] px-4 py-3 text-[11px] uppercase tracking-widest text-bg/65 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-cyan/70" />
                <span className="relative h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span>AI Systems · Operational</span>
              <span className="ml-auto font-mono">99.98% uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
