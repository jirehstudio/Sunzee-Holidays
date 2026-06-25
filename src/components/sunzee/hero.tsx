"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Compass } from "lucide-react";
import { HERO_SLIDES, SITE } from "./data";
import { Ornament } from "./ornaments";

const SLIDE_DURATION = 7000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const count = HERO_SLIDES.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_DURATION);
    return () => clearInterval(t);
  }, [count]);

  return (
    <section id="home" className="relative">
      <div className="relative h-[calc(100vh-140px)] min-h-[500px] md:h-[calc(100vh-192px)] md:min-h-[580px] md:max-h-[850px] w-full overflow-hidden bg-[var(--emerald)]">
        {/* Slides with Ken Burns effect */}
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={src}
              alt=""
              className={`h-full w-full object-cover ${i === index ? "animate-ken-burns" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/40 via-[var(--ink)]/20 to-[var(--ink)]/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/70 via-[var(--ink)]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--emerald)]/60 to-transparent" />
          </div>
        ))}



        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-7xl px-6 h-full flex items-center pb-20 md:pb-24 pt-4">
          <div className="max-w-3xl">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold)]/50 bg-[var(--ink)]/30 backdrop-blur px-4 py-2 mb-3 md:mb-4">
              <span className="text-[10px] md:text-xs font-medium tracking-[0.32em] uppercase text-[var(--cream)]">
                {SITE.tagline}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[0.95] text-[var(--cream)] drop-shadow-lg">
              Where the
              <span className="block italic text-shimmer mt-0.5">
                wild meets
              </span>
              <span className="block text-[var(--gold)] mt-0.5">the wonderful</span>
            </h1>

            {/* Ornament divider */}
            <Ornament className="my-4 md:my-5 justify-start" />

            <p className="max-w-xl text-sm sm:text-base md:text-lg text-[var(--cream)]/85 leading-relaxed font-light">
              From the timeless pyramids of Egypt to the baobabs of Madagascar,
              we craft bespoke journeys across East Africa and the Indian Ocean,
              where every sunrise feels like the first.
            </p>

            <div className="mt-5 md:mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#destinations"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-6 md:px-8 py-3 md:py-3.5 text-sm font-semibold text-[var(--ink)] shadow-[0_8px_30px_-8px_rgba(122,96,51,0.7)] hover:shadow-[0_12px_40px_-8px_rgba(122,96,51,0.9)] hover:-translate-y-0.5 transition-all"
              >
                <span>Begin the Journey</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--ink)]/10 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href={`mailto:${SITE.bookingEmail}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/40 bg-[var(--ink)]/20 backdrop-blur px-5 md:px-7 py-3 md:py-3.5 text-sm font-semibold text-[var(--cream)] hover:bg-[var(--ink)]/40 hover:border-[var(--gold)] transition-all"
              >
                <Calendar className="h-4 w-4" />
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom info strip: destinations count + scroll hint */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-[var(--gold)]/20 bg-[var(--ink)]/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-7xl px-6 py-3 flex items-center justify-between text-[var(--cream)]">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <MapPin className="h-4 w-4 text-[var(--gold)]" />
              <span className="tracking-wide">
                <span className="font-display text-2xl font-semibold text-[var(--gold)] mr-1.5">06</span>
                Signature destinations across two oceans
              </span>
            </div>

          </div>
        </div>

        {/* Slide controls */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="hidden md:grid absolute left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--ink)]/30 backdrop-blur text-[var(--cream)] hover:bg-[var(--gold)] hover:text-[var(--ink)] hover:border-[var(--gold)] transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="hidden md:grid absolute right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--ink)]/30 backdrop-blur text-[var(--cream)] hover:bg-[var(--gold)] hover:text-[var(--ink)] hover:border-[var(--gold)] transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all rounded-full ${
                i === index
                  ? "w-10 h-1.5 bg-[var(--gold)]"
                  : "w-1.5 h-1.5 bg-[var(--cream)]/40 hover:bg-[var(--cream)]/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div className="bg-[var(--emerald)] text-[var(--cream)] py-3.5 overflow-hidden border-b border-[var(--gold)]/20">
        <div className="flex w-max items-center gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
          {Array.from({ length: 3 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 text-sm tracking-[0.2em] uppercase font-display">
              <span>Egypt</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Kenya</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Zanzibar</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Mauritius</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Madagascar</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Reunion</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
