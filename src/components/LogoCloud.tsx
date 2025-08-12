type Props = {
    logos: { src: string; alt?: string }[];
};

export default function LogoCloud({ logos }: Props) {
    return (
        <section className="container py-8 md:py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
                {logos.map((l, i) => (
                    <img
                        key={i}
                        src={l.src}
                        alt={l.alt ?? ""}
                        loading="lazy"
                        className="h-10 md:h-12 w-full object-contain grayscale opacity-70 hover:opacity-100 transition"
                    />
                ))}
            </div>
        </section>
    );
}


