import CategoryCard from "../components/CategoryCard";
import LogoCloud from "../components/LogoCloud";
import Hero from "../components/Hero";
import BenefitsSection from "../components/BenefitsSection";
import FeaturedCarousel from "../components/carousels/FeaturedCarousel";
import FeatureSplit from "../components/FeatureSplit";

import { products, categoriesWithImages } from "../data/products";
import { whatsappQuoteLink } from "../config/siteConfig";

export default function Home() {
    const destacados = products.slice(0, 8);
    const logos = Array.from({ length: 8 }).map((_, i) => ({
        src: `https://placehold.co/160x60?text=Logo+${i + 1}`,
        alt: "",
    }));

    return (
        <main className="w-full">
            {/* Hero con parallax mejorado */}
            <Hero />

            {/* Storytelling por bloques */}
            <FeatureSplit
                kicker="CALIDAD SUPERIOR"
                title="Materiales que se sienten premium"
                desc="Cada pieza está fabricada con materiales de primera calidad. Maderas nobles, aceros resistentes y acabados que perduran en el tiempo. La inversión en mobiliario de oficina debe durar años, no meses."
                imgSrc="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                reverse={false}
            />

            <FeatureSplit
                kicker="INSTALACIÓN PROFESIONAL"
                title="Nuestro equipo se encarga de todo"
                desc="No te preocupes por el montaje. Nuestro equipo técnico especializado se encarga de la instalación completa, pruebas de funcionamiento y ajustes finales. Garantía de instalación incluida."
                imgSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                reverse={true}
            />

            <FeatureSplit
                kicker="ATENCIÓN INMEDIATA"
                title="Respuesta por WhatsApp en minutos"
                desc="Olvídate de esperas. Nuestro equipo comercial te atiende por WhatsApp en tiempo real. Cotizaciones al instante, asesoramiento personalizado y seguimiento hasta la entrega."
                imgSrc="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                reverse={false}
            />

            {/* Productos destacados */}
            <section className="section">
                <div className="flex items-end justify-between mb-4">
                    <h2 className="reveal">Productos destacados</h2>
                    <a href="/productos" className="text-brand-600 hover:underline text-sm font-medium">
                        Ver todo →
                    </a>
                </div>
                <div className="reveal">
                    <FeaturedCarousel items={destacados} delay={4000} />
                </div>
            </section>

            {/* CTA section con fondo turquesa */}
            <section className="bg-brand-600 text-white py-16">
                <div className="container text-center">
                    <h2 className="text-3xl font-semibold text-white mb-4">¿Necesitas una cotización personalizada?</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Nuestro equipo está listo para asesorarte. Respuesta garantizada por WhatsApp en minutos.
                    </p>
                    <a
                        href={whatsappQuoteLink()}
                        className="btn bg-white text-brand-600 hover:bg-gray-50 text-lg px-8 py-4 font-semibold inline-block"
                    >
                        💬 Cotizar por WhatsApp
                    </a>
                    <div className="text-sm text-white/80 mt-6">
                        <p>📱 Respuesta inmediata • ⏰ Lun-Vie 9:00-18:00</p>
                    </div>
                </div>
            </section>

            {/* Social proof mejorado */}
            <section className="bg-gradient-to-b from-gray-50 to-white">
                <div className="section reveal text-center">
                    <p className="kicker mb-3">MÁS DE 200 EMPRESAS CONFÍAN EN NOSOTROS</p>
                    <h2 className="mb-8">Resultados que hablan por sí solos</h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center mb-12">
                        {logos.slice(0, 6).map((l, i) => (
                            <img
                                key={i}
                                src={l.src}
                                alt="Cliente"
                                className="h-12 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                loading="lazy"
                            />
                        ))}
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg text-slate-600 italic">
                            "La calidad del mobiliario superó nuestras expectativas. La instalación fue impecable y el servicio postventa excepcional."
                        </p>
                        <p className="mt-3 text-sm text-slate-500">
                            — María González, Gerente General, TechCorp
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA final premium */}
            <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
                <div className="section text-center reveal">
                    <h2 className="text-white mb-4">¿Listo para transformar tu oficina?</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Obtén una cotización personalizada en minutos. Nuestro equipo está esperando tu mensaje.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={whatsappQuoteLink()}
                            className="btn bg-white text-brand-600 hover:bg-gray-50 text-lg px-8 py-4 font-semibold"
                        >
                            Cotizar por WhatsApp
                        </a>
                        <a
                            href="/productos"
                            className="btn border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
                        >
                            Ver catálogo
                        </a>
                    </div>
                    <p className="text-sm text-white/70 mt-6">
                        Respuesta garantizada en menos de 30 minutos • Lun-Vie 9:00-18:00
                    </p>
                </div>
            </section>
        </main>
    );
}