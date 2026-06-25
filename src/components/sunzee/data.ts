// All content sourced verbatim from https://www.sunzeeholidays.com/
// Only the text content is preserved; images are external high-quality stock photos.

export const SITE = {
  name: "Sunzee Holidays",
  tagline: "Best Destination Management Company in East Africa",
  email: "product@sunzeeholidays.com",
  bookingEmail: "info@sunzeeholidays.com",
  phone: "+23058374275",
  phoneRaw: "23058374275",
  copyright: "Copyright © 2026 Sunzee Holidays.",
  maintainedBy: "Infinityweb",
  maintainedByUrl: "https://www.infinityweb.in",
  facebook: "https://www.facebook.com/sunzeeholidays",
  instagram: "https://www.instagram.com/sunzeeholidays_official/",
  youtube: "https://www.youtube.com/channel/UCcydb-PEbQLeGlAYbmAg6ag",
  twitter: "#",
  linkedin: "#",
  pinterest: "#",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Tour Packages",
    href: "/egypt-tour-packages",
    children: [
      { label: "Egypt Tour Packages", href: "/egypt-tour-packages" },
      { label: "Reunion Tour Packages", href: "/reunion-tour-packages" },
      { label: "Madagascar Tour Packages", href: "/madagascar-tour-packages" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const DESTINATIONS = [
  {
    name: "Egypt",
    caption: "Plan Your Tour to Egypt With Us.",
    href: "/egypt-tour-packages",
    image: "https://sfile.chatglm.cn/images-ppt/cb282bb90c0c.jpg",
    blurb:
      "Cruise the Nile, stand before the Pyramids of Giza, and lose yourself in the bazaars of Cairo.",
  },
  {
    name: "Kenya",
    caption: "Plan Your Tour to Kenya With Us.",
    href: "#kenya",
    image: "https://sfile.chatglm.cn/images-ppt/640772c2943f.jpg",
    blurb:
      "Witness the great migration across the Maasai Mara and track the Big Five on a flagship safari.",
  },
  {
    name: "Zanzibar",
    caption: "Plan Your Tour to Zanzibar With Us.",
    href: "#zanzibar",
    image: "https://sfile.chatglm.cn/images-ppt/f2a6013672ab.jpg",
    blurb:
      "Spice-trade history, Stone Town lanes, and powdery white beaches lapped by turquoise tides.",
  },
  {
    name: "Mauritius",
    caption: "Plan Your Tour to Mauritius With Us.",
    href: "#mauritius",
    image: "https://sfile.chatglm.cn/images-ppt/208fd6674588.jpg",
    blurb:
      "Coral lagoons, lush interior peaks, and a melting pot of Creole, French and Indian culture.",
  },
  {
    name: "Madagascar",
    caption: "Plan Your Tour to Madagascar With Us.",
    href: "/madagascar-tour-packages",
    image: "https://sfile.chatglm.cn/images-ppt/cfc58aa1c5dd.jpg",
    blurb:
      "Walk the Avenue of the Baobabs, meet lemurs in wild rainforests, and explore otherworldly rock.",
  },
  {
    name: "Reunion",
    caption: "Plan Your Tour to Reunion With Us.",
    href: "/reunion-tour-packages",
    image: "https://sfile.chatglm.cn/images-ppt/8d87cfa820aa.jpg",
    blurb:
      "Hike a still-active volcano, circle the cirques of Mafate and Cilaos, and surf world-class breaks.",
  },
] as const;

export const TOUR_PACKAGES = [
  { label: "Egypt Tour Packages", href: "/egypt-tour-packages" },
  { label: "Reunion Tour Packages", href: "/reunion-tour-packages" },
  { label: "Madagascar Tour Packages", href: "/madagascar-tour-packages" },
] as const;

export const IMPORTANT_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/#contact" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

export const HERO_SLIDES = [
  "/sunzee/slide1.png",
  "/sunzee/slide2.png",
  "/sunzee/slide3.png",
] as const;

export const CTA_IMAGE = "https://sfile.chatglm.cn/images-ppt/b8db4d3ffd6c.jpg" as const;
