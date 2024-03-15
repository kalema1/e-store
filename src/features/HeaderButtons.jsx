import Button from "../ui/Button";
import styles from "./HeaderButtons.module.css";
import { FiLogIn, FiUserPlus, FiShoppingCart } from "react-icons/fi";

export default function HeaderButtons() {
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
        Cart (X)
      </Button>
    </div>
  );
}
