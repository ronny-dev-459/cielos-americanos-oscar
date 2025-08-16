import { whatsappQuoteLink } from "../config/siteConfig";

export default function CompanyBlock() {
    return (
        <section className="py-16 bg-white">
            <div className="section">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="mb-6">Cielo Americano OSCAR SPA</h2>
                    <p className="text-2xl md:text-3xl font-medium text-primary-500 mb-8">
                        Tu confianza, nuestra prioridad.
                    </p>
                    <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                        Instalación, venta y distribución de materiales de cielo americano con calidad garantizada.
                    </p>
                    <a
                        href={whatsappQuoteLink("Hola, quiero asesoría personalizada para mi proyecto")}
                        className="btn btn-primary text-lg px-8 py-4 shadow-lg"
                    >
                        💬 ¡Cotiza online y recibe asesoría personalizada!
                    </a>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-4">
                            <div className="text-3xl font-bold text-primary-500 mb-2">35+</div>
                            <div className="text-text-secondary">Años de experiencia</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
                            <div className="text-text-secondary">Calidad garantizada</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-primary-500 mb-2">24h</div>
                            <div className="text-text-secondary">Respuesta por WhatsApp</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
