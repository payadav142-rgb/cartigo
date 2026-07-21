export default function FilterSidebar() {
  return (
    <aside className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-xl font-bold">
        Filters
      </h2>

      <div className="space-y-6">
        {/* Category */}
        <div>
          <h3 className="mb-2 font-semibold">
            Category
          </h3>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Mobiles
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Laptops
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Headphones
            </label>
          </div>
        </div>

        {/* Brand */}
        <div>
          <h3 className="mb-2 font-semibold">
            Brand
          </h3>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Apple
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Samsung
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              OnePlus
            </label>
          </div>
        </div>

        {/* Price */}
        <div>
          <h3 className="mb-2 font-semibold">
            Price
          </h3>

          <input
            type="range"
            min="0"
            max="200000"
            className="w-full"
          />
        </div>
      </div>
    </aside>
  );
}