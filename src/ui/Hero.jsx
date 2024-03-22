import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroHeadingContainer}>
          <div>
            <h1 className={styles.heroHeading}>NEW SEASON ARRIVALS</h1>
            <h2 className={styles.heroSubHeading}>CHECK OUT THE TREND</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
