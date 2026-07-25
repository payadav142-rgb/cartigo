import {
  getProducts,
  getProduct,
} from "@/repositories/product.repository";

import { Product } from "@/types/product";

export async function getAllProducts(): Promise<Product[]> {
  return await getProducts();
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  return await getProduct(slug);
}

/**
 * Temporary compatibility
 * Remove this after migrating
 * /products/[id] -> /products/[slug]
 */
export async function getProductById(
  id: string
): Promise<Product | null> {
  const products = await getProducts();

  return (
    products.find((product) => product.id === id) ??
    null
  );
}