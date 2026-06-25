import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunzee Holidays - Best Destination Management Company in East Africa",
  description:
    "Sunzee Holidays - Best Destination Management Company in East Africa. Plan your tour to Egypt, Kenya, Zanzibar, Mauritius, Madagascar and Reunion with us.",
  keywords: [
    "Sunzee Holidays",
    "East Africa tours",
    "Egypt tour packages",
    "Kenya tours",
    "Zanzibar holidays",
    "Mauritius packages",
    "Madagascar tours",
    "Reunion holidays",
  ],
  authors: [{ name: "Sunzee Holidays" }],
  icons: {
    icon: "/sunzee/logo-square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
