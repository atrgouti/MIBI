import styles from "../homeComponents/ProductsQuickView.module.css";
import BlurHashImageComponent from "../../components/BlurHashImageComponent";
function HomeProduct({ img, title, price, hash }) {
  return (
    <div className={styles.product} style={{ marginLeft: "0px" }}>
      {/* <img src={`${img}`} alt="" className={styles.productImage} /> */}
      <BlurHashImageComponent src={img} hash={hash} height={380} width={250} />
      <p className={styles.productTitle}>{title}</p>
      <p className={styles.productPrice}>{price}$</p>
    </div>
  );
}

export default HomeProduct;
