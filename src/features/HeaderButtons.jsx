import { useSelector } from "react-redux";
import Button from "../ui/Button";
import styles from "./HeaderButtons.module.css";
import { FiLogIn, FiUserPlus, FiShoppingCart } from "react-icons/fi";
import { getTotalCartQuantity } from "./cart/cartSlice";

export default function HeaderButtons() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className={styles.headerButtons}>
      <Button>
        <FiLogIn className={`icon ${styles.headerIcon}`} />
        Login
      </Button>
      <Button>
        <FiUserPlus className={` icon ${styles.headerIcon}`} />
        Register
      </Button>
      <Button>
        <FiShoppingCart className={`icon ${styles.headerIcon}`} />
        Cart {totalCartQuantity > 0 ? "(" + totalCartQuantity + ")" : ""}
      </Button>
    </div>
  );
}
