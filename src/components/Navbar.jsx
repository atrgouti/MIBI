import styles from "./Navbar.module.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faMagnifyingGlass,
  faXmark,
  faGift,
  faFileInvoice,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";

import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes

import logo from "/logo.png";

// // import hooks
// import useLocalStorageState from "../hooks/useLocalStorageState";

export default function Navbar({
  setActiveFilter,
  makeItActive = "false",
  cartItems,
  handleDeleteMovies,
  sideBarIsActive,
  setSideBarIsActive,
  increaseQuantity,
  decreaseQuntity,
  wishList,
}) {
  const startInterval = () => {
    setSideBarIsActive(false);
    const id = setTimeout(() => {
      setActiveFilter(false);
    }, 300);
  };

  const [scrollY, setScrollY] = useState(0);

  const [searchIsActive, setSearchIsActive] = useState(false);

  // const [sideBarIsActive, setSideBarIsActive] = useState(false);

  const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);
  // const [cartItems, setCartItems] = useLocalStorageState([], "cartItems");

  function handleScrollY() {
    setScrollY(window.scrollY);
  }
  useEffect(
    function () {
      const handleOutsideCartClick = (e) => {
        // Check if the click event target is not part of the sidebar or the cart icon
        if (
          !e.target.closest(`.${styles.MyCart}`) &&
          !e.target.closest(`.${styles.iconDiv}`)
        ) {
          setSideBarIsActive(false);
          setActiveFilter(false);
        }
      };
      //check if the click event target is not part of the burger menu
      const handleOutsideBurgerMenuClick = (e) => {
        if (
          !e.target.closest(`${styles.burgerMenu}`) &&
          !e.target.closest(`.${styles.icon}`)
        ) {
          setBurgerMenuIsActive(false);
          setActiveFilter(false);
        }
      };
      // Attach the event listener when the sidebar is open
      if (sideBarIsActive) {
        document.addEventListener("click", handleOutsideCartClick);
      } else {
        // Remove the event listener when the sidebar is closed
        document.removeEventListener("click", handleOutsideCartClick);
      }
      // Attach the event listener when the burger menu is open
      if (burgerMenuIsActive) {
        document.addEventListener("click", handleOutsideBurgerMenuClick);
      } else {
        document.removeEventListener("click", handleOutsideBurgerMenuClick);
      }
      // Cleanup the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleOutsideCartClick);
        document.removeEventListener("click", handleOutsideBurgerMenuClick);
      };
    },
    [sideBarIsActive, setActiveFilter, burgerMenuIsActive, setSideBarIsActive]
  );
  useEffect(function () {
    document.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  return (
    <>
      <nav
        className={`${styles.nav} ${scrollY > 200 ? styles.scrolled : ""} ${
          makeItActive === "true" ? styles.whiteNavBar : ""
        }`}
      >
        <div className={styles.burger}>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.icon}
            onClick={() => {
              setBurgerMenuIsActive(true);
              setActiveFilter(true);
            }}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.icon}
            onClick={() => {
              setSearchIsActive(true);
              setActiveFilter(true);
            }}
          />
        </div>
        <div className="logo">
          {/* <h1>MIBI</h1> */}
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className={styles.myLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/men" onClick={() => setActiveFilter(false)}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`${styles.icon}`}
            onClick={() => {
              setSearchIsActive(true);
              setActiveFilter(true);
            }}
          />
          <Link to={"/favourite"}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ fontSize: "18px", margin: "10px", cursor: "pointer" }}
            />
          </Link>
          <p style={{ marginRight: "75px", fontSize: "rgb(32, 32, 32)" }}>
            {wishList.length > 0 ? wishList.length : ""}
          </p>
          <Link to={"/Account"}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </Link>
          <FontAwesomeIcon
            icon={faCartShopping}
            className={styles.icon}
            onClick={() => {
              setSideBarIsActive(true);
              setActiveFilter(true);
            }}
          />
          <p>{cartItems.length > 0 ? cartItems.length : ""}</p>
        </div>
      </nav>

      {/* working on the search  */}
      <Search
        searchIsActive={searchIsActive}
        setSearchIsActive={setSearchIsActive}
        setActiveFilter={setActiveFilter}
      />

      {/* WORKING ON THE BURGER MENU HERE  */}
      <div
        className={`${styles.burgerMenu} ${
          burgerMenuIsActive ? styles.active : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.burgerXmark}
          onClick={() => {
            setBurgerMenuIsActive(false);
            setActiveFilter(false);
            console.log("this is the correct");
          }}
        />
        <ul className={styles.burderMenuLinks}>
          <li>
            <Link to="/" onClick={() => setActiveFilter(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/men" onClick={() => setActiveFilter(false)}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" onClick={() => setActiveFilter(false)}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/accessories" onClick={() => setActiveFilter(false)}>
              Accessories
            </Link>
          </li>

          <li>
            <Link to="/blog" onClick={() => setActiveFilter(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contactus" onClick={() => setActiveFilter(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/* WORKING ON THE SIDE BAR HERE  */}
      <div
        className={`${styles.MyCart} ${sideBarIsActive ? styles.active : ""}`}
      >
        <header>
          <p>YOUR CART ({cartItems?.length})</p>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.xmark}
            onClick={startInterval}
          />
        </header>
        {cartItems?.length > 0 ? (
          <div className={styles.itemsAvaliable}>
            <div className={styles.youHaveFreeShipping}>
              <FontAwesomeIcon icon={faTruckFast} className={styles.icon} />
              <p>
                You have got <strong>FREE SHIPPING</strong>
              </p>
            </div>
            <div className={styles.product}>
              {/* <div className={styles.productInfos}>
                <img
                  src="https://byclccpokszkbxfgiwhw.supabase.co/storage/v1/object/public/ProductImages/bags-2-2.jpg"
                  alt=""
                />
                <div className={styles.titleQuantity}>
                  <p>men BackPack</p>
                </div>
              </div>
              <div className={styles.productPrice}></div> */}
              {/* {cartItems.map((item) => {
                <CartItem
                  img={item.image}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.price}
                  key={item.id}
                />;
              })} */}
              {/* <CartItem /> */}
              {cartItems.map((item) => (
                <CartItem
                  handleDeleteMovies={handleDeleteMovies}
                  img={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                  hash={item.hash}
                  category={item.category}
                  key={item.hash}
                  increaseQuantity={increaseQuantity}
                  decreaseQuntity={decreaseQuntity}
                />
              ))}

              <div className={styles.cartOptions}>
                <FontAwesomeIcon
                  icon={faFileInvoice}
                  className={styles.optionIcon}
                />
                <div className={styles.spreadLine}></div>
                <FontAwesomeIcon icon={faTag} className={styles.optionIcon} />
                <div className={styles.spreadLine}></div>
                <FontAwesomeIcon icon={faGift} className={styles.optionIcon} />
              </div>
              <div className={styles.subTotal}>
                <p>SUBTOTAL</p>
                <p>
                  $
                  {cartItems
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}{" "}
                  USD
                </p>
              </div>
              <p style={{ fontSize: "13px", color: "black", marginTop: "5px" }}>
                Taxt inclued and shipping calculated at checkout
              </p>
              <div className={styles.agreeTermsConditions}>
                <input type="checkbox" />
                <p>I agree with the terms and conditions</p>
              </div>
              <Link to={"/cart"}>
                <button
                  style={{ cursor: "pointer" }}
                  className={styles.Proceedcheckout}
                  onClick={() => {
                    setSideBarIsActive(false);
                    setActiveFilter(false);
                  }}
                >
                  PROCEED TO CHECKOUT
                </button>
              </Link>
              <Link to={"/favourite"}>
                <button
                  style={{ cursor: "pointer" }}
                  className={styles.viewCart}
                  onClick={() => {
                    setSideBarIsActive(false);
                    setActiveFilter(false);
                  }}
                >
                  VIEW WISHLIST
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.noItemsAvaliable}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={styles.icon}
              style={{ marginTop: "40px" }}
            />
            <p>You don`t have any items in your cart.</p>
            <button>CONTINUE SHOPPING</button>
          </div>
        )}
      </div>
    </>
  );
}

Navbar.propTypes = {
  setActiveFilter: PropTypes.func.isRequired, // Example: setActiveFilter should be a function and is required
  // Add more prop validations as needed
};
