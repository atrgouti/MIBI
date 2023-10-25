import styles from "./MenProductColors.module.css";
function MenProductColors() {
  return (
    <div>
      <h3 className={styles.h3}>COLOR</h3>
      <div className={styles.colors}>
        <div
          className={styles.color}
          style={{ backgroundColor: "black" }}
        ></div>
        <div
          className={styles.color}
          style={{ backgroundColor: "orange" }}
        ></div>
        <div
          className={styles.color}
          style={{ backgroundColor: "green" }}
        ></div>
        <div
          className={styles.color}
          style={{ backgroundColor: "#4169E1" }}
        ></div>
        <div
          className={styles.color}
          style={{ backgroundColor: "#FF2400" }}
        ></div>
        <div className={styles.color} style={{ backgroundColor: "pink" }}></div>
      </div>
    </div>
  );
}

export default MenProductColors;
