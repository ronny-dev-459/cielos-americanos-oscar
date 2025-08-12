type Props = {
    categories: string[];
    value: string;
    onChange: (value: string) => void;
};

export default function CategoryFilter({ categories, value, onChange }: Props) {
    const allCategories = ["Todas", ...categories];

    return (
        <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
                <button
                    key={category}
                    className={`px-3 py-1.5 rounded-full border transition-colors text-sm font-medium ${value === category
                            ? "bg-brand-50 text-brand-700 border-brand-100"
                            : "text-slate-700 border-gray-200 hover:bg-slate-50 hover:border-slate-300"
                        }`}
                    onClick={() => onChange(category)}
                    aria-pressed={value === category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}


