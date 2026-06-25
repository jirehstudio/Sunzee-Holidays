"use client";

import { ArrowRight, Clock, Star } from "lucide-react";
import { TOUR_PACKAGES, DESTINATIONS } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function TourPackages() {
  const featured = TOUR_PACKAGES.map((p) => {
    const dest = DESTINATIONS.find((d) => d.name === p.label.split(" ")[0]);
    return {
      ...p,
      image: dest?.image ?? "",
      blurb: dest?.blurb ?? "",
      days: ["7 Days / 6 Nights", "10 Days / 9 Nights", "8 Days / 7 Nights"][
        TOUR_PACKAGES.indexOf(p)
      ],
    };
  });

  return (
    <section id="tour-packages" className="py-24 md:py-32 bg-paper relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal className="max-w-2xl">
            <SectionLabel>Signature journeys</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-medium text-[var(--emerald)] mt-5 leading-[1.05]">
              Our Tour
              <span className="italic text-[var(--gold-deep)]"> Packages</span>
            </h2>
            <Ornament className="mt-6 justify-start" />
            <p className="mt-5 text-[var(--ink)]/60 text-base md:text-lg leading-relaxed font-light">
              Three flagship itineraries, each crafted with our destination
              specialists to deliver depth, comfort and unforgettable moments.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#destinations"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald)] hover:text-[var(--gold-deep)] transition-colors"
            >
              View all destinations
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--emerald)]/30 group-hover:border-[var(--gold-deep)] group-hover:bg-[var(--gold)]/10 transition-all">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        </div>

        {/* Cards */}
        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7" stagger={0.15}>
          {featured.map((pkg, i) => (
            <RevealItem key={pkg.label}>
              <article className="group relative overflow-hidden rounded-2xl bg-card border border-[var(--gold)]/20 shadow-md hover:shadow-2xl transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--emerald)]">
                  <img
                    src={pkg.image}
                    alt={pkg.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent" />

                  {/* Package badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="rounded-full bg-[var(--gold)] text-[var(--ink)] px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
                      Package 0{i + 1}
                    </span>
                  </div>

                  {/* Days badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-[var(--ink)]/60 backdrop-blur text-[var(--cream)] px-3 py-1 text-[10px] font-medium tracking-wide">
                    <Clock className="h-3 w-3 text-[var(--gold)]" />
                    {pkg.days}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--cream)]">
                    <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                      {pkg.label}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-[var(--gold)]">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-3 w-3 fill-current" />
                      ))}
                      <span className="ml-1.5 text-xs text-[var(--cream)]/70">Luxury rated</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-7">
                  <p className="text-sm text-[var(--ink)]/65 leading-relaxed mb-5">
                    {pkg.blurb}
                  </p>
                  <a
                    href={pkg.href}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[var(--emerald)] hover:text-[var(--gold-deep)] transition-colors"
                  >
                    Explore package
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-[var(--emerald)]/30 group-hover/link:border-[var(--gold-deep)] group-hover/link:bg-[var(--gold)]/10 transition-all">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </span>
                  </a>
                </div>

                {/* Hover gold accent bar */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--gold-deep)] via-[var(--gold)] to-[var(--gold-deep)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
