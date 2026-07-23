import { notFound } from "next/navigation";
import Link from "next/link";

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
      <Link
        href="/products"
        className="mb-8 inline-block text-sm text-gray-600 hover:text-black"
      >
        ← Back to Products
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}

        <div className="flex h-[500px] items-center justify-center rounded-2xl border bg-gray-100">
          <span className="text-gray-400">
            Product Image
          </span>
        </div>

        {/* Details */}

        <div>
          <span className="rounded-full bg-black px-4 py-2 text-sm text-white">
            {product.brand}
          </span>

          <h1 className="mt-5 text-4xl font-bold">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-yellow-500">
              ⭐ {product.rating}
            </span>

            <span className="text-gray-500">
              ({product.reviews.toLocaleString()} Reviews)
            </span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-4xl font-bold">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="text-xl text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
              {discount}% OFF
            </span>
          </div>

          <div className="mt-8 space-y-3 text-gray-700">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {product.category}
            </p>

            <p>
              <strong>Delivery:</strong> Free Delivery
            </p>

            <p>
              <strong>Availability:</strong>{" "}
              In Stock
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href={product.affiliateUrl}
              target="_blank"
              className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-800"
            >
              Buy Now
            </a>

            <button className="rounded-xl border px-8 py-4 font-semibold">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}