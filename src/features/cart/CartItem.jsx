import styles from "./CartItem.module.css";
import UpdateCartItemQuantity from "./UpdateCartItemQuantity";

export default function CartItem({ product }) {
  const totalPrice = product.quantity * product.price;

  return (
    <li className={styles.cartItemContainer}>
      <div>
        <img src={product.image} alt={product.title} className={styles.img} />
      </div>
      <div>
        <div>
          <h2 className={styles.title}>{product.title}</h2>
          <p
            className={styles.prices}
          >{`${product.quantity} X  ${product.price} = ${totalPrice}`}</p>
          <div className={styles.buttonContainer}>
            <UpdateCartItemQuantity />
          </div>
        </div>
      </div>
    </li>
  );
}
