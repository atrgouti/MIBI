import styles from "./MenProductsContent.module.css";
import MenCategories from "./MenCategories";
import MenProductColors from "./MenProductColors";
function MenProductsContent() {
  return (
    <div className={styles.allArea}>
      <div className={styles.AllMenProducts}>
        <div className={styles.filtringOptions}>
          <MenCategories />
          <MenProductColors />
        </div>
        <div className={styles.menProducts}></div>
      </div>
    </div>
  );
}

export default MenProductsContent;
