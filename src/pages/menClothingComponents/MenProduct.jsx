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

function HomeProduct({ img, title, price, hash }) {
  return (
    <div className={styles.product} style={{ marginLeft: "0px" }}>
      {/* <img src={`${img}`} alt="" className={styles.productImage} /> */}
      <div className={styles.productActions}>
        <div className={styles.addToFavorite}>
          <FontAwesomeIcon icon={faHeart} className={`${styles.icon}`} />
        </div>
        <div className={styles.addToFavorite}>
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
