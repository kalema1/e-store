import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { getCart } from "../features/cart/cartSlice";
import CartItem from "../features/cart/CartItem";

export default function Cart() {
  const cart = useSelector(getCart);

  return (
    <section className={styles.cartSection}>
      <div className="container">
        <div>
          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
