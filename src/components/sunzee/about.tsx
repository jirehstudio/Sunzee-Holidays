"use client";

import { CheckCircle2, MapPin, Users, Plane, Award } from "lucide-react";
import { SITE } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal } from "./reveal";

const STATS = [
  { icon: Award, value: "30 Yrs", label: "Experience" },
  { icon: MapPin, value: "6+", label: "Destinations" },
  { icon: Users, value: "B2B", label: "Specialist" },
];

const POINTS = [
  "Widest selection of hotels globally",
  "Authentic & tropical experiences",
  "Specialists in the B2B space",
  "Expert firsthand assistance",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--emerald)] text-[var(--cream)] relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Decorative palm */}
      <div className="absolute -bottom-10 -left-10 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-[300px] h-[300px]" fill="currentColor" aria-hidden="true">
          <path d="M100 180 V100 M100 100 C 60 80, 30 50, 10 10 C 50 30, 80 60, 100 100 M100 100 C 140 80, 170 50, 190 10 C 150 30, 120 60, 100 100" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: image collage */}
          <Reveal y={50}>
            <div className="relative">
              {/* Main image with gold frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://sfile.chatglm.cn/images-ppt/208fd6674588.jpg"
                  alt="Tropical island getaway"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--emerald)]/40 to-transparent" />
              </div>
              {/* Gold border frame */}
              <div className="absolute -inset-3 border border-[var(--gold)]/40 rounded-2xl -z-10" />

              {/* Small overlapping image */}
              <div className="hidden md:block absolute -bottom-10 -left-10 w-52 h-52 rounded-2xl overflow-hidden border-4 border-[var(--emerald)] shadow-2xl">
                <img
                  src="https://sfile.chatglm.cn/images-ppt/640772c2943f.jpg"
                  alt="Safari experience"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-3 md:-right-8 rounded-2xl bg-gradient-to-br from-[var(--gold-deep)] to-[var(--gold)] text-[var(--ink)] px-6 py-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-4 w-4" />
                  <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Specialists in</span>
                </div>
                <div className="font-display text-3xl font-semibold leading-none">East Africa</div>
                <div className="text-[10px] tracking-[0.2em] uppercase opacity-70 mt-1">&amp; Indian Ocean</div>
              </div>
            </div>
          </Reveal>

          {/* Right: content */}
          <div>
            <Reveal>
              <SectionLabel>
                <span className="text-[var(--gold)]">About Sunzee Holidays</span>
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--cream)] leading-[1.05] mt-5">
                The Best Destination
                <span className="block italic text-[var(--gold)]">Management Company</span>
                <span className="block">in East Africa</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Ornament className="my-7 justify-start" />
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-[var(--cream)]/75 text-base md:text-lg leading-relaxed font-light">
                Sunzee Holidays opens its doors to travel agents and travellers,
                providing them with an authentic and tropical experience.
                Specializing in the B2B segment, Sunzee Holidays strives to make
                itself the ultimate travel superstore with the widest selection of
                hotels and the best online product ranges in the B2B space across the globe.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-4 text-[var(--cream)]/75 text-base md:text-lg leading-relaxed font-light">
                Our father-daughter partnership brings decades of experience
                in the travel and tourism industry, firmly believing in the
                principle that servicing with a smile reflects the true spirit of an
                organization and validates its promise.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm md:text-[15px] text-[var(--cream)]/85">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-[var(--gold)]/25 bg-[var(--ink)]/20 backdrop-blur p-5 text-center"
                  >
                    <s.icon className="h-5 w-5 text-[var(--gold)] mx-auto mb-2" />
                    <div className="font-display text-3xl md:text-4xl font-semibold text-[var(--cream)]">
                      {s.value}
                    </div>
                    <div className="text-[11px] md:text-xs text-[var(--cream)]/60 mt-1 tracking-wide">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
