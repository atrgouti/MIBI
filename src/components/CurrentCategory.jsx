import styles from "./CurrentCategory.module.css";
function CurrentCategory({ category }) {
  return (
    <div className={styles.categoSec}>
      <div className={styles.catego}>
        <p>
          Home - <strong>{category}</strong>
        </p>
      </div>
    </div>
  );
}

export default CurrentCategory;
