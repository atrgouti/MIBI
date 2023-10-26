import styles from "./MenProductsContent.module.css";
import MenCategories from "./MenCategories";
import MenProductColors from "./MenProductColors";
import MenPageProducts from "./MenPageProducts";
import Availability from "./Availability";

function MenProductsContent({ menData, menLoader }) {
  return (
    <div className={styles.allArea}>
      <div className={styles.AllMenProducts}>
        <div className={styles.filtringOptions}>
          <MenCategories />
          <MenProductColors />
          <Availability />
        </div>
        <div className={styles.menProducts}>
          <MenPageProducts menData={menData} menLoader={menLoader} />
        </div>
      </div>
    </div>
  );
}

export default MenProductsContent;
