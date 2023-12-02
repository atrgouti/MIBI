import Navbar from "../../components/Navbar";
import RelatedProducts from "./RelatedProducts";
import PopulerProduct from "./PopulerProduct";
import ama from "./ama.jpg";
import Footer from "../../components/Footer";

import Announce from "../../components/Announce";
import filtringStyles from "../filtring.module.css";
import CurrentCategory from "../../components/CurrentCategory";
import RecentPost from "./RecentPost";
import styles from "./readArticle.module.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import LeaveComment from "./LeaveComment";
import Markdown from "react-markdown";

import {
  faFacebook,
  faTwitter,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
import { apiSelectProduct } from "../../components/apiSelectProduct";
import { apiMibiProducts } from "../../components/apiMibiProducts";
import { useEffect, useState } from "react";

function ReadArticle({
  ActiveFilter,
  setActiveFilter,
  cartItems,
  handleDeleteMovies,
  setSideBarIsActive,
  sideBarIsActive,
  addItemToCart,
  increaseQuantity,
  decreaseQuntity,
}) {
  window.scrollTo({ top: 0 });
  const [currentArticleData, setCurrentArticleData] = useState([]);
  const [recentArticles, setRecentArticles] = useState([]);
  const [ArticleIsLoading, setArticleIsLoading] = useState(false);
  const { id: ArticleId } = useParams();
  useEffect(
    function () {
      apiSelectProduct(ArticleId, "Blogs").then((data) =>
        setCurrentArticleData(data)
      );
      apiMibiProducts("Blogs", setArticleIsLoading).then((recent) =>
        setRecentArticles(recent)
      );
    },
    [ArticleId]
  );
  // console.log(recentArticles[0].id);

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
        <CurrentCategory
          category={"7 Easy Rules to Write Product Descriptions That Sell"}
        />
        <div className={styles.generaleContent}>
          <main className={styles.main}>
            <h2>{currentArticleData.at(0)?.title}</h2>
            <div className={styles.articleInfos}>
              <p>{currentArticleData.at(0)?.created_at.slice(0, 10)}</p>
              <p>Posted by {currentArticleData.at(0)?.PostedBy}</p>
              <div className={styles.comments}>
                <FontAwesomeIcon icon={faMessage} className={styles.icon} />
                <p>0 Comments</p>
              </div>
            </div>
            <img src={currentArticleData.at(0)?.image} alt="" />
            <div className={styles.description}>
              <Markdown>{currentArticleData.at(0)?.description}</Markdown>
            </div>
            <div className={styles.shareToSocialMedia}>
              <div className={styles.social}>
                <FontAwesomeIcon icon={faFacebook} />
                <p>Share</p>
              </div>
              <div className={styles.social}>
                <FontAwesomeIcon icon={faTwitter} />
                <p>Tweet</p>
              </div>
              <div className={styles.social}>
                <FontAwesomeIcon icon={faPinterest} />
                <p>Pin it</p>
              </div>
              <div className={styles.social}>
                <FontAwesomeIcon icon={faLinkedin} />
                <p>Share</p>
              </div>
            </div>
            <h2 style={{ textAlign: "center", fontWeight: "200" }}>
              Related Products
            </h2>
            <RelatedProducts
              setSideBarIsActive={setSideBarIsActive}
              setActiveFilter={setActiveFilter}
              addItemToCart={addItemToCart}
            />
            <LeaveComment />
          </main>
          <aside className={styles.aside}>
            <h3>RECENT POSTS</h3>
            {recentArticles?.map((article) => (
              <RecentPost
                img={article.image}
                date={article.created_at}
                title={article.title}
                key={article.id}
              />
            ))}
            <h3>POPULAR PRODUCTS</h3>
            <PopulerProduct />
            <PopulerProduct />
            <PopulerProduct />
            <PopulerProduct />
            <PopulerProduct />
            <h3>Tags</h3>
            <div className={styles.allTags}>
              <p>Denim</p>
              <p>Fashion</p>
              <p>Design</p>
            </div>
          </aside>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ReadArticle;
