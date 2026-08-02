import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
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
 * Remove after migrating
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

export async function createNewProduct(
  product: Omit<Product, "id">
) {
  return await createProduct(product);
}

export async function updateExistingProduct(
  id: string,
  product: Partial<Product>
) {
  return await updateProduct(id, product);
}

export async function removeProduct(id: string) {
  return await deleteProduct(id);
}