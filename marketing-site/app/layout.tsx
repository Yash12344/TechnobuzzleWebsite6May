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
  title: "Technobuzzle — Digital Marketing Agency in Dehradun",
  description:
    "Technobuzzle is a results-driven digital marketing agency in Dehradun. SEO, social media, performance marketing, web design and branding that help your brand dominate online.",
  keywords: [
    "Technobuzzle",
    "digital marketing agency",
    "digital marketing agency in Dehradun",
    "SEO Dehradun",
    "social media marketing",
    "performance marketing",
    "web design Dehradun",
  ],
  openGraph: {
    title: "Technobuzzle — Digital Marketing Agency in Dehradun",
    description:
      "A results-driven digital marketing agency in Dehradun. SEO, social, paid media, web and branding — engineered for measurable growth.",
    type: "website",
    locale: "en_IN",
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
