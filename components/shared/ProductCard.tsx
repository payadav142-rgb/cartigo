import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const discount = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  return (
    <Link
      href={`/products/${product.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow">
          {discount}% OFF
        </span>
      </div>

      {/* Product Info */}
      <div className="space-y-3 p-5">
        {/* Brand */}
        <p className="text-sm font-medium text-gray-500">
          {product.brand}
        </p>

        {/* Title */}
        <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold text-gray-900">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-black">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-yellow-600">
            ⭐ {product.rating}
          </span>

          <span className="text-gray-500">
            {product.reviews.toLocaleString()} Reviews
          </span>
        </div>

        {/* CTA */}
        <button
          className="mt-2 w-full rounded-xl bg-black py-3 font-semibold text-white transition-colors hover:bg-gray-800"
          type="button"
        >
          View Details
        </button>
      </div>
    </Link>
  );
}