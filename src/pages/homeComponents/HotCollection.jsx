import summerBackground from "/summer-background.jpg";
import { Link } from "react-router-dom";
import styles from "./HotCollection.module.css";
function HotCollection() {
  return (
    <section className={styles.section}>
      <img src={summerBackground} alt="" loading="lazy" className={styles.bg} />
      <div className={styles.content}>
        <h3>HOT COLLECTION</h3>
        <h1>Summer In The City</h1>
        <p>
          the brand continues to champion and further strengthen its core belief
          of size inclusivity by launching its new collection ‘Summer in the
          City’. The collection speaks of fresh summer hues, breezy silhouettes
          and more, available across sizes.
        </p>
        <Link to={"/women"}>
          <button>VIEW COLLECTION</button>
        </Link>
      </div>
    </section>
  );
}

export default HotCollection;
