import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import Categories from "@/components/home/Categories";
import Deals from "@/components/home/Deals";

export default function Home() {
  return (
    <main>
      <Hero />

      <SearchBar
        value=""
        onChange={() => {}}
      />

      <Categories />

      <Deals />
    </main>
  );
}