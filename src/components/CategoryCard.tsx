type Props = {
    image?: string;
    icon?: React.ReactNode;
    name: string;
    href: string;
};

export default function CategoryCard({ image, icon, name, href }: Props) {
    return (
        <a href={href} className="group card overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition" aria-label={`Ver categoría ${name}`}>
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        {icon}
                    </div>
                )}
            </div>
            <div className="card-body">
                <h3 className="font-semibold">{name}</h3>
            </div>
        </a>
    );
}