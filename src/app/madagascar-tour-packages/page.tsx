import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { DestinationPackagesPage } from "@/components/sunzee/destination-packages-page";
import { MADAGASCAR_PACKAGES } from "@/components/sunzee/destination-data";

export const metadata: Metadata = {
  title: "Madagascar Tour Packages - Sunzee Holidays",
  description:
    "Discover Madagascar tour packages from Sunzee Holidays. Avenue of the Baobabs, lemur tracking in Andasibe, Tsingy de Bemaraha, Nosy Be beaches and bespoke wildlife safaris.",
};

export default function MadagascarTourPackagesPage() {
  return (
    <PageShell>
      <DestinationPackagesPage data={MADAGASCAR_PACKAGES} />
    </PageShell>
  );
}
