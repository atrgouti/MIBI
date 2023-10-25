import styles from "./MenProductsContent.module.css";
import MenCategories from "./MenCategories";
import MenProductColors from "./MenProductColors";
import MenPageProducts from "./MenPageProducts";
// import { apiMibiProducts } from "../../components/apiMibiProducts";
// import { useEffect, useState } from "react";

function MenProductsContent() {
  // const [menData, setMenData] = useState([]);
  // const [menLoader, setMenLoader] = useState("false");

  // useEffect(function () {
  //   apiMibiProducts("men", setMenLoader).then((data) => setMenData(data));
  // }, []);

  return (
    <div className={styles.allArea}>
      <div className={styles.AllMenProducts}>
        <div className={styles.filtringOptions}>
          <MenCategories />
          <MenProductColors />
        </div>
        <div className={styles.menProducts}>
          <MenPageProducts />
        </div>
      </div>
    </div>
  );
}

export default MenProductsContent;
