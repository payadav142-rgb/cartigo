"use client";

import {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import { ProductFormData } from "@/lib/validations/product.schema";

type Props = {
  register: UseFormRegister<ProductFormData>;
  watch: UseFormWatch<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
};

export default function ProductSEO({
  register,
  watch,
  errors,
}: Props) {
  const seoTitle = watch("seoTitle") || "";
  const seoDescription =
    watch("seoDescription") || "";

  return (
    <section className="rounded-2xl border bg-white p-6">
      <h2 className="mb-6 text-xl font-bold">
        SEO
      </h2>

      <div className="space-y-6">
        {/* SEO Title */}

        <div>
          <div className="mb-2 flex justify-between">
            <label className="font-medium">
              SEO Title
            </label>

            <span className="text-sm text-gray-500">
              {seoTitle.length}/60
            </span>
          </div>

          <input
            {...register("seoTitle")}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Best iPhone 16 Pro Max Price in India"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.seoTitle?.message}
          </p>
        </div>

        {/* SEO Description */}

        <div>
          <div className="mb-2 flex justify-between">
            <label className="font-medium">
              SEO Description
            </label>

            <span className="text-sm text-gray-500">
              {seoDescription.length}/160
            </span>
          </div>

          <textarea
            rows={4}
            {...register("seoDescription")}
            className="w-full rounded-xl border p-3"
            placeholder="Compare prices from Amazon, Flipkart and Croma..."
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.seoDescription?.message}
          </p>
        </div>

        {/* Meta Keywords */}

        <div>
          <label className="mb-2 block font-medium">
            Meta Keywords
          </label>

          <input
            placeholder="iphone, apple, smartphone, ios"
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>

        {/* Google Preview */}

        <div className="rounded-xl border bg-gray-50 p-5">
          <p className="text-lg text-blue-700">
            {seoTitle || "SEO Title Preview"}
          </p>

          <p className="text-sm text-green-700">
            https://cartigo.in/products/sample-product
          </p>

          <p className="mt-2 text-gray-600">
            {seoDescription ||
              "SEO description preview will appear here."}
          </p>
        </div>
      </div>
    </section>
  );
}