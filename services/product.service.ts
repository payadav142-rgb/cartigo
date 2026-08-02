import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "@/repositories/product.repository";

import { Product } from "@/types/product";

export async function getAllProducts() {
  return await getProducts();
}

export async function getProductBySlug(
  slug: string
) {
  return await getProduct(slug);
}

export async function addProduct(
  product: Omit<Product, "id">
) {
  return await createProduct(product);
}

export async function editProduct(
  id: string,
  product: Partial<Product>
) {
  return await updateProduct(id, product);
}

export async function removeProduct(id: string) {
  return await deleteProduct(id);
}