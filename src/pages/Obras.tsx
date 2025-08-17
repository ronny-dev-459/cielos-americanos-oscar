import Breadcrumb from "../components/Breadcrumb";
import ObrasGrid from "../components/ObrasGrid";
import { siteConfig } from "../config/siteConfig";

export default function Obras() {
    return (
        <div className="w-full">
            {/* Hero de la página */}
            <section className="bg-gradient-to-br from-background-secondary to-white py-16">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Obras Realizadas
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Descubre algunos de nuestros proyectos más destacados en instalación de cielos americanos.
                        Cada obra representa nuestro compromiso con la calidad y la excelencia profesional.
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="container py-6">
                <Breadcrumb
                    items={[
                        { label: "Inicio", href: "/" },
                        { label: "Obras" }
                    ]}
                />
            </div>

            {/* Grid de obras */}
            <ObrasGrid />

            {/* CTA final */}
            <section className="bg-primary-500 text-white py-16">
                <div className="container text-center">
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        ¿Te gustó nuestro trabajo?
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Contáctanos para cotizar tu proyecto de cielos americanos
                    </p>
                    <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hola, vi sus obras y quiero cotizar mi proyecto de cielos americanos`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn bg-white text-primary-500 hover:bg-gray-50 text-lg px-8 py-4 font-semibold inline-block"
                    >
                        Cotizar mi proyecto
                    </a>
                </div>
            </section>
        </div>
    );
}
