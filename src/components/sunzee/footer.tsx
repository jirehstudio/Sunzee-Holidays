"use client";

import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  ChevronRight,
} from "lucide-react";
import { SITE, TOUR_PACKAGES, IMPORTANT_LINKS } from "./data";

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--ink)] text-[var(--cream)] relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top gold accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      <div className="container mx-auto max-w-7xl px-6 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-14 w-14 shrink-0">
                <div className="absolute inset-0 rounded-full ring-1 ring-[var(--gold)]/40" />
                <img
                  src="/sunzee/logo-square.png"
                  alt={`${SITE.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold text-[var(--cream)]">
                  Sunzee
                </span>
                <span className="font-display text-xl font-semibold text-[var(--gold)] italic">
                  Holidays
                </span>
              </div>
            </div>
            <p className="text-sm text-[var(--cream)]/65 leading-relaxed mb-5 font-light">
              {SITE.tagline}. Crafting tailor-made journeys across Egypt,
              Kenya, Zanzibar, Mauritius, Madagascar and Reunion.
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-3 text-sm hover:text-[var(--gold)] transition-colors group"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gold)]/10 group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm hover:text-[var(--gold)] transition-colors group break-all"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gold)]/10 group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors shrink-0">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Browse tour */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 text-[var(--cream)] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              Browse Tour
            </h3>
            <ul className="space-y-3">
              {TOUR_PACKAGES.map((t) => (
                <li key={t.label}>
                  <a
                    href={t.href}
                    className="flex items-center gap-1.5 text-sm text-[var(--cream)]/70 hover:text-[var(--gold)] transition-colors group"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[var(--gold)] transition-transform group-hover:translate-x-1" />
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 text-[var(--cream)] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              Important Links
            </h3>
            <ul className="space-y-3">
              {IMPORTANT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="flex items-center gap-1.5 text-sm text-[var(--cream)]/70 hover:text-[var(--gold)] transition-colors group"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[var(--gold)] transition-transform group-hover:translate-x-1" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Facebook widget */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 text-[var(--cream)] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              Connect with us
            </h3>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-[var(--gold)]/20 bg-[var(--cream)]/5 hover:bg-[var(--cream)]/10 hover:border-[var(--gold)]/40 transition-all p-4 mb-5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-deep)] to-[var(--gold)] text-[var(--ink)]">
                  <Facebook className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--cream)]/50">
                    Facebook
                  </div>
                  <div className="text-sm font-semibold text-[var(--cream)]">
                    Sunzeeholidays
                  </div>
                </div>
              </div>
            </a>
            <div className="flex items-center gap-2.5">
              <SocialIcon href={SITE.facebook} label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.twitter} label="Twitter">
                <Twitter className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[var(--gold)]/15 bg-[var(--ink)]/80">
        <div className="container mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--cream)]/65">
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
            {SITE.copyright}
          </p>
          <p>
            Maintained By{" "}
            <a
              href={SITE.maintainedByUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--gold)] hover:underline"
            >
              {SITE.maintainedBy}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/25 text-[var(--cream)]/80 hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--ink)] transition-all"
    >
      {children}
    </a>
  );
}
