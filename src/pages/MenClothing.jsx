// importing the filtring styles
import filtringStyles from "./filtring.module.css";
// importing the required components
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import CurrentCategory from "../components/CurrentCategory";
import MenProductsContent from "./menClothingComponents/MenProductsContent";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

import { apiMibiProducts } from "../components/apiMibiProducts";
function MenClothing({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  addItemToCart,
  sideBarIsActive,
  setSideBarIsActive,
  increaseQuantity,
  categoryType,
}) {
  const [menData, setMenData] = useState([]);
  const [menLoader, setMenLoader] = useState("false");
  const [filteredColors, setFilteredColors] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(
    function () {
      apiMibiProducts(
        `${categoryType}`,
        setMenLoader,
        filteredColors,
        filteredCategories
      ).then((data) => setMenData(data));
      window.scrollTo({ top: 0, left: 0 });
    },
    [filteredColors, filteredCategories, categoryType]
  );

  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
      <Announce />
      <Navbar
        sideBarIsActive={sideBarIsActive}
        setSideBarIsActive={setSideBarIsActive}
        cartItems={cartItems}
        setActiveFilter={setActiveFilter}
        makeItActive={"true"}
        handleDeleteMovies={handleDeleteMovies}
        increaseQuantity={increaseQuantity}
      />
      <div style={{ position: "relative", top: "110px" }}>
        <CurrentCategory category={"Men"} />
        <MenProductsContent
          menData={menData}
          menLoader={menLoader}
          addItemToCart={addItemToCart}
          setSideBarIsActive={setSideBarIsActive}
          setActiveFilter={setActiveFilter}
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          filteredCategories={filteredCategories}
          setFilteredCategories={setFilteredCategories}
          categoryType={categoryType}
        />
        <Footer />
      </div>
    </>
  );
}

export default MenClothing;
