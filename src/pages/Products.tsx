import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductTabs from "../components/ProductTabs";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
    const params = new URLSearchParams(window.location.search);
    const initialCat = params.get("cat") ?? "all";
    const [category, setCategory] = useState<string>(initialCat);
    const [page, setPage] = useState<number>(1);
    const pageSize = 12;

    useEffect(() => {
        // Sync URL when filter changes
        const url = new URL(window.location.href);
        if (category === "all") url.searchParams.delete("cat");
        else url.searchParams.set("cat", category);
        window.history.replaceState({}, "", url);
        setPage(1);
    }, [category]);

    const filtered = useMemo(() => {
        if (category === "all") return products;
        return products.filter((p) => p.category === category);
    }, [category]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

    return (
        <main className="section">
            <h1 className="sr-only">Productos</h1>
            <div className="mb-6">
                <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Productos" }, ...(category !== "all" ? [{ label: category }] : [])]} />
            </div>

            <div className="flex flex-col gap-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-center">Catálogo de Productos</h2>
                <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto">
                    Descubre nuestra amplia gama de cielos modulares, perfilería y luminaria para tu proyecto
                </p>
                
                {/* Tabs de categorías */}
                <div className="flex justify-center">
                    <ProductTabs activeCategory={category} onCategoryChange={setCategory} />
                </div>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {paginated.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-3 py-1 rounded-md border text-sm ${page === i + 1 ? "bg-primary-500 text-white border-primary-500" : "border-gray-300 hover:bg-gray-50"}`}
                            aria-current={page === i + 1 ? "page" : undefined}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </main>
    );
}


