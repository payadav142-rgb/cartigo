export interface Brand {
  id: string;
  name: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Store {
  id: string;
  name: string;
}

export interface Product {
  id: string;

  title: string;
  slug: string;

  short_description: string | null;
  description: string | null;

  price: number;
  original_price: number;

  affiliate_url: string;

  rating: number;
  reviews: number;

  in_stock: boolean;
  featured: boolean;
  trending: boolean;

  seo_title: string | null;
  seo_description: string | null;

  created_at: string;

  brand_id: string;
  category_id: string;
  store_id: string;

  brands: Brand;
  categories: Category;
  stores: Store;
}