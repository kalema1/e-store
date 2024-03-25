import Header from "../features/Header";
import ProductList from "../features/product/ProductList";
import ProductHeading from "../ui/ProductHeading";

export default function Products() {
  return (
    <div>
      <Header />
      <ProductHeading />
      <ProductList />
    </div>
  );
}
