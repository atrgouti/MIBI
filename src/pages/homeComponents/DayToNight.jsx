import styles from "./DayToNight.module.css";
import bg from "/bestQualitySecend.jpg";
import { Link } from "react-router-dom";
function DayToNight() {
  return (
    <section className={styles.section}>
      <div className={styles.dayToNight}>
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

export default DayToNight;
