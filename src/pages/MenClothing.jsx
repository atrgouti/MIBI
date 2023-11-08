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
function MenClothing({ ActiveFilter, setActiveFilter, cartItems }) {
  const [menData, setMenData] = useState([]);
  const [menLoader, setMenLoader] = useState("false");

  useEffect(function () {
    apiMibiProducts("men", setMenLoader).then((data) => setMenData(data));
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
      <Announce />
      <Navbar
        cartItems={cartItems}
        setActiveFilter={setActiveFilter}
        makeItActive={"true"}
      />
      <div style={{ position: "relative", top: "110px" }}>
        <CurrentCategory category={"Men"} />
        <MenProductsContent menData={menData} menLoader={menLoader} />
        <Footer />
      </div>
    </>
  );
}

export default MenClothing;
