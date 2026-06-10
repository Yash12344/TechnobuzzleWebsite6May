import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces an `out/` folder of plain HTML/CSS/JS
  // that can be uploaded to any static host (Hostinger, Netlify, etc.).
  output: "export",
  reactStrictMode: true,
  // This copy is self-contained; treat its own folder as the workspace root.
  outputFileTracingRoot: __dirname,
  // Trailing slashes make per-page hosting more forgiving on shared hosts.
  trailingSlash: true,
  images: {
    // Required for static export (no Next.js image optimizer at runtime).
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
