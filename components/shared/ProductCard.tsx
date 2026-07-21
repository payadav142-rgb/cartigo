type ProductCardProps = {
  image?: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  buttonText?: string;
};

export default function ProductCard({
  image,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  buttonText = "View Deal",
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white transition hover:shadow-lg">
      {/* Product Image */}
      <div className="flex h-52 items-center justify-center bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      <div className="space-y-3 p-4">
        <h3 className="line-clamp-2 text-lg font-semibold">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="rounded bg-green-600 px-2 py-1 text-xs font-bold text-white">
            ★ {rating}
          </span>

          <span className="text-sm text-gray-500">
            {reviews.toLocaleString()} Reviews
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            ₹{price.toLocaleString()}
          </span>

          {originalPrice && (
            <span className="text-gray-400 line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <button className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
          {buttonText}
        </button>
      </div>
    </div>
  );
}