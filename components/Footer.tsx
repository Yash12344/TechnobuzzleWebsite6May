"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";

const SERVICES = [
  "Branding & Strategy",
  "Social Media",
  "Content Production",
  "Web Development",
  "Performance Marketing",
  "AI Automation",
];
const LINKS = ["Work", "Process", "AI Lab", "Studio", "Careers", "Contact"];
const SOCIAL = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "X" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bg">
      <div className="mx-auto max-w-[1500px] px-5 pt-20 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-10 border-b border-bg/10 pb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-electric text-bg">
                <span className="font-anton text-xl">T</span>
              </span>
              <span className="font-anton text-2xl">technobuzzle.</span>
            </div>
            <p className="mt-6 max-w-md text-bg/65">
              An AI-powered creative growth agency engineering brands that
              dominate the digital world.
            </p>

            <a
              href="mailto:hello@technobuzzle.com"
              data-cursor="hover"
              className="mt-8 inline-flex items-center gap-3 text-3xl font-anton uppercase tracking-tight md:text-5xl"
            >
              <span className="scribble-underline">hello@technobuzzle.com</span>
              <ArrowUpRight className="h-7 w-7 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-[11px] uppercase tracking-widest text-bg/55">
              Services
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    data-cursor="hover"
                    className="text-bg/85 transition-colors hover:text-cyan"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-[11px] uppercase tracking-widest text-bg/55">
              Studio
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    data-cursor="hover"
                    className="text-bg/85 transition-colors hover:text-cyan"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="text-[11px] uppercase tracking-widest text-bg/55">
              Studios
            </div>
            <ul className="mt-5 space-y-3 text-sm text-bg/85">
              <li>
                <span className="block font-anton text-lg uppercase">Dehradun</span>
                72/4, Rajpur Rd, India
              </li>
              <li>
                <span className="block font-anton text-lg uppercase">Mumbai</span>
                BKC, Mumbai, India
              </li>
              <li>
                <span className="block font-anton text-lg uppercase">Dubai</span>
                DIFC, Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        {/* Big wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9 }}
          aria-hidden
          className="select-none py-12 text-center"
        >
          <h3 className="font-anton uppercase leading-none tracking-tightest text-[clamp(4rem,17vw,17rem)]">
            <span className="text-stroke-white">techno</span>
            <span className="text-electric">buzzle</span>
          </h3>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-bg/10 py-8 text-[11px] uppercase tracking-widest text-bg/55">
          <span>© {new Date().getFullYear()} Technobuzzle. All rights reserved.</span>
          <div className="flex items-center gap-4">
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                data-cursor="hover"
                className="grid h-9 w-9 place-items-center rounded-full border border-bg/15 transition-colors hover:border-cyan hover:text-cyan"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cyan">Privacy</a>
            <a href="#" className="hover:text-cyan">Terms</a>
            <a href="#" className="hover:text-cyan">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
