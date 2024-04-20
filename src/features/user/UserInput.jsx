import styles from "./UserInput.module.css";

export default function UserInput({ children, type, placeholder }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{children}</label>
      <input type={type} placeholder={placeholder} className={styles.input} />
    </div>
  );
}
