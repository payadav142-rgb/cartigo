import { supabase } from "@/lib/supabase/server";

export async function getAllProducts() {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands(name),
      categories(name),
      product_prices(
        price,
        original_price,
        affiliate_url,
        stores(name)
      )
    `);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands(name),
      categories(name),
      product_prices(
        price,
        original_price,
        affiliate_url,
        stores(name)
      )
    `)
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return data;
}