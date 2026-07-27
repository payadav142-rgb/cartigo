"use client";

import {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import { ProductFormData } from "@/lib/validations/product.schema";

type Props = {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
};

export default function ProductClassification({
  register,
  errors,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white p-6">
      <h2 className="mb-6 text-xl font-bold">
        Classification
      </h2>

      <div className="grid gap-5 md:grid-cols-3">
        {/* Category */}

        <div>
          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            {...register("category")}
            className="w-full rounded-xl border px-4 py-3"
          >
            <option value="">
              Select Category
            </option>

            <option value="Smartphones">
              Smartphones
            </option>

            <option value="Laptops">
              Laptops
            </option>

            <option value="Headphones">
              Headphones
            </option>
          </select>

          <p className="mt-1 text-sm text-red-500">
            {errors.category?.message}
          </p>
        </div>

        {/* Brand */}

        <div>
          <label className="mb-2 block font-medium">
            Brand
          </label>

          <select
            {...register("brand")}
            className="w-full rounded-xl border px-4 py-3"
          >
            <option value="">
              Select Brand
            </option>

            <option value="Apple">
              Apple
            </option>

            <option value="Samsung">
              Samsung
            </option>

            <option value="Sony">
              Sony
            </option>
          </select>

          <p className="mt-1 text-sm text-red-500">
            {errors.brand?.message}
          </p>
        </div>

        {/* Store */}

        <div>
          <label className="mb-2 block font-medium">
            Store
          </label>

          <select
            {...register("store")}
            className="w-full rounded-xl border px-4 py-3"
          >
            <option value="">
              Select Store
            </option>

            <option value="Amazon">
              Amazon
            </option>

            <option value="Flipkart">
              Flipkart
            </option>

            <option value="Croma">
              Croma
            </option>
          </select>

          <p className="mt-1 text-sm text-red-500">
            {errors.store?.message}
          </p>
        </div>
      </div>
    </section>
  );
}