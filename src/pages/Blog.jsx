import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announce from "../components/Announce";
import CurrentCategory from "../components/CurrentCategory";
import filtringStyles from "./filtring.module.css";
import Article from "./blogsComponents/Article";
import { apiMibiProducts } from "../components/apiMibiProducts";
import { Link } from "react-router-dom";
import { useState } from "react";
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
  const [articleLoader, setArticleLoader] = useState("false");
  const [articleData, setArticleData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useState(function () {
    apiMibiProducts(
      "Blogs",
      setArticleLoader,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      pageNumber
    ).then((data) => setArticleData(data));
    window.scrollTo({ top: 0, left: 0 });
  }, []);

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

        {articleData?.map((data) => (
          <Link
            to={`/readArticle/${data.id}`}
            key={data.title}
            style={{ textDecoration: "none" }}
          >
            <Article data={data} />
          </Link>
        ))}

        <Footer />
      </div>
    </>
  );
}

export default Blog;
