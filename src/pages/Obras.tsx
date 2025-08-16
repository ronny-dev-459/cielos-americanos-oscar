import { useState } from "react";
import { whatsappQuoteLink } from "../config/siteConfig";

// Placeholder para cuando el cliente envíe las imágenes reales
const obras = [
    {
        id: 1,
        title: "Oficinas Corporativas",
        location: "Santiago",
        year: "2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        description: "Instalación completa de cielo americano modulares"
    },
    {
        id: 2,
        title: "Centro Comercial",
        location: "Valparaíso",
        year: "2023",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
        description: "Cielos modulares con luminaria integrada"
    },
    {
        id: 3,
        title: "Hospital Regional",
        location: "Concepción",
        year: "2023",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
        description: "Instalación especializada para área médica"
    },
    {
        id: 4,
        title: "Universidad Técnica",
        location: "Santiago",
        year: "2024",
        image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=800&auto=format&fit=crop",
        description: "Aulas y laboratorios con cielos acústicos"
    },
    {
        id: 5,
        title: "Retail Plaza",
        location: "La Serena",
        year: "2023",
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
        description: "Cielos modulares para locales comerciales"
    },
    {
        id: 6,
        title: "Edificio Administrativo",
        location: "Viña del Mar",
        year: "2024",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
        description: "Proyecto integral de remodelación"
    },
    {
        id: 7,
        title: "Centro de Salud",
        location: "Temuco",
        year: "2023",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
        description: "Instalación con estándares médicos"
    },
    {
        id: 8,
        title: "Oficinas Gubernamentales",
        location: "Santiago",
        year: "2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        description: "Remodelación completa de instalaciones"
    }
];

export default function Obras() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <div className="w-full">
            {/* Hero interno */}
            <section className="bg-gradient-to-br from-background-secondary to-white py-16">
                <div className="section text-center">
                    <h1 className="mb-4">Nuestras Obras</h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                        Más de 35 años ejecutando proyectos de cielo americano en todo Chile
                    </p>
                    <p className="text-lg text-text-light max-w-4xl mx-auto">
                        Desde oficinas corporativas hasta centros de salud, hemos instalado soluciones
                        de cielos modulares que combinan funcionalidad, estética y durabilidad.
                    </p>
                </div>
            </section>

            {/* Grid de obras */}
            <section className="py-16 bg-white">
                <div className="section">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {obras.map((obra, index) => (
                            <div
                                key={obra.id}
                                className="group cursor-pointer"
                                onClick={() => setSelectedImage(index)}
                            >
                                <div className="card overflow-hidden hover:shadow-lg transition-all duration-300">
                                    <div className="relative aspect-[4/3]">
                                        <img
                                            src={obra.image}
                                            alt={obra.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="font-semibold text-white">{obra.title}</h3>
                                            <p className="text-sm text-white/90">{obra.location} • {obra.year}</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold mb-1">{obra.title}</h3>
                                        <p className="text-sm text-text-light mb-2">{obra.location} • {obra.year}</p>
                                        <p className="text-sm text-text-secondary">{obra.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox simple */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
                            aria-label="Cerrar"
                        >
                            ✕ Cerrar
                        </button>
                        <img
                            src={obras[selectedImage].image}
                            alt={obras[selectedImage].title}
                            className="max-w-full max-h-full object-contain"
                        />
                        <div className="text-white mt-4 text-center">
                            <h3 className="text-xl font-semibold">{obras[selectedImage].title}</h3>
                            <p className="text-white/80">{obras[selectedImage].location} • {obras[selectedImage].year}</p>
                            <p className="text-white/70 mt-2">{obras[selectedImage].description}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA final */}
            <section className="bg-primary-500 text-white py-16">
                <div className="section text-center">
                    <h2 className="text-white mb-4">¿Tienes un proyecto en mente?</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Cuéntanos tu proyecto y te ayudamos a hacerlo realidad con la misma calidad de estas obras.
                    </p>
                    <a
                        href={whatsappQuoteLink("Hola, tengo un proyecto de cielos y me gustaría una cotización")}
                        className="btn bg-white text-primary-500 hover:bg-gray-50 text-lg px-8 py-4 font-semibold"
                    >
                        💬 Cotizar mi proyecto
                    </a>
                    <p className="text-sm text-white/70 mt-4">
                        Respuesta en menos de 1 hora • Visita técnica gratuita
                    </p>
                </div>
            </section>

            {/* Nota temporal para desarrollo */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 m-4">
                <p className="text-sm text-yellow-800">
                    <strong>Nota de desarrollo:</strong> Las imágenes mostradas son placeholders.
                    Serán reemplazadas por las fotos reales del archivo "OBRAS" cuando estén disponibles.
                </p>
            </div>
        </div>
    );
}
