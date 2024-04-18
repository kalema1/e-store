import { useDispatch } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import styles from "./CartItem.module.css";
import UpdateCartItemQuantity from "./UpdateCartItemQuantity";
import { deleteItem } from "./cartSlice";

export default function CartItem({ product }) {
  const totalPrice = product.quantity * product.price;
  const dispatch = useDispatch();

  /**
   * removes item ffrom cart
   */
  function handleDeleteItem() {
    dispatch(deleteItem(product.id));
  }

  return (
    <li className={styles.cartItemContainer}>
      <div>
        <img src={product.image} alt={product.title} className={styles.img} />
      </div>
      <div>
        <div>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.prices}>{`${product.quantity} X  ${
            product.price
          } = ${totalPrice.toFixed(2)}`}</p>
          <div className={styles.buttonContainer}>
            <UpdateCartItemQuantity />
            <div
              className={styles.deleteContainer}
              data-title="delete"
              onClick={handleDeleteItem}
            >
              <FiTrash2 className={styles.delete} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
