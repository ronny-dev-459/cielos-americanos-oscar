import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";

export default function Hero() {
    return (
        <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden">
            {/* Video/Imagen de fondo con parallax */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: "url('/assets/office-ceilings-Melbourne.webp')",
                    backgroundAttachment: typeof window !== 'undefined' && window.innerWidth >= 768 ? "fixed" : "scroll",
                }}
            />

            {/* Overlay mejorado para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

            {/* Contenido centrado con mejor contraste */}
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
                                className="btn bg-white/20 border border-white/50 text-white hover:bg-white/30 backdrop-blur-sm transition text-lg px-8 py-4 shadow-lg"
                            >
                                {siteConfig.hero.ctaSecondary}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape divider inferior */}
            <div className="absolute -bottom-px left-0 right-0 h-12 bg-white"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 20%, black)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black)'
                }}
            />
        </section>
    );
}


