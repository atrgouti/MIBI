import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announce from "../components/Announce";
import CurrentCategory from "../components/CurrentCategory";
import filtringStyles from "./filtring.module.css";
import Article from "./blogsComponents/Article";
import styles from "./blog.module.css";
import { apiMibiProducts } from "../components/apiMibiProducts";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { array } from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
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
  // let pageNumber = 1;
  useEffect(
    function () {
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
    },
    [pageNumber]
  );

  const totalArticles = 4;
  const articlePerPage = 3;
  const totalPages = Math.ceil(totalArticles / articlePerPage);

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

        {articleLoader ? (
          <div
            style={{
              height: "20vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faSpinner}
              style={{ fontSize: "30px" }}
              spin
            />
          </div>
        ) : (
          articleData?.map((data) => (
            <Link
              to={`/readArticle/${data.id}`}
              key={data.title}
              style={{ textDecoration: "none" }}
            >
              <Article data={data} />
            </Link>
          ))
        )}
        <div className={styles.pagination}>
          {/* <p className={styles.active}>1</p>
          <p>2</p> */}
          {Array.from({ length: totalPages }, (_, i) => (
            <p
              className={`${i + 1 === pageNumber ? styles.active : ""}`}
              key={i}
              onClick={() => setPageNumber(i + 1)}
            >
              {i + 1}
            </p>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
