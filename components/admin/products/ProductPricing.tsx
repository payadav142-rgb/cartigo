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
  discount: number;
};

export default function ProductPricing({
  register,
  errors,
  discount,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white p-6">
      <h2 className="mb-6 text-xl font-bold">
        Pricing
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Selling Price
          </label>

          <input
            type="number"
            {...register("price", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border px-4 py-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.price?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Original Price
          </label>

          <input
            type="number"
            {...register("originalPrice", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border px-4 py-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.originalPrice?.message}
          </p>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium">
            Affiliate URL
          </label>

          <input
            {...register("affiliateUrl")}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="https://amazon.in/..."
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.affiliateUrl?.message}
          </p>
        </div>

        <div className="md:col-span-2 rounded-xl bg-green-50 p-4">
          <span className="font-semibold">
            Discount:
          </span>{" "}
          {discount}%
        </div>
      </div>
    </section>
  );
}