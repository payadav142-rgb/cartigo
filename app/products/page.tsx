import ProductsClient from "@/components/products/ProductsClient";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          All Products
        </h1>

        <p className="mt-2 text-gray-600">
          Browse all products available on Cartigo.
        </p>
      </div>

      <ProductsClient />
    </main>
  );
}