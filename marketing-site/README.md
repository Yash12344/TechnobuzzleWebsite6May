# Technobuzzle — Digital Marketing Agency (Dehradun) · Editable Copy

This is a **standalone copy** of the Technobuzzle website, rebranded as a
**digital marketing agency based in Dehradun**. Edit everything here without
touching the original site in the repository root.

> The original creative-tech version still lives in the repo root
> (`../app`, `../components`). This folder is fully independent — its own
> `package.json`, config and components.

## Run this copy locally

```bash
cd marketing-site
npm install
npm run dev      # http://localhost:3000
```

(If port 3000 is in use by the original site, run `npm run dev -- -p 3001`.)

Other scripts: `npm run build`, `npm run start`, `npm run lint`,
`npm run typecheck`.

## What changed vs. the original

- **Positioning:** "AI-Powered Creative Growth Agency" → **"Digital Marketing
  Agency in Dehradun"** (hero, metadata, footer, intro copy).
- **Services:** SEO, Social Media Marketing, Performance Marketing,
  Web Design & Development, Content & Creative, Branding & Strategy.
- **Location:** single Dehradun studio everywhere (hero strip, footer,
  CTA) — Mumbai / Dubai / NYC removed.
- **Contact:** `teamtechnobuzzle@gmail.com` + Dehradun address in footer & CTA.
- **AI section:** reframed as "Marketing Intelligence — Data & AI that powers
  your growth."
- **People images:** hero & CTA portraits now use Indian-people photos.

## Where to edit common things

| You want to change…            | File |
|--------------------------------|------|
| Headline / hero intro / images | `components/HeroSection.tsx` |
| Services list                  | `components/ServicesSection.tsx` |
| Client case studies            | `components/CaseStudies.tsx` |
| Process steps                  | `components/ProcessTimeline.tsx` |
| AI / data section              | `components/AILabSection.tsx` |
| Contact / CTA                  | `components/CTASection.tsx` |
| Address, email, links          | `components/Footer.tsx` |
| Page title / SEO               | `app/layout.tsx` |

## Images

- Object/workspace shots load from Unsplash.
- The two **people** photos (hero + CTA) use
  [LoremFlickr](https://loremflickr.com) keyword-matched Indian-people images
  with a fixed `?lock=` seed so they stay stable. To use your **own brand
  photos**, drop files in `public/` and point the `src` at e.g.
  `/team-photo.jpg`. These two `<Image>` tags use `unoptimized`, so any URL or
  local path works without extra config.

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · GSAP ·
Lenis · lucide-react.
