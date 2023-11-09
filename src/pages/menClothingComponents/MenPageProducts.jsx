import { Link } from "react-router-dom";
import styles from "./MenPageProducts.module.css";
import MenProduct from "./MenProduct";
import MenProductIsLoading from "./MenProductIsLoading";

function MenPageProducts({
  menData,
  menLoader,
  addItemToCart,
  setSideBarIsActive,
  setActiveFilter,
}) {
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
            <Link to={`/product/men/${product.id}`} key={product.id}>
              <MenProduct
                setSideBarIsActive={setSideBarIsActive}
                setActiveFilter={setActiveFilter}
                category={product.category}
                id={product.id}
                img={product.photos.productPhotos.at(0)}
                hash={product.hash}
                title={product.title}
                price={product.price}
                key={product.id}
                addItemToCart={addItemToCart}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default MenPageProducts;
