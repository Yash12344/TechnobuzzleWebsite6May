"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Marketing AI", href: "#ai-lab" },
  { label: "Contact", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-[padding,backdrop-filter] duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1500px] items-center justify-between rounded-full border px-5 py-3 transition-all md:px-7",
            scrolled
              ? "border-ink/10 bg-bg/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : "border-transparent bg-transparent"
          )}
          style={{ marginLeft: "max(1rem, env(safe-area-inset-left))", marginRight: "max(1rem, env(safe-area-inset-right))" }}
        >
          <a
            href="#top"
            className="flex items-center gap-2"
            data-cursor="hover"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
              <span className="font-anton text-lg leading-none">T</span>
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-electric ring-2 ring-bg" />
            </span>
            <span className="font-anton text-xl tracking-tight md:text-2xl">
              technobuzzle<span className="text-electric">.</span>
            </span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-cursor="hover"
                    className="group relative rounded-full px-4 py-2 text-sm tracking-wide text-ink/70 transition-colors hover:text-ink"
                  >
                    <span>{l.label}</span>
                    <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-electric transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#cta"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm uppercase tracking-wider text-white transition-colors hover:bg-electric"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] bg-ink text-white md:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-anton text-2xl">technobuzzle<span className="text-electric">.</span></span>
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-7 w-7" />
              </button>
            </div>
            <ul className="flex flex-col gap-2 px-6 pb-6">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block border-b border-white/10 py-5 font-anton text-5xl tracking-tight"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
