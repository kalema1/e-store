import Button from "../../ui/Button";
import styles from "./ProductItem.module.css";

export default function ProductItem() {
  return (
    <li className={styles.listItem}>
      <img
        className={styles.listItemImage}
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      />
      <p className={styles.listItemTitle}>
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
      <p className={styles.listItemPrice}>$109.95</p>
      <div className={styles.listItemButtonContainer}>
        <Button>Buy Now</Button>
      </div>
    </li>
  );
}
