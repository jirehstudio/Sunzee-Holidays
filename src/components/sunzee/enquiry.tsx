"use client";

import { useState } from "react";
import { Mail, Phone, Send, MapPin, Clock, Globe2 } from "lucide-react";
import { SITE } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal } from "./reveal";

export function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-24 md:py-32 bg-paper relative overflow-hidden">
      {/* Decorative compass watermark */}
      <div className="absolute -top-20 -left-20 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]" fill="currentColor" aria-hidden="true">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M100 10 L110 90 L190 100 L110 110 L100 190 L90 110 L10 100 L90 90 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>Plan your journey</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-medium text-[var(--emerald)] mt-5 leading-[1.05]">
            Begin Your
            <span className="italic text-[var(--gold-deep)]"> Story</span>
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 text-[var(--ink)]/60 text-base md:text-lg leading-relaxed font-light">
            Share a few details about the trip you have in mind and our
            destination specialists will reach out within one business day
            with a tailor-made proposal.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          {/* Left: info panel */}
          <Reveal className="lg:col-span-2" y={50}>
            <div className="relative h-full rounded-2xl overflow-hidden bg-[var(--emerald)] text-[var(--cream)] p-8 md:p-10 flex flex-col">
              {/* Background image overlay */}
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://sfile.chatglm.cn/images-ppt/aefc9acf92b7.png"
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--emerald)]/90 via-[var(--emerald)]/80 to-[var(--ink)]/70" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[var(--gold)] font-medium">
                    Get in touch
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-medium leading-tight">
                  Plan your journey
                  <span className="block italic text-[var(--gold)]">with us</span>
                </h3>

                <div className="mt-8 space-y-5 flex-1">
                  <ContactRow icon={Phone} label="Phone" value={SITE.phone} href={`tel:${SITE.phoneRaw}`} />
                  <ContactRow icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
                  <ContactRow icon={MapPin} label="Coverage" value="East Africa & Indian Ocean" />
                  <ContactRow icon={Clock} label="Response time" value="Within 1 business day" />
                  <ContactRow icon={Globe2} label="Languages" value="English · French · Italian" />
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--gold)]/20">
                  <p className="text-xs text-[var(--cream)]/60 italic font-display">
                    &ldquo;Travel is the only thing you buy that makes you richer.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal className="lg:col-span-3" delay={0.15} y={50}>
            <div className="h-full rounded-2xl border border-[var(--gold)]/25 bg-card p-8 md:p-10 shadow-xl relative">
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--gold)]/50 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--gold)]/50 rounded-br-2xl" />

              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-deep)] to-[var(--gold)] text-[var(--ink)] mb-6 shadow-lg">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-3xl font-medium text-[var(--emerald)]">
                    Thank you for your enquiry
                  </h3>
                  <Ornament className="my-5" />
                  <p className="text-[var(--ink)]/65 max-w-md leading-relaxed">
                    We&apos;ve received your request and our team will get back to
                    you within one business day. For urgent matters, please call
                    us at <span className="text-[var(--gold-deep)] font-semibold">{SITE.phone}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full border border-[var(--emerald)]/30 px-6 py-2.5 text-sm font-medium text-[var(--emerald)] hover:bg-[var(--gold)]/10 transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Full name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-[var(--gold)]/30 bg-[var(--cream)]/50 px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-[var(--gold)]/30 bg-[var(--cream)]/50 px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all"
                      />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Phone" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+xxx xxxxxxx"
                        className="w-full rounded-xl border border-[var(--gold)]/30 bg-[var(--cream)]/50 px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all"
                      />
                    </Field>
                    <Field label="Destination" htmlFor="destination">
                      <select
                        id="destination"
                        name="destination"
                        className="w-full rounded-xl border border-[var(--gold)]/30 bg-[var(--cream)]/50 px-4 py-3 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a destination
                        </option>
                        <option>Egypt Tour Packages</option>
                        <option>Kenya Tour Packages</option>
                        <option>Zanzibar Tour Packages</option>
                        <option>Mauritius Tour Packages</option>
                        <option>Madagascar Tour Packages</option>
                        <option>Reunion Tour Packages</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Tell us about your trip" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Dates, number of travellers, interests, anything you have in mind..."
                      className="w-full rounded-xl border border-[var(--gold)]/30 bg-[var(--cream)]/50 px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all resize-none"
                    />
                  </Field>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <p className="text-xs text-[var(--ink)]/50 italic">
                      By submitting, you agree to be contacted by {SITE.name}.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-7 py-3.5 text-sm font-semibold text-[var(--ink)] shadow-[0_8px_25px_-8px_rgba(122,96,51,0.7)] hover:shadow-[0_12px_35px_-8px_rgba(122,96,51,0.9)] hover:-translate-y-0.5 transition-all"
                    >
                      <Send className="h-4 w-4" />
                      Submit Enquiry
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--ink)]/10 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--ink)]/60 mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3.5 group">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] shrink-0 group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--cream)]/50 mb-0.5">
          {label}
        </div>
        <div className="text-sm md:text-base font-medium text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors break-all">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}
