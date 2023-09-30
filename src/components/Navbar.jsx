import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export default function Navbar({ setActiveFilter }) {
  const [sideBarIsActive, setSideBarIsActive] = useState(false);
  const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);

  useEffect(
    function () {
      const handleOutsideClick = (e) => {
        // Check if the click event target is not part of the sidebar or the cart icon
        if (
          !e.target.closest(`.${styles.MyCart}`) &&
          !e.target.closest(`.${styles.iconDiv}`)
        ) {
          setSideBarIsActive(false);
          setActiveFilter(false);
        }
      };

      // Attach the event listener when the sidebar is open
      if (sideBarIsActive) {
        document.addEventListener("click", handleOutsideClick);
      } else {
        // Remove the event listener when the sidebar is closed
        document.removeEventListener("click", handleOutsideClick);
      }

      // Cleanup the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    },
    [sideBarIsActive, setActiveFilter]
  );

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.burger}>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.icon}
            onClick={() => {
              setBurgerMenuIsActive(true);
              setActiveFilter(true);
            }}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </div>
        <div className="logo">
          <h1>MIBI</h1>
        </div>
        <ul className={styles.myLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/men">Women</Link>
          </li>
          <li>
            <Link to="/men">Accessories</Link>
          </li>
          <li>
            <Link to="/men">New</Link>
          </li>
          <li>
            <Link to="/men">Blog</Link>
          </li>
          <li>
            <Link to="/men">Contact Us</Link>
          </li>
        </ul>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon icon={faHeart} className={`${styles.icon}`} />
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <FontAwesomeIcon
            icon={faCartShopping}
            className={styles.icon}
            onClick={() => {
              setSideBarIsActive(true);
              setActiveFilter(true);
            }}
          />
        </div>
      </nav>
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
          }}
        />
        <ul className={styles.burderMenuLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/men">Women</Link>
          </li>
          <li>
            <Link to="/men">Accessories</Link>
          </li>
          <li>
            <Link to="/men">New</Link>
          </li>
          <li>
            <Link to="/men">Blog</Link>
          </li>
          <li>
            <Link to="/men">Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* WORKING ON THE SIDE BAR HERE  */}
      <div
        className={`${styles.MyCart} ${sideBarIsActive ? styles.active : ""}`}
      >
        <header>
          <p>YOUR CART (0)</p>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.xmark}
            onClick={() => {
              setSideBarIsActive(false);
              setActiveFilter(false);
            }}
          />
        </header>
      </div>
    </>
  );
}

Navbar.propTypes = {
  setActiveFilter: PropTypes.func.isRequired, // Example: setActiveFilter should be a function and is required
  // Add more prop validations as needed
};
