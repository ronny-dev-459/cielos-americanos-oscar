import { useState } from "react";

type Obra = {
    id: string;
    src: string;
    alt: string;
    title: string;
};

const obras: Obra[] = [
    { id: "1", src: "/assets/obras/obras_1.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "2", src: "/assets/obras/obras_2.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "3", src: "/assets/obras/obras_3.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "4", src: "/assets/obras/obras_4.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "5", src: "/assets/obras/obras_5.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "6", src: "/assets/obras/obras_6.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "7", src: "/assets/obras/obras_7.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "8", src: "/assets/obras/obras_8.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "9", src: "/assets/obras/obras_9.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "91", src: "/assets/obras/obras_91.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "92", src: "/assets/obras/obras_92.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "93", src: "/assets/obras/obras_93.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "94", src: "/assets/obras/obras_94.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "95", src: "/assets/obras/obras_95.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "96", src: "/assets/obras/obras_96.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "97", src: "/assets/obras/obras_97.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "98", src: "/assets/obras/obras_98.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "99", src: "/assets/obras/obras_99.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "991", src: "/assets/obras/obras_991.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "992", src: "/assets/obras/obras_992.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
    { id: "993", src: "/assets/obras/obras_993.png", alt: "Obra de instalación de cielos americanos", title: "Proyecto de instalación" },
];

export default function ObrasGrid() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-16 bg-background-secondary">
            <div className="container">
                {/* Header de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Obras Realizadas
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Algunos de nuestros proyectos en terreno
                    </p>
                </div>

                {/* Grid de obras */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {obras.map((obra) => (
                        <div
                            key={obra.id}
                            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                            onClick={() => setSelectedImage(obra.src)}
                        >
                            {/* Contenedor de imagen */}
                            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={obra.src}
                                    alt={obra.alt}
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Overlay con texto al hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white text-lg font-semibold">Obra realizada</p>
                                </div>
                            </div>

                            {/* Título de la obra */}
                            <div className="mt-3 text-center">
                                <p className="text-text-secondary font-medium">{obra.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl max-h-full">
                            <img
                                src={selectedImage}
                                alt="Obra en detalle"
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />

                            {/* Botón de cerrar */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                                aria-label="Cerrar imagen"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
