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
  category: "Bucătărie" | "Interior" | "Exterior" | "Evenimente";
}[] = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    alt: "Interior elegant cu lemn natural",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
    alt: "Sală principală cu lumină caldă",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1600&q=80",
    alt: "Terasă exterioară",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1600&q=80",
    alt: "Eveniment privat",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1600&q=80",
    alt: "Detaliu de masă",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80",
    alt: "Pahare aliniate pentru eveniment",
    category: "Interior",
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
  },
  {
    title: "Botezuri & Petreceri private",
    description:
      "Atenție la detalii și flexibilitate pentru momentele care contează.",
  },
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
