"use client";

import { products } from "@/data/products";
import FilterSidebar from "./FilterSidebar";
import SortDropdown from "./SortDropdown";
import ProductCard from "../shared/ProductCard";

export default function ProductsClient() {
  return (
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
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}