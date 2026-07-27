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

export default function ProductBasicInfo({
  register,
  errors,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white p-6">
      <h2 className="mb-6 text-xl font-bold">
        Basic Information
      </h2>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block font-medium">
            Product Title
          </label>

          <input
            {...register("title")}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="iPhone 16 Pro Max"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.title?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Slug
          </label>

          <input
            {...register("slug")}
            readOnly
            className="w-full rounded-xl border bg-gray-100 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Short Description
          </label>

          <textarea
            rows={3}
            {...register("shortDescription")}
            className="w-full rounded-xl border px-4 py-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.shortDescription?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            rows={6}
            {...register("description")}
            className="w-full rounded-xl border px-4 py-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.description?.message}
          </p>
        </div>
      </div>
    </section>
  );
}