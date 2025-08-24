
import HeroCarousel from "../components/hero/HeroCarousel";
import FeaturedCarousel from "../components/carousels/FeaturedCarousel";
import TestimonialsCarousel from "../components/carousels/TestimonialsCarousel";
import FeatureSplit from "../components/FeatureSplit";
import CategoriesGrid from "../components/CategoriesGrid";
import CompanyBlock from "../components/CompanyBlock";
import HomeSummary from "../components/HomeSummary";

import { products } from "../data/products";
import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";

const heroSlides = [
    { src: "/assets/hero/hero-1.png", alt: "Cielo modular en oficina" },
    { src: "/assets/hero/hero-2.jpg", alt: "Tejas de techo modulares" },
    { src: "/assets/hero/hero-3.jpg", alt: "Cielos americanos profesionales" },
];

export default function Home() {
    const destacados = products.slice(0, 8);
    // Logos de clientes - por ahora vacío hasta que el cliente comparta logos reales
    const logos: { src: string; alt: string }[] = [];

    return (
        <main className="w-full">
            {/* HERO SLIDER */}
            <HeroCarousel slides={heroSlides}>
                <div className="relative z-10 flex items-center justify-center min-h-[75vh] md:min-h-[85vh]">
                    <div className="container text-center text-white reveal">
                        {/* Contenedor con backdrop blur para mejor legibilidad */}
                        <div className="max-w-4xl mx-auto hero-content bg-black/20 rounded-3xl p-8 md:p-12 border border-white/10">
                            <p className="kicker text-white/95 mb-4 font-semibold tracking-wider">
                                {siteConfig.hero.kicker}
                            </p>
                            <h1 className="hero-title leading-tight mb-6 text-white">
                                {siteConfig.hero.title}
                            </h1>
                            <p className="hero-subtitle text-xl md:text-2xl text-white/95 max-w-2xl mx-auto mb-8 font-light">
                                {siteConfig.hero.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/productos" className="btn btn-primary text-lg px-8 py-4 shadow-lg">
                                    {siteConfig.hero.ctaPrimary}
                                </a>
                                <a
                                    href={whatsappQuoteLink()}
                                    className="btn bg-white/10 border border-white/50 text-white hover:bg-white/30 backdrop-blur-sm transition text-lg px-8 py-4 shadow-lg"
                                >
                                    {siteConfig.hero.ctaSecondary}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroCarousel>

            {/* Bloque de Categorías - Fondo turquesa claro */}
            <CategoriesGrid />

            {/* Bloque Nuestra empresa - Fondo blanco */}
            <CompanyBlock />

            {/* Storytelling por bloques - Fondos alternados */}
            {siteConfig.features.map((feature, index) => {
                let sectionClass = "py-16";
                if (index === 0) sectionClass += " bg-background-secondary"; // Turquesa claro
                else if (index === 1) sectionClass += " bg-white"; // Blanco
                else sectionClass += " bg-background-dark"; // Gris muy claro

                return (
                    <section key={index} className={sectionClass}>
                        <FeatureSplit
                            kicker={feature.kicker}
                            title={feature.title}
                            desc={feature.description}
                            imgSrc={feature.image}
                            reverse={feature.reverse}
                        />
                    </section>
                );
            })}

            {/* Productos destacados - Fondo blanco con borde */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="section">
                    <div className="flex items-end justify-between mb-4">
                        <h2 className="reveal">{siteConfig.featuredProducts.title}</h2>
                        <a href="/productos" className="text-primary-500 hover:underline text-sm font-medium">
                            {siteConfig.featuredProducts.linkText}
                        </a>
                    </div>
                    <div className="reveal">
                        <FeaturedCarousel items={destacados} delay={4000} />
                    </div>
                </div>
            </section>

            {/* CTA section con fondo turquesa */}
            <section className="bg-primary-500 text-white py-16">
                <div className="container text-center">
                    <h2 className="text-3xl font-semibold text-white mb-4">{siteConfig.cta.primary.title}</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        {siteConfig.cta.primary.subtitle}
                    </p>
                    <a
                        href={whatsappQuoteLink()}
                        className="btn bg-white text-primary-500 hover:bg-gray-50 text-lg px-8 py-4 font-semibold inline-block"
                    >
                        {siteConfig.cta.primary.buttonText}
                    </a>
                    <div className="text-sm mt-6">
                        <p className="text-white">{siteConfig.cta.primary.footerText}</p>
                    </div>
                </div>
            </section>

            {/* Social proof mejorado - Fondo degradado */}
            <section className="bg-gradient-to-b from-background-secondary to-white border-t border-primary-200">
                <div className="section reveal text-center">
                    <p className="kicker mb-3">{siteConfig.socialProof.kicker}</p>
                    <h2 className="mb-8">{siteConfig.socialProof.title}</h2>
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
                    <TestimonialsCarousel testimonials={siteConfig.socialProof.testimonials} delay={6000} />
                </div>
            </section>

            {/* CTA final premium */}
            <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <div className="section text-center reveal">
                    <h2 className="text-white mb-4">{siteConfig.cta.final.title}</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        {siteConfig.cta.final.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={whatsappQuoteLink()}
                            className="btn bg-white text-primary-500 hover:bg-gray-50 text-lg px-8 py-4 font-semibold"
                        >
                            {siteConfig.cta.final.buttonPrimary}
                        </a>
                        <a
                            href="/productos"
                            className="btn border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
                        >
                            {siteConfig.cta.final.buttonSecondary}
                        </a>
                    </div>
                    <p className="text-sm text-white/70 mt-6">
                        {siteConfig.cta.final.footerText}
                    </p>
                </div>
            </section>

            {/* Separador visual */}
            <div className="h-4 bg-gradient-to-b from-primary-700 to-primary-600"></div>

            {/* Pie de Home con resumen */}
            <HomeSummary />
        </main>
    );
}