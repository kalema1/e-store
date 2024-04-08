import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  return (
    <section className={styles.productDetailsSection}>
      <div className={styles.productDetailsContainer}>
        <div className={styles.grid}>
          <div></div>
          <div className={styles.productdetails}>
            <p className={styles.category}>MENS CLOTHING</p>
            <h2 className={styles.title}>
              Fjallraven - Foldsack No.1 Backpack, Fits 15 laptops
            </h2>
            <p className={styles.rating}>
              rating 3.9 <span className={styles.star}>⭐</span>
            </p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              soluta sequi sint natus similique laborum rem obcaecati debitis in
              dolorum impedit ratione expedita autem cumque, fuga amet veniam!
              Dolor, impedit.
            </p>
            <div>
              <Button>Add to Cart</Button>
              <Link to="/cart">
                <Button>Go to Cart</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
