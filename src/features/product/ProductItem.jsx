import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./ProductItem.module.css";

export default function ProductItem({ product }) {
  const text = product.title;
  const INDICE = 14;
  const partOfTitle = text.slice(0, INDICE).trim();

  const title = product.title;
  const titleWithNoSpace = title.replaceAll(" ", "");
  console.log(titleWithNoSpace);
  return (
    <li className={styles.listItem}>
      <img
        className={styles.listItemImage}
        src={product.image}
        alt={product.category}
      />
      <p className={styles.listItemTitle}>{partOfTitle}...</p>
      <p className={styles.listItemPrice}>${product.price}</p>
      <div className={styles.listItemButtonContainer}>
        <Link
          className={styles.buyNow}
          to={`/${titleWithNoSpace}/${product.id}`}
        >
          <Button>Buy Now</Button>
        </Link>
      </div>
    </li>
  );
}
