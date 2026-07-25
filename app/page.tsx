import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import Deals from "@/components/home/Deals";

import { getAllProducts } from "@/services/product.service";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main>
      <Hero />

      <Categories />

      <Deals products={products} />
    </main>
  );
}