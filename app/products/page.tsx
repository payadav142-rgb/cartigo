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

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </main>
  );
}