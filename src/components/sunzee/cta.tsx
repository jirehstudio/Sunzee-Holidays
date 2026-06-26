"use client";

import { Mail } from "lucide-react";
import { SITE, CTA_IMAGE } from "./data";
import { Ornament } from "./ornaments";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with parallax-like effect */}
      <div className="absolute inset-0">
        <img
          src={CTA_IMAGE}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--emerald)]/95 via-[var(--emerald)]/80 to-[var(--emerald)]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/50 to-transparent" />
      </div>



      <div className="relative container mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--ink)]/30 backdrop-blur px-4 py-2 mb-7">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--gold)] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--gold)]" />
          </span>
          <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-[var(--cream)]">
            Limited slots for the season
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium uppercase leading-[1.0] text-[var(--cream)] tracking-tight">
          Relax And Enjoy Your
          <br className="hidden sm:block" />
          <span className="italic text-shimmer">Holiday With Sunzee Holidays</span>
        </h2>

        <Ornament className="my-8" />

        <p className="text-xl md:text-2xl text-[var(--cream)]/90 font-display italic font-light">
          Luxury Hotel &amp; Best Resort
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${SITE.bookingEmail}`}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-9 py-4 text-sm font-semibold text-[var(--ink)] shadow-[0_10px_40px_-10px_rgba(122,96,51,0.8)] hover:shadow-[0_15px_50px_-10px_rgba(122,96,51,1)] hover:-translate-y-1 transition-all"
          >
            <Mail className="h-4 w-4" />
            <span className="tracking-wide">BOOK NOW</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--ink)]/10 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/40 bg-[var(--ink)]/20 backdrop-blur px-8 py-4 text-sm font-semibold text-[var(--cream)] hover:bg-[var(--ink)]/40 hover:border-[var(--gold)] transition-all"
          >
            or call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
