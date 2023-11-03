// importing the filtring styles
import filtringStyles from "./filtring.module.css";

import { useLocation, useParams } from "react-router-dom";
import styles from "./productsPage.module.css";
import NavBar from "../components/Navbar";
import Announce from "../components/Announce";
import CurrentCategory from "../components/CurrentCategory";
import ProductInfos from "./productPageComponents/ProductInfos";
import { useEffect, useState } from "react";

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

function ProductsPage({ ActiveFilter, setActiveFilter }) {
  const [productData, setProductData] = useState([]);
  const [numberOfChoosedImage, setNumberOfChoosedImae] = useState(0);

  const currentProduct = useParams();

  const { pathname } = useLocation();

  useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [pathname]
  );
  // get the fetched product data

  useEffect(
    function () {
      apiSelectProduct(currentProduct.id).then((data) =>
        setProductData(data.at(0))
      );
    },
    [currentProduct.id]
  );

  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
      <Announce />
      <NavBar setActiveFilter={setActiveFilter} makeItActive={"true"} />
      <div style={{ position: "relative", top: "110px" }}>
        <CurrentCategory category={`${currentProduct.id}`} />
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
                />
              </div>
            </div>
            <div className={styles.infos}>
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
              <p style={{ fontSize: "22px", paddingTop: "20px" }}>$200.00</p>
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
                  <p style={{ cursor: "pointer", fontSize: "20px" }}>-</p>
                  <p>1</p>
                  <p style={{ cursor: "pointer", fontSize: "20px" }}>+</p>
                </div>
                <button>Add to card</button>
              </div>
              <button className={styles.butItNow}>BUT IT NOW</button>
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
        <ProductInfos />
      </div>
    </>
  );
}
export default ProductsPage;
