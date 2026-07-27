"use client";

type Props = {
  isSubmitting?: boolean;
  onReset?: () => void;
};

export default function ProductActions({
  isSubmitting = false,
  onReset,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white p-6">
      <div className="flex flex-col gap-4 md:flex-row md:justify-end">
        <button
          type="button"
          onClick={onReset}
          className="rounded-xl border px-6 py-3 font-medium transition hover:bg-gray-100"
        >
          Reset
        </button>

        <button
          type="submit"
          className="rounded-xl bg-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
        >
          Save Draft
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting
            ? "Publishing..."
            : "Publish Product"}
        </button>
      </div>
    </section>
  );
}