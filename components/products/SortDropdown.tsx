"use client";

import { SortOption } from "@/hooks/useProductSort";

type SortDropdownProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="sort"
        className="text-sm font-medium text-gray-700"
      >
        Sort By
      </label>

      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-black"
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="discount">Best Discount</option>
      </select>
    </div>
  );
}