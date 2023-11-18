import styles from "./MenProductsContent.module.css";
import MenCategories from "./MenCategories";
import MenProductColors from "./MenProductColors";
import MenPageProducts from "./MenPageProducts";
import Availability from "./Availability";
import { useState } from "react";

function MenProductsContent({
  menData,
  menLoader,
  addItemToCart,
  setSideBarIsActive,
  setActiveFilter,
}) {
  const [filteredColors, setFilteredColors] = useState([]);

  // console.log(filteredColors);

  const filteredData = menData.filter((item) => {
    // filter colors
    if (filteredColors.length > 0 && filteredColors.includes(item.color)) {
      return true;
    }

    // If all filters pass, include the item in the result
    return false;
  });

  function handleColorSelect(newColor) {
    const newSelectedColors = filteredColors.includes(newColor)
      ? filteredColors.filter((c) => c !== newColor)
      : [...filteredColors, newColor];

    setFilteredColors(newSelectedColors);
  }

  return (
    <div className={styles.allArea}>
      <div className={styles.AllMenProducts}>
        <div className={styles.filtringOptions}>
          <MenCategories />
          <MenProductColors
            handleColorSelect={handleColorSelect}
            menData={menData}
          />
          <Availability />
        </div>
        <div className={styles.menProducts}>
          <MenPageProducts
            setSideBarIsActive={setSideBarIsActive}
            setActiveFilter={setActiveFilter}
            menData={menData}
            filteredData={filteredData}
            menLoader={menLoader}
            addItemToCart={addItemToCart}
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
          />
        </div>
      </div>
    </div>
  );
}

export default MenProductsContent;
