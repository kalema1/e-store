import Logo from "../ui/Logo";
import NavigationBar from "./NavigationBar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="header-section">
      <div className="container">
        <div className={styles.navContainer}>
          <Logo />
          <NavigationBar />
        </div>
      </div>
    </header>
  );
}
