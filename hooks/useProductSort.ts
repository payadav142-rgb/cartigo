import { useMemo, useState } from "react";
import { Product } from "@/types/product";

export type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "rating"
  | "discount";

export function useProductSort(products: Product[]) {
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const sortedProducts = useMemo(() => {
    const data = [...products];

    switch (sortBy) {
      case "price-low":
        return data.sort((a, b) => a.price - b.price);

      case "price-high":
        return data.sort((a, b) => b.price - a.price);

      case "rating":
        return data.sort((a, b) => b.rating - a.rating);

      case "discount":
        return data.sort(
          (a, b) =>
            (b.originalPrice - b.price) -
            (a.originalPrice - a.price)
        );

      default:
        return data;
    }
  }, [products, sortBy]);

  return {
    sortBy,
    setSortBy,
    sortedProducts,
  };
}