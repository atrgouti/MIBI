import styles from "./ProductsQuickView.module.css";
import ShortLine from "../../components/ShoerLine";
import HomeProduct from "./HomeProduct";
import HomeProductsIsLoading from "../../components/HomeProductsIsLoading";
// react crousal
import Carousel from "@itseasy21/react-elastic-carousel";

// font awsome package
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

//import hooksfa
import { useState, useRef, useEffect } from "react";

// import api function
import { apiMibiProducts } from "../../components/apiMibiProducts";

function ProductsQuickView({ addItemToCart }) {
  const [myData, setmyData] = useState([]);
  const [choosedCategory, setChoosedCategory] = useState("women");
  const [isLoading, setIsLoading] = useState(true);

  // getting the data from the api
  useEffect(
    function () {
      apiMibiProducts(choosedCategory, setIsLoading).then((data) =>
        setmyData(data)
      );
    },
    [choosedCategory]
  );

  const carouselRef = useRef(null); // Create a ref for the Carousel component

  const handleScrollToFirst = () => {
    if (carouselRef.current) {
      carouselRef.current.goTo(0); // Scroll back to the first product
    }
  };

  return (
    <div className={styles.productsquickviewsection}>
      <div className={styles.productsquickview}>
        <div className={styles.title}>
          <ShortLine />
          <p>Shop Categories</p>
          <ShortLine />
        </div>
        <p className={styles.subtitle}>
          Shop our Editor`s Picks for outfit inspiration and must-have looks
        </p>
        <div className={styles.chooseCategory}>
          <p
            className={`${choosedCategory === "women" ? styles.active : ""}`}
            onClick={() => {
              setChoosedCategory("women");
              handleScrollToFirst();
            }}
          >
            Women
          </p>
          <p
            className={`${choosedCategory === "men" ? styles.active : ""}`}
            onClick={() => {
              setChoosedCategory("men");
              handleScrollToFirst();
            }}
          >
            Men
          </p>
          <p
            className={`${
              choosedCategory === "accessories" ? styles.active : ""
            }`}
            onClick={() => {
              setChoosedCategory("accessories");
              handleScrollToFirst();
            }}
          >
            Accessories
          </p>
        </div>
        <div className={styles.showProducts}>
          <Carousel
            itemsToShow={3}
            pagination={false}
            showArrows={true}
            ref={carouselRef} // Assign the ref to the Carousel component
            renderArrow={({ type, onClick }) => (
              <button
                className={styles.customArrow} // Add a custom CSS class
                onClick={onClick}
              >
                {type === "PREV" ? (
                  <FontAwesomeIcon icon={faChevronLeft} />
                ) : (
                  <FontAwesomeIcon icon={faChevronRight} />
                )}
              </button>
            )}
            breakPoints={[
              {
                width: 1,
                itemsToShow: 1,
                itemsToScroll: 1,
              }, // Screens less than 600px
              { width: 600, itemsToShow: 2, itemsToScroll: 1 }, // Screens between 600px and 900px
              { width: 900, itemsToShow: 3, itemsToScroll: 1 }, // Screens wider than 900px
            ]}
          >
            {isLoading ? (
              <HomeProductsIsLoading />
            ) : (
              myData.map((product) => (
                <HomeProduct
                  addItemToCart={addItemToCart}
                  id={product.id}
                  img={product.photos.productPhotos.at(0)}
                  hash={product.hash}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  key={product.title}
                />
              ))
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ProductsQuickView;
