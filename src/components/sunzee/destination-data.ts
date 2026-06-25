// Tour package data for each destination listing page.
// Layout pattern matches the screenshot: hero banner, breadcrumb,
// 8-package grid on the left + filter sidebar on the right.

export type TourPackage = {
  name: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  rating: number;
};

export type DestinationPackages = {
  slug: string;          // url slug
  name: string;          // "Egypt"
  title: string;         // "Egypt Tour Packages"
  subtitle: string;      // hero subtitle
  heroImage: string;
  heroImageMobile: string;
  packages: TourPackage[];
};

export const EGYPT_PACKAGES: DestinationPackages = {
  slug: "egypt-tour-packages",
  name: "Egypt",
  title: "Egypt Tour Packages",
  subtitle: "Discover the Wonders of Ancient Egypt",
  heroImage: "https://sfile.chatglm.cn/images-ppt/cb282bb90c0c.jpg",
  heroImageMobile: "https://sfile.chatglm.cn/images-ppt/396c5ddf9e98.jpeg",
  packages: [
    {
      name: "Jewels of the Nile",
      price: 859,
      duration: "7 Days / 6 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/396c5ddf9e98.jpeg",
      description:
        "Cruise the legendary Nile from Luxor to Aswan, exploring the temples of Karnak, Edfu and Philae.",
      rating: 5,
    },
    {
      name: "Pyramids & Sphinx Discovery",
      price: 659,
      duration: "5 Days / 4 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/7d64936af8a9.jpg",
      description:
        "Stand before the last remaining Wonder of the Ancient World and uncover the secrets of Giza.",
      rating: 5,
    },
    {
      name: "Cairo to Luxor Explorer",
      price: 859,
      duration: "8 Days / 7 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/2225f176213d.jpg",
      description:
        "From the Egyptian Museum's treasures to the Valley of the Kings, trace 5,000 years of civilisation.",
      rating: 4,
    },
    {
      name: "Treasures of the Pharaohs",
      price: 659,
      duration: "6 Days / 5 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/ed1d8768f01a.jpg",
      description:
        "Walk in the footsteps of Ramses II and Tutankhamun, with private access to royal tombs.",
      rating: 5,
    },
    {
      name: "Red Sea Riviera Escape",
      price: 650,
      duration: "5 Days / 4 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/c14a328f493a.jpg",
      description:
        "Snorkel the coral gardens of Hurghada and unwind at a beachfront resort on the Red Sea.",
      rating: 4,
    },
    {
      name: "Desert Oasis Adventure",
      price: 750,
      duration: "6 Days / 5 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/e0605e568b8c.jpg",
      description:
        "Trek the dunes of the Western Desert to the Siwa Oasis, salt lakes and Bedouin camps.",
      rating: 4,
    },
    {
      name: "Ancient Wonders of Egypt",
      price: 859,
      duration: "9 Days / 8 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/80117b2ad42f.jpg",
      description:
        "A grand loop covering Cairo, Luxor, Aswan and Abu Simbel, Egypt's most iconic monuments.",
      rating: 5,
    },
    {
      name: "Royal Egyptian Grandeur",
      price: 1100,
      duration: "10 Days / 9 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/51a5831977b6.jpg",
      description:
        "Five-star Nile cruise, private guides and a sunrise hot-air balloon over the Valley of the Kings.",
      rating: 5,
    },
  ],
};

export const REUNION_PACKAGES: DestinationPackages = {
  slug: "reunion-tour-packages",
  name: "Reunion",
  title: "Reunion Tour Packages",
  subtitle: "Volcanic Peaks, Cirques & Indian Ocean Charm",
  heroImage: "https://sfile.chatglm.cn/images-ppt/8d87cfa820aa.jpg",
  heroImageMobile: "https://sfile.chatglm.cn/images-ppt/3eadce2d34cb.jpg",
  packages: [
    {
      name: "Cirques of Reunion Trek",
      price: 1100,
      duration: "8 Days / 7 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/3eadce2d34cb.jpg",
      description:
        "Hike the spectacular cirques of Mafate, Salazie and Cilaos, a UNESCO World Heritage landscape.",
      rating: 5,
    },
    {
      name: "Piton de la Fournaise Volcano",
      price: 859,
      duration: "5 Days / 4 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/dd058a9c939e.jpg",
      description:
        "Climb one of the world's most active volcanoes and walk across its otherworldly lava fields.",
      rating: 5,
    },
    {
      name: "Reunion Island Grand Tour",
      price: 950,
      duration: "7 Days / 6 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/7fe104385422.jpg",
      description:
        "Circle the island from Saint-Denis to the wild south, with stops at every must-see viewpoint.",
      rating: 4,
    },
    {
      name: "Mafate Wilderness Expedition",
      price: 1200,
      duration: "6 Days / 5 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/9f09fe98f799.jpg",
      description:
        "Multi-day trek into the inaccessible cirque of Mafate, reachable only on foot or by helicopter.",
      rating: 5,
    },
    {
      name: "Cilaos Hot Springs Retreat",
      price: 750,
      duration: "4 Days / 3 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/690bcfe90052.jpg",
      description:
        "Soak in thermal springs, sample Cilaos wine and trek to the Bras de Cilaos canyon.",
      rating: 4,
    },
    {
      name: "Saint-Denis City & Coast",
      price: 650,
      duration: "4 Days / 3 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/5ae2dc39a2e4.jpg",
      description:
        "Discover Creole architecture, colourful markets and the seaside promenade of the capital.",
      rating: 4,
    },
    {
      name: "Reunion Lagoon & Reef",
      price: 700,
      duration: "5 Days / 4 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/2b1c9f737817.jpg",
      description:
        "Snorkel the Ermitage lagoon, kayak the Saint-Gilles coastline and watch sea turtles glide past.",
      rating: 5,
    },
    {
      name: "Tropical Reunion Honeymoon",
      price: 1400,
      duration: "9 Days / 8 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/6ee1f0d584eb.jpg",
      description:
        "Luxury resorts, private volcano sunrise, helicopter flight over the cirques and candle-lit dinners.",
      rating: 5,
    },
  ],
};

export const MADAGASCAR_PACKAGES: DestinationPackages = {
  slug: "madagascar-tour-packages",
  name: "Madagascar",
  title: "Madagascar Tour Packages",
  subtitle: "Baobabs, Lemurs & Endemic Wildlife",
  heroImage: "https://sfile.chatglm.cn/images-ppt/cfc58aa1c5dd.jpg",
  heroImageMobile: "https://sfile.chatglm.cn/images-ppt/d9feda4fcf3a.jpg",
  packages: [
    {
      name: "Avenue of the Baobabs",
      price: 1100,
      duration: "8 Days / 7 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/d9feda4fcf3a.jpg",
      description:
        "Watch the sun set behind Madagascar's iconic baobab avenue and explore Morondava's coastal villages.",
      rating: 5,
    },
    {
      name: "Lemurs of Andasibe",
      price: 859,
      duration: "5 Days / 4 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/be187597cf67.jpg",
      description:
        "Track the Indri indri, the largest living lemur, through the misty rainforests of Andasibe.",
      rating: 5,
    },
    {
      name: "Tsingy de Bemaraha Expedition",
      price: 1500,
      duration: "9 Days / 8 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/a5eb6cee3034.jpeg",
      description:
        "Cross the suspended bridges of the Stone Forest, a UNESCO-listed labyrinth of razor-sharp limestone.",
      rating: 5,
    },
    {
      name: "Nosy Be Island Escape",
      price: 950,
      duration: "6 Days / 5 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/559c45d768e6.jpg",
      description:
        "Sail the Nosy Be archipelago, snorkel coral reefs and unwind on Ylang-Ylang-scented beaches.",
      rating: 4,
    },
    {
      name: "Ranomafana Rainforest Trek",
      price: 1100,
      duration: "7 Days / 6 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/f8abbf15c60c.jpg",
      description:
        "Night walks in search of mouse lemurs and chameleons in one of Madagascar's richest national parks.",
      rating: 5,
    },
    {
      name: "Royal Hill of Ambohimanga",
      price: 650,
      duration: "4 Days / 3 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/3a3c69504aca.jpg",
      description:
        "Discover the spiritual heart of the Merina kingdom and explore the capital Antananarivo.",
      rating: 4,
    },
    {
      name: "Madagascar Wildlife Safari",
      price: 1300,
      duration: "10 Days / 9 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/804d1ac7b148.jpeg",
      description:
        "A complete loop: Andasibe, Ranomafana, Isalo and Anja, with lemurs, tenrecs, fossa and 100+ endemics.",
      rating: 5,
    },
    {
      name: "Ifaty Beach & Spiny Forest",
      price: 900,
      duration: "6 Days / 5 Nights",
      image: "https://sfile.chatglm.cn/images-ppt/80af4086fb18.jpg",
      description:
        "Kayak the lagoon of Ifaty and walk among octopus trees and baobabs in the unique spiny forest.",
      rating: 4,
    },
  ],
};

export const DESTINATION_PACKAGE_MAP: Record<string, DestinationPackages> = {
  "egypt-tour-packages": EGYPT_PACKAGES,
  "reunion-tour-packages": REUNION_PACKAGES,
  "madagascar-tour-packages": MADAGASCAR_PACKAGES,
};

// Sidebar filter options (shared across all destination pages, as in the original screenshot)
export const FILTER_FACILITIES = [
  "Free Wifi",
  "Swimming Pool",
  "Daily Housekeeping",
  "Exclusive Bar and Lounge",
  "Spa & Wellness",
  "Airport Shuttle",
];

export const FILTER_CATEGORIES = [
  "Nile Cruise Holidays",
  "Family Adventure",
  "Honeymoon Special",
  "Wildlife & Safari",
  "Cultural & Heritage",
  "Beach & Island Escape",
];
