import styles from "./CartItem.module.css";

import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

function CartItem({
  img,
  title,
  quantity = 1,
  price,
  handleDeleteMovies,
  id,
  hash,
  category,
}) {
  return (
    <div className={styles.item}>
      <div className={styles.productInfo}>
        <img src={img} alt="" />
        <div className={styles.titleQuantity}>
          <p className={styles.title}>{title}</p>
          <div className={styles.quantity}>
            <p>-</p>
            <p style={{ margin: "5px 15px" }}>{quantity}</p>
            <p>+</p>
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <FontAwesomeIcon
          icon={faSquareXmark}
          className={styles.icon}
          onClick={(event) => {
            event.stopPropagation();
            handleDeleteMovies(hash, category);
          }}
        />
        <p>${price}.00</p>
      </div>
    </div>
  );
}

export default CartItem;
