import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative flex h-52 items-center justify-center bg-gray-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3 p-4">
        <h3 className="line-clamp-2 text-lg font-semibold">
          {product.title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="rounded bg-green-600 px-2 py-1 text-xs font-bold text-white">
            ★ {product.rating}
          </span>

          <span className="text-sm text-gray-500">
            {product.reviews.toLocaleString()} Reviews
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        <Link href={`/products/${product.id}`}>
          <button className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
            View Deal
          </button>
        </Link>
      </div>
    </div>
  );
}