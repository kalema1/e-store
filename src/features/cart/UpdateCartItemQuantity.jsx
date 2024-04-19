import { FiPlus, FiMinus } from "react-icons/fi";
import styles from "./UpdateCartItemQuantity.module.css";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity } from "./cartSlice";

export default function UpdateCartItemQuantity({ productId }) {
  const dispatch = useDispatch();

  /**
   * decreases item quantity
   */
  function handleDecreaseItemQuantity() {
    dispatch(decreaseItemQuantity(productId));
  }
  return (
    <div className={styles.buttonConatainer}>
      <Button onClick={handleDecreaseItemQuantity}>
        <FiMinus className="icon" />
      </Button>

      <Button>
        <FiPlus className="icon" />
      </Button>
    </div>
  );
}
