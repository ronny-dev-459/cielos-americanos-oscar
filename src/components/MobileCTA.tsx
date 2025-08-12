import { FaWhatsapp } from "react-icons/fa";
import { whatsappQuoteLink } from "../config/siteConfig";

export default function MobileCTA() {
    return (
        <div className="md:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t border-gray-200 shadow-sm px-4 py-3 flex items-center justify-between z-40">
            <div>
                <p className="text-sm font-medium text-slate-900">¿Cotización rápida?</p>
                <p className="text-xs text-slate-600">Respuesta en minutos</p>
            </div>
            <a
                href={whatsappQuoteLink()}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary flex items-center gap-2"
            >
                <FaWhatsapp />
                WhatsApp
            </a>
        </div>
    );
}
