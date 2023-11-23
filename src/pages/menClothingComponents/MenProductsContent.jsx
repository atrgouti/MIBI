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
  filteredColors,
  setFilteredColors,
  filteredCategories,
  setFilteredCategories,
  setInStock,
  inStock,
  outOfStock,
  setOutOfStock,
  sortBy,
  setSortBy,
  categoryType,
}) {
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
          <Availability
            inStock={inStock}
            setInStock={setInStock}
            outOfStock={outOfStock}
            setOutOfStock={setOutOfStock}
          />
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
            setFilteredCategories={setFilteredCategories}
            handleCategorySelect={handleCategorySelect}
            handleColorSelect={handleColorSelect}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categoryType={categoryType}
          />
        </div>
      </div>
    </div>
  );
}

export default MenProductsContent;
