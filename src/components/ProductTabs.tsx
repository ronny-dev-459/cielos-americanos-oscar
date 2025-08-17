import { siteConfig } from "../config/siteConfig";

type ProductTabsProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function ProductTabs({ activeCategory, onCategoryChange }: ProductTabsProps) {
  const categories = [
    { id: "all", label: siteConfig.pages.products.filters.all, value: "all" },
    { id: "cielos", label: "Cielos Modulares", value: "Cielos Modulares" },
    { id: "perfileria", label: "Perfilería", value: "Perfilería" },
    { id: "luminaria", label: "Luminaria", value: "Luminaria" },
  ];

  return (
    <div className="flex flex-wrap gap-2 md:gap-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.value)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeCategory === cat.value
              ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
