import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import type { Product } from "../../data/products";

type Props = {
    items: Product[];
    delay?: number;            // ms, default 3500
};

export default function FeaturedCarousel({ items, delay = 3500 }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", slidesToScroll: 1, dragFree: false },
        [Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="relative">
            {/* Controles premium (solo desktop) */}
            <button
                type="button"
                aria-label="Anterior"
                onClick={scrollPrev}
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-100 items-center justify-center text-xl font-bold text-gray-600 hover:text-primary-600 transition-all duration-200 hover:scale-105"
            >
                ←
            </button>
            <button
                type="button"
                aria-label="Siguiente"
                onClick={scrollNext}
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-100 items-center justify-center text-xl font-bold text-gray-600 hover:text-primary-600 transition-all duration-200 hover:scale-105"
            >
                →
            </button>

            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {items.map((p) => (
                        <div
                            key={p.id}
                            className="min-w-[85%] sm:min-w-[48%] lg:min-w-[32%]" // 1 mob, 2 tablet, 3 desktop
                        >
                            <ProductCard product={p} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bullets premium */}
            <div className="flex items-center justify-center gap-3 mt-6">
                {items.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Ir al slide ${i + 1}`}
                        onClick={() => scrollTo(i)}
                        className={`h-3 w-3 rounded-full transition-all duration-200 ${selectedIndex === i
                            ? "bg-primary-600 scale-125 shadow-lg"
                            : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
