import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { DestinationPackagesPage } from "@/components/sunzee/destination-packages-page";
import { EGYPT_PACKAGES } from "@/components/sunzee/destination-data";

export const metadata: Metadata = {
  title: "Egypt Tour Packages - Sunzee Holidays",
  description:
    "Discover Egypt tour packages from Sunzee Holidays. Nile cruises, Pyramids of Giza, Luxor temples, Red Sea escapes and bespoke Pharaonic journeys.",
};

export default function EgyptTourPackagesPage() {
  return (
    <PageShell>
      <DestinationPackagesPage data={EGYPT_PACKAGES} />
    </PageShell>
  );
}
