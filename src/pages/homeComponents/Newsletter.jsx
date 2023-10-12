import ShortLine from "../../components/ShoerLine";
import styles from "./Newsletter.module.css";
function Newsletter() {
  return (
    <div className={styles.newsLetterSection}>
      <div className={styles.newsLetter}>
        <div className={styles.title}>
          <ShortLine />
          <p>Newsletter Subscribe</p>
          <ShortLine />
        </div>
        <p className={styles.subtitle}>
          Sign up to stay in the loop. Receive updates, access to exclusive
          deals, and more.
        </p>
        <div className={styles.email}>
          <input type="text" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
