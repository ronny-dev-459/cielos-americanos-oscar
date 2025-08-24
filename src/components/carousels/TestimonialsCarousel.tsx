import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
    text: string;
    company: string;
};

type Props = {
    testimonials: Testimonial[];
    delay?: number;            // ms, default 5000
};

export default function TestimonialsCarousel({ testimonials, delay = 5000 }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "center", slidesToScroll: 1, dragFree: false },
        [Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="relative">

            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-full flex-shrink-0" // Un testimonio por slide
                        >
                            <div className="max-w-2xl mx-auto text-center">
                                <p className="text-lg text-slate-600 italic mb-4">
                                    "{testimonial.text}"
                                </p>
                                <p className="text-sm text-slate-500">
                                    — {testimonial.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bullets premium */}
            <div className="flex items-center justify-center gap-3 mt-6">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Ir al testimonio ${i + 1}`}
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
