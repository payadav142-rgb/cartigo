import { products } from "@/data/products";
import { Product } from "@/types/product";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(
  id: string
): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(
  category: string
): Product[] {
  return products.filter(
    (product) => product.category === category
  );
}

export function getProductsByBrand(
  brand: string
): Product[] {
  return products.filter(
    (product) => product.brand === brand
  );
}