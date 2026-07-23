"use client";

import { products } from "@/data/products";

import ProductCard from "@/components/shared/ProductCard";
import SearchBar from "@/components/shared/SearchBar";
import FilterSidebar from "./FilterSidebar";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";

import { useProductSearch } from "@/hooks/useProductSearch";
import { useProductFilter } from "@/hooks/useProductFilter";
import { useProductSort } from "@/hooks/useProductSort";
import { usePagination } from "@/hooks/usePagination";

export default function ProductsClient() {
  // Dynamic Categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

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

  // Sort
  const {
    sortBy,
    setSortBy,
    sortedProducts,
  } = useProductSort(filteredProducts);

  // Pagination
  const {
    currentPage,
    totalPages,
    paginatedItems,
    nextPage,
    previousPage,
  } = usePagination(sortedProducts, 12);

  return (
    <>
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="grid gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <FilterSidebar
            categories={categories}
            category={category}
            onCategoryChange={setCategory}
          />
        </aside>

        <section className="lg:col-span-9">
          <div className="mb-6 flex items-center justify-between">
            <p>{sortedProducts.length} Products Found</p>

            <SortDropdown
              value={sortBy}
              onChange={setSortBy}
            />
          </div>

          {paginatedItems.length === 0 ? (
            <div className="rounded-xl border py-20 text-center">
              <h2 className="text-2xl font-bold">
                No Products Found
              </h2>

              <p className="mt-3 text-gray-500">
                Try another search keyword.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {paginatedItems.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevious={previousPage}
                onNext={nextPage}
              />
            </>
          )}
        </section>
      </div>
    </>
  );
}