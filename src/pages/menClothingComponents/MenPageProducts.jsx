import { Link } from "react-router-dom";
import styles from "./MenPageProducts.module.css";
import MenProduct from "./MenProduct";
import MenProductIsLoading from "./MenProductIsLoading";

// font awsome
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MenCategories from "./MenCategories";
import MenProductColors from "./MenProductColors";
import Availability from "./Availability";
import { useState } from "react";

function MenPageProducts({
  menData,
  menLoader,
  addItemToCart,
  setSideBarIsActive,
  setActiveFilter,
  filteredColors,
  setFilteredColors,
  filteredCategories,
  categoryType,
}) {
  const [sideBarFilters, setSideBarFilters] = useState(false);

  return (
    <div className={styles.menPageProducts}>
      <h1>Men</h1>
      <p>
        The very latest in globally-recognised clothing brands offers you with
        an exquisite range of Branded Clothes, Artificial Jewelry, Shoes, Beauty
        Products and Accessories for Women, Men & Kids at affordable price
      </p>

      <button
        className={styles.filtersButton}
        onClick={() => {
          setSideBarFilters(true);
          setActiveFilter(true);
        }}
      >
        Filters
      </button>
      <div
        className={`${styles.sideBarFilters} ${
          sideBarFilters ? styles.active : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.closeFiltersIcons}
          onClick={() => {
            setSideBarFilters(false);
            setActiveFilter(false);
          }}
        />
        <div style={{ margin: "50px 30px" }}>
          <MenCategories />
          <MenProductColors />
          <Availability />
        </div>
      </div>
      <div className={styles.numProducts}>
        <p>
          Showing: {menData.length}
          Results
        </p>
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
      {filteredColors.length > 0 && (
        <div className={styles.seeApliedFilters}>
          <p onClick={() => setFilteredColors([])}>CLEAR ALL</p>
          {filteredColors.map((color) => (
            <p key={color}>{color}</p>
          ))}
        </div>
      )}
      {filteredCategories.length > 0 && (
        <div className={styles.seeApliedFilters}>
          {filteredCategories.map((cate) => (
            <p key={cate}>{cate}</p>
          ))}
        </div>
      )}
      <div className={styles.menProductsItems}>
        {menLoader ? (
          <MenProductIsLoading />
        ) : (
          menData?.map((product) => (
            <Link
              to={`/product/${categoryType}/${product.id}`}
              key={product.id}
            >
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
