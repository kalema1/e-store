import { useQuery } from "@tanstack/react-query";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import { getProducts } from "../../services/apiStore";

export default function ProductList() {
  // access the data
  const {
    isLoading,
    data: products,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (isError) {
    return <div>products could not be fetched</div>;
  }

  return (
    <section className={styles.productSection}>
      <div className="container">
        <ul className={styles.productContainer}>
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
