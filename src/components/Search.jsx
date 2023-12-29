import styles from "./search.module.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { apiSearch } from "./apiSearch";
import { Link } from "react-router-dom";

function Search({ searchIsActive, setSearchIsActive, setActiveFilter }) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(
    function () {
      if (inputValue.length > 1) {
        apiSearch(inputValue).then((data) => setSearchData(data));
      }
    },
    [inputValue]
  );

  useEffect(() => {
    // Focus on the input when the component mounts
    if (searchIsActive) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [searchIsActive]);

  return (
    <div className={` ${searchIsActive ? styles.active : styles.search}`}>
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.closeIcon}
        onClick={() => {
          setSearchIsActive(false);
          setActiveFilter(false);
        }}
      />
      <div className={styles.workingArea}>
        <h2>What are you looking for?</h2>
        <input
          // autoFocus={true}
          type="text"
          id="message"
          placeholder="Search for products, brands and more"
          ref={inputRef}
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
        <div
          style={{ width: "100%", backgroundColor: "gray", height: "1px" }}
        ></div>
        {searchData.length !== 0 && (
          <p className={styles.examples}>
            Popular Searches: Jeans Dress Top summer
          </p>
        )}
        <div className={styles.products}>
          {inputValue.length > 0 &&
            searchData.map((item) => (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  setActiveFilter(false);
                  setSearchIsActive(false);
                }}
                key={item.id}
                to={`/product/men/${item.id}`}
              >
                <div className={styles.product}>
                  <img src={item.photos.productPhotos.at(0)} alt="" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginLeft: "20px",
                    }}
                  >
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
