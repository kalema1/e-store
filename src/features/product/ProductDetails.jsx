import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./ProductDetails.module.css";
import Header from "../Header";

export default function ProductDetails() {
  return (
    <>
      <Header />
      <section className={styles.productDetailsSection}>
        <div className="container">
          <div className={styles.grid}>
            <div>
              <img
                className={styles.img}
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="mens"
              />
            </div>
            <div className={styles.productdetails}>
              <p className={styles.category}>MENS CLOTHING</p>
              <h2 className={styles.title}>
                Fjallraven - Foldsack No.1 Backpack, Fits 15 laptops
              </h2>
              <p className={styles.rating}>
                Rating 3.9 <span className={styles.star}>⭐</span>
              </p>
              <p className={styles.price}>$ 109.05</p>
              <p className={styles.description}>
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
              </p>
              <div className={styles.btnContainer}>
                <Button>Add to Cart</Button>
                <Link className={styles.link} to="/cart">
                  <Button>Go to Cart</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
