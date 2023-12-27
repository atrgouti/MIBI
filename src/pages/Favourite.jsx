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
  wishList,
  deleteProductWishList,
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
        wishList={wishList}
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
          {wishList?.map((item) => (
            <div className={styles.product} key={item.hash}>
              <div className={styles.title}>
                <img src={item.image} alt="" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>{item.title}</p>
                  <p className={styles.mobileThing}>{item.initialPrice}</p>
                  <p className={styles.mobileThing} style={{ color: "green" }}>
                    In Stock
                  </p>
                  <div style={{ display: "flex" }}>
                    <button
                      className={styles.mobileThing}
                      style={{
                        backgroundColor: "orange  ",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        marginLeft: "25px",
                        marginTop: "10px",
                      }}
                    >
                      VIEW PRODUCT
                    </button>
                    <button
                      onClick={() => deleteProductWishList(item.hash)}
                      className={styles.mobileThing}
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        marginLeft: "5px",
                        marginTop: "10px",
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.price}>
                <p>${item.initialPrice}</p>
                <p>In Stock</p>
                <div className={styles.view}>
                  <button>VIEW PRODUCT</button>
                  <button onClick={() => deleteProductWishList(item.hash)}>
                    X
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Favourite;
