import ProductCard from "@/components/shared/ProductCard";

const products = [
  {
    title: "Apple iPhone 16 Pro Max",
    price: 129999,
    originalPrice: 139999,
    rating: 4.8,
    reviews: 12432,
  },
  {
    title: "Samsung Galaxy S25 Ultra",
    price: 119999,
    originalPrice: 129999,
    rating: 4.7,
    reviews: 8421,
  },
  {
    title: "OnePlus 13",
    price: 69999,
    originalPrice: 74999,
    rating: 4.6,
    reviews: 6322,
  },
  {
    title: "iQOO 13",
    price: 54999,
    originalPrice: 59999,
    rating: 4.5,
    reviews: 3124,
  },
];

export default function Deals() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Trending Deals
        </h2>

        <button className="rounded-lg border px-4 py-2">
          View All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </section>
  );
}