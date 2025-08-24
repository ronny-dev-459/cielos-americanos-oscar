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
        "/assets/products/CIELOS MODULARES/3.3_CODIGO_CAOFM01_Fibra_Mineral_Granulada.png",
      reverse: false,
    },
    {
      kicker: "INSTALACIÓN PROFESIONAL",
      title: "Equipo propio y plazos cumplidos",
      description:
        "Nuestro equipo técnico ejecuta la instalación completa, pruebas y ajustes finales. Obra limpia, en el tiempo comprometido.",
      image:
        "/assets/products/CIELOS MODULARES/3.1 INSTALACION.jpg",
      reverse: true,
    },
    {
      kicker: "ATENCIÓN INMEDIATA",
      title: "Cotiza por WhatsApp en minutos",
      description:
        "Resolvemos dudas y preparamos tu cotización al instante. Acompañamiento desde el primer contacto hasta la entrega.",
      image:
        "/assets/products/LUMINARIA/5.2_CODIGO_CAOLUM02_Panel_Led_Circular_FOTO1.jpg",
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
      footerText: "📱 Respuesta rápida • ⏰ Lun–Sab 9:00–18:00",
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
    testimonials: [
      {
        text:
          "Quedé muy satisfecho con el trabajo de Cielo Americano Oscar. Desde el primer contacto fueron muy profesionales, puntuales y claros con cada detalle del proyecto. La instalación del cielo americano quedó impecable  y en el tiempo acordado. Además, siempre estuvieron atentos a nuestras dudas y entregaron un servicio de excelente calidad. Sin duda los recomiendo y volvería a trabajar con ellos.",
        company: "Rimac Ingeniería ltda ",
      },
      {
        text:
          "Trabajar con Cielo Americano Oscar fue una gran experiencia. El equipo demostró responsabilidad, compromiso y un alto nivel de calidad en la instalación. Todo quedó mejor de lo que esperábamos, con un acabado prolijo y muy profesional. Además, cumplieron con los plazos y siempre estuvieron dispuestos a responder nuestras consultas. 100% recomendados por su excelente servicio.",
        company: "Consultores Fiorino.Saavedra",
      },
    ],
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
      subtitle: "Escríbenos y te respondemos en minutos",
      info: {
        address: "Santiago, Chile",
        phone: "+56 9 3330 4442",
        email: "ventas.cieloscar@gmail.com",
        hours: "Lunes a Sábado: 9:00 – 18:00 hrs",
      },
      form: {
        nameLabel: "Nombre completo *",
        emailLabel: "Correo electrónico *",
        phoneLabel: "Teléfono (opcional)",
        messageLabel: "Mensaje *",
        namePlaceholder: "Tu nombre completo",
        emailPlaceholder: "tu@correo.com",
        phonePlaceholder: "+56 9 ...",
        messagePlaceholder: "Cuéntanos tu requerimiento (tipo de proyecto, medidas, fechas)",
        submitText: "Enviar correo",
        privacyText: "Acepto que mis datos sean utilizados para responder mi consulta",
        validation: {
          nameRequired: "El nombre es requerido",
          emailRequired: "El correo es requerido",
          emailInvalid: "Formato de correo inválido",
          messageRequired: "El mensaje es requerido",
          messageTooShort: "El mensaje debe tener al menos 15 caracteres",
          privacyRequired: "Debes aceptar el uso de datos"
        }
      },
      cta: {
        title: "¿Prefieres WhatsApp?",
        subtitle: "Te respondemos en minutos",
        buttonText: "Escribir por WhatsApp",
        hours: "Horario laboral: Lun–Sab 9:00–18:00",
        fallbackText: "Si el correo no se abre, escríbenos por WhatsApp"
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
