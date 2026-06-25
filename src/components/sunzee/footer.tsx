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

      <div className="container mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-20 md:pb-10 relative">
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
              className="block rounded-2xl overflow-hidden bg-white text-zinc-900 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[320px] mb-5 font-sans group relative"
            >
              {/* Cover photo */}
              <div className="relative h-24 bg-zinc-100 overflow-hidden">
                <img
                  src="/sunzee/slide1.png"
                  alt="Sunzee Holidays Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2.5 right-2.5 bg-[#1877f2] rounded-full p-1 shadow-md">
                  <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </div>
              </div>

              {/* Profile overlap & Info */}
              <div className="px-4 pb-4 pt-1 relative">
                {/* Profile Pic */}
                <div className="absolute -top-7 left-4 h-14 w-14 rounded-full border-2 border-white bg-[var(--ink)] overflow-hidden shadow-md">
                  <img
                    src="/sunzee/logo-square.png"
                    alt="Sunzee Profile"
                    className="w-full h-full object-contain scale-90"
                  />
                </div>

                <div className="pl-16 min-h-[36px] flex flex-col justify-center">
                  <h4 className="text-sm font-bold leading-tight text-zinc-900">
                    Sunzee Holidays
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-medium mt-0.5">
                    234 followers
                  </p>
                </div>

                <p className="mt-3.5 text-[11.5px] text-zinc-600 line-clamp-2 leading-relaxed font-normal">
                  SunZee Holidays is a Destination Management Company based in...
                </p>

                {/* Tags and phone */}
                <div className="mt-3.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-800 font-semibold border-t border-zinc-100 pt-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-zinc-800 fill-current" viewBox="0 0 24 24">
                      <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                    </svg>
                    <span>Tour agent</span>
                  </div>
                  <span className="text-zinc-300">•</span>
                  <span>£</span>
                  <span className="text-zinc-300">•</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-zinc-800 fill-current" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                    </svg>
                    <span>{SITE.phone}</span>
                  </div>
                </div>

                {/* Follow Button */}
                <div className="mt-4">
                  <div className="w-full bg-[#1877f2] hover:bg-[#166fe5] text-white rounded-lg py-1.5 px-3 flex items-center justify-center gap-2 text-xs font-semibold transition-colors shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 9h-3v3h-2v-3H8V9h3V6h2v3h3v2z" />
                    </svg>
                    <span>Follow</span>
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
        <div className="container mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--cream)]/75">
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
            {SITE.copyright}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-lg md:text-xl font-semibold text-[var(--cream)]/95">Powered By</span>
            <a
              href="https://jirehstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="/sunzee/jireh-logo.jpg"
                alt="Jireh Studio"
                className="h-16 md:h-20 w-auto object-contain rounded-lg"
              />
            </a>
          </div>
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
