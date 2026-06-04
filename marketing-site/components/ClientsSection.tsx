"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * To swap a logo image in:
 *  1. Save the logo as a PNG/SVG in `public/clients/` (transparent background works best).
 *  2. Change that client's `logo` field below from `null` to "/clients/<filename>".
 *     e.g.  logo: "/clients/blessed-ayurveda.png"
 *  Until then, each card renders a stylized wordmark so the section never looks broken.
 */
type Client = {
  name: string;
  handle: string;
  sector: string;
  logo: string | null;
};

const CLIENTS: Client[] = [
  {
    name: "Blessed Ayurveda Hospital",
    handle: "blessedayurvedahospital",
    sector: "Ayurveda · Healthcare",
    logo: null, // -> "/clients/blessed-ayurveda.png"
  },
  {
    name: "GICT Dehradun",
    handle: "gict.dehradun",
    sector: "Coaching · Education",
    logo: null, // -> "/clients/gict.png"
  },
  {
    name: "Doon Defence School",
    handle: "ddis_doondefenceschool",
    sector: "Defence Academy",
    logo: null, // -> "/clients/doon-defence-school.png"
  },
  {
    name: "Doon Defence Career Point",
    handle: "ddcp_doondefencecareerpoint",
    sector: "Defence Coaching",
    logo: null, // -> "/clients/ddcp.png"
  },
  {
    name: "ETA Education",
    handle: "etaeducation",
    sector: "Education · Coaching",
    logo: null, // -> "/clients/eta-education.png"
  },
  {
    name: "Vaidyakulam Ayurveda",
    handle: "vaidyakulamayurveda",
    sector: "Ayurveda · Wellness",
    logo: null, // -> "/clients/vaidyakulam.png"
  },
  {
    name: "Charmwood International",
    handle: "charmwoodinternational",
    sector: "School · Education",
    logo: null, // -> "/clients/charmwood.png"
  },
  {
    name: "Mussoorie Mist Villa",
    handle: "mussoorie_mist_villa",
    sector: "Hospitality",
    logo: null, // -> "/clients/mussoorie-mist.png"
  },
  {
    name: "Sabhyan Real Estate",
    handle: "sabhyanrealestate",
    sector: "Real Estate",
    logo: null, // -> "/clients/sabhyan.png"
  },
  {
    name: "TDG Hotels",
    handle: "tdghotels",
    sector: "Hospitality",
    logo: null, // -> "/clients/tdg-hotels.png"
  },
  {
    name: "Sunshine Sprouts",
    handle: "sunshine_.sprouts",
    sector: "Preschool · Education",
    logo: null, // -> "/clients/sunshine-sprouts.png"
  },
];

function ClientCard({ client, index }: { client: Client; index: number }) {
  const href = `https://www.instagram.com/${client.handle}/`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: (index % 4) * 0.06, duration: 0.55 }}
      whileHover={{ y: -4 }}
      data-cursor="hover"
      className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-colors hover:border-electric"
    >
      {/* Soft hover wash */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-electric/0 via-electric/0 to-electric/0 opacity-0 transition-opacity duration-500 group-hover:from-electric/[0.06] group-hover:to-cyan/[0.06] group-hover:opacity-100"
      />

      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          0{index + 1}
        </span>
        <ArrowUpRight className="h-5 w-5 text-ink/30 transition-colors group-hover:text-electric" />
      </div>

      {/* Logo / wordmark */}
      <div className="flex flex-1 items-center justify-center px-2 py-4">
        {client.logo ? (
          <div className="relative h-16 w-full md:h-20">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              fill
              sizes="(max-width: 768px) 40vw, 20vw"
              className="object-contain"
            />
          </div>
        ) : (
          <span
            className="text-balance text-center font-anton text-2xl uppercase leading-[0.95] tracking-tight text-ink md:text-3xl"
          >
            {client.name}
          </span>
        )}
      </div>

      <div className="flex items-end justify-between border-t border-ink/10 pt-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-ink/45">
            {client.sector}
          </div>
          <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink/70">
            <Instagram className="h-3.5 w-3.5" />
            @{client.handle}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative isolate overflow-hidden bg-bg py-24 md:py-32"
    >
      {/* faint background grid */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink/60"
            >
              <span className="h-px w-8 bg-electric" />
              [ Trusted by ]
            </motion.span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8 }}
              className="font-anton uppercase leading-[0.9] tracking-tightest text-[clamp(2.4rem,5.5vw,5.5rem)]"
            >
              Brands we&apos;re <br />
              <span className="text-electric">building with.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-5 max-w-xl text-ink/65"
            >
              A growing roster of healthcare, hospitality, education and real
              estate brands across Dehradun and beyond — partnered with
              Technobuzzle to grow online.
            </motion.p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {CLIENTS.map((c, i) => (
            <ClientCard key={c.handle} client={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
