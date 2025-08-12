import { whatsappQuoteLink } from "../config/siteConfig";

export default function Hero() {
    return (
        <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden">
            {/* Video/Imagen de fondo con parallax */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
                    backgroundAttachment: typeof window !== 'undefined' && window.innerWidth >= 768 ? "fixed" : "scroll",
                }}
            />

            {/* Overlay para legibilidad */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Contenido centrado */}
            <div className="relative z-10 flex items-center justify-center min-h-[75vh] md:min-h-[85vh]">
                <div className="container text-center text-white reveal">
                    <div className="max-w-4xl mx-auto">
                        <p className="kicker text-white/80 mb-4">CIELOS AMERICANOS</p>
                        <h1 className="leading-tight mb-6">
                            Soluciones premium para tu oficina
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 font-light">
                            Mobiliario de calidad superior con instalación profesional y atención inmediata por WhatsApp
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/productos" className="btn btn-primary text-lg px-8 py-4">
                                Explorar productos
                            </a>
                            <a
                                href={whatsappQuoteLink()}
                                className="btn bg-white/10 border border-white/30 text-white hover:bg-white/20 transition text-lg px-8 py-4"
                            >
                                Cotizar ahora
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


