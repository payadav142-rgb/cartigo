import { notFound } from "next/navigation";
import { products } from "@/data/products";

type PageProps = {
  params: {
    id: string;
  };
};

export default function ProductDetailsPage({ params }: PageProps) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Product Image */}
        <div className="flex h-[500px] items-center justify-center rounded-xl border bg-gray-100">
          <span className="text-gray-400">Product Image</span>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="rounded bg-green-600 px-2 py-1 text-sm font-bold text-white">
              ★ {product.rating}
            </span>

            <span className="text-gray-600">
              {product.reviews.toLocaleString()} Reviews
            </span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-4xl font-bold">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="text-xl text-gray-400 line-through">
              ₹{product.originalPrice?.toLocaleString()}
            </span>
          </div>

          <button className="mt-10 rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white hover:bg-gray-800">
            View Deal
          </button>
        </div>
      </div>
    </main>
  );
}