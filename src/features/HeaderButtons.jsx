import { useSelector } from "react-redux";
import Button from "../ui/Button";
import styles from "./HeaderButtons.module.css";
import { FiLogIn, FiUserPlus, FiShoppingCart } from "react-icons/fi";
import { getTotalCartQuantity } from "./cart/cartSlice";
import { Link } from "react-router-dom";

export default function HeaderButtons() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className={styles.headerButtons}>
      <Link to="/login" className={styles.linkNav}>
        <Button>
          <FiLogIn className={`icon ${styles.headerIcon}`} />
          Login
        </Button>
      </Link>

      <Link to="/signup" className={styles.linkNav}>
        <Button>
          <FiUserPlus className={` icon ${styles.headerIcon}`} />
          Register
        </Button>
      </Link>

      <Link to="/cart" className={styles.linkNav}>
        <Button>
          <FiShoppingCart className={`icon ${styles.headerIcon}`} />
          Cart {totalCartQuantity > 0 ? "(" + totalCartQuantity + ")" : ""}
        </Button>
      </Link>
    </div>
  );
}
