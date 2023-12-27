import styles from "./BestBagsCollection.module.css";
import { Link } from "react-router-dom";
import bg from "/bestQuality.jpg";
function BestBagsCollection() {
  return (
    <section className={styles.section}>
      <div className={styles.bags}>
        <div className={styles.bg}>
          <img src={bg} alt="" loading="lazy" />
        </div>
        <div className={styles.content}>
          <h1>Shop the Best Bags</h1>
          <p>
            Shop our best sellers from emerging and established brands all over
            the globe
          </p>
          <Link to={"/women"}>
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BestBagsCollection;
