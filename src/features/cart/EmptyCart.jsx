import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";
import Button from "../../ui/Button";

export default function EmptyCart() {
  return (
    <section className={styles.emptyCartSection}>
      <div className="container">
        <div className={styles.emptyCartContainer}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src="cart1.jpg" alt="cart" />
          </div>
          <h2 className={styles.heading}>Your Cart is Empty</h2>
          <p className={styles.paragraph}>
            Browse our categories and discover the best deals!
          </p>
          <Link className={styles.link} to="/products">
            <Button>START SHOPPING</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
