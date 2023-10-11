import styles from "./DayToNight.module.css";
import bg from "/bestQualitySecend.jpg";
function DayToNight() {
  return (
    <section className={styles.section}>
      <div className={styles.dayToNight}>
        <div className={styles.bg}>
          <img src={bg} alt="" />
        </div>
        <div className={styles.content}>
          <h1>Shop the Best Bags</h1>
          <p>
            Shop our best sellers from emerging and established brands all over
            the globe
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default DayToNight;
