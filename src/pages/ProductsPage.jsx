// importing the filtring styles
import filtringStyles from "./filtring.module.css";

import { useParams } from "react-router-dom";
import styles from "./productsPage.module.css";
import NavBar from "../components/Navbar";
import Announce from "../components/Announce";
import CurrentCategory from "../components/CurrentCategory";

function ProductsPage({ ActiveFilter, setActiveFilter }) {
  const x = useParams();
  console.log(x);
  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
      <Announce />
      <NavBar setActiveFilter={setActiveFilter} makeItActive={"true"} />
      <div style={{ position: "relative", top: "110px" }}>
        <CurrentCategory category={`${x.id}`} />
        <main className={styles.main}></main>
      </div>
    </>
  );
}
export default ProductsPage;
