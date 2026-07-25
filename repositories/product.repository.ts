import { supabase } from "@/lib/supabase/server";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands (
        id,
        name,
        slug
      ),
      categories (
        id,
        name,
        slug
      ),
      product_prices (
        id,
        price,
        original_price,
        affiliate_url,
        in_stock,
        stores (
          id,
          name,
          slug
        )
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data as Product[];
}

export async function getProduct(
  slug: string
): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands (
        id,
        name,
        slug
      ),
      categories (
        id,
        name,
        slug
      ),
      product_prices (
        id,
        price,
        original_price,
        affiliate_url,
        in_stock,
        stores (
          id,
          name,
          slug
        )
      )
    `)
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    return null;
  }

  return data as Product;
}