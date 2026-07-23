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
      className="group overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
          {discount}% OFF
        </span>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500">
          {product.brand}
        </p>

        <h3 className="mt-2 line-clamp-2 text-lg font-semibold">
          {product.title}
        </h3>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-2xl font-bold">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-yellow-600">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-gray-500">
            {product.reviews.toLocaleString()} Reviews
          </span>
        </div>
      </div>
    </Link>
  );
}