import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announce from "../components/Announce";
import CurrentCategory from "../components/CurrentCategory";
import filtringStyles from "./filtring.module.css";
import Article from "./blogsComponents/Article";
import { Link } from "react-router-dom";
function Blog({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  sideBarIsActive,
  setSideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
}) {
  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
      <Announce />
      <Navbar
        sideBarIsActive={sideBarIsActive}
        setSideBarIsActive={setSideBarIsActive}
        cartItems={cartItems}
        setActiveFilter={setActiveFilter}
        makeItActive={"true"}
        handleDeleteMovies={handleDeleteMovies}
        increaseQuantity={increaseQuantity}
        decreaseQuntity={decreaseQuntity}
      />
      <div
        style={{
          position: "relative",
          top: "110px",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <CurrentCategory category={"NEWS"} />
        <h2
          style={{
            textAlign: "center",
            backgroundColor: "white",
            fontWeight: "200",
            marginTop: "20px",
          }}
        >
          News
        </h2>
        <Link to="/readArticle">
          <Article />
        </Link>

        <Footer />
      </div>
    </>
  );
}

export default Blog;
