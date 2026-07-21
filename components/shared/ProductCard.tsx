export default function ProductCard() {
  return (
    <div className="overflow-hidden rounded-xl border bg-white transition hover:shadow-lg">
      {/* Product Image */}
      <div className="flex h-52 items-center justify-center bg-gray-100">
        <span className="text-gray-400">Image</span>
      </div>

      <div className="space-y-3 p-4">
        {/* Product Title */}
        <h3 className="line-clamp-2 text-lg font-semibold">
          Apple iPhone 16 Pro Max
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="rounded bg-green-600 px-2 py-1 text-xs font-bold text-white">
            ★ 4.8
          </span>

          <span className="text-sm text-gray-500">
            12,432 Reviews
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            ₹1,29,999
          </span>

          <span className="text-gray-400 line-through">
            ₹1,39,999
          </span>
        </div>

        {/* Button */}
        <button className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
          View Deal
        </button>
      </div>
    </div>
  );
}