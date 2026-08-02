"use client";

import { useEffect, useState } from "react";

import { ProductFormData } from "@/lib/validations/product.schema";
import { useProductForm } from "@/hooks/useProductForm";

import ProductBasicInfo from "./ProductBasicInfo";
import ProductClassification from "./ProductClassification";
import ProductPricing from "./ProductPricing";
import ProductInventory from "./ProductInventory";
import ProductImages from "./ProductImages";
import ProductSEO from "./ProductSEO";
import ProductActions from "./ProductActions";

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useProductForm();

  /* ------------------------------------------------ */

  const title = watch("title");

  const price = watch("price");

  const originalPrice = watch("originalPrice");

  /* ------------------------------------------------ */

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [preview, setPreview] =
    useState("");

  /* ------------------------------------------------ */

  useEffect(() => {
    if (!title) return;

    const slug = title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

    setValue("slug", slug);
  }, [title, setValue]);

  /* ------------------------------------------------ */

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl =
      URL.createObjectURL(selectedFile);

    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  /* ------------------------------------------------ */

  const discount =
    originalPrice && price
      ? Math.max(
          0,
          Math.round(
            ((originalPrice - price) /
              originalPrice) *
              100
          )
        )
      : 0;

  /* ------------------------------------------------ */

  async function onSubmit(
    data: ProductFormData
  ) {
    console.log(
      "========== PRODUCT =========="
    );

    console.log(data);

    console.log(selectedFile);

    console.log(
      "============================="
    );

    /*
      NEXT

      Upload Image

      Save Product

      Redirect
    */
  }

  /* ------------------------------------------------ */

  function handleReset() {
    reset();

    setSelectedFile(null);

    setPreview("");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
            {/* ---------------- BASIC INFO ---------------- */}

      <ProductBasicInfo
        register={register}
        errors={errors}
      />

      {/* ---------------- CLASSIFICATION ---------------- */}

      <ProductClassification
        register={register}
        errors={errors}
      />

      {/* ---------------- PRICING ---------------- */}

      <ProductPricing
        register={register}
        watch={watch}
        errors={errors}
        discount={discount}
      />

      {/* ---------------- INVENTORY ---------------- */}

      <ProductInventory
        register={register}
        errors={errors}
      />

      {/* ---------------- IMAGES ---------------- */}

      <ProductImages
        preview={preview}
        onImageSelect={setSelectedFile}
      />

      {/* ---------------- SEO ---------------- */}

      <ProductSEO
        register={register}
        watch={watch}
        errors={errors}
      />

      {/* ---------------- ACTIONS ---------------- */}

      <ProductActions
        isSubmitting={isSubmitting}
        onReset={handleReset}
      />
    </form>
  );
}
 