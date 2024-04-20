import { FiMail, FiLock } from "react-icons/fi";
import styles from "./LoginForm.module.css";
import UserInput from "./UserInput";
import Button from "../../ui/Button";

export default function LoginForm() {
  return (
    <section className={styles.loginSection}>
      <div className="container">
        <div className={styles.loginFormContainer}>
          <form>
            <h2 className={styles.loginHeading}>Sign In</h2>
            <div>
              <UserInput type="email" placeholder="Your email Address">
                <FiMail />
              </UserInput>
              <UserInput type="password" placeholder="Put in Your Password">
                <FiLock />
              </UserInput>
              <div className={styles.btnContainer}>
                <Button>Log In</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
