import { Link } from "react-router-dom";
import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";
import Logo from "./common/Logo";

export default function Footer() {
    return (
        <footer className="border-t-4 border-primary-500 bg-white shadow-inner">
            <div className="container py-12">
                {/* Sección principal */}
                <div className="grid gap-8 md:grid-cols-4 mb-8">
                    {/* Logo y descripción */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Logo width={48} height={48} className="shrink-0 rounded" />
                            <div>
                                <p className="font-bold text-text-primary">{siteConfig.businessName}</p>
                                <p className="text-sm text-primary-500 font-medium">{siteConfig.slogan}</p>
                            </div>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Más de 35 años instalando soluciones de cielo americano.
                            Calidad garantizada y atención personalizada.
                        </p>
                    </div>

                    {/* Productos */}
                    <div>
                        <h3 className="font-semibold text-text-primary mb-4">Productos</h3>
                        <div className="space-y-2 text-sm">
                            <Link className="text-text-secondary hover:text-primary-500 block transition-colors" to="/productos?cat=Cielos%20Modulares">
                                Cielos Modulares
                            </Link>
                            <Link className="text-text-secondary hover:text-primary-500 block transition-colors" to="/productos?cat=Perfilería">
                                Perfilería
                            </Link>
                            <Link className="text-text-secondary hover:text-primary-500 block transition-colors" to="/productos?cat=Luminaria">
                                Luminaria
                            </Link>
                            <Link className="text-text-secondary hover:text-primary-500 block transition-colors" to="/obras">
                                Obras Ejecutadas
                            </Link>
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h3 className="font-semibold text-text-primary mb-4">Empresa</h3>
                        <nav className="space-y-2 text-sm">
                            <Link className="text-text-secondary hover:text-primary-500 block transition-colors" to="/nosotros">
                                Nosotros
                            </Link>
                            <Link className="text-text-secondary hover:text-primary-500 block transition-colors" to="/obras">
                                Nuestras Obras
                            </Link>
                            <Link className="text-text-secondary hover:text-primary-500 block transition-colors" to="/contacto">
                                Contacto
                            </Link>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="text-text-secondary hover:text-primary-500 block transition-colors"
                            >
                                Escríbenos
                            </a>
                        </nav>
                    </div>

                    {/* Contacto y CTA */}
                    <div>
                        <h3 className="font-semibold text-text-primary mb-4">Contacto</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <p className="text-text-secondary">
                                    <strong>Email:</strong><br />
                                    <a href={`mailto:${siteConfig.email}`} className="text-primary-500 hover:text-primary-600">
                                        {siteConfig.email}
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="text-text-secondary">
                                    <strong>WhatsApp:</strong><br />
                                    <a href={whatsappQuoteLink()} className="text-primary-500 hover:text-primary-600">
                                        +56 9 3330 4442
                                    </a>
                                </p>
                            </div>
                            <div className="pt-2">
                                <a
                                    href={whatsappQuoteLink()}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary w-full text-center text-sm"
                                >
                                    💬 COTIZAR AHORA
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <div className="border-t border-primary-200"></div>

                {/* Pie de página */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-text-light">
                        © {new Date().getFullYear()} {siteConfig.businessName}. Todos los derechos reservados.
                    </div>
                    <div className="text-xs text-text-light">
                        Cielos Modulares • Perfilería • Luminaria
                    </div>
                </div>
            </div>
        </footer>
    );
}


