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
  const [filteredCategories, setFilteredCategories] = useState([]);

  // const filteredData = menData.filter((item) => {
  //   // filter colors
  //   if (filteredColors.length > 0 && filteredColors.includes(item.color)) {
  //     return true;
  //   }

  //   if (
  //     filteredCategories.length > 0 &&
  //     filteredCategories.includes(item.category)
  //   ) {
  //     return true;
  //   }
  //   // If all filters pass, include the item in the result
  //   return false;
  // });
  // const filteredData = menData.filter((item) => {
  //   const colorPass =
  //     filteredColors.length === 0 || filteredColors.includes(item.color);
  //   const categoryPass =
  //     filteredCategories.length === 0 ||
  //     filteredCategories.includes(item.category);

  //   return colorPass && categoryPass;
  // });

  function handleColorSelect(newColor) {
    const newSelectedColors = filteredColors.includes(newColor)
      ? filteredColors.filter((c) => c !== newColor)
      : [...filteredColors, newColor];

    setFilteredColors(newSelectedColors);
  }

  function handleCategorySelect(newCtegory) {
    const newSelectedCategory = filteredCategories.includes(newCtegory)
      ? filteredCategories.filter((c) => c !== newCtegory)
      : [...filteredCategories, newCtegory];
    setFilteredCategories(newSelectedCategory);
  }
  return (
    <div className={styles.allArea}>
      <div className={styles.AllMenProducts}>
        <div className={styles.filtringOptions}>
          <MenCategories
            handleCategorySelect={handleCategorySelect}
            menData={menData}
          />
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
            menLoader={menLoader}
            addItemToCart={addItemToCart}
            filteredColors={filteredColors}
            filteredCategories={filteredCategories}
            setFilteredColors={setFilteredColors}
          />
        </div>
      </div>
    </div>
  );
}

export default MenProductsContent;
