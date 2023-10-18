import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import HomeStyles from "./Home.module.css";
function MenClothing({ ActiveFilter, setActiveFilter }) {
  return (
    <div className={ActiveFilter ? HomeStyles.filter : ""}>
      <Announce />
      <Navbar setActiveFilter={setActiveFilter} />
    </div>
  );
}

export default MenClothing;
