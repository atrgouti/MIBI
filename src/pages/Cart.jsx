import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import filtringStyles from "./filtring.module.css";
import CurrentCategory from "../components/CurrentCategory";
import styles from "./cart.module.css";
import Footer from "../components/Footer";
import { useState } from "react";
import PaypalPayment from "./PaypalPayment";

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
        <h1 className={styles.header}>Your Cart</h1>
        <div className={styles.allCart}>
          <div className={styles.cartArea}>
            <div className={styles.infos}>
              <p className={styles.titleInfo}>PRODUCT</p>
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>TOTAL</p>
            </div>
            <div className={styles.product}>
              <div className={styles.titleArea}>
                <img src={shirt} alt="" />
                <p>Stylish Blue Shirt</p>
              </div>
              <div className={styles.priceArea}>
                <p>$220.00</p>
              </div>
              <div className={styles.quantityArea}>
                <div className={styles.quantityButtons}>
                  <p style={{ cursor: "pointer" }}>-</p>
                  <p>1</p>
                  <p style={{ cursor: "pointer" }}>+</p>
                </div>
              </div>
              <div className={styles.totalArea}>
                <p>$220.00</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.product}>
              <div className={styles.titleArea}>
                <img src={shirt} alt="" />
                <p>Stylish Blue Shirt</p>
              </div>
              <div className={styles.priceArea}>
                <p>$220.00</p>
              </div>
              <div className={styles.quantityArea}>
                <div className={styles.quantityButtons}>
                  <p style={{ cursor: "pointer" }}>-</p>
                  <p>1</p>
                  <p style={{ cursor: "pointer" }}>+</p>
                </div>
              </div>
              <div className={styles.totalArea}>
                <p>$220.00</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <p>
              We processes all orders in USD. While the content of your cart is
              currently displayed in USD, the checkout will use USD at the most
              current exchange rate.
            </p>
          </div>
          <div className={styles.checkout}>
            <div className={styles.workingArea}>
              <h3>Contact</h3>
              <input type="text" placeholder="Email or mobile phone number" />
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
              <input
                type="text"
                placeholder="Adress"
                style={{ marginBottom: "20px" }}
              />
              <p>SPECIAL INSTRUCTIONS FOR SELLER</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <p style={{ fontWeight: "bold", margin: "10px 0px" }}>
                ADD A COUPON
              </p>
              <p style={{ color: "gray" }}>
                Coupon code will work on checkout page
              </p>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid rgb(219, 219, 219)",
                  marginTop: "5px",
                }}
              />
              <div
                style={{
                  width: "100%",
                  backgroundColor: "rgb(219, 219, 219)",
                  height: "1px",
                  margin: "20px 0px",
                }}
              ></div>
              <div className={styles.total}>
                <p style={{ fontWeight: "bold" }}>SUBTOTAL</p>
                <p style={{ fontWeight: "bold" }}>$1,030.00 USD</p>
              </div>
              <p style={{ marginTop: "20px", color: "grey" }}>
                Tax included and shipping calculated at checkout
              </p>
              <PaypalPayment price={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
