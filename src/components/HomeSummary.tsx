import { Link } from "react-router-dom";
import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";

export default function HomeSummary() {
    return (
        <section className="py-20 bg-gradient-to-b from-background-secondary to-primary-50 border-t-2 border-primary-300">
            <div className="section">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Productos */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="font-semibold mb-2">Productos</h3>
                        <p className="text-sm text-text-secondary mb-4">
                            Cielos modulares, perfilería y luminaria
                        </p>
                        <Link to="/productos" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                            Ver catálogo completo →
                        </Link>
                    </div>

                    {/* Nosotros */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold mb-2">Nosotros</h3>
                        <p className="text-sm text-text-secondary mb-4">
                            35+ años de experiencia en el rubro
                        </p>
                        <Link to="/nosotros" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                            Conoce nuestra historia →
                        </Link>
                    </div>

                    {/* Cotiza aquí */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold mb-2">Cotiza aquí</h3>
                        <p className="text-sm text-text-secondary mb-4">
                            WhatsApp o email, respuesta rápida
                        </p>
                        <div className="flex flex-col gap-2">
                            <a
                                href={whatsappQuoteLink()}
                                className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                            >
                                💬 WhatsApp
                            </a>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                            >
                                📧 Email
                            </a>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold mb-2">Contacto</h3>
                        <div className="text-sm text-text-secondary space-y-1">
                            <p>{siteConfig.email}</p>
                            <p>+56 9 3330 4442</p>
                        </div>
                        <Link to="/contacto" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                            Más información →
                        </Link>
                    </div>
                </div>

                {/* Botón MUY destacado con fondo propio */}
                <div className="relative -mx-6 px-6 py-12 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-center rounded-3xl shadow-2xl">
                    <div className="absolute inset-0 bg-white/5 rounded-3xl"></div>
                    <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-4">¿Listo para comenzar?</h3>
                        <a
                            href={whatsappQuoteLink("Hola, quiero cotizar mi proyecto de cielos")}
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300 border-4 border-white/20"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.105" />
                            </svg>
                            COTIZAR PROYECTO AHORA
                            <span className="animate-pulse">🚀</span>
                        </a>
                        <p className="text-sm text-white/80 mt-4 font-medium">
                            Respuesta garantizada en menos de 1 hora • Lun-Sab 9:00-18:00
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
