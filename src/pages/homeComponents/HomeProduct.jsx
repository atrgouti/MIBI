import styles from "./ProductsQuickView.module.css";

function HomeProduct({ img, title, price }) {
  return (
    <div className={styles.product}>
      <img src={`${img}`} alt="" className={styles.productImage} />

      <p className={styles.productTitle}>{title}</p>
      <p className={styles.productPrice}>{price}$</p>
    </div>
  );
}

export default HomeProduct;
