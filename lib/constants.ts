export const SITE = {
  name: "Murmur de Izvor",
  tagline: "Rafinament în mijlocul naturii",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://murmurdeizvor.md",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000",
  address: "Drasliceni - Ratus, MD-4821, Drăsliceni, Moldova",
  addressShort: "Drăsliceni, Moldova",
  phone: "+373 00 000 000",
  email: "contact@murmurdeizvor.md",
  // Coordinates for embedded map (approximate — Drăsliceni)
  mapEmbed:
    "https://www.google.com/maps?q=Drasliceni+Ratus+MD-4821+Drasliceni+Moldova&hl=ro&z=15&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Drasliceni+Ratus+MD-4821+Drasliceni+Moldova",
  social: {
    instagram: "#",
    facebook: "#",
  },
};

export const NAV_LINKS = [
  { id: "despre", label: "Despre noi" },
  { id: "galerie", label: "Galerie" },
  { id: "evenimente", label: "Evenimente" },
  { id: "recenzii", label: "Recenzii" },
  { id: "contacte", label: "Contacte" },
];

// Placeholder gallery — replace src with real photos in /public/images
export const GALLERY_IMAGES: {
  src: string;
  alt: string;
  category: "Interior" | "Exterior" | "Toate";
}[] = [
  {
    src: "\images\IMG_4616.jpeg",
    alt: "1",
    category: "Interior",
  },
  {
    src: "/images/IMG_4733.jpeg",
    alt: "2",
    category: "Interior",
  },
  {
    src: "/images/IMG_4693.jpeg",
    alt: "3",
    category: "Interior",
  },
  {
    src: "/images/IMG_4688.jpeg",
    alt: "4",
    category: "Exterior",
  },
  {
    src: "/images/IMG_4686.jpeg",
    alt: "5",
    category: "Exterior",
  },
  {
    src: "/images/IMG_4708.jpeg",
    alt: "6",
    category: "Exterior",
  },
  {
    src: "/images/IMG_4702.jpeg",
    alt: "7",
    category: "Exterior",
  },
  {
    src: "/images/IMG_4704.jpeg",
    alt: "8",
    category: "Exterior",
  },
  {
    src: "/images/IMG_4694.jpeg",
    alt: "9",
    category: "Exterior",
  },
  {
    src: "/images/IMG_4739.jpeg",
    alt: "10",
    category: "Exterior",
  },
];

export const EVENT_TYPES = [
  {
    title: "Nunți",
    description:
      "Un cadru elegant și natural pentru ziua celor mai importante promisiuni.",
  },
  {
    title: "Cumetrii",
    description:
      "Sărbători de familie într-un spațiu cald, intim și atent decorat.",
  },
  {
    title: "Aniversări & Seri tematice",
    description:
      "Seri intime, lumină caldă și o gastronomie pe măsura momentului.",
  },
  {
    title: "Coorporative",
    description:
      "Întâlniri de afaceri și team-building într-un cadru discret și profesionist.",
  },
  {
    title: "Banchete & Private dining",
    description:
      "Spațiu adaptabil pentru reuniuni restrânse și evenimente exclusiviste.",
  }
];

export const EVENT_OPTIONS = [
  "Rezervare",
  "Eveniment privat",
  "Corporate",
  "Altă solicitare",
] as const;

// Mock reviews — replace with real testimonials when available
export const REVIEWS: {
  name: string;
  rating: number;
  text: string;
  context?: string;
}[] = [
  {
    name: "Doina Nichita",
    rating: 5,
    text: "Restaurantul Murmur de Izvor este o oază culinară ce te întâmpină cu ospitalitate și arome autentice. Atmosfera este relaxantă, iar mâncarea este delicioasă, preparată cu ingrediente proaspete și pasiune. Serviciul este impecabil, iar experiența este una de neuitat. Recomand cu încredere",
    context: "Nuntă",
  },
  {
    name: "Daniel Turcan",
    rating: 5,
    text: "Un local foarte frumos, într-o zonă liniștită. Mâncarea este buna și diversificata. Personalul foarte amabil. Vin la a doua nuntă aici și mereu rămân satisfăcut. Recomand cu încredere!",
    context: "Aniversare",
  },
  {
    name: "Gavgas Gabriela",
    rating: 5,
    text: "Nunta noastră a avut loc la Murmur de Izvor Iunie 2023. Totul a fost la superlativ, mâncare foarte gustoasă, personal politicos și cred ca nu vom uita niciodata dansul ospătarilor atunci când s-au servit sarmalele :) am fost plăcut surprinși. Locul e minunat în sânul naturii, apusul a fost extraordinar. Recomand cu căldură tuturor această locație!",
    context: "Nuntă",
  },
  {
    name: "Andrei P.",
    rating: 5,
    text: "Am fost oaspete la o nuntă în acest restaurant, am intrat să scriu un o recenzie special din motivul că mancarea a fost gustoasă. Am remarcat gustul deosebit la multe bucate de pe masă, nici o gustare cu maioneză și în general era foarte sănătoasă. Mulțumim!",
    context: "Nuntă",
  },
];
