import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.aboutUsSection}>
      <div className="container">
        <div>
          <h2 className={styles.aboutHeading}>
            Welcome to the Ultimate online shopping destination
          </h2>

          <p className={styles.aboutPara}>
            Our e-commerce platform is here to revolutionize your shopping
            journey. Whether you are on the hunt for cutting-edge tech gadgets,
            the latest fashion trends, we have got it all.
          </p>
        </div>
      </div>
    </section>
  );
}
