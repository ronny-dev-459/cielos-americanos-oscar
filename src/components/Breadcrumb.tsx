import { Link } from "react-router-dom";

export type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        {item.href ? (
                            <Link to={item.href} className="hover:text-cyan-700">
                                {item.label}
                            </Link>
                        ) : (
                            <span aria-current="page">{item.label}</span>
                        )}
                        {idx < items.length - 1 && <span className="text-gray-400">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}


