import { useEffect } from "react";
import styles from "./MenProductColors.module.css";
function MenProductColors({ handleColorSelect, menData }) {
  const originalColorsArray = menData?.map((item) => item.color);
  const uniqueColors = originalColorsArray?.filter(
    (color, index) => originalColorsArray.indexOf(color) === index
  );
  uniqueColors?.map((color) => console.log(color));

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
