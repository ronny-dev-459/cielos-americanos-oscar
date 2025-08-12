export const siteConfig = {
  businessName: "CIELOS AMERICANOS OSCAR SPA",
  whatsappNumber: "56937095179", // sin + ni espacios
  email: "contacto@ulvia.cl",
  address: "Av. Libertador Bernardo O'Higgins 123, Santiago, Chile",
  slogan: "Soluciones para tu oficina al mejor precio",
  nav: [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Productos", path: "/productos" },
    { label: "Clientes", path: "/clientes" },
    { label: "Contacto", path: "/contacto" }
  ]
};

export const whatsappQuoteLink = (productName?: string) => {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  const msg = productName
    ? `Hola, quiero cotizar el producto: ${productName}`
    : "Hola, quiero una cotización.";
  return `${base}?text=${encodeURIComponent(msg)}`;
};


