"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function Destinations() {
  return (
    <section
      id="destinations"
      className="py-24 md:py-32 bg-paper relative overflow-hidden"
    >
      {/* Decorative compass watermark */}
      <div className="absolute -top-20 -right-20 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]" fill="currentColor" aria-hidden="true">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M100 10 L110 90 L190 100 L110 110 L100 190 L90 110 L10 100 L90 90 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Section header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Where we travel</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-[var(--emerald)] mt-5 leading-[1.05]">
            Top Destinations
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 text-[var(--ink)]/60 text-base md:text-lg leading-relaxed font-light">
            Six signature corners of East Africa and the Indian Ocean, each
            curated by our local specialists. Choose your dream, and we&apos;ll
            shape the rest.
          </p>
        </Reveal>

        {/* Destination grid - magazine-style mixed layout */}
        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {DESTINATIONS.map((d, i) => {
            // Make the first card span 2 columns on lg for visual interest
            const featured = i === 0;
            return (
              <RevealItem
                key={d.name}
                className={featured ? "lg:col-span-2 lg:row-span-2 h-full" : "h-full"}
              >
                <a
                  href={d.href}
                  className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-700 h-full"
                >
                  <div className={`relative w-full overflow-hidden bg-[var(--emerald)] ${
                    featured
                      ? "aspect-[16/13] md:aspect-auto md:h-full"
                      : "aspect-[4/5]"
                  }`}>
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    {/* Layered gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/95 via-[var(--ink)]/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--emerald)]/40 via-transparent to-[var(--gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Gold frame on hover */}
                    <div className="absolute inset-3 border border-[var(--gold)]/0 group-hover:border-[var(--gold)]/60 rounded-xl transition-all duration-500" />

                    {/* Top right arrow */}
                    <div className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-[var(--cream)]/15 backdrop-blur border border-[var(--cream)]/30 text-[var(--cream)] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 -rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="font-display text-4xl md:text-5xl font-light text-[var(--gold)]/90 leading-none">
                        0{i + 1}
                      </span>
                      <span className="h-px w-8 bg-[var(--gold)]/60" />
                    </div>

                    {/* Bottom content */}
                    <div className={`absolute inset-x-0 bottom-0 p-6 md:p-7 text-[var(--cream)] ${featured ? "md:p-9" : ""}`}>
                      <div className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.32em] uppercase text-[var(--gold)] mb-2">
                        <MapPin className="h-3 w-3" />
                        East Africa
                      </div>
                      <h3 className={`font-display font-medium leading-tight mb-2 ${featured ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                        {d.name}
                      </h3>
                      <p className={`text-[var(--cream)]/85 leading-relaxed max-w-md ${featured ? "text-base md:text-lg" : "text-sm"}`}>
                        {d.blurb}
                      </p>
                      <p className="mt-3 text-xs md:text-sm font-medium text-[var(--gold)] italic font-display">
                        {d.caption}
                      </p>
                    </div>
                  </div>
                </a>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
