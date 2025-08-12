import { FaWhatsapp } from "react-icons/fa";
import { whatsappQuoteLink } from "../config/siteConfig";

export default function DesktopCTA() {
    return (
        <div className="hidden md:block w-full max-w-sm mx-auto">
            <div className="card p-6 bg-gradient-to-br from-brand-50 to-white border-brand-100 text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    ¿Necesitas una cotización?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                    Respuesta por WhatsApp en minutos. Sin compromiso.
                </p>
                <a
                    href={whatsappQuoteLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                    <FaWhatsapp />
                    Cotizar por WhatsApp
                </a>
                <p className="text-xs text-slate-500 mt-3">
                    Horario: Lun-Vie 9:00-18:00
                </p>
            </div>
        </div>
    );
}
