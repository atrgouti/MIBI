import styles from "./search.module.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

function Search({ searchIsActive, setSearchIsActive, setActiveFilter, ref }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
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
        />
        <div
          style={{ width: "100%", backgroundColor: "gray", height: "1px" }}
        ></div>
        <p className={styles.examples}>
          Popular Searches: Jeans Dress Top summer
        </p>
      </div>
    </div>
  );
}

export default Search;
