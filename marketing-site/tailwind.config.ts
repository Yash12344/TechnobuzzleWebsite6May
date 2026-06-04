import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F8F8F6",
        ink: "#050505",
        electric: "#003BFF",
        cyan: "#2DD4FF",
        highlight: "#D9FF00",
        soft: "#D9D9D9",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        anton: ["var(--font-anton)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
        "spin-slow": "spin 18s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-5%)" },
          "30%": { transform: "translate(3%,-2%)" },
          "50%": { transform: "translate(-1%,3%)" },
          "70%": { transform: "translate(2%,-4%)" },
          "90%": { transform: "translate(-3%,2%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
