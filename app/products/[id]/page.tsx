import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { products } from "@/data/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({
  params,
}: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Back Button */}
      <Link
        href="/products"
        className="mb-8 inline-block text-sm text-gray-600 hover:text-black"
      >
        ← Back to Products
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative h-[500px] overflow-hidden rounded-2xl border bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <span className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
            {product.brand}
          </span>

          <h1 className="mt-5 text-4xl font-bold">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-lg text-yellow-500">
              ⭐ {product.rating}
            </span>

            <span className="text-gray-500">
              ({product.reviews.toLocaleString()} Reviews)
            </span>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-4xl font-bold">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="text-2xl text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              {discount}% OFF
            </span>
          </div>

          <div className="mt-10 space-y-4 rounded-2xl border bg-gray-50 p-6">
            <div className="flex justify-between">
              <span className="font-medium">Brand</span>
              <span>{product.brand}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Category</span>
              <span>{product.category}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Availability</span>
              <span className="text-green-600">
                In Stock
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Delivery</span>
              <span>Free Delivery</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-black px-8 py-4 text-center font-semibold text-white transition hover:bg-gray-800"
            >
              Buy Now
            </a>

            <button className="rounded-xl border px-8 py-4 font-semibold transition hover:bg-gray-100">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}