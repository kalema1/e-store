import Header from "../features/Header";
import ProductList from "../features/product/ProductList";
import Hero from "../ui/Hero";
import ProductHeading from "../ui/ProductHeading";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductHeading />
      <ProductList />
    </div>
  );
}
