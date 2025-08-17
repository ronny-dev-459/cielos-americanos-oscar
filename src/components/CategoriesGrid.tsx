import { Link } from "react-router-dom";

const categories = [
    {
        name: "Cielos Modulares",
        image: "/assets/products/CIELOS MODULARES/3.2_CODIGO_CAOP01_Palmeta_Metalica_Acustiplak.jpg",
        link: "/productos?cat=Cielos%20Modulares",
        description: "Palmetas metálicas y fibra mineral"
    },
    {
        name: "Perfilería",
        image: "/assets/products/perfileria/4.1 CODIGO CAOPER01 Principal 1516 o 916 espesor 0,4mm.jpg",
        link: "/productos?cat=Perfilería",
        description: "Perfiles principales y secundarios"
    },
    {
        name: "Luminaria",
        image: "/assets/products/LUMINARIA/5.1 CODIGO CAOLUM01 Panel Led Back Light FOTO 1 DE.jpg",
        link: "/productos?cat=Luminaria",
        description: "Paneles LED y luminarias técnicas"
    },
    {
        name: "Obras",
        image: "/assets/obras/obras_1.png",
        link: "/obras",
        description: "Proyectos ejecutados"
    }
];

export default function CategoriesGrid() {
    return (
        <section className="section-secondary">
            <div className="section">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Nuestras especialidades</h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Soluciones completas para tus proyectos de cielo americano
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            to={category.link}
                            className="group card overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative aspect-[4/3]">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-lg font-semibold mb-1 text-white">{category.name}</h3>
                                    <p className="text-sm text-white/90">{category.description}</p>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex items-center text-primary-500 group-hover:text-primary-600 transition-colors">
                                    <span className="text-sm font-medium">Ver productos</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
