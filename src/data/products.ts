export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
};

export const categories = ["Sillas", "Escritorios", "Archiveros", "Estanterías", "Accesorios"];

export const categoriesWithImages = [
  {
    name: "Sillas",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Sillas de oficina ergonómicas"
  },
  {
    name: "Escritorios", 
    image: "https://images.unsplash.com/photo-1551298370-9c50423cc2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Escritorios modernos para oficina"
  },
  {
    name: "Archiveros",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80", 
    alt: "Archiveros y almacenamiento"
  },
  {
    name: "Estanterías",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Estanterías y mobiliario de almacenamiento"
  },
  {
    name: "Accesorios",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Accesorios y complementos de oficina"
  }
];

export const products: Product[] = [
  {
    id: "p-001",
    name: "Silla Ejecutiva Alpha",
    category: "Sillas",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Respaldo alto, asiento ergonómico, base cromada."
  },
  {
    id: "p-002",
    name: "Escritorio Nova 140",
    category: "Escritorios",
    image: "https://images.unsplash.com/photo-1551298370-9c50423cc2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Tablero melamínico 140cm, estructura metálica."
  },
  {
    id: "p-003",
    name: "Archivero 3 cajones",
    category: "Archiveros",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Cerradura central, ruedas y tiradores metálicos."
  },
  {
    id: "p-004",
    name: "Estantería Modular",
    category: "Estanterías",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Modular, 5 niveles, 180x90x40 cm."
  },
  {
    id: "p-005",
    name: "Silla Operativa Mesh",
    category: "Sillas",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Respaldo de malla, regulación de altura, soporte lumbar."
  },
  {
    id: "p-006",
    name: "Escritorio Esquinero Pro",
    category: "Escritorios",
    image: "https://images.unsplash.com/photo-1551298370-9c50423cc2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Formato en L, bandeja teclado, pasacables."
  },
  {
    id: "p-007",
    name: "Archivero Metálico 4 cajones",
    category: "Archiveros",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Acero, rieles telescópicos, anti-vuelco."
  },
  {
    id: "p-008",
    name: "Estantería Heavy Duty",
    category: "Estanterías",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Carga 200kg por nivel, pintura electrostática."
  },
  {
    id: "p-009",
    name: "Lámpara LED de escritorio",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Luz regulable, brazo flexible, bajo consumo."
  },
  {
    id: "p-010",
    name: "Soporte monitor doble",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "VESA 75/100, ajuste de altura, giro e inclinación."
  },
  {
    id: "p-011",
    name: "Silla Gerencial Premium",
    category: "Sillas",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Cuero sintético, apoyabrazos, mecanismo basculante."
  },
  {
    id: "p-012",
    name: "Escritorio regulable eléctrico",
    category: "Escritorios",
    image: "https://images.unsplash.com/photo-1551298370-9c50423cc2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Altura ajustable, 2 memorias, estructura estable."
  }
];


