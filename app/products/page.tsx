import FilterSidebar from "@/components/products/FilterSidebar";
import SortDropdown from "@/components/products/SortDropdown";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">All Products</h1>

        <p className="mt-2 text-gray-600">
          Browse all products available on Cartigo.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <FilterSidebar />
        </aside>

        {/* Products */}
        <section className="lg:col-span-9">
          {/* Top Bar */}
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-gray-600">
              {products.length} Products Found
            </p>

            <SortDropdown />
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}