import Button from "../../ui/Button";
import styles from "./ProductItem.module.css";

export default function ProductItem({ product }) {
  return (
    <li className={styles.listItem}>
      <img
        className={styles.listItemImage}
        src={product.image}
        alt={product.category}
      />
      <p className={styles.listItemTitle}>{product.title}</p>
      <p className={styles.listItemPrice}>${product.price}</p>
      <div className={styles.listItemButtonContainer}>
        <Button>Buy Now</Button>
      </div>
    </li>
  );
}
