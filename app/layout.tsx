import type { Metadata } from "next";
import { Bebas_Neue, Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technobuzzle — AI-Powered Creative Growth Agency",
  description:
    "Technobuzzle builds brands that dominate the digital world. Branding, content, performance marketing, and AI-driven growth — engineered for cinematic outcomes.",
  keywords: [
    "Technobuzzle",
    "creative agency",
    "AI marketing",
    "branding",
    "performance marketing",
    "content creation",
  ],
  openGraph: {
    title: "Technobuzzle — AI-Powered Creative Growth Agency",
    description:
      "We build brands that dominate the digital world. Cinematic creative + AI-driven growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${anton.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <SmoothScroll />
        <Cursor />
        <div className="noise-overlay" aria-hidden />
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
