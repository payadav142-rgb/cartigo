"use client";

type FilterSidebarProps = {
  categories: string[];
  brands: string[];
  category: string;
  brand: string;
  onCategoryChange: (value: string) => void;
  onBrandChange: (value: string) => void;
};

export default function FilterSidebar({
  categories,
  brands,
  category,
  brand,
  onCategoryChange,
  onBrandChange,
}: FilterSidebarProps) {
  return (
    <aside className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-xl font-bold">Filters</h2>

      {/* Category */}
      <div className="mb-8">
        <h3 className="mb-3 font-semibold">Category</h3>

        <div className="space-y-3">
          {categories.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="category"
                checked={category === item}
                onChange={() => onCategoryChange(item)}
              />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="mb-3 font-semibold">Brand</h3>

        <div className="space-y-3">
          {brands.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="brand"
                checked={brand === item}
                onChange={() => onBrandChange(item)}
              />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}