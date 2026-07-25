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
  slug: string;
}

export interface ProductPrice {
  id: string;
  price: number;
  original_price: number;
  affiliate_url: string;
  in_stock: boolean;
  stores: Store;
}

export interface Product {
  id: string;

  title: string;
  slug: string;

  description: string | null;

  image: string;

  rating: number;
  reviews: number;

  brands: Brand;

  categories: Category;

  product_prices: ProductPrice[];
}