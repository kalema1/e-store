import { useDispatch, useSelector } from "react-redux";

import styles from "./Cart.module.css";
import { clearCart, getCart, getTotalPrice } from "../features/cart/cartSlice";
import CartItem from "../features/cart/CartItem";
import Header from "../features/Header";
import Button from "../ui/Button";
import EmptyCart from "../features/cart/EmptyCart";

export default function Cart() {
  const cart = useSelector(getCart);
  const grandTotalPrice = useSelector(getTotalPrice);
  const isEmptyCart = cart.length === 0;
  const dispatch = useDispatch();

  /**
   * clears items in the cart
   */
  function handleClearCart() {
    dispatch(clearCart());
  }

  if (isEmptyCart) {
    return <EmptyCart />;
  }

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

          <div className={styles.clearCartContainer}>
            <Button onClick={handleClearCart}>Clear Cart</Button>
          </div>

          <div className={styles.totalContainer}>
            <div>Grand Total: ${grandTotalPrice.toFixed(2)}</div>
            <div className={styles.checkoutContainer}>
              <Button>PROCEED TO CHECKOUT</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
