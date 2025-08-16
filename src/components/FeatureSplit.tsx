import { whatsappQuoteLink } from "../config/siteConfig";

type Props = {
    kicker: string;
    title: string;
    desc: string;
    imgSrc: string;
    reverse?: boolean;
};

export default function FeatureSplit({ kicker, title, desc, imgSrc, reverse = false }: Props) {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24 reveal">
            <div className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div>
                    <p className="kicker text-primary-500">{kicker}</p>
                    <h2 className="mt-2">{title}</h2>
                    <p className="mt-4 text-slate-600 max-w-prose">{desc}</p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a href="/productos" className="btn btn-primary">
                            Ver productos
                        </a>
                        <a
                            href={whatsappQuoteLink()}
                            className="btn btn-outline"
                        >
                            Cotizar ahora
                        </a>
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width="600"
                        height="338"
                    />
                </div>
            </div>
        </div>
    );
}
