import { FaWhatsapp } from "react-icons/fa";
import { whatsappQuoteLink } from "../config/siteConfig";

type Props = {
    image: string;
    name: string;
    category: string;
    description: string;
    bullets?: string[];
    badge?: string;
};

export default function ProductCard({ image, name, category, description, bullets, badge }: Props) {
    return (
        <article className="card h-full flex flex-col hover:shadow-md transition overflow-hidden group">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full aspect-[4/3] object-cover rounded-t-2xl transition group-hover:scale-[1.02]"
                    loading="lazy"
                    width="600"
                    height="450"
                />
                {badge && (
                    <span className="absolute top-3 left-3 text-xs bg-white/90 text-slate-700 rounded px-2 py-0.5 font-medium">
                        {badge}
                    </span>
                )}
            </div>
            <div className="card-body flex flex-col gap-2 flex-1">
                <span className="kicker">{category}</span>
                <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>
                <p className="text-sm text-slate-600 flex-1 line-clamp-2">{description}</p>
                {bullets && bullets.length > 0 && (
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        {bullets.slice(0, 2).map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                )}
                <a
                    className="btn btn-primary mt-auto w-full"
                    href={whatsappQuoteLink(name)}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaWhatsapp /> Cotizar por WhatsApp
                </a>
            </div>
        </article>
    );
}


