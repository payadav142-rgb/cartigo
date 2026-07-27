"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  preview: string;
  onImageSelect: (file: File | null) => void;
};

export default function ProductImages({
  preview,
  onImageSelect,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    onImageSelect(file);
  }

  return (
    <section className="rounded-2xl border bg-white p-6">
      <h2 className="mb-6 text-xl font-bold">
        Product Image
      </h2>

      <div className="space-y-6">
        <div
          onClick={() => inputRef.current?.click()}
          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 p-10 transition hover:border-black"
        >
          <p className="text-lg font-semibold">
            Click to Upload Image
          </p>

          <p className="mt-2 text-sm text-gray-500">
            JPG, PNG, WEBP
          </p>

          <input
            ref={inputRef}
            hidden
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {preview && (
          <div className="relative h-80 overflow-hidden rounded-2xl border">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}