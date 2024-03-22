import styles from "./ProductHeading.module.css";

export default function ProductHeading() {
  return (
    <div className={styles.productHeadingContainer}>
      <h2 className={styles.productHeading}>Latest Products</h2>
    </div>
  );
}
