import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { DestinationPackagesPage } from "@/components/sunzee/destination-packages-page";
import { REUNION_PACKAGES } from "@/components/sunzee/destination-data";

export const metadata: Metadata = {
  title: "Reunion Tour Packages - Sunzee Holidays",
  description:
    "Discover Reunion island tour packages from Sunzee Holidays. Piton de la Fournaise volcano, Mafate cirque trek, Cilaos hot springs and Indian Ocean getaways.",
};

export default function ReunionTourPackagesPage() {
  return (
    <PageShell>
      <DestinationPackagesPage data={REUNION_PACKAGES} />
    </PageShell>
  );
}
