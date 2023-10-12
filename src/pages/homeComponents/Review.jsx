import image from "/unnamed.jpg";
import styles from "./testemonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Review() {
  return (
    <div className={styles.box}>
      <img src={image} alt="" />
      <p className={styles.description}>
        I deal quite a bit with programming and manage a lot of integration with
        customer services of different companies, but i must say, quality of
        your product and the service you offering is the best Ihave experienced
      </p>
      <div className={styles.stars}>
        <div className={styles.star}>
          {Array.from({ length: 5 }, (_, i) => (
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "orange" }}
              key={i}
            />
          ))}
        </div>
        <p>
          <strong>Richared Parker</strong>
        </p>
        <p>MACCY FOUNDER</p>
      </div>
    </div>
  );
}

export default Review;
