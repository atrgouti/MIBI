import styles from "./MenPageProducts.module.css";
import MenProduct from "./MenProduct";
import MenProductIsLoading from "./MenProductIsLoading";

import { apiMibiProducts } from "../../components/apiMibiProducts";
import { useEffect, useState } from "react";

function MenPageProducts() {
  const [menData, setMenData] = useState([]);
  const [menLoader, setMenLoader] = useState("false");

  useEffect(function () {
    apiMibiProducts("men", setMenLoader).then((data) => setMenData(data));
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  // window.innerHeight = 0;
  return (
    <div className={styles.menPageProducts}>
      <h1>Men</h1>
      <p>
        The very latest in globally-recognised clothing brands offers you with
        an exquisite range of Branded Clothes, Artificial Jewelry, Shoes, Beauty
        Products and Accessories for Women, Men & Kids at affordable price
      </p>
      <div className={styles.numProducts}>
        <p>Showing: {menData.length} Results</p>
        <select name="" id="">
          Featured
          <option value="">Sort by</option>
          <option value="">Featured</option>
          <option value="">Best selling</option>
          <option value="">A - Z</option>
          <option value="">Z - A</option>
          <option value="">Lowest price</option>
          <option value="">Heighst Price</option>
          <option value="">New to Old</option>
          <option value="">Old to New</option>
        </select>
      </div>
      <div className={styles.menProductsItems}>
        {menLoader ? (
          <MenProductIsLoading />
        ) : (
          menData.map((product) => (
            <MenProduct
              img={product.photos.productPhotos.at(0)}
              hash={product.hash}
              title={product.title}
              price={product.price}
              key={product.id}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MenPageProducts;
