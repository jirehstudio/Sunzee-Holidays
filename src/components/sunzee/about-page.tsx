"use client";

import {
  Phone,
  Mail,
  MapPin,
  Compass,
  Award,
  Heart,
  Target,
  Quote,
  Globe2,
  Plane,
  Hotel,
  Ship,
  Car,
  Calendar,
  Users,
  Briefcase,
  CheckCircle2,
  Home,
} from "lucide-react";
import { SITE } from "./data";
import { Ornament, SectionLabel } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function AboutPage() {
  return (
    <main className="flex-1">
      {/* HERO BANNER */}
      <section className="relative h-[44vh] min-h-[320px] max-h-[460px] overflow-hidden bg-[var(--emerald)]">
        <img
          src="https://sfile.chatglm.cn/images-ppt/aefc9acf92b7.png"
          alt="About Sunzee Holidays"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/55 via-[var(--ink)]/45 to-[var(--ink)]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--emerald)]/70 via-transparent to-[var(--emerald)]/40" />



        <div className="relative z-10 container mx-auto max-w-7xl px-6 h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--ink)]/30 backdrop-blur px-4 py-1.5 mb-5">
            <span className="text-[10px] md:text-xs font-medium tracking-[0.32em] uppercase text-[var(--cream)]">
              Our Story
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-[var(--cream)] leading-[1.05]">
            About
            <span className="italic text-[var(--gold)]"> Us</span>
          </h1>
          <Ornament className="my-5" />
          <p className="text-base md:text-lg text-[var(--cream)]/85 font-light italic font-display">
            Crafting journeys, building partnerships
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-[var(--emerald)] text-[var(--cream)] border-b border-[var(--gold)]/20">
        <div className="container mx-auto max-w-7xl px-6 py-3 flex items-center text-xs">
          <nav className="flex items-center gap-1.5 text-[var(--cream)]/70">
            <a href="/" className="hover:text-[var(--gold)] transition-colors">Home</a>
            <span className="text-[var(--gold)]">›</span>
            <span className="text-[var(--gold)]">About</span>
          </nav>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="py-20 md:py-28 bg-paper relative overflow-hidden">
        {/* Decorative compass watermark */}
        <div className="absolute -top-20 -right-20 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]" fill="currentColor" aria-hidden="true">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M100 10 L110 90 L190 100 L110 110 L100 190 L90 110 L10 100 L90 90 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl px-6 relative">
          <Reveal className="text-center mb-12">
            <SectionLabel>Welcome to Sunzee</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--emerald)] mt-5 leading-tight">
              A bridge between
              <span className="italic text-[var(--gold-deep)]"> travel agents &amp; travellers</span>
            </h2>
            <Ornament className="mt-6" />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base md:text-lg text-[var(--ink)]/75 leading-relaxed mb-5 font-light">
              Sunzee Holidays opens its doors to travel agents and travellers, providing them with an authentic and tropical experience. Specializing in the B2B segment, Sunzee Holidays strives to be the ultimate travel superstore, offering the widest selection of hotels and the best online product ranges in the B2B space across the globe.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-base md:text-lg text-[var(--ink)]/75 leading-relaxed font-light">
              The father-daughter duo takes their relationship to a new horizon by becoming partners and co-founders of Sunzee Holidays. Having been in the travel and tourism industry for decades, they firmly believe in the principle that "servicing with a smile" reflects the true spirit of an organization, as it is a validation of its brand promise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-20 md:py-28 bg-[var(--emerald)] text-[var(--cream)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto max-w-7xl px-6 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>
              <span className="text-[var(--gold)]">Leadership</span>
            </SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium mt-5 leading-tight">
              The people behind
              <span className="block italic text-[var(--gold)]">Sunzee Holidays</span>
            </h2>
            <Ornament className="mt-6" />
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10" stagger={0.2}>
            {/* Founder */}
            <RevealItem>
              <div className="relative rounded-2xl border border-[var(--gold)]/25 bg-[var(--ink)]/20 backdrop-blur p-8 md:p-10 h-full group hover:border-[var(--gold)]/60 transition-all duration-500">
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[var(--gold)]/50 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[var(--gold)]/50 rounded-br-2xl" />

                {/* Avatar */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative shrink-0">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-deep)] to-[var(--gold)] text-[var(--ink)] font-display text-3xl font-semibold">
                      IA
                    </div>
                    <div className="absolute -inset-1.5 rounded-full border border-[var(--gold)]/40 -z-10" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--cream)] leading-tight">
                      Imran Ally Kanowah
                    </h3>
                    <p className="text-sm text-[var(--gold)] mt-1 tracking-wide italic font-display">
                      Founder &amp; President
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[var(--cream)]/75 leading-relaxed font-light">
                  Enriched with 30 years of experience in the tourism sector, and having handled clients and groups from various destinations such as France, the UK, South Africa, India, the UAE, and the GCC, Imran wishes to assist agents and tourists with his expertise. Having worked as a General Manager and Director in his previous roles, he thoroughly understands the intricacies of client servicing. Willing to go the extra mile to ensure complete satisfaction for his valued clientele, this dedication has always been his forte. He is extremely passionate and committed to continually achieving a higher level of performance alongside his team.
                </p>

                {/* Stats */}
                <div className="mt-6 pt-5 border-t border-[var(--gold)]/15 grid grid-cols-3 gap-3 text-center">
                  <Stat icon={Award} value="30 Yrs" label="Experience" />
                  <Stat icon={Globe2} value="6+" label="Destinations" />
                  <Stat icon={Users} value="GM & Dir" label="Former Roles" />
                </div>
              </div>
            </RevealItem>

            {/* Co-founder */}
            <RevealItem>
              <div className="relative rounded-2xl border border-[var(--gold)]/25 bg-[var(--ink)]/20 backdrop-blur p-8 md:p-10 h-full group hover:border-[var(--gold)]/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[var(--gold)]/50 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[var(--gold)]/50 rounded-br-2xl" />

                <div className="flex items-start gap-5 mb-6">
                  <div className="relative shrink-0">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-deep)] to-[var(--gold)] text-[var(--ink)] font-display text-3xl font-semibold">
                      ZK
                    </div>
                    <div className="absolute -inset-1.5 rounded-full border border-[var(--gold)]/40 -z-10" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--cream)] leading-tight">
                      Zaynah Kanowah
                    </h3>
                    <p className="text-sm text-[var(--gold)] mt-1 tracking-wide italic font-display">
                      Co-Founder &amp; CEO
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[var(--cream)]/75 leading-relaxed font-light">
                  Qualified in Business and Tourism Management and specializing in Business-to-Business (B2B), MICE/events, and travel technology, Zaynah strongly believes that her passion for the industry was passed down by her father. Like him, she believes in listening to and understanding a client's needs, recognizing that a journey is a memory of a lifetime. In her previous roles, she has enhanced processes, driven innovation, and initiated changes that foster future business growth. Her belief in strong trade partnerships consistently leads to better outcomes, a value she brings to all her upcoming projects. Her mantra is: &ldquo;You will be judged by what you do, not what you say.&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-[var(--gold)]/15 grid grid-cols-3 gap-3 text-center">
                  <Stat icon={Briefcase} value="B2B" label="Specialist" />
                  <Stat icon={Calendar} value="MICE" label="Events" />
                  <Stat icon={Compass} value="Tech" label="Innovation" />
                </div>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* MEANING OF SUNZEE */}
      <section className="py-20 md:py-28 bg-paper relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-6">
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left: Sun + Sea visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--sunset)]/30 via-[var(--gold)]/20 to-[var(--emerald)]/30 p-10 flex items-center justify-center relative">
                {/* Decorative ring */}
                <div className="absolute inset-6 rounded-full border border-[var(--gold)]/40" />
                <div className="absolute inset-10 rounded-full border border-[var(--gold)]/20" />

                <div className="relative text-center">
                  <div className="font-display text-7xl md:text-8xl font-light text-[var(--gold-deep)] leading-none">
                    Sun
                  </div>
                  <div className="font-display text-2xl italic text-[var(--ink)]/40 my-3">
                    &amp;
                  </div>
                  <div className="font-display text-7xl md:text-8xl font-light text-[var(--emerald)] leading-none">
                    Zee
                  </div>
                  <div className="mt-5 text-xs tracking-[0.3em] uppercase text-[var(--ink)]/50">
                    Sun &amp; Sea
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 rounded-2xl bg-gradient-to-br from-[var(--gold-deep)] to-[var(--gold)] text-[var(--ink)] px-4 py-2 shadow-lg rotate-3">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Sun + Zee</span>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <SectionLabel>Etymology</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--emerald)] mt-5 leading-tight">
                What is the meaning of
                <span className="block italic text-[var(--gold-deep)]">Sunzee?</span>
              </h2>
              <Ornament className="my-6 justify-start" />
              <p className="text-base md:text-lg text-[var(--ink)]/75 leading-relaxed font-light">
                Sunzee is a combination of two words: &ldquo;Sun&rdquo;, the English word for sunlight, and &ldquo;Zee&rdquo;, the Dutch word for sea. Thus, &ldquo;Sun &amp; Zee&rdquo; becomes the perfect combination.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE OFFER + WHAT WE ASSIST FOR */}
      <section className="py-20 md:py-28 bg-[var(--emerald)] text-[var(--cream)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto max-w-7xl px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* What we offer */}
            <Reveal>
              <div className="rounded-2xl border border-[var(--gold)]/25 bg-[var(--ink)]/25 backdrop-blur p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                    <Plane className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-[var(--cream)]">
                    What we offer?
                  </h3>
                </div>
                <div className="h-px w-16 bg-[var(--gold)]/60 mb-6" />
                <ul className="space-y-4">
                  {[
                    "High-quality vacations in Mauritius, other Indian Ocean islands, and neighbouring countries",
                    "Leisure, cultural, and physical adventure holidays",
                    "Business and MICE (Meetings, Incentives, Conferences, and Exhibitions) travel",
                    "Day trips and urban excursions",
                    "Special interest tours, theme tours, honeymoon/wedding packages, and photo shoots",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm md:text-base text-[var(--cream)]/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* What we assist for */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-[var(--gold)]/25 bg-[var(--ink)]/25 backdrop-blur p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                    <Compass className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-[var(--cream)]">
                    What do we assist for?
                  </h3>
                </div>
                <div className="h-px w-16 bg-[var(--gold)]/60 mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: Hotel, label: "Hotel and resort bookings" },
                    { icon: Home, label: "Private villas and apartments" },
                    { icon: Car, label: "Ground services and transfers" },
                    { icon: MapPin, label: "Tour guide services" },
                    { icon: Compass, label: "Event management" },
                    { icon: Car, label: "Car rentals" },
                    { icon: Globe2, label: "Land and water activities" },
                  ].map(({ icon: Icon, label }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-xl border border-[var(--gold)]/15 bg-[var(--cream)]/5 px-3.5 py-2.5 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/40 transition-all"
                    >
                      <Icon className="h-4 w-4 text-[var(--gold)] shrink-0" />
                      <span className="text-xs md:text-sm text-[var(--cream)]/85 leading-tight">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AIM & MOTTO */}
      <section className="py-20 md:py-28 bg-paper relative overflow-hidden">
        {/* Decorative compass watermark */}
        <div className="absolute -bottom-20 -left-20 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]" fill="currentColor" aria-hidden="true">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M100 10 L110 90 L190 100 L110 110 L100 190 L90 110 L10 100 L90 90 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto max-w-5xl px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Our Aim */}
            <Reveal>
              <div className="relative rounded-2xl border border-[var(--gold)]/25 bg-card p-8 md:p-10 h-full shadow-lg">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--gold)]/50 rounded-tl-2xl" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--gold-deep)] to-[var(--gold)] text-[var(--ink)]">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-[var(--emerald)]">
                    Our aim
                  </h3>
                </div>
                <div className="h-px w-16 bg-[var(--gold)]/60 mb-6" />
                <p className="text-base md:text-lg text-[var(--ink)]/75 leading-relaxed font-light">
                  To be a reliable partner to our agents throughout the world and to provide our guests with unforgettable experiences, supported by our skilled professional team who deliver firsthand assistance with passion and dedication.
                </p>
              </div>
            </Reveal>

            {/* Our Motto */}
            <Reveal delay={0.15}>
              <div className="relative rounded-2xl bg-gradient-to-br from-[var(--emerald)] to-[var(--ink)] text-[var(--cream)] p-8 md:p-10 h-full shadow-lg overflow-hidden">
                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute -top-6 -right-6 text-[var(--gold)]/15">
                  <Quote className="h-24 w-24" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gold)]/20 text-[var(--gold)]">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-3xl font-semibold text-[var(--gold)]">
                      Our Motto
                    </h3>
                  </div>
                  <div className="h-px w-16 bg-[var(--gold)]/60 mb-6" />
                  <p className="font-display text-2xl md:text-3xl italic font-light leading-tight text-[var(--cream)]">
                    &ldquo;Our guests&apos; satisfaction is our achievement.&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[var(--emerald)] text-[var(--cream)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto max-w-4xl px-6 relative text-center">
          <SectionLabel>
            <span className="text-[var(--gold)]">Begin your journey</span>
          </SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mt-5 leading-[1.05]">
            Partner with
            <span className="block italic text-[var(--gold)]">Sunzee Holidays</span>
          </h2>
          <Ornament className="my-7" />
          <p className="text-[var(--cream)]/75 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Whether you&apos;re a travel agent seeking a reliable B2B partner or a traveller dreaming of the Indian Ocean, our team is ready to craft your next chapter.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#enquiry"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-8 py-4 text-sm font-semibold text-[var(--ink)] shadow-[0_8px_30px_-8px_rgba(122,96,51,0.7)] hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/40 bg-[var(--ink)]/20 backdrop-blur px-7 py-4 text-sm font-semibold text-[var(--cream)] hover:bg-[var(--ink)]/40 hover:border-[var(--gold)] transition-all"
            >
              <Phone className="h-4 w-4" />
              or call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--gold)]/20 bg-[var(--cream)]/5 px-2 py-3">
      <Icon className="h-4 w-4 text-[var(--gold)] mx-auto mb-1" />
      <div className="font-display text-xl font-semibold text-[var(--cream)] leading-none">
        {value}
      </div>
      <div className="text-[10px] text-[var(--cream)]/55 mt-1 tracking-wide">
        {label}
      </div>
    </div>
  );
}
