import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import filtringStyles from "./filtring.module.css";
import CurrentCategory from "../components/CurrentCategory";
import styles from "./favourite.module.css";
import Footer from "../components/Footer";
import img from "./men-shirt-1-4.jpg";

function Favourite({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
}) {
  return (
    <>
      <div
        // style={{ position: "absolute" }}
        className={ActiveFilter ? filtringStyles.filter : ""}
      ></div>
      <Announce />
      <Navbar
        sideBarIsActive={sideBarIsActive}
        setSideBarIsActive={setSideBarIsActive}
        handleDeleteMovies={handleDeleteMovies}
        setActiveFilter={setActiveFilter}
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuntity={decreaseQuntity}
        makeItActive={"true"}
      />
      <div
        style={{
          position: "relative",
          top: "110px",
          backgroundColor: "white",
        }}
      >
        <CurrentCategory category={"Your Favourite"} />
        <h1 className={styles.header}>Wishlist</h1>
        <div className={styles.infos}>
          <p>Product</p>
          <p>Price</p>
        </div>
        <div className={styles.allProducts}>
          <div className={styles.product}>
            <div className={styles.title}>
              <img src={img} alt="" />
              <p>Button Up Top Jacket</p>
            </div>
            <div className={styles.price}>
              <p>$200.00</p>
              <p>In Stock</p>
              <div className={styles.view}>
                <button>VIEW PRODUCT</button>
                <button>X</button>
              </div>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.title}>
              <img src={img} alt="" />
              <p>Button Up Top Jacket</p>
            </div>
            <div className={styles.price}>
              <p>$200.00</p>
              <p>In Stock</p>
              <div className={styles.view}>
                <button>VIEW PRODUCT</button>
                <button>X</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Favourite;
