import styles from "./Testemonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Review({ image, description, numberOfStarts, namee, position }) {
  return (
    <div className={styles.box}>
      <img src={image} alt={image} loading="lazy" />
      <p className={styles.description}>{description}</p>
      <div className={styles.stars}>
        <div className={styles.star}>
          {Array.from({ length: numberOfStarts }, (_, i) => (
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "orange" }}
              key={i}
            />
          ))}
        </div>
        <p>
          <strong>{namee}</strong>
        </p>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default Review;
