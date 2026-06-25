"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { SITE, NAV } from "./data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_4px_30px_-10px_rgba(0,0,0,0.25)] border-b border-[var(--gold)]/20"
            : "bg-[var(--cream)]/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between gap-6 py-2 md:py-2.5">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group" aria-label={SITE.name}>
              <div className="relative h-12 w-12 md:h-16 md:w-16 shrink-0">
                {/* Gold ring around logo */}
                <div className="absolute inset-0 rounded-full ring-1 ring-[var(--gold)]/40 group-hover:ring-[var(--gold)] transition-all" />
                <img
                  src="/sunzee/logo-square.png"
                  alt={`${SITE.name} logo`}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:rotate-[15deg]"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg md:text-xl font-semibold tracking-tight text-[var(--emerald)]">
                  Sunzee
                </span>
                <span className="font-display text-lg md:text-xl font-semibold tracking-tight text-[var(--gold-deep)] italic">
                  Holidays
                </span>
                <span className="hidden md:block text-[8px] tracking-[0.32em] uppercase text-[var(--ink)]/50 mt-0.5">
                  East Africa · Indian Ocean
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) =>
                "children" in item && item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setPackagesOpen(true)}
                    onMouseLeave={() => setPackagesOpen(false)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium tracking-wide text-[var(--ink)]/80 hover:text-[var(--emerald)] hover:bg-[var(--gold)]/10 transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${packagesOpen ? "rotate-180" : ""}`}
                      />
                    </a>
                    {packagesOpen && (
                      <div className="absolute left-0 top-full pt-2 w-64">
                        <div className="overflow-hidden rounded-2xl border border-[var(--gold)]/30 bg-card shadow-2xl">
                          <div className="h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-[var(--ink)]/80 hover:bg-[var(--gold)]/10 hover:text-[var(--emerald)] hover:pl-5 transition-all border-b border-[var(--gold)]/10 last:border-0"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-[var(--ink)]/80 hover:text-[var(--emerald)] hover:bg-[var(--gold)]/10 transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--emerald)]/30 px-4 py-1.5 text-sm font-medium text-[var(--emerald)] hover:bg-[var(--emerald)] hover:text-[var(--cream)] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">Call Us</span>
              </a>
              <a
                href="/#enquiry"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-5 py-2 text-sm font-semibold text-[var(--ink)] shadow-[0_4px_20px_-5px_rgba(122,96,51,0.5)] hover:shadow-[0_8px_30px_-5px_rgba(122,96,51,0.7)] hover:-translate-y-0.5 transition-all"
              >
                <span>Enquiry</span>
                <span className="text-[var(--ink)]/60">→</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden grid h-9 w-9 place-items-center rounded-full text-[var(--emerald)] hover:bg-[var(--gold)]/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85%] bg-cream shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--gold)]/20">
              <div className="flex items-center gap-2">
                <img
                  src="/sunzee/logo-square.png"
                  alt={`${SITE.name} logo`}
                  className="h-9 w-9 object-contain"
                />
                <span className="font-display font-semibold text-[var(--emerald)]">
                  Sunzee Holidays
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--gold)]/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-[var(--emerald)]" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              {NAV.map((item) => (
                <div key={item.label} className="mb-1">
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-[var(--ink)] hover:bg-[var(--gold)]/10 hover:text-[var(--emerald)] transition-colors"
                  >
                    {item.label}
                  </a>
                  {"children" in item && item.children && (
                    <div className="ml-4 mt-1 mb-2 border-l border-[var(--gold)]/30 pl-3">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-[var(--ink)]/70 hover:bg-[var(--gold)]/10 hover:text-[var(--emerald)] transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="p-4 border-t border-[var(--gold)]/20 space-y-2">
              <a
                href="/#enquiry"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-5 py-3 text-center text-sm font-semibold text-[var(--ink)]"
              >
                Enquiry
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="block w-full rounded-full border border-[var(--emerald)]/30 px-5 py-3 text-center text-sm font-medium text-[var(--emerald)]"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
