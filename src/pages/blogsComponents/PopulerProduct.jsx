import hoodie from "./women-jean-1-4.jpg";
import styles from "../homeComponents/Testemonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function PopulerProduct() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",

        margin: "20px 0px",
      }}
    >
      <img style={{ height: "100px" }} src={hoodie} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <p
          style={{
            color: "rgb(34, 34, 34)",
            fontSize: "13px",
            marginLeft: "10px",
          }}
        >
          High Neck Ribbed Knit
        </p>
        <p
          style={{
            color: "rgb(34, 34, 34)",
            fontSize: "13px",
            marginLeft: "10px",
          }}
        >
          $800.00
        </p>
        <div className={styles.star}>
          {Array.from({ length: 5 }, (_, i) => (
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "orange" }}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopulerProduct;
