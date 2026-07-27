"use client";

import { useEffect } from "react";

import { useProductForm } from "@/hooks/useProductForm";

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useProductForm();

  const title = watch("title");
  const price = watch("price");
  const originalPrice = watch("originalPrice");

  // Auto Slug
  useEffect(() => {
    const slug = title
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

    setValue("slug", slug);
  }, [title, setValue]);

  const discount =
    originalPrice > 0
      ? Math.round(
          ((originalPrice - price) /
            originalPrice) *
            100
        )
      : 0;

  const onSubmit = (data: any) => {
    console.log(data);

    // TODO
    // Save to Supabase
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      {/* Basic Information */}

      <section className="rounded-2xl border bg-white p-6">
        <h2 className="mb-6 text-xl font-bold">
          Basic Information
        </h2>

        <div className="space-y-5">
          <div>
            <label>Title</label>

            <input
              {...register("title")}
              className="mt-2 w-full rounded-xl border px-4 py-3"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.title?.message}
            </p>
          </div>

          <div>
            <label>Slug</label>

            <input
              {...register("slug")}
              className="mt-2 w-full rounded-xl border bg-gray-100 px-4 py-3"
              readOnly
            />
          </div>

          <div>
            <label>Short Description</label>

            <textarea
              rows={3}
              {...register(
                "shortDescription"
              )}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label>Description</label>

            <textarea
              rows={6}
              {...register("description")}
              className="mt-2 w-full rounded-xl border p-3"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}

      <section className="rounded-2xl border bg-white p-6">
        <h2 className="mb-6 text-xl font-bold">
          Pricing
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label>Price</label>

            <input
              type="number"
              {...register("price", {
                valueAsNumber: true,
              })}
              className="mt-2 w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div>
            <label>Original Price</label>

            <input
              type="number"
              {...register(
                "originalPrice",
                {
                  valueAsNumber: true,
                }
              )}
              className="mt-2 w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div className="md:col-span-2">
            <label>Affiliate URL</label>

            <input
              {...register("affiliateUrl")}
              className="mt-2 w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div className="rounded-xl bg-green-50 p-4">
            Discount : {discount}%
          </div>
        </div>
      </section>

      <button
        className="rounded-xl bg-black px-8 py-4 text-white"
        type="submit"
      >
        Save Product
      </button>
    </form>
  );
}