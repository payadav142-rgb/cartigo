import { useMemo, useState } from "react";
import { Product } from "@/types/product";

export function useProductSearch(products: Product[]) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return products;

    const keyword = search.toLowerCase();

    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(keyword) ||
        product.brands.name.toLowerCase().includes(keyword) ||
        product.categories.name.toLowerCase().includes(keyword)
      );
    });
  }, [products, search]);

  return {
    search,
    setSearch,
    filteredProducts,
  };
}