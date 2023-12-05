import styles from "../homeComponents/Testemonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function PopulerProduct({ img, title, price }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",

        margin: "20px 0px",
      }}
    >
      <img style={{ height: "100px" }} src={img} alt="" />
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
          {title}
        </p>
        <p
          style={{
            color: "rgb(34, 34, 34)",
            fontSize: "13px",
            marginLeft: "10px",
          }}
        >
          {price}
        </p>
        <div className={styles.star} style={{ marginLeft: "10px" }}>
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
