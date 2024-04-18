import { FiPlus, FiMinus } from "react-icons/fi";
import styles from "./UpdateCartItemQuantity.module.css";
import Button from "../../ui/Button";

export default function UpdateCartItemQuantity() {
  return (
    <div className={styles.buttonConatainer}>
      <Button>
        <FiMinus className="icon" />
      </Button>

      <Button>
        <FiPlus className="icon" />
      </Button>
    </div>
  );
}
