"use client";

import { products } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";
import FilterSidebar from "./FilterSidebar";
import SortDropdown from "./SortDropdown";
import SearchBar from "@/components/shared/SearchBar";

import { useProductSearch } from "@/hooks/useProductSearch";
import { useProductFilter } from "@/hooks/useProductFilter";

export default function ProductsClient() {
  // Search
  const {
    search,
    setSearch,
    filteredProducts: searchedProducts,
  } = useProductSearch(products);

  // Filter
  const {
    category,
    setCategory,
    filteredProducts,
  } = useProductFilter(searchedProducts);

  return (
    <>
      {/* Search */}
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <FilterSidebar
            category={category}
            onCategoryChange={setCategory}
          />
        </aside>

        {/* Products */}
        <section className="lg:col-span-9">
          {/* Top Bar */}
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-gray-600">
              {filteredProducts.length} Products Found
            </p>

            <SortDropdown />
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 ? (
            <div className="rounded-xl border py-20 text-center">
              <h2 className="text-2xl font-bold">
                No Products Found
              </h2>

              <p className="mt-3 text-gray-500">
                Try another search keyword.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}