import { useMemo, useState } from "react";
import { Product } from "@/types/product";

export type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "rating"
  | "discount";

export function useProductSort(products: Product[]) {
  const [sortBy, setSortBy] =
    useState<SortOption>("featured");

  const sortedProducts = useMemo(() => {
    const data = [...products];

    switch (sortBy) {
      case "price-low":
        return data.sort(
          (a, b) =>
            (a.product_prices[0]?.price ?? 0) -
            (b.product_prices[0]?.price ?? 0)
        );

      case "price-high":
        return data.sort(
          (a, b) =>
            (b.product_prices[0]?.price ?? 0) -
            (a.product_prices[0]?.price ?? 0)
        );

      case "rating":
        return data.sort(
          (a, b) => b.rating - a.rating
        );

      case "discount":
        return data.sort((a, b) => {
          const discountA =
            (a.product_prices[0]?.original_price ?? 0) -
            (a.product_prices[0]?.price ?? 0);

          const discountB =
            (b.product_prices[0]?.original_price ?? 0) -
            (b.product_prices[0]?.price ?? 0);

          return discountB - discountA;
        });

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