import styles from "./ProductsQuickView.module.css";
import ShortLine from "../../components/ShoerLine";
import data from "../../data/data.json";
import HomeProduct from "./HomeProduct";
import Carousel from "@itseasy21/react-elastic-carousel";
import { useState, useRef } from "react";

function ProductsQuickView() {
  const [choosedCategory, setChoosedCategory] = useState("women");
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
          >
            {data.mibidata[choosedCategory].map((product) => (
              <HomeProduct
                img={product.photos.at(0)}
                title={product.title}
                price={product.price}
                key={product.id}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ProductsQuickView;
