import { z } from "zod";

export const productSchema = z.object({
  // Basic Information
  title: z
    .string()
    .trim()
    .min(3, "Product title must be at least 3 characters.")
    .max(200, "Product title is too long."),

  slug: z
    .string()
    .trim()
    .min(3, "Slug is required.")
    .max(200),

  shortDescription: z
    .string()
    .trim()
    .min(10, "Short description must be at least 10 characters.")
    .max(300),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters."),

  // Classification
  category: z
    .string()
    .trim()
    .min(1, "Category is required."),

  brand: z
    .string()
    .trim()
    .min(1, "Brand is required."),

  store: z
    .string()
    .trim()
    .min(1, "Store is required."),

  // Pricing
  price: z.number().min(0, "Price must be greater than or equal to 0."),

  originalPrice: z
    .number()
    .min(0, "Original price must be greater than or equal to 0."),

  affiliateUrl: z
    .string()
    .trim()
    .url("Please enter a valid affiliate URL."),

  // Rating
  rating: z
    .number()
    .min(0)
    .max(5),

  reviews: z
    .number()
    .min(0),

  // Inventory
  inStock: z.boolean(),

  featured: z.boolean(),

  trending: z.boolean(),

  // SEO
  seoTitle: z
    .string()
    .trim()
    .max(60, "SEO title cannot exceed 60 characters."),

  seoDescription: z
    .string()
    .trim()
    .max(160, "SEO description cannot exceed 160 characters."),
});

export type ProductFormData = z.infer<typeof productSchema>;