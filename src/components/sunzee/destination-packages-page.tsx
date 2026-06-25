"use client";

import { useState } from "react";
import {
  Search,
  Clock,
  Star,
  MapPin,
  Calendar,
  Users,
  Filter,
  X,
  ChevronRight,
  Home,
  ArrowRight,
} from "lucide-react";
import {
  DestinationPackages,
  FILTER_FACILITIES,
  FILTER_CATEGORIES,
} from "./destination-data";
import { SITE } from "./data";
import { Ornament, SectionLabel } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function DestinationPackagesPage({ data }: { data: DestinationPackages }) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [priceMax, setPriceMax] = useState(1500);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFacility = (f: string) =>
    setSelectedFacilities((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );

  const resetFilters = () => {
    setPriceMax(1500);
    setSelectedFacilities([]);
    setSelectedCategory(null);
    setSearchQuery("");
  };

  const filteredPackages = data.packages.filter(
    (p) =>
      p.price <= priceMax &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex-1">
      {/* HERO BANNER */}
      <section className="relative h-[42vh] min-h-[300px] max-h-[440px] overflow-hidden bg-[var(--emerald)]">
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/50 via-[var(--ink)]/40 to-[var(--ink)]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--emerald)]/70 via-transparent to-[var(--emerald)]/40" />



        <div className="relative z-10 container mx-auto max-w-7xl px-6 h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--ink)]/30 backdrop-blur px-4 py-1.5 mb-5">
            <MapPin className="h-3.5 w-3.5 text-[var(--gold)]" />
            <span className="text-[10px] md:text-xs font-medium tracking-[0.32em] uppercase text-[var(--cream)]">
              East Africa &amp; Indian Ocean
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-[var(--cream)] leading-[1.05]">
            {data.title}
          </h1>
          <Ornament className="my-5" />
          <p className="text-base md:text-lg text-[var(--cream)]/85 font-light italic font-display">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-[var(--emerald)] text-[var(--cream)] border-b border-[var(--gold)]/20">
        <div className="container mx-auto max-w-7xl px-6 py-3 flex items-center justify-between text-xs">
          <nav className="flex items-center gap-1.5 text-[var(--cream)]/70">
            <a href="/" className="hover:text-[var(--gold)] flex items-center gap-1.5 transition-colors">
              <Home className="h-3 w-3" />
              Home
            </a>
            <ChevronRight className="h-3 w-3 text-[var(--gold)]" />
            <span className="text-[var(--gold)]">{data.title}</span>
          </nav>
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-1.5 rounded-full border border-[var(--gold)]/30 px-3 py-1.5 text-[var(--cream)] hover:bg-[var(--gold)]/10 transition-colors"
          >
            <Filter className="h-3.5 w-3.5" />
            Filters
          </button>
        </div>
      </div>

      {/* MAIN CONTENT: grid + sidebar */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* LEFT: package grid */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <Reveal className="flex items-end justify-between mb-8">
                <div>
                  <SectionLabel>
                    {data.name} journeys
                  </SectionLabel>
                  <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--emerald)] mt-4 leading-tight">
                    Packages
                  </h2>
                </div>
                <p className="text-sm text-[var(--ink)]/50 hidden sm:block">
                  Showing <span className="font-semibold text-[var(--gold-deep)]">{filteredPackages.length}</span> of {data.packages.length} packages
                </p>
              </Reveal>

              <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {filteredPackages.map((pkg) => (
                  <RevealItem key={pkg.name}>
                    <article className="group relative overflow-hidden rounded-2xl bg-card border border-[var(--gold)]/20 shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative aspect-[16/11] overflow-hidden bg-[var(--emerald)]">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent" />
                        {/* Duration badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-[var(--ink)]/60 backdrop-blur text-[var(--cream)] px-2.5 py-1 text-[10px] font-medium tracking-wide">
                          <Clock className="h-3 w-3 text-[var(--gold)]" />
                          {pkg.duration}
                        </div>
                        {/* Rating */}
                        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-[var(--gold)] text-[var(--ink)] px-2.5 py-1 text-[10px] font-bold">
                          <Star className="h-3 w-3 fill-current" />
                          {pkg.rating}.0
                        </div>
                        {/* Title overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <h3 className="font-display text-xl md:text-2xl font-medium text-[var(--cream)] leading-tight">
                            {pkg.name}
                          </h3>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-sm text-[var(--ink)]/65 leading-relaxed mb-4 flex-1">
                          {pkg.description}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-[var(--gold)]/15">
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/50">
                              From
                            </div>
                            <div className="font-display text-2xl font-semibold text-[var(--emerald)]">
                              ${pkg.price}
                            </div>
                          </div>
                          <a
                            href={`mailto:${SITE.bookingEmail}?subject=Enquiry: ${pkg.name} (${data.title})`}
                            className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-5 py-2.5 text-xs font-semibold text-[var(--ink)] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                          >
                            Book Now
                            <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--ink)]/10 group-hover/btn:translate-x-0.5 transition-transform">
                              →
                            </span>
                          </a>
                        </div>
                      </div>

                      {/* Hover gold accent bar */}
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--gold-deep)] via-[var(--gold)] to-[var(--gold-deep)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </article>
                  </RevealItem>
                ))}
              </RevealStagger>

              {filteredPackages.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-[var(--ink)]/60">No packages match your filters.</p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 rounded-full border border-[var(--emerald)]/30 px-5 py-2 text-sm text-[var(--emerald)] hover:bg-[var(--gold)]/10 transition-colors"
                  >
                    Reset filters
                  </button>
                </div>
              )}

              {/* CTA strip */}
              <div className="mt-10 rounded-2xl bg-[var(--emerald)] text-[var(--cream)] p-7 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                <div className="relative flex-1">
                  <SectionLabel>
                    <span className="text-[var(--gold)]">Need a custom itinerary?</span>
                  </SectionLabel>
                  <h3 className="font-display text-2xl md:text-3xl font-medium mt-3">
                    Tailor your dream {data.name} journey
                  </h3>
                  <p className="text-sm text-[var(--cream)]/70 mt-2 max-w-xl">
                    Every Sunzee journey is private and bespoke. Tell us your dates, interests and budget, and we&apos;ll craft the rest.
                  </p>
                </div>
                <a
                  href="#enquiry"
                  className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  Enquire Now
                </a>
              </div>
            </div>

            {/* RIGHT: filter sidebar */}
            <aside className="lg:col-span-4 order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-5">
                {/* Search box */}
                <div className="rounded-2xl border border-[var(--gold)]/20 bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Search className="h-4 w-4 text-[var(--gold)]" />
                    <h3 className="font-display text-lg font-semibold text-[var(--emerald)]">
                      Search
                    </h3>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search packages..."
                      className="w-full rounded-xl border border-[var(--gold)]/30 bg-[var(--cream)]/50 px-4 py-2.5 pr-10 text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 grid h-7 w-7 place-items-center rounded-full hover:bg-[var(--gold)]/10 text-[var(--ink)]/50"
                      aria-label="Clear search"
                    >
                      {searchQuery ? <X className="h-3.5 w-3.5" /> : <Search className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSearchQuery(searchQuery)}
                    className="mt-3 w-full rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-4 py-2 text-xs font-semibold text-[var(--ink)] hover:shadow-md transition-all"
                  >
                    Search Now
                  </button>
                </div>

                {/* Price range */}
                <FilterCard title="Price Range" icon="$">
                  <input
                    type="range"
                    min={500}
                    max={1500}
                    step={50}
                    value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value))}
                    className="w-full accent-[var(--gold-deep)]"
                  />
                  <div className="flex items-center justify-between text-xs text-[var(--ink)]/60 mt-2">
                    <span>$500</span>
                    <span className="font-semibold text-[var(--gold-deep)]">Up to ${priceMax}</span>
                  </div>
                </FilterCard>

                {/* Rating */}
                <FilterCard title="Rating" icon={<Star className="h-4 w-4 text-[var(--gold)]" />}>
                  <div className="space-y-2">
                    {[5, 4, 3].map((r) => (
                      <label key={r} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded accent-[var(--gold-deep)]"
                        />
                        <span className="flex items-center gap-1 text-sm text-[var(--ink)]/70 group-hover:text-[var(--emerald)] transition-colors">
                          {Array.from({ length: r }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" />
                          ))}
                          <span className="ml-1">{r}.0 &amp; up</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </FilterCard>

                {/* Facilities */}
                <FilterCard title="Facilities" icon={<Filter className="h-4 w-4 text-[var(--gold)]" />}>
                  <div className="space-y-2.5">
                    {FILTER_FACILITIES.map((f) => (
                      <label key={f} className="flex items-center gap-2.5 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedFacilities.includes(f)}
                          onChange={() => toggleFacility(f)}
                          className="h-4 w-4 rounded accent-[var(--gold-deep)]"
                        />
                        <span className="text-sm text-[var(--ink)]/70 group-hover:text-[var(--emerald)] transition-colors">
                          {f}
                        </span>
                      </label>
                    ))}
                    <button className="text-xs text-[var(--gold-deep)] hover:underline mt-1">
                      View More
                    </button>
                  </div>
                </FilterCard>

                {/* Categories */}
                <FilterCard title="Categories" icon={<ArrowRight className="h-4 w-4 text-[var(--gold)]" />}>
                  <ul className="space-y-2.5">
                    {FILTER_CATEGORIES.map((c) => (
                      <li key={c}>
                        <button
                          type="button"
                          onClick={() => setSelectedCategory(selectedCategory === c ? null : c)}
                          className={`flex items-center justify-between w-full text-sm text-left transition-colors ${
                            selectedCategory === c
                              ? "text-[var(--gold-deep)] font-semibold"
                              : "text-[var(--ink)]/70 hover:text-[var(--emerald)]"
                          }`}
                        >
                          <span>{c}</span>
                          <ChevronRight className="h-3 w-3" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </FilterCard>

                {/* Reset */}
                <button
                  type="button"
                  onClick={resetFilters}
                  className="w-full rounded-full border border-[var(--emerald)]/30 px-4 py-2.5 text-sm font-medium text-[var(--emerald)] hover:bg-[var(--gold)]/10 transition-colors"
                >
                  Reset all filters
                </button>

                {/* Quick contact */}
                <div className="rounded-2xl bg-[var(--emerald)] text-[var(--cream)] p-5 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-4 w-4 text-[var(--gold)]" />
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)]">
                        Talk to a specialist
                      </span>
                    </div>
                    <p className="text-sm text-[var(--cream)]/80 mb-4">
                      Our {data.name} experts are one call away.
                    </p>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="block rounded-xl bg-[var(--gold)] text-[var(--ink)] px-4 py-2.5 text-center text-sm font-semibold hover:bg-[var(--gold-deep)] hover:text-[var(--cream)] transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Enquiry anchor */}
      <section id="enquiry" className="py-20 md:py-24 bg-[var(--emerald)] text-[var(--cream)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto max-w-4xl px-6 relative text-center">
          <SectionLabel>
            <span className="text-[var(--gold)]">Plan your {data.name} journey</span>
          </SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mt-5 leading-[1.05]">
            Begin your
            <span className="block italic text-[var(--gold)]">extraordinary story</span>
          </h2>
          <Ornament className="my-7" />
          <p className="text-[var(--cream)]/75 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Tell us which package caught your eye, your travel dates and group size. We&apos;ll send a tailor-made proposal within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${SITE.bookingEmail}?subject=Enquiry: ${data.title}`}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)] px-8 py-4 text-sm font-semibold text-[var(--ink)] shadow-[0_8px_30px_-8px_rgba(122,96,51,0.7)] hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="h-4 w-4" />
              BOOK NOW
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/40 bg-[var(--ink)]/20 backdrop-blur px-7 py-4 text-sm font-semibold text-[var(--cream)] hover:bg-[var(--ink)]/40 hover:border-[var(--gold)] transition-all"
            >
              or call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-[var(--ink)]/60 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85%] bg-cream shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[var(--gold)]/20 sticky top-0 bg-[var(--cream)] z-10">
              <h3 className="font-display text-lg font-semibold text-[var(--emerald)]">Filters</h3>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--gold)]/10"
                aria-label="Close filters"
              >
                <X className="h-5 w-5 text-[var(--emerald)]" />
              </button>
            </div>
            <div className="p-4 space-y-5">
              {/* Mobile search */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages..."
                className="w-full rounded-xl border border-[var(--gold)]/30 bg-[var(--cream)]/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
              />
              {/* Price */}
              <div>
                <h4 className="font-display text-base font-semibold text-[var(--emerald)] mb-2">Price Range</h4>
                <input
                  type="range"
                  min={500}
                  max={1500}
                  step={50}
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[var(--gold-deep)]"
                />
                <div className="flex justify-between text-xs text-[var(--ink)]/60 mt-1">
                  <span>$500</span>
                  <span className="font-semibold text-[var(--gold-deep)]">Up to ${priceMax}</span>
                </div>
              </div>
              {/* Facilities */}
              <div>
                <h4 className="font-display text-base font-semibold text-[var(--emerald)] mb-2">Facilities</h4>
                <div className="space-y-2">
                  {FILTER_FACILITIES.map((f) => (
                    <label key={f} className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFacilities.includes(f)}
                        onChange={() => toggleFacility(f)}
                        className="h-4 w-4 rounded accent-[var(--gold-deep)]"
                      />
                      <span className="text-sm text-[var(--ink)]/70">{f}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Categories */}
              <div>
                <h4 className="font-display text-base font-semibold text-[var(--emerald)] mb-2">Categories</h4>
                <ul className="space-y-2">
                  {FILTER_CATEGORIES.map((c) => (
                    <li key={c}>
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(selectedCategory === c ? null : c)}
                        className={`text-sm ${selectedCategory === c ? "text-[var(--gold-deep)] font-semibold" : "text-[var(--ink)]/70"}`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => {
                  resetFilters();
                  setMobileFilterOpen(false);
                }}
                className="w-full rounded-full border border-[var(--emerald)]/30 px-4 py-2.5 text-sm font-medium text-[var(--emerald)]"
              >
                Reset filters
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function FilterCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[var(--gold)]/20 bg-card p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        {typeof icon === "string" ? (
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--gold)]/15 text-[var(--gold-deep)] font-display font-bold text-sm">
            {icon}
          </span>
        ) : (
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--gold)]/15">
            {icon}
          </span>
        )}
        <h3 className="font-display text-lg font-semibold text-[var(--emerald)]">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

// Layout wrapper that adds the page-shell chrome (header + footer + floating)
export function DestinationPageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
