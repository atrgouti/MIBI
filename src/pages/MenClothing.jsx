// importing the filtring styles
import filtringStyles from "./filtring.module.css";
// importing the required components
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import CurrentCategory from "../components/CurrentCategory";
import MenProductsContent from "./menClothingComponents/MenProductsContent";
function MenClothing({ ActiveFilter, setActiveFilter }) {
  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
      <Announce />
      <Navbar setActiveFilter={setActiveFilter} makeItActive={"true"} />
      <div style={{ position: "relative", top: "110px" }}>
        <CurrentCategory category={"Men"} />
        <MenProductsContent />
      </div>
    </>
  );
}

export default MenClothing;
