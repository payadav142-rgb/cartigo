import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-4xl font-bold">
          Make Better Buying Decisions
        </h1>

        <p className="mt-4 text-lg">
          Compare products, discover deals and choose smarter.
        </p>
      </section>

      {/* Categories Placeholder */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold">
          Popular Categories
        </h2>
      </section>

      {/* Deals Placeholder */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold">
          Trending Deals
        </h2>
      </section>

      {/* Guides Placeholder */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold">
          Buying Guides
        </h2>
      </section>
    </main>
  );
}