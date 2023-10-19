// importing the filtring styles
import filtringStyles from "./filtring.module.css";
// importing the required components
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import CurrentCategory from "./menClothingComponents/CurrentCategory";
function MenClothing({ ActiveFilter, setActiveFilter }) {
  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
      <Announce />
      <Navbar setActiveFilter={setActiveFilter} makeItActive={"true"} />
      <CurrentCategory />
    </>
  );
}

export default MenClothing;
