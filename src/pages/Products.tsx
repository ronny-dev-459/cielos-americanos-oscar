import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import { categories as allCategories, products } from "../data/products";

export default function Products() {
    const params = new URLSearchParams(window.location.search);
    const initialCat = params.get("cat") ?? "Todas";
    const [category, setCategory] = useState<string>(initialCat);
    const [page, setPage] = useState<number>(1);
    const pageSize = 12;

    useEffect(() => {
        // Sync URL when filter changes
        const url = new URL(window.location.href);
        if (category === "Todas") url.searchParams.delete("cat");
        else url.searchParams.set("cat", category);
        window.history.replaceState({}, "", url);
        setPage(1);
    }, [category]);

    const filtered = useMemo(() => {
        if (category === "Todas") return products;
        return products.filter((p) => p.category === category);
    }, [category]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

    return (
        <main className="section">
            <h1 className="sr-only">Productos</h1>
            <div className="mb-6">
                <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Productos" }, ...(category !== "Todas" ? [{ label: category }] : [])]} />
            </div>

            <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-3xl md:text-4xl font-semibold">Productos</h2>
                <CategoryFilter categories={allCategories} value={category} onChange={setCategory} />
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {paginated.map((p) => (
                    <ProductCard key={p.id} image={p.image} name={p.name} category={p.category} description={p.description} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-3 py-1 rounded-md border text-sm ${page === i + 1 ? "bg-cyan-600 text-white border-cyan-600" : "border-gray-300 hover:bg-gray-50"}`}
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


