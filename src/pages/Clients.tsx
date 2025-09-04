import SEO from "../components/SEO";
import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";

export default function Clients() {
    const clientsContent = siteConfig.pages.clients;

    return (
        <>
            <SEO
                title="Nuestros Clientes - Empresas que Confían en Cielos Americanos Oscar"
                description="Descubre las empresas y organizaciones que han elegido nuestros servicios de cielos americanos. Más de 1000 proyectos ejecutados con 98% de clientes satisfechos."
                canonical="https://cieloamericanooscar.cl/clientes"
                keywords="clientes cielos americanos, empresas confían, proyectos ejecutados, testimonios clientes, referencias instalación"
            />
            <div className="w-full">
                {/* Hero interno */}
                <section className="bg-gradient-to-br from-background-secondary to-white py-16">
                    <div className="section text-center">
                        <h1 className="mb-4">{clientsContent.title}</h1>
                        <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                            {clientsContent.subtitle}
                        </p>
                        <p className="text-lg text-text-light max-w-4xl mx-auto">
                            {clientsContent.description}
                        </p>
                    </div>
                </section>

                {/* Estadísticas */}
                <section className="py-16 bg-white">
                    <div className="section">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {clientsContent.stats.map((stat, index) => (
                                <div key={index} className="reveal">
                                    <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-text-secondary font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonios */}
                <section className="py-16 bg-background-secondary">
                    <div className="section">
                        <h2 className="text-center mb-12">Testimonio de nuestros clientes</h2>
                        {clientsContent.testimonials.length > 0 ? (
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {(clientsContent.testimonials as any[]).map((testimonial, index) => (
                                    <div key={index} className="card p-6 bg-white reveal">
                                        <p className="text-text-secondary italic mb-6 leading-relaxed">
                                            "{testimonial.text}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={testimonial.logo}
                                                alt={testimonial.company}
                                                className="w-16 h-12 object-contain opacity-60"
                                                loading="lazy"
                                            />
                                            <div>
                                                <div className="font-semibold text-text-primary">
                                                    {testimonial.author}
                                                </div>
                                                <div className="text-sm text-text-light">
                                                    {testimonial.position}
                                                </div>
                                                <div className="text-sm text-primary-500 font-medium">
                                                    {testimonial.company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-text-light py-12">
                                <p>Testimonios disponibles próximamente</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Logos de clientes */}
                <section className="py-16 bg-white">
                    <div className="section text-center">
                        <h2 className="mb-12">Algunas empresas que han confiado en nosotros</h2>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <img
                                    key={i}
                                    src={`https://placehold.co/160x60?text=Cliente+${i + 1}`}
                                    alt={`Cliente ${i + 1}`}
                                    className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA final */}
                <section className="bg-primary-500 text-white py-16">
                    <div className="section text-center">
                        <h2 className="text-white mb-4">¿Quieres ser nuestro próximo cliente satisfecho?</h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                            Únete a las más de 200 empresas que han transformado sus oficinas con nosotros.
                        </p>
                        <a
                            href={whatsappQuoteLink("Hola, quiero conocer sus servicios para mi empresa")}
                            className="btn bg-white text-primary-500 hover:bg-gray-50 text-lg px-8 py-4 font-semibold"
                        >
                            💬 Solicitar cotización
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}


