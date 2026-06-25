"use client";

import { DESTINATIONS } from "./data";
import { SectionLabel } from "./ornaments";

const PARTNER_IMAGES = DESTINATIONS.map((d) => ({ name: d.name, image: d.image }));

export function Partners() {
  return (
    <section className="py-20 md:py-24 bg-[var(--emerald)] text-[var(--cream)] border-y border-[var(--gold)]/20 relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="md:w-1/4 shrink-0">
            <SectionLabel>
              <span className="text-[var(--gold)]">Trusted worldwide</span>
            </SectionLabel>
            <h3 className="font-display text-4xl md:text-5xl font-medium mt-5 leading-[1.05]">
              Our
              <span className="block italic text-[var(--gold)]">Partners</span>
            </h3>
            <div className="flex items-center gap-2 mt-5 text-[var(--cream)]/60 text-sm">
              <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
              <span className="italic font-display">Crafted together</span>
            </div>
            <p className="mt-3 text-sm text-[var(--cream)]/60 leading-relaxed">
              We collaborate with the finest hotels, resorts and ground
              operators across every destination we serve.
            </p>
          </div>

          <div className="flex-1 overflow-hidden relative">
            {/* Edge fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--emerald)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--emerald)] to-transparent z-10 pointer-events-none" />

            <div className="flex items-center gap-5 md:gap-6 animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused]">
              {[...PARTNER_IMAGES, ...PARTNER_IMAGES, ...PARTNER_IMAGES, ...PARTNER_IMAGES].map(
                (p, i) => (
                  <div
                    key={`${p.name}-${i}`}
                    className="shrink-0 w-44 md:w-52 rounded-2xl overflow-hidden border border-[var(--gold)]/25 bg-[var(--ink)]/30 backdrop-blur hover:border-[var(--gold)]/60 hover:-translate-y-1.5 transition-all duration-500 shadow-lg"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="px-3 py-2.5 text-center border-t border-[var(--gold)]/15">
                      <span className="text-xs font-semibold tracking-[0.25em] text-[var(--gold)] uppercase font-display">
                        {p.name}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
