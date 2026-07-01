export const PROJECT = {
  name: "Residencial Pimentel",
  tagline: "Where Life Meets the Ocean.",
  eyebrow: "PREVENTA EXCLUSIVA · PIMENTEL",
  address: "Calle José Quiñones N.° 420, Malécón de Pimentel, Lambayeque, Perú.",
  whatsapp: "+51990798157",
  whatsappDisplay: "+51 990 798 157",
  whatsappMessage: "Hola, deseo recibir información sobre la preventa de Residencial Pimentel.",
  instagram: "@costiera.realty",
  developer: "Costiera Realty",
  totalUnits: 30,
  flats: 27,
  duplexes: 3,
  floors: 9,
} as const;

export const FLATS = [
  {
    id: "modelo-a", title: "Modelo A", area: "91.03 m²", bedrooms: 3, bathrooms: 2,
    features: ["3 dormitorios","2 baños","Dormitorio principal con vista al mar y baño incorporado","2 dormitorios secundarios","Sala-comedor","Cocina","Balcón privado con vista al mar","Lavandería"],
  },
  {
    id: "modelo-b", title: "Modelo B", area: "89.06 m²", bedrooms: 3, bathrooms: 2,
    features: ["3 dormitorios","2 baños","Dormitorio principal con vista al mar y baño incorporado","2 dormitorios secundarios","Sala-comedor","Cocina","Balcón privado con vista al mar","Lavandería"],
  },
] as const;

export const DUPLEXES = [
  {
    id: "duplex-i", title: "Dúplex I", area: "148 m²", bedrooms: 3, bathrooms: 3,
    primerPiso: ["Dormitorio principal con vista al mar y baño incorporado","2 dormitorios secundarios","2 baños","Sala-comedor","Cocina"],
    segundoPiso: ["Terraza privada con vista al mar","Baño de visitas","Cuarto y baño de servicio","Zona de parrilla","Lavandería"],
  },
  {
    id: "duplex-ii", title: "Dúplex II", area: "162 m²", bedrooms: 3, bathrooms: 4,
    primerPiso: ["Dormitorio principal con vista al mar y baño incorporado","2 dormitorios secundarios","Baños incorporados","Baño de visitas","Sala-comedor","Cocina"],
    segundoPiso: ["Terraza privada con vista al mar","Baño de visitas","Cuarto y baño de servicio","Zona de parrilla","Lavandería"],
  },
  {
    id: "duplex-iii", title: "Dúplex III", area: "175 m²", bedrooms: 3, bathrooms: 4,
    primerPiso: ["Dormitorio principal con vista al mar y baño incorporado","2 dormitorios secundarios","Baños incorporados","Baño de visitas","Sala-comedor","Cocina"],
    segundoPiso: ["Terraza privada con vista al mar","Baño de visitas","Cuarto y baño de servicio","Zona de parrilla","Lavandería"],
  },
] as const;

export const NAV_LINKS = [
  { label: "El Proyecto", href: "#proyecto" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Flats", href: "#flats" },
  { label: "Dúplex", href: "#duplex" },
  { label: "Áreas comunes", href: "#areas-comunes" },
  { label: "Contacto", href: "#contacto" },
] as const;
