"use client";

import { Mail, Phone, Facebook, Instagram, Youtube, Twitter, Pin } from "lucide-react";
import { SITE } from "./data";

export function TopBar() {
  return (
    <div className="bg-[var(--emerald)] text-[var(--cream)] relative">
      {/* subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 md:py-2.5 text-[11px] md:text-xs gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[var(--gold)]" />
              <span className="tracking-wide">{SITE.email}</span>
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[var(--gold)]" />
              <span className="tracking-wide">{SITE.phone}</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="flex items-center gap-2 text-[var(--cream)]/60 italic font-display text-xs md:text-sm">
              East Africa &amp; Indian Ocean
            </span>
            <div className="hidden md:block h-4 w-px bg-[var(--gold)]/30" />
            <div className="flex items-center gap-1.5">
              <SocialIcon href={SITE.facebook} label="Facebook">
                <Facebook className="h-3.5 w-3.5" />
              </SocialIcon>
              <SocialIcon href={SITE.instagram} label="Instagram">
                <Instagram className="h-3.5 w-3.5" />
              </SocialIcon>
              <SocialIcon href={SITE.youtube} label="YouTube">
                <Youtube className="h-3.5 w-3.5" />
              </SocialIcon>
              <SocialIcon href={SITE.pinterest} label="Pinterest">
                <Pin className="h-3.5 w-3.5" />
              </SocialIcon>
              <SocialIcon href={SITE.twitter} label="Twitter">
                <Twitter className="h-3.5 w-3.5" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      className="grid h-7 w-7 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--cream)]/80 hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--ink)] transition-all"
    >
      {children}
    </a>
  );
}
