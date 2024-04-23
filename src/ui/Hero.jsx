import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div>
        <div className={styles.heroHeadingContainer}>
          <div>
            <img className={styles.heroImg} src="str.jpg" alt="sore" />
          </div>
        </div>
      </div>
    </section>
  );
}
