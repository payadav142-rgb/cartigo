import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  productSchema,
  type ProductFormData,
} from "@/lib/validations/product.schema";

export function useProductForm() {
  return useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      slug: "",
      shortDescription: "",
      description: "",
      category: "",
      brand: "",
      store: "",
      price: 0,
      originalPrice: 0,
      affiliateUrl: "",
      rating: 0,
      reviews: 0,
      inStock: true,
      featured: false,
      trending: false,
      seoTitle: "",
      seoDescription: "",
    },
  });
}