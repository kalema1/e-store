import { FiUser, FiMail, FiLock, FiKey, FiPhone } from "react-icons/fi";
import styles from "./RegisterForm.module.css";
import UserInput from "./UserInput";
import Button from "../../ui/Button";

export default function RegisterForm() {
  return (
    <section className={styles.signUpSection}>
      <div className="container">
        <div className={styles.formContainer}>
          <form>
            <h2 className={styles.signUpHeading}>Sign Up</h2>
            <div>
              <UserInput type="text" placeholder="Your Full Name">
                <FiUser />
              </UserInput>

              <UserInput type="email" placeholder="Your email Address">
                <FiMail />
              </UserInput>

              <UserInput type="tel" placeholder="Your Phone Number">
                <FiPhone />
              </UserInput>

              <UserInput type="password" placeholder="Put in Your Password">
                <FiLock />
              </UserInput>

              <UserInput type="password" placeholder="Confirm Your Password">
                <FiKey />
              </UserInput>

              <div className={styles.btnContainer}>
                <Button>Register</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
