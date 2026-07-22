"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm md:flex-row">
        <input
          type="text"
          placeholder="Search products, brands, categories..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
        />

        <button className="rounded-xl bg-black px-8 py-3 font-semibold text-white hover:bg-gray-800">
          Search
        </button>
      </div>
    </section>
  );
}