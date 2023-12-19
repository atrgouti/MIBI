import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import filtringStyles from "./filtring.module.css";
import CurrentCategory from "../components/CurrentCategory";
import styles from "./cart.module.css";
import Footer from "../components/Footer";
import { useState } from "react";

import shirt from "./men-shirt-1-4.jpg";

function Cart({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
}) {
  return (
    <>
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
        makeItActive={"true"}
      />
      <div
        style={{ position: "relative", top: "110px", backgroundColor: "white" }}
      >
        <CurrentCategory category={"Your Cart"} />
        <div className={styles.cartArea}>
          <h1 className={styles.header}>Your Cart</h1>
          <div className={styles.infos}>
            <p className={styles.titleInfo}>PRODUCT</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
          </div>
          <div className={styles.product}>
            <div className={styles.titleArea}>
              <img src={shirt} alt="" />
            </div>
            <div className={styles.priceArea}>
              <p>$220.00</p>
            </div>
            <div className={styles.quantityArea}></div>
            <div className={styles.totalArea}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
