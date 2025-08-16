// src/config/siteConfig.ts
export const siteConfig = {
  // ---------- Identidad ----------
  businessName: "CIELOS AMERICANOS OSCAR SPA",
  whatsappNumber: "56933304442", // sin + ni espacios
  email: "ventas.cieloscar@gmail.com",
  address: "Santiago, Chile",
  slogan: "Tu confianza, nuestra prioridad",

  // ---------- Navegación ----------
  nav: [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Productos", path: "/productos" },
    { label: "Obras", path: "/obras" },
    { label: "Contacto", path: "/contacto" },
  ],

  // ---------- Hero ----------
  hero: {
    kicker: "Cielos Modulares • Perfilería • Luminaria",
    title: "Soluciones confiables para tus proyectos",
    subtitle:
      "Más de 35 años de experiencia en instalación y distribución de materiales para cielo americano. Atención rápida y asesoría por WhatsApp.",
    ctaPrimary: "Ver productos",
    ctaSecondary: "Cotizar por WhatsApp",
    // Puedes cambiar por foto/video del cliente cuando lo envíe
    backgroundImage:
      "https://images.unsplash.com/photo-1518933165971-611dbc9c412d?q=80&w=1920&auto=format&fit=crop",
  },

  // ---------- Secciones de valor (Home) ----------
  features: [
    {
      kicker: "CALIDAD GARANTIZADA",
      title: "Materiales certificados y terminaciones prolijas",
      description:
        "Trabajamos con estándares exigentes para asegurar durabilidad, acústica y un acabado limpio en cada proyecto.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
      reverse: false,
    },
    {
      kicker: "INSTALACIÓN PROFESIONAL",
      title: "Equipo propio y plazos cumplidos",
      description:
        "Nuestro equipo técnico ejecuta la instalación completa, pruebas y ajustes finales. Obra limpia, en el tiempo comprometido.",
      image:
        "https://images.unsplash.com/photo-1591453089933-9f2d01d8a6f5?q=80&w=1200&auto=format&fit=crop",
      reverse: true,
    },
    {
      kicker: "ATENCIÓN INMEDIATA",
      title: "Cotiza por WhatsApp en minutos",
      description:
        "Resolvemos dudas y preparamos tu cotización al instante. Acompañamiento desde el primer contacto hasta la entrega.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
      reverse: false,
    },
  ],

  // ---------- Productos destacados (Home) ----------
  featuredProducts: {
    title: "Productos destacados",
    subtitle: "Las soluciones más solicitadas por nuestros clientes",
    linkText: "Ver catálogo completo →",
  },

  // ---------- CTA’s ----------
  cta: {
    primary: {
      title: "¿Necesitas una cotización personalizada?",
      subtitle:
        "Envíanos tu requerimiento y te asesoramos con la mejor solución en cielos, perfilería y luminaria.",
      buttonText: "💬 Cotizar por WhatsApp",
      footerText: "📱 Respuesta rápida • ⏰ Lun–Vie 9:00–18:00",
    },
    final: {
      title: "¿Listo para comenzar tu proyecto?",
      subtitle:
        "Recibe una cotización en minutos y planifiquemos la instalación según tus tiempos.",
      buttonPrimary: "Cotizar por WhatsApp",
      buttonSecondary: "Ver catálogo",
      footerText: "Atención prioritaria por WhatsApp",
    },
  },

  // ---------- Social proof ----------
  socialProof: {
    kicker: "RESPALDO REAL",
    title: "Décadas de proyectos ejecutados con éxito",
    testimonial: {
      text:
        "La instalación fue impecable y cumplieron los plazos. Volveríamos a trabajar con ellos sin dudar.",
      author: "Nombre Cliente",
      position: "Cargo",
      company: "Empresa",
    },
    // TODO: reemplazar por testimonios reales o logos cuando el cliente los comparta
  },

  // ---------- Páginas internas ----------
  pages: {
    // ----- Nosotros -----
    about: {
      title: "Nosotros",
      subtitle: "Más de 35 años transformando espacios en Chile",
      sections: [
        {
          title: "Quiénes somos",
          content:
            "En Cielo Americano OSCAR SPA somos una empresa  con mas 35 años de experiencia dedicada a la instalación y remodelación de cielo americano. Nos destacamos por brindar un servicio profesional, serio y confiable, que busca satisfacer las necesidades de cada cliente con soluciones integrales.Nuestro compromiso va más allá de la instalación: ofrecemos distribución, comercialización y transporte de materiales de cielo raso, para acompañarte en cada etapa de tu proyecto con la mejor calidad y atención personalizada.",
        },
        {
          title: "Misión",
          content:
            "Brindar un servicio de excelencia en instalación y suministro de materiales, utilizando láminas de la más alta calidad y mano de obra calificada, ofreciendo siempre la mejor relación entre calidad y precio para nuestros clientes..",
        },
        {
          title: "Visión",
          content:
            "Consolidarnos como una empresa líder y sólida en el mercado, creciendo al ritmo de sus demandas y satisfaciendo de forma constante las necesidades de nuestros clientes, garantizando calidad, respaldo, y fomentando la estabilidad laboral y el bienestar social.",
        },
        {
          title: "Valores",
          items: [
            "Calidad y respaldo en cada proyecto",
            "Cumplimiento de plazos y obra limpia",
            "Atención personalizada y respuesta rápida",
            "Transparencia en precios y alcances",
          ],
        },
        // TODO: Si el cliente envió texto exacto de misión/visión/valores, reemplazar aquí.
      ],
    },

    // ----- Clientes (opcional si no hay logos aún) -----
    clients: {
      title: "Nuestros Clientes",
      subtitle:
        "Empresas y organizaciones que han confiado en nuestras soluciones de cielos",
      description:
        "Hemos ejecutado proyectos en oficinas, retail, educación y espacios corporativos. Si quieres incluir tu empresa en nuestro portafolio, conversemos.",
      testimonials: [
        // TODO: reemplazar por testimonios reales o dejar vacío por ahora
      ],
      stats: [
        { number: "35+", label: "Años de experiencia" },
        { number: "1000+", label: "Proyectos ejecutados" },
        { number: "98%", label: "Clientes satisfechos" },
      ],
    },

    // ----- Contacto -----
    contact: {
      title: "Contacto",
      subtitle: "Escríbenos y cotiza tu proyecto",
      info: {
        address: "Santiago, Chile",
        phone: "+56 9 3330 4442",
        email: "ventas.cieloscar@gmail.com",
        hours: "Lunes a Viernes: 9:00 – 18:00 hrs",
      },
      form: {
        nameLabel: "Nombre",
        emailLabel: "Email",
        messageLabel: "Mensaje",
        namePlaceholder: "Tu nombre completo",
        emailPlaceholder: "tu@correo.com",
        messagePlaceholder:
          "Cuéntanos el tipo de proyecto, metros aproximados y fechas estimadas",
        submitText: "Enviar consulta",
        submitDemo: "Enviar (demo)",
      },
      cta: {
        title: "¿Prefieres hablar por WhatsApp?",
        subtitle: "Te respondemos en minutos",
        buttonText: "Escribir por WhatsApp",
        hours: "Horario laboral: Lun–Vie 9:00–18:00",
      },
    },

    // ----- Productos (cabeceras + UI strings) -----
    products: {
      title: "Productos",
      subtitle: "Cielos Modulares, Perfilería y Luminaria",
      filters: {
        all: "Todas las categorías",
        placeholder: "Filtrar por categoría",
      },
      pagination: {
        showing: "Mostrando {start} – {end} de {total} productos",
        noResults: "No se encontraron productos para esta categoría",
      },
    },
  },
};

// Helper para WhatsApp
export const whatsappQuoteLink = (productName?: string) => {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  const msg = productName
    ? `Hola, quiero cotizar el producto: ${productName}`
    : "Hola, quiero una cotización.";
  return `${base}?text=${encodeURIComponent(msg)}`;
};
