import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  src: string;         // /assets/hero/hero-1.webp
  alt: string;         // "Cielo modular en oficinas"
  focal?: "center" | "top" | "bottom" | "left" | "right"; // opcional
};

export default function HeroCarousel({
  slides,
  overlay = true,
  heightClass = "min-h-[75vh] md:min-h-[85vh]",
  delay = 4000,
  children
}: {
  slides: Slide[];
  overlay?: boolean;
  heightClass?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      duration: 20,
      startIndex: 0
    },
    [Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  return (
    <section className={`relative ${heightClass} overflow-hidden`}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-full h-full">
              {/* Imagen de fondo tipo cover con transición fade */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover transition-all duration-1500 ease-in-out"
                style={{
                  backgroundImage: `url('${s.src}')`,
                  backgroundPosition: s.focal ?? "center",
                  opacity: index === i ? 1 : 0,
                  transform: index === i ? 'scale(1)' : 'scale(1.05)',
                  filter: index === i ? 'brightness(1)' : 'brightness(0.8)'
                }}
                aria-hidden="true"
              />
              {/* Overlay mejorado para legibilidad */}
              {overlay && <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" aria-hidden="true" />}
              {/* Contenido del hero (texto/CTAs) lo inyectas desde fuera */}
              <div className="relative z-10 h-full">
                {children}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles (desktop) */}
      <button
        aria-label="Anterior"
        onClick={scrollPrev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/95 text-slate-700 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-200 items-center justify-center text-2xl font-bold"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Siguiente"
        onClick={scrollNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/95 text-slate-700 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-200 items-center justify-center text-2xl font-bold"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bullets */}
      <div className="absolute z-20 bottom-6 left-0 right-0 flex items-center justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 transform hover:scale-110
              ${index === i ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>

      {/* Shape divider inferior */}
      <div className="absolute -bottom-px left-0 right-0 h-12 bg-white"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black)'
        }}
      />
    </section>
  );
}
