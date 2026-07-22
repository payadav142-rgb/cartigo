import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";

export default function Deals() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold">Trending Deals</h2>
          <p className="mt-2 text-gray-600">
            Discover today's best offers on top products.
          </p>
        </div>

        <button className="rounded-lg border border-gray-300 px-5 py-2 transition hover:bg-gray-100">
          View All
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}