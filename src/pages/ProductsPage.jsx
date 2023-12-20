// importing the filtring styles
import filtringStyles from "./filtring.module.css";

import { useLocation, useParams } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import NavBar from "../components/Navbar";
import Announce from "../components/Announce";
import CurrentCategory from "../components/CurrentCategory";
import ProductInfos from "./productPageComponents/ProductInfos";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

// font awsome
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faTruckFast, faClock } from "@fortawesome/free-solid-svg-icons";

import {
  faCcVisa,
  faCcMastercard,
  faCcStripe,
  faCcAmex,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { apiSelectProduct } from "../components/apiSelectProduct";

//importy paypal api
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalPayment from "./PaypalPayment";

function ProductsPage({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  addItemToCart,
  increaseQuantity,
  decreaseQuntity,
}) {
  const [productData, setProductData] = useState([]);
  const [numberOfChoosedImage, setNumberOfChoosedImae] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const currentProduct = useParams();

  // const { pathname } = useLocation();

  // useEffect(
  //   function () {
  //     window.scrollTo(0, 0);
  //   },
  //   [pathname]
  // );
  // // get the fetched product data

  useEffect(
    function () {
      apiSelectProduct(currentProduct.id, currentProduct.category).then(
        (data) => setProductData(data.at(0))
      );
      window.scrollTo({ top: 0 });
    },
    [currentProduct.id, currentProduct.category, productData.price]
  );
  if (productData.price) {
    console.log(productData.price);
  }
  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
      <Announce />
      <NavBar
        cartItems={cartItems}
        setActiveFilter={setActiveFilter}
        makeItActive={"true"}
        handleDeleteMovies={handleDeleteMovies}
        setSideBarIsActive={setSideBarIsActive}
        sideBarIsActive={sideBarIsActive}
        increaseQuantity={increaseQuantity}
        decreaseQuntity={decreaseQuntity}
      />
      <div style={{ position: "relative", top: "110px" }}>
        <CurrentCategory category={`${productData.title}`} />
        <main className={styles.main}>
          <div className={styles.mainContent}>
            <div className={styles.images}>
              <div className={styles.subImages}>
                <img
                  src={productData.photos?.productPhotos?.at(0)}
                  alt=""
                  onClick={() => setNumberOfChoosedImae(0)}
                />
                <img
                  src={productData.photos?.productPhotos?.at(1)}
                  alt=""
                  onClick={() => setNumberOfChoosedImae(1)}
                />
                <img
                  src={productData.photos?.productPhotos?.at(2)}
                  alt=""
                  onClick={() => setNumberOfChoosedImae(2)}
                />
                <img
                  src={productData.photos?.productPhotos?.at(3)}
                  alt=""
                  onClick={() => setNumberOfChoosedImae(3)}
                />
              </div>
              <div className={styles.Image}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={styles.imageLeftArrow}
                  onClick={() =>
                    numberOfChoosedImage > 0
                      ? setNumberOfChoosedImae(numberOfChoosedImage - 1)
                      : setNumberOfChoosedImae(numberOfChoosedImage)
                  }
                />
                <img
                  src={productData.photos?.productPhotos?.at(
                    numberOfChoosedImage
                  )}
                  alt=""
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.imageRightArrow}
                  onClick={() =>
                    numberOfChoosedImage < 3
                      ? setNumberOfChoosedImae(numberOfChoosedImage + 1)
                      : setNumberOfChoosedImae(numberOfChoosedImage)
                  }
                />
              </div>
            </div>
            <div className={styles.infos} style={{ zIndex: "10" }}>
              <h1>{productData.title}</h1>
              <div className={styles.stockandreview}>
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: "#f5a700" }}
                  />
                ))}
                <p style={{ color: "gray", padding: "5px" }}>NO REVIEWS</p>
              </div>
              <p style={{ fontSize: "22px", paddingTop: "20px" }}>
                ${productData.price}
              </p>
              <p style={{ color: "gray" }}>Tax included.</p>
              <div className={styles.actionsToDo}>
                <div className={styles.addToWishList}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p>Add to wishlsit</p>
                </div>
                <div className={styles.enquiry}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>Add to wishlsit</p>
                </div>
              </div>
              <div className={styles.addToCard}>
                <div className={styles.chooseQuantity}>
                  <p
                    style={{ cursor: "pointer", fontSize: "20px" }}
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity((quan) => quan - 1);
                      }
                    }}
                  >
                    -
                  </p>
                  <p>{quantity}</p>
                  <p
                    style={{ cursor: "pointer", fontSize: "20px" }}
                    onClick={() => setQuantity((quan) => quan + 1)}
                  >
                    +
                  </p>
                </div>
                <button
                  onClick={(event) => {
                    // this might case a bug
                    event.stopPropagation();
                    addItemToCart(
                      productData.id,
                      productData.title,
                      productData.photos?.productPhotos?.at(0),
                      quantity,
                      productData.price * quantity,
                      productData.category,
                      productData.hash,
                      productData.price
                    );
                    setQuantity(1);
                    setSideBarIsActive(true);
                    setActiveFilter(true);
                  }}
                >
                  Add to card
                </button>
              </div>
              {productData.price && (
                <PaypalPayment
                  price={productData.price}
                  styles={styles.butItNow}
                />
              )}
              {/* <button className={styles.butItNow}>BUY IT NOW</button>
                <button className={styles.butItNow}>BUY IT NOW</button> */}
              <div className={styles.freeShipping}>
                <FontAwesomeIcon icon={faTruckFast} />
                <p>
                  You have got <strong>FREE SHIPPING</strong>
                </p>
              </div>
              <div className={styles.expectedDate}>
                <FontAwesomeIcon icon={faClock} />
                <p>
                  Expected delivery{" "}
                  <strong> Monday 06 November - Saturday 11 November.</strong>
                </p>
              </div>
              <div className={styles.guaranteedSafeCheckout}>
                <p style={{ fontWeight: "bold" }}>GUARANTEED SAFE CHECKOUT:</p>
                <FontAwesomeIcon
                  icon={faCcVisa}
                  style={{ color: "#4169E1" }}
                  className={styles.gueranteeIcons}
                />
                <FontAwesomeIcon
                  icon={faCcMastercard}
                  style={{ color: "#f26507" }}
                  className={styles.gueranteeIcons}
                />
                <FontAwesomeIcon
                  icon={faCcStripe}
                  style={{ color: "#005eff" }}
                  className={styles.gueranteeIcons}
                />
                <FontAwesomeIcon
                  icon={faCcAmex}
                  style={{ color: "#0054e6" }}
                  className={styles.gueranteeIcons}
                />
                <FontAwesomeIcon
                  icon={faCcPaypal}
                  style={{ color: "#0069cc" }}
                  className={styles.gueranteeIcons}
                />
              </div>
            </div>
          </div>
        </main>
        <ProductInfos productData={productData} />
        <Footer />
      </div>
    </>
  );
}
export default ProductsPage;
