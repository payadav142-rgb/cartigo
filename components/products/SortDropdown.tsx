export default function SortDropdown() {
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
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-black"
      >
        <option>Featured</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Highest Rated</option>
        <option>Newest</option>
        <option>Best Discount</option>
      </select>
    </div>
  );
}