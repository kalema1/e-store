import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

export default function ProductList() {
  return (
    <section className={styles.productSection}>
      <div className="container">
        <ul className={styles.productContainer}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ul>
      </div>
    </section>
  );
}
