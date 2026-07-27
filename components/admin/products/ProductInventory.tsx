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

export default function ProductInventory({
  register,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white p-6">
      <h2 className="mb-6 text-xl font-bold">
        Inventory
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Stock Quantity */}

        <div>
          <label className="mb-2 block font-medium">
            Stock Quantity
          </label>

          <input
            type="number"
            min={0}
            placeholder="100"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
          />
        </div>

        {/* Product Status */}

        <div>
          <label className="mb-2 block font-medium">
            Product Status
          </label>

          <select
            className="w-full rounded-xl border px-4 py-3"
          >
            <option value="draft">
              Draft
            </option>

            <option value="published">
              Published
            </option>

            <option value="archived">
              Archived
            </option>
          </select>
        </div>

        {/* In Stock */}

        <label className="flex items-center justify-between rounded-xl border p-4">
          <span className="font-medium">
            In Stock
          </span>

          <input
            type="checkbox"
            {...register("inStock")}
            className="h-5 w-5"
          />
        </label>

        {/* Featured */}

        <label className="flex items-center justify-between rounded-xl border p-4">
          <span className="font-medium">
            Featured Product
          </span>

          <input
            type="checkbox"
            {...register("featured")}
            className="h-5 w-5"
          />
        </label>

        {/* Trending */}

        <label className="flex items-center justify-between rounded-xl border p-4 md:col-span-2">
          <span className="font-medium">
            Trending Product
          </span>

          <input
            type="checkbox"
            {...register("trending")}
            className="h-5 w-5"
          />
        </label>
      </div>
    </section>
  );
}