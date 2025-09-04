import SEO from "../components/SEO";
import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";

export default function About() {
    const aboutContent = siteConfig.pages.about;

    return (
        <>
            <SEO
                title="Nosotros - Cielos Americanos Oscar | 35+ Años de Experiencia en Santiago, Chile"
                description="Conoce la historia de Cielos Americanos Oscar. Más de 35 años transformando espacios en Chile con instalación profesional, materiales certificados y servicio de excelencia en cielos modulares."
                canonical="https://cieloamericanooscar.cl/nosotros"
                keywords="empresa cielos americanos, historia instalación cielos, experiencia chile, misión visión valores, equipo profesional"
            />
            <div className="w-full">
                {/* Hero interno */}
                <section className="bg-gradient-to-br from-background-secondary to-white py-16">
                    <div className="section text-center">
                        <h1 className="mb-4">{aboutContent.title}</h1>
                        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                            {aboutContent.subtitle}
                        </p>
                    </div>
                </section>

                {/* Contenido principal */}
                <div className="w-full">
                    {aboutContent.sections.map((section, index) => (
                        <section
                            key={index}
                            className={`py-16 ${index % 2 === 1 ? 'bg-background-secondary' : 'bg-white'}`}
                        >
                            <div className="section">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text-primary">
                                        {section.title}
                                    </h2>
                                    {section.content && (
                                        <p className="text-lg text-text-secondary leading-relaxed mb-6">
                                            {section.content}
                                        </p>
                                    )}
                                    {section.items && (
                                        <ul className="grid gap-4 md:grid-cols-2">
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                                                    <span className="text-text-secondary">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* CTA final */}
                <section className="bg-primary-500 text-white py-16">
                    <div className="section text-center">
                        <h2 className="text-white mb-4">¿Quieres conocer más sobre nosotros?</h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                            Contáctanos y descubre por qué más de 200 empresas han elegido nuestros servicios.
                        </p>
                        <a
                            href={whatsappQuoteLink("Hola, quiero conocer más sobre Cielos Americanos")}
                            className="btn bg-white text-primary-500 hover:bg-gray-50 text-lg px-8 py-4 font-semibold"
                        >
                            💬 Conversar con nosotros
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}


