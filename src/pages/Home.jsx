import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import HomeSlider from "./homeComponents/HomeSlider";
import filtringStyles from "./filtring.module.css";
import OurOfferce from "./homeComponents/OurOfferce";
import Categories from "./homeComponents/Categories";
import ProductsQuickView from "./homeComponents/ProductsQuickView.jsx";
import HotCollection from "./homeComponents/HotCollection";
import BestBagsCollection from "./homeComponents/BestBagsCollection";
import DayToNight from "./homeComponents/DayToNight";
import Testemonials from "./homeComponents/Testemonials";
import Newsletter from "./homeComponents/Newsletter";
import Footer from "../components/Footer";

import GeneralLoader from "../components/GeneralLoader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Home({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  addItemToCart,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
  addItemsToWishList,
  wishList,
}) {
  const [someDataIsLoading, setSomeDataIsLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [pathname]
  );
  return (
    <div>
      <div
        // style={{ position: "absolute" }}
        className={ActiveFilter ? filtringStyles.filter : ""}
      ></div>
      <Announce />
      <Navbar
        sideBarIsActive={sideBarIsActive}
        setSideBarIsActive={setSideBarIsActive}
        handleDeleteMovies={handleDeleteMovies}
        setActiveFilter={setActiveFilter}
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuntity={decreaseQuntity}
        wishList={wishList}
      />
      {someDataIsLoading && <GeneralLoader />}
      <HomeSlider />
      <OurOfferce></OurOfferce>
      <Categories></Categories>
      <ProductsQuickView
        addItemToCart={addItemToCart}
        addItemsToWishList={addItemsToWishList}
        setSideBarIsActive={setSideBarIsActive}
        setActiveFilter={setActiveFilter}
        wishList={wishList}
      />
      <HotCollection />
      <BestBagsCollection />
      <DayToNight />
      <Testemonials />
      <Newsletter />
      <Footer></Footer>
    </div>
  );
}

export default Home;
