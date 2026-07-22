"use client";

type FilterSidebarProps = {
  category: string;
  onCategoryChange: (value: string) => void;
};

export default function FilterSidebar({
  category,
  onCategoryChange,
}: FilterSidebarProps) {
  const categories = [
    "All",
    "Mobiles",
    "Laptops",
    "Headphones",
  ];

  return (
    <aside className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-xl font-bold">
        Filters
      </h2>

      <div>
        <h3 className="mb-3 font-semibold">
          Category
        </h3>

        <div className="space-y-3">
          {categories.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                checked={category === item}
                onChange={() => onCategoryChange(item)}
              />

              {item}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}