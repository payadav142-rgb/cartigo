import { useMemo, useState } from "react";
import { Product } from "@/types/product";

export function useProductFilter(products: Product[]) {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category === "All" || product.category === category;

      const brandMatch =
        brand === "All" || product.brand === brand;

      return categoryMatch && brandMatch;
    });
  }, [products, category, brand]);

  return {
    category,
    setCategory,
    brand,
    setBrand,
    filteredProducts,
  };
}