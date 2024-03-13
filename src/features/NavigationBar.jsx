import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <ul className={styles.nav}>
      <li>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navLink} to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navLink} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navLink} to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
