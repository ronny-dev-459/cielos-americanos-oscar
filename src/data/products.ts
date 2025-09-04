export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs?: string[];
  tags?: string[];
  isService?: boolean;
};

export const categories = ["Cielos Modulares", "Perfilería", "Luminaria"];

export const categoriesWithImages = [
  {
    name: "Cielos Modulares",
    image: "/assets/products/CIELOS MODULARES/3.2_CODIGO_CAOP01_Palmeta_Metalica_Acustiplak.webp",
    alt: "Palmetas metálicas y fibra mineral para cielos americanos"
  },
  {
    name: "Perfilería", 
    image: "/assets/products/perfileria/4.1 CODIGO CAOPER01 Principal 1516 o 916 espesor 0,4mm.webp",
    alt: "Perfiles principales y secundarios para estructura"
  },
  {
    name: "Luminaria",
    image: "/assets/products/LUMINARIA/5.1_CODIGO_CAOLUM01_Panel_Led_Back_Light_FOTO1.webp",
    alt: "Paneles LED y luminarias técnicas"
  }
];

export const products: Product[] = [
  // ===== CIELOS MODULARES =====
  {
    id: "INSTALACION",
    name: "Instalación de Cielo Americano",
    category: "Cielos Modulares",
    image: "/assets/products/CIELOS MODULARES/3.1 INSTALACION.webp",
    description: "Servicio profesional de instalación de cielos americanos, garantizando un acabado impecable y duradero.",
    isService: true,
    tags: ["Servicio", "Instalación", "Profesional"]
  },
  {
    id: "CAOP01",
    name: "CAOP01 - Palmeta Metálica Acustiplak Acero Perforada 2x2",
    category: "Cielos Modulares",
    image: "/assets/products/CIELOS MODULARES/3.2_CODIGO_CAOP01_Palmeta_Metalica_Acustiplak.webp",
    description: "Palmeta de acero galvanizado con acabado en pintura en polvo, ideal para espacios que requieren durabilidad y estética.",
    specs: [
      "Fabricado en acero galvanizado de alta resistencia",
      "Acabado en pintura en polvo",
      "Medidas de modulación: 0,61 x 0,61 m",
      "Rebaje: 15/16 y 9/16"
    ],
    tags: ["Pasillos", "Oficinas", "Corporativo", "Tiendas"]
  },
  {
    id: "CAOFM01",
    name: "CAOFM01 - Fibra Mineral Granulada",
    category: "Cielos Modulares",
    image: "/assets/products/CIELOS MODULARES/3.3_CODIGO_CAOFM01_Fibra_Mineral_Granulada.webp",
    description: "Placa de fibra mineral granulada de 12 mm con acabado liso, perfecta para espacios que requieren acústica y estética.",
    specs: [
      "Material: Fibra mineral granulada",
      "Espesor: 12 mm",
      "Acabado: Liso",
      "Aplicación: Oficinas, locales comerciales, educación"
    ],
    tags: ["Oficinas", "Locales", "Educación", "Acústica"]
  },
  {
    id: "CAOFM02",
    name: "CAOFM02 - Fibra Mineral Fisurada",
    category: "Cielos Modulares",
    image: "/assets/products/CIELOS MODULARES/3.4_CODIGO_CAOFM02_Fibra_Mineral_Fisurada.webp",
    description: "Placa de fibra mineral fisurada con acabado liso, máxima seguridad y resistencia al fuego.",
    specs: [
      "Material: Fibra mineral fisurada",
      "Espesor: 12 mm",
      "Reacción al fuego: Clase A (máxima seguridad)",
      "Color: Blanco puro"
    ],
    tags: ["Seguridad", "Fuego", "Instituciones", "Corporativo"]
  },
  {
    id: "CAOP02",
    name: "CAOP02 - PVC Lavable",
    category: "Cielos Modulares",
    image: "/assets/products/CIELOS MODULARES/3.5_CODIGO_CAOP02_PCV_LAVABLE.webp",
    description: "Placa de yeso-cartón con recubrimiento vinílico, máxima durabilidad y resistencia a la humedad.",
    specs: [
      "Modulación: 1,22 x 0,61 m y 0,61 x 0,61 m",
      "Resistencia a la humedad: RH 99%",
      "Absorción acústica: NRC = 0,65",
      "Resistencia al fuego: RF65",
      "Reflexión de luz: 86%"
    ],
    tags: ["Humedad", "Durabilidad", "Lavable", "Alta resistencia"]
  },

  // ===== PERFILERÍA =====
  {
    id: "CAOPER01",
    name: "CAOPER01 - Perfil Principal 15/16 o 9/16",
    category: "Perfilería",
    image: "/assets/products/perfileria/4.1 CODIGO CAOPER01 Principal 1516 o 916 espesor 0,4mm.webp",
    description: "Perfil principal para estructura de cielos americanos, disponible en diferentes rebajes",
    specs: [
      "Rebaje: 15/16 o 9/16",
      "Espesor: 0,4 mm",
      "Resistencia: RF120",
      "Opciones: Estándar y antisísmico"
    ],
    tags: ["Estructura", "Principal", "Resistente", "Antisísmico"]
  },
  {
    id: "CAOPER02",
    name: "CAOPER02 - Perfil T Secundario 61 cm",
    category: "Perfilería",
    image: "/assets/products/perfileria/4.2 CODIGO CAOPER02 PERFIL  T SEGUNDARIO 61CM, BLANCO 1516 Y 916.webp",
    description: "Perfil T secundario de 61 cm para estructura de cielos modulares",
    specs: [
      "Longitud: 61 cm",
      "Espesor: 0,4 mm",
      "Resistencia: RF120",
      "Opciones: Estándar y antisísmico"
    ],
    tags: ["Secundario", "61 cm", "Estructura", "Modular"]
  },
  {
    id: "CAOPER03",
    name: "CAOPER03 - Perfil T Secundario 122 cm",
    category: "Perfilería",
    image: "/assets/products/perfileria/4.3 CODIGO CAOPER03 PERFIL  T SEGUNDARIO 12.22CM, BLANCO 1516 Y 916.webp",
    description: "Perfil T secundario de 122 cm para estructuras de mayor envergadura",
    specs: [
      "Longitud: 122 cm",
      "Espesor: 0,4 mm",
      "Resistencia: RF120",
      "Opciones: Estándar y antisísmico"
    ],
    tags: ["Secundario", "122 cm", "Estructura", "Gran formato"]
  },
  {
    id: "CAOPER04",
    name: "CAOPER04 - Ángulo Perimetral 15/16",
    category: "Perfilería",
    image: "/assets/products/perfileria/4.4 CODIGO CAOPER01 Principal 1516 o 916 espesor 0,4mm.webp",
    description: "Ángulo perimetral para el borde de cielos americanos, acabado perfecto",
    specs: [
      "Rebaje: 15/16",
      "Espesor: 0,4 mm",
      "Resistencia: RF120",
      "Opciones: Estándar y antisísmico"
    ],
    tags: ["Perimetral", "Borde", "Acabado", "Terminación"]
  },

  // ===== LUMINARIA =====
  {
    id: "CAOLUM01",
    name: "CAOLUM01 - Panel LED Back Light 40W",
    category: "Luminaria",
    image: "/assets/products/LUMINARIA/5.1_CODIGO_CAOLUM01_Panel_Led_Back_Light_FOTO1.webp",
    description: "Panel LED Back Light de 40W con dimensiones 603x603x12 mm, iluminación eficiente",
    specs: [
      "Potencia: 40W",
      "Tecnología: SMD2835",
      "Flujo luminoso: 3600 lm",
      "Factor de potencia: PF 0,96",
      "Protección: IP40",
      "Temperatura de color: 3500/4500/6500 K"
    ],
    tags: ["LED", "Panel", "Back Light", "Eficiente"]
  },
  {
    id: "CAOLUM02",
    name: "CAOLUM02 - Panel LED Circular Sobrepuesto XL 36W",
    category: "Luminaria",
    image: "/assets/products/LUMINARIA/5.2_CODIGO_CAOLUM02_Panel_Led_Circular_FOTO1.webp",
    description: "Panel LED circular sobrepuesto XL de 36W con diámetro 500 mm y temperatura 4500K",
    specs: [
      "Potencia: 36W (opciones: 6W, 12W, 18W)",
      "Diámetro: 500 mm",
      "Temperatura: 4500K",
      "Factor de potencia: 0,9",
      "Aplicación: Cielos modulares"
    ],
    tags: ["Circular", "Sobrepuesto", "XL", "Modular"]
  },
  {
    id: "CAOLUM03",
    name: "CAOLUM03 - Panel LED 1213x302x40W",
    category: "Luminaria",
    image: "/assets/products/LUMINARIA/5.3 CODIGO CAOLUM03 Panel Led 1213x302x40w 3500k.webp",
    description: "Panel LED rectangular de 1213x302 mm con potencia de 40W y temperatura 3500K",
    specs: [
      "Dimensiones: 1213 x 302 mm",
      "Potencia: 40W",
      "Temperatura: 3500K",
      "Aplicación: Cielos modulares",
      "Nota: También disponible 1213x603 72W (por confirmar)"
    ],
    tags: ["Rectangular", "40W", "3500K", "Modular"]
  }
];