import { Link } from "react-router-dom";
import { siteConfig, whatsappQuoteLink } from "../config/siteConfig";
import Logo from "./common/Logo";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50 mt-10">
            <div className="container py-10 grid gap-8 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-3">
                        <Logo width={44} height={44} className="shrink-0 rounded" />
                        <p className="font-semibold text-slate-900">{siteConfig.businessName}</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Catálogo de productos. Atención por WhatsApp.</p>
                </div>
                <nav aria-label="Enlaces rápidos" className="grid gap-2 text-sm">
                    <Link className="text-slate-700 hover:text-brand-700" to="/">Inicio</Link>
                    <Link className="text-slate-700 hover:text-brand-700" to="/nosotros">Nosotros</Link>
                    <Link className="text-slate-700 hover:text-brand-700" to="/productos">Productos</Link>
                    <Link className="text-slate-700 hover:text-brand-700" to="/clientes">Clientes</Link>
                    <Link className="text-slate-700 hover:text-brand-700" to="/contacto">Contacto</Link>
                </nav>
                <div className="grid gap-2 text-sm text-gray-700">
                    <p>Email: {siteConfig.email}</p>
                    <p>Dirección: {siteConfig.address}</p>
                    <a
                        href={whatsappQuoteLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary w-fit"
                    >
                        Cotizar por WhatsApp
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-200">
                <div className="container py-4 text-xs text-gray-500">© {new Date().getFullYear()} {siteConfig.businessName}. Todos los derechos reservados.</div>
            </div>
        </footer>
    );
}


