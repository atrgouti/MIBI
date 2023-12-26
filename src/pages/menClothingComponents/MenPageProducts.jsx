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
  setFilteredCategories,
  handleCategorySelect,
  handleColorSelect,
  sortBy,
  setSortBy,
  addItemsToWishList,
}) {
  const [sideBarFilters, setSideBarFilters] = useState(false);
  return (
    <div className={styles.menPageProducts}>
      <h1>{categoryType}</h1>
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
        <p>Showing: {menData.length} Results</p>
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          Featured
          <option value="initial">Sort by</option>
          <option value="title_ASC">A - Z</option>
          <option value="title_DESK">Z - A</option>
          <option value="price_ASC">Lowest price</option>
          <option value="price_DESC">Heighst Price</option>
          <option value="date_ASC">New to Old</option>
          <option value="date_DESC">Old to New</option>
        </select>
      </div>
      <div className="allFiltersJoined" style={{ display: "flex" }}>
        {filteredColors.length > 0 && (
          <div className={styles.seeApliedFilters}>
            <p
              onClick={() => {
                setFilteredColors([]);
                setFilteredCategories([]);
              }}
            >
              CLEAR ALL
            </p>
            {filteredColors.map((color) => (
              <p
                onClick={() => handleColorSelect(`${color}`)}
                style={{ marginLeft: "10PX" }}
                key={color}
              >
                {color}
              </p>
            ))}
          </div>
        )}
        {filteredCategories.length > 0 && (
          <div className={styles.seeApliedFilters}>
            {filteredCategories.map((cate) => (
              <p
                onClick={() => handleCategorySelect(`${cate}`)}
                style={{ marginLeft: "10PX" }}
                key={cate}
              >
                {cate}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className={styles.menProductsItems}>
        {menLoader ? (
          <MenProductIsLoading />
        ) : menData.length > 0 ? (
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
                addItemsToWishList={addItemsToWishList}
              />
            </Link>
          ))
        ) : (
          <p
            style={{ margin: "0px auto", fontSize: "17px", marginTop: "40px" }}
          >
            No items Avaliable
          </p>
        )}
      </div>
    </div>
  );
}

export default MenPageProducts;
