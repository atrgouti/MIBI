import styles from "../homeComponents/ProductsQuickView.module.css";

import HomeProduct from "../homeComponents/HomeProduct";
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
import { Link } from "react-router-dom";

function RelatedProducts({
  setSideBarIsActive,
  setActiveFilter,
  addItemToCart,
  related,
  addItemsToWishList,
}) {
  const [myData, setmyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // getting the data from the api
  useEffect(
    function () {
      apiMibiProducts(related, setIsLoading).then((data) => setmyData(data));
    },
    [related]
  );

  const carouselRef = useRef(null); // Create a ref for the Carousel component

  return (
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
            <Link to={`/product/${related}/${product.id}`} key={product.id}>
              <HomeProduct
                setSideBarIsActive={setSideBarIsActive}
                setActiveFilter={setActiveFilter}
                addItemToCart={addItemToCart}
                id={product.id}
                img={product.photos.productPhotos.at(3)}
                hash={product.hash}
                title={product.title}
                price={product.price}
                category={product.category}
                key={product.title}
                addItemsToWishList={addItemsToWishList}
              />
            </Link>
          ))
        )}
      </Carousel>
    </div>
  );
}

export default RelatedProducts;
