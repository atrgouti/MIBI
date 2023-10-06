import styles from "./ProductsQuickView.module.css";
import ShortLine from "../../components/ShoerLine";
import data from "../../data/data.json";
import HomeProduct from "./HomeProduct";
import { useState } from "react";
function ProductsQuickView() {
  const [choosedCategory, setChoosedCategory] = useState("women");
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
            onClick={() => setChoosedCategory("women")}
          >
            Women
          </p>
          <p
            className={`${choosedCategory === "men" ? styles.active : ""}`}
            onClick={() => setChoosedCategory("men")}
          >
            Men
          </p>
          <p
            className={`${
              choosedCategory === "accessories" ? styles.active : ""
            }`}
            onClick={() => setChoosedCategory("accessories")}
          >
            Accessories
          </p>
        </div>
        <div className={styles.showProducts}>
          {data.mibidata[choosedCategory].map((product) => (
            <HomeProduct
              img={product.photos.at(0)}
              title={product.title}
              price={product.price}
              key={product.id}
            />
          ))}
          {/* <HomeProduct
            img={"women-tshirt-3-4.jpg"}
            title={"Blue women kamija"}
            price={399.99}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductsQuickView;
