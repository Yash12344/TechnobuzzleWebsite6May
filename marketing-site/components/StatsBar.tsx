"use client";

// Scrolling marquee of services. (The numeric stats grid was removed —
// Technobuzzle is newly launched, so no client/project counts are shown yet.)

const SERVICES = [
  "SEO",
  "Google Ads",
  "Performance Marketing",
  "Social Media Marketing",
  "Web Design",
  "Content Marketing",
  "Branding",
  "Email Marketing",
];

export default function StatsBar() {
  return (
    <section className="relative border-y border-ink/10 bg-bg">
      {/* marquee tag strip */}
      <div className="overflow-hidden py-5">
        <div className="marquee-track animate-marquee whitespace-nowrap font-anton text-xl uppercase tracking-wide text-ink/60 md:text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              {SERVICES.map((t, j) => (
                <span key={j} className="flex items-center gap-10">
                  <span>{t}</span>
                  <span className="text-electric">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
