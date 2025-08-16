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
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&h=300&auto=format&fit=crop",
    alt: "Palmetas metálicas y fibra mineral para cielos americanos"
  },
  {
    name: "Perfilería", 
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&h=300&auto=format&fit=crop",
    alt: "Perfiles principales y secundarios para estructura"
  },
  {
    name: "Luminaria",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=400&h=300&auto=format&fit=crop",
    alt: "Paneles LED y luminarias técnicas"
  }
];

export const products: Product[] = [
  // ===== CIELOS MODULARES =====
  {
    id: "instalacion-cielo",
    name: "Instalación de Cielo Americano",
    category: "Cielos Modulares",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Servicio profesional de instalación de productos",
    isService: true,
    tags: ["Servicio", "Instalación", "Profesional"]
  },
  {
    id: "CAOP01",
    name: "CAOP01 - Palmeta Metálica Acustiplak Acero Perforada 2x2",
    category: "Cielos Modulares",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Palmeta metálica perforada disponible en blanco y gris, rebaje 9/16 y 15/16",
    specs: [
      "Fabricado en acero galvanizado de alta resistencia",
      "Acabado en pintura en polvo para mayor durabilidad",
      "Medidas de modulación: 0,61 x 0,61 m",
      "Rebaje: 15/16 y 9/16"
    ],
    tags: ["Pasillos elegantes", "Oficinas modernas", "Edificios corporativos", "Tiendas comerciales"]
  },
  {
    id: "CAOFM01",
    name: "CAOFM01 - Fibra Mineral Granulada",
    category: "Cielos Modulares",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Placa de fibra mineral de 12 mm, diseño liso y elegante",
    specs: [
      "Espesor: 12 mm",
      "Diseño liso sin perforaciones",
      "Alto rendimiento y acabado estético"
    ],
    tags: ["Oficinas modernas", "Locales comerciales", "Espacios educativos"]
  },
  {
    id: "CAOFM02",
    name: "CAOFM02 - Fibra Mineral Fisurada",
    category: "Cielos Modulares",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Placa de fibra mineral con acabado liso, máxima seguridad",
    specs: [
      "Material: Fibra mineral",
      "Reacción al fuego: Clase A (máxima seguridad)",
      "Color: Blanco puro",
      "Espesor: 12 mm nominal"
    ],
    tags: ["Oficinas modernas", "Locales comerciales", "Instituciones educativas"]
  },
  {
    id: "CAOP02",
    name: "CAOP02 - PVC Lavable",
    category: "Cielos Modulares",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Placa de yeso-cartón con recubrimiento vinílico, máxima durabilidad",
    specs: [
      "Modulación: 1,22 x 0,61 m | 0,61 x 0,61 m",
      "Resistencia a la humedad: RH 99%",
      "Reflexión de luz: 86% aprox.",
      "Absorción acústica: NRC = 0,65",
      "Resistencia al fuego: RF65"
    ],
    tags: ["Ambientes exigentes", "Alta durabilidad", "Resistente humedad"]
  },

  // ===== PERFILERÍA =====
  {
    id: "CAOPER01",
    name: "CAOPER01 - Principal 15/16 o 9/16",
    category: "Perfilería",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Perfil principal de acero galvanizado, espesor 0,4mm",
    specs: [
      "Material: acero galvanizado",
      "Terminado en pintura blanco o negro",
      "Resistente al fuego RF 120",
      "Espesor: 0,4mm"
    ],
    tags: ["Estructura principal", "Resistente al fuego", "Opción antisísmico"]
  },
  {
    id: "CAOPER02",
    name: "CAOPER02 - Perfil T Secundario 61cm",
    category: "Perfilería",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Perfil secundario 15/16 y 9/16, longitud 610mm",
    specs: [
      "Longitud: 610 mm",
      "Espesor: 0,4mm",
      "Material: acero galvanizado",
      "Resistente al fuego RF 120"
    ],
    tags: ["Perfil secundario", "Resistente al fuego", "Opción antisísmico"]
  },
  {
    id: "CAOPER03",
    name: "CAOPER03 - Perfil T Secundario 122cm",
    category: "Perfilería",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Perfil secundario 15/16 y 9/16, longitud 1220mm",
    specs: [
      "Longitud: 1220 mm",
      "Espesor: 0,4mm",
      "Material: acero galvanizado",
      "Resistente al fuego RF 120"
    ],
    tags: ["Perfil secundario", "Resistente al fuego", "Opción antisísmico"]
  },
  {
    id: "CAOPER04",
    name: "CAOPER04 - Ángulo Perimetral 15/16",
    category: "Perfilería",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Ángulo perimetral de acero galvanizado",
    specs: [
      "Material: acero galvanizado",
      "Terminado en pintura blanco y negro",
      "Resistente al fuego RF 120"
    ],
    tags: ["Ángulo perimetral", "Resistente al fuego", "Opción antisísmico"]
  },

  // ===== LUMINARIA =====
  {
    id: "CAOLUM01",
    name: "CAOLUM01 - Panel LED Back Light 40W",
    category: "Luminaria",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Panel LED de alto rendimiento 603×603×12 mm",
    specs: [
      "Potencia: 40 W",
      "Voltaje: AC100 – 240V, 50 Hz",
      "Tipo LED: SMD 2835 (180 LEDs)",
      "Flujo luminoso: 3.600 lm",
      "Factor de potencia: 0,96",
      "Protección: IP40",
      "Dimensiones: 603 x 603 x 12 mm",
      "Temperatura color: 3500K · 4500K · 6500K"
    ],
    tags: ["Oficinas", "Comercios", "Centros salud", "Espacios educativos"]
  },
  {
    id: "CAOLUM02",
    name: "CAOLUM02 - Panel LED Circular Sobrepuesto XL 36W",
    category: "Luminaria",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Panel LED circular D:500mm 4500K, múltiples opciones",
    specs: [
      "36W | 220V | D:500mm | 4500K",
      "Opciones: 6W (540 lm), 12W (1080 lm), 18W (1620 lm)",
      "Factor de potencia: 0,9",
      "Alta eficiencia energética"
    ],
    tags: ["Espacios amplios", "Diseño minimalista", "Cielos modulares"]
  },
  {
    id: "CAOLUM03",
    name: "CAOLUM03 - Panel LED 1213×302×40W 3500K",
    category: "Luminaria",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=600&h=400&auto=format&fit=crop",
    description: "Panel LED rectangular para espacios amplios (por confirmar specs exactas)",
    specs: [
      "Medidas: 1213 x 603 mm (por confirmar)",
      "Potencia: 72 W (por confirmar vs 40W)",
      "Voltaje: 220 V",
      "Flujo luminoso: 6.400 lm",
      "Factor de potencia: 0,9"
    ],
    tags: ["Comercios", "Oficinas", "Centros salud", "Espacios amplios", "Por confirmar"]
  }
];