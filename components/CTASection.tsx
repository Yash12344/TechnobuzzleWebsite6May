"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function CTASection() {
  return (
    <section id="cta" className="relative bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-electric p-8 text-bg md:p-16">
          {/* glowing accents */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan opacity-40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-highlight/40 opacity-50 blur-3xl"
          />

          {/* outline backdrop word */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 right-0 select-none whitespace-nowrap font-anton text-[18vw] leading-none opacity-10"
            style={{ WebkitTextStroke: "1px #fff", color: "transparent" }}
          >
            LET&apos;S BUILD
          </div>

          <div className="relative grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-bg/80">
                <span className="h-px w-8 bg-bg/80" />
                [ Let&apos;s collaborate ]
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8 }}
                className="mt-6 font-anton uppercase leading-[0.88] tracking-tightest text-[clamp(2.6rem,7vw,7.5rem)]"
              >
                Let&apos;s build <br />
                something <br />
                <span className="text-stroke-white">amazing</span> together!
              </motion.h2>

              <p className="mt-6 max-w-md text-bg/80">
                Whether you&apos;re launching, scaling or rewriting the rules —
                tell us where you want to go. We&apos;ll engineer the way.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <MagneticButton
                  href="mailto:hello@technobuzzle.com"
                  className="bg-bg text-ink hover:bg-ink hover:text-bg"
                >
                  Book a call <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  href="#case-studies"
                  className="border border-bg/40 text-bg hover:bg-bg hover:text-ink"
                  variant="ghost"
                >
                  See selected work
                </MagneticButton>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-bg/20 pt-6 md:grid-cols-3">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-bg/65">
                    Email
                  </div>
                  <div className="mt-1 font-anton text-xl">
                    hello@technobuzzle.com
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-bg/65">
                    Phone
                  </div>
                  <div className="mt-1 font-anton text-xl">+91 99999 00000</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-bg/65">
                    Studio
                  </div>
                  <div className="mt-1 font-anton text-xl">Dehradun · IN</div>
                </div>
              </div>
            </div>

            <div className="relative col-span-12 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80"
                  alt="Editorial CTA"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-electric/30 mix-blend-multiply" />
                {/* corner ticks */}
                <span className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-bg" />
                <span className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-bg" />
                <span className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-bg" />
                <span className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-bg" />
              </motion.div>

              {/* spinning badge */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute -left-8 -top-8 hidden h-32 w-32 md:block"
              >
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <defs>
                    <path
                      id="cta-circle"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <circle cx="100" cy="100" r="92" fill="#050505" />
                  <text fill="#F8F8F6" fontSize="14" letterSpacing="3" fontFamily="var(--font-bebas)">
                    <textPath href="#cta-circle">
                      • LET&apos;S TALK • LET&apos;S BUILD • LET&apos;S DOMINATE •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
