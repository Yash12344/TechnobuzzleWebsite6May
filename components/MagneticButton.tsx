"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  onClick?: () => void;
};

export default function MagneticButton({
  children,
  className,
  href,
  variant = "primary",
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const handleLeave = () => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-medium tracking-wide uppercase transition-colors will-change-transform";
  const variants = {
    primary: "bg-ink text-white hover:bg-electric",
    outline: "border border-ink text-ink hover:bg-ink hover:text-white",
    ghost: "text-ink hover:text-electric",
  };

  const inner = (
    <motion.span
      className="relative z-10 inline-flex items-center gap-2"
      whileHover={{ y: -1 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cn(base, variants[variant], "magnetic", className)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor="hover"
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={cn(base, variants[variant], "magnetic", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor="hover"
    >
      {inner}
    </button>
  );
}
