import { useEffect } from "react";
import styles from "./MenProductColors.module.css";
function MenProductColors({ handleColorSelect }) {
  const uniqueColors = ["whitesmoke", "pink", "black", "green"];
  return (
    <div>
      <h3 className={styles.h3}>COLOR</h3>
      <div className={styles.colors}>
        {uniqueColors?.map((color) => (
          <div
            key={color}
            className={styles.color}
            style={{ backgroundColor: `${color}` }}
            onClick={() => handleColorSelect(`${color}`)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MenProductColors;
