export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-8 text-3xl font-bold">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        <div className="rounded-xl border p-6 text-center">Mobiles</div>
        <div className="rounded-xl border p-6 text-center">Laptops</div>
        <div className="rounded-xl border p-6 text-center">Headphones</div>
        <div className="rounded-xl border p-6 text-center">Smartwatches</div>
        <div className="rounded-xl border p-6 text-center">Televisions</div>
        <div className="rounded-xl border p-6 text-center">Cameras</div>
      </div>
    </section>
  );
}