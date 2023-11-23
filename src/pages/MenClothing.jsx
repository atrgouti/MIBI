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
  decreaseQuntity,
  categoryType,
}) {
  const [menData, setMenData] = useState([]);
  const [menLoader, setMenLoader] = useState("false");
  const [filteredColors, setFilteredColors] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [sortBy, setSortBy] = useState("initial");

  useEffect(
    function () {
      apiMibiProducts(
        `${categoryType}`,
        setMenLoader,
        filteredColors,
        filteredCategories,
        inStock,
        outOfStock,
        sortBy
      ).then((data) => setMenData(data));
      window.scrollTo({ top: 0, left: 0 });
    },
    [
      filteredColors,
      filteredCategories,
      categoryType,
      inStock,
      outOfStock,
      sortBy,
    ]
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
        decreaseQuntity={decreaseQuntity}
      />
      <div style={{ position: "relative", top: "110px" }}>
        <CurrentCategory category={categoryType} />
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
          setInStock={setInStock}
          inStock={inStock}
          outOfStock={outOfStock}
          setOutOfStock={setOutOfStock}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categoryType={categoryType}
        />
        <Footer />
      </div>
    </>
  );
}

export default MenClothing;
