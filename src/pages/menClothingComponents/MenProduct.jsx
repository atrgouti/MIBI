import styles from "../homeComponents/ProductsQuickView.module.css";
import BlurHashImageComponent from "../../components/BlurHashImageComponent";

// import fontAwsome icons
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";

function HomeProduct({
  img,
  title,
  price,
  hash,
  id,
  category,
  addItemToCart,
  setSideBarIsActive,
  setActiveFilter,
  addItemsToWishList,
  categoryType,
}) {
  return (
    <div className={styles.product} style={{ marginLeft: "0px" }}>
      {/* <img src={`${img}`} alt="" className={styles.productImage} /> */}
      <div className={styles.productActions}>
        <div
          className={styles.addToFavorite}
          onClick={(event) => {
            addItemsToWishList(id, title, img, price, hash, categoryType);

            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <FontAwesomeIcon icon={faHeart} className={`${styles.icon}`} />
        </div>
        <div
          className={styles.addToFavorite}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            addItemToCart(id, title, img, 1, price, category, hash, price);

            setActiveFilter(true);
            setSideBarIsActive(true);
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} className={`${styles.icon}`} />
        </div>
        <div className={styles.addToFavorite}>
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
        </div>
      </div>
      <BlurHashImageComponent src={img} hash={hash} height={380} width={250} />
      <p className={styles.productTitle}>{title}</p>
      <p className={styles.productPrice}>{price}$</p>
    </div>
  );
}

export default HomeProduct;
