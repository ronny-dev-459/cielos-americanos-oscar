import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappQuoteLink } from "../config/siteConfig";
import type { Product } from "../data/products";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { id, name, category, image, description, specs, tags, isService } = product;
    const [showLightbox, setShowLightbox] = useState(false);

    return (
        <article className="card h-full flex flex-col hover:shadow-md transition overflow-hidden group">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full aspect-[4/3] object-cover rounded-t-2xl transition group-hover:scale-[1.02] cursor-pointer"
                    loading="lazy"
                    width="600"
                    height="450"
                    onClick={() => setShowLightbox(true)}
                />
                {(id !== name && !isService) && (
                    <span className="absolute top-3 left-3 text-xs bg-primary-500 text-white rounded px-2 py-0.5 font-medium">
                        {id}
                    </span>
                )}
                {isService && (
                    <span className="absolute top-3 left-3 text-xs bg-green-500 text-white rounded px-2 py-0.5 font-medium">
                        SERVICIO
                    </span>
                )}
            </div>
            <div className="card-body flex flex-col gap-3 flex-1">
                <span className="kicker">{category}</span>
                <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>
                <p className="text-sm text-text-secondary flex-1">{description}</p>

                {specs && specs.length > 0 && (
                    <div className="text-xs text-text-light">
                        <div className="font-medium text-text-secondary mb-1">Características:</div>
                        <ul className="space-y-1">
                            {specs.slice(0, 3).map((spec, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <div className="w-1 h-1 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{spec}</span>
                                </li>
                            ))}
                            {specs.length > 3 && (
                                <li className="text-primary-500 font-medium">
                                    +{specs.length - 3} características más
                                </li>
                            )}
                        </ul>
                    </div>
                )}

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {tags.slice(0, 3).map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs bg-background-secondary text-primary-600 px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <a
                    className="btn btn-primary mt-auto w-full"
                    href={whatsappQuoteLink(`${name} (${id})`)}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaWhatsapp /> Cotizar por WhatsApp
                </a>
            </div>

            {/* Lightbox Modal */}
            {showLightbox && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowLightbox(false)}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <img
                            src={image}
                            alt={name}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                        
                        {/* Botón de cerrar */}
                        <button
                            onClick={() => setShowLightbox(false)}
                            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                            aria-label="Cerrar imagen"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </article>
    );
}


