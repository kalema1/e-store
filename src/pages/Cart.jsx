import { useSelector } from "react-redux";

import styles from "./Cart.module.css";
import { getCart, getTotalPrice } from "../features/cart/cartSlice";
import CartItem from "../features/cart/CartItem";
import Header from "../features/Header";

export default function Cart() {
  const cart = useSelector(getCart);
  const grandTotalPrice = useSelector(getTotalPrice);

  return (
    <>
      <Header />
      <section className={styles.cartSection}>
        <div className="container">
          <div>
            <ul>
              {cart.map((product) => (
                <CartItem product={product} key={product.id} />
              ))}
            </ul>
          </div>

          <div>
            <div>Grand Total: {grandTotalPrice.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
