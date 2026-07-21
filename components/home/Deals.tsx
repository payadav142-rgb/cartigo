import ProductCard from "@/components/shared/ProductCard";

export default function Deals() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Trending Deals
        </h2>

        <button className="rounded-lg border px-4 py-2">
          View All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}