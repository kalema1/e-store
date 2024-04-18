import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";
import Button from "../../ui/Button";

export default function EmptyCart() {
  return (
    <section className={styles.emptyCartSection}>
      <div className="container">
        <div className={styles.emptyCartContainer}>
          <h2 className={styles.heading}>Your Cart is Empty</h2>
          <p className={styles.paragraph}>
            Browse Our categories and discover the best deals!
          </p>
          <Link className={styles.link} to="/product">
            <Button>START sHOPPING</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
