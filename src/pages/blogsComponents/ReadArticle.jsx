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

import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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
            <h2>7 Easy Rules to Write Product Descriptions That Sell</h2>
            <div className={styles.articleInfos}>
              <p>July 16, 2022</p>
              <p>Posted by Bilal Atrgouti</p>
              <div className={styles.comments}>
                <FontAwesomeIcon icon={faMessage} className={styles.icon} />
                <p>0 Comments</p>
              </div>
            </div>
            <img src={ama} alt="" />
            <div className={styles.description}>
              <p>
                Every good copywriter knows that defining the target audience is
                the first step in writing something that resonates with the
                readers. That’s because, knowing who your prospects are, enables
                you to focus on the product features that interest them the
                most. For example, let’s say you’re selling clothes made out of
                recycled fabrics to people passionate about saving the planet.
                Writing a text about how the garments got made can generate much
                more sales than only focusing on the design and looks of the
                attire. So who are the people that are most likely to buy from
                you? Start breaking down their characteristics by answering the
                following questions:
              </p>
              <br />
              <ul>
                <li>
                  Which features in your product could benefit and interest them
                  more than the others?
                </li>
                <li>
                  How would your buyers talk about your product to their
                  friends?
                </li>
                <li>What are their general interests?</li>
                <li>What brought them to your e-shop?</li>
              </ul>
              <p>
                Every business owner is eager to share all the unique features
                of his products. But while prospects are willing to skim through
                a certain amount of technical information, it’s not what
                interests them the most. Before they can make the purchase, your
                potential buyers need to see (read) measurable and obvious facts
                on how your product could improve their lives.
              </p>
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
            <RecentPost />
            <RecentPost />
            <RecentPost />
            <RecentPost />
            <RecentPost />
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
