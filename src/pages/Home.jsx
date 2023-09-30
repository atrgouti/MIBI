import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import HomeSlider from "./homeComponents/HomeSlider";
import HomeStyles from "./Home.module.css";
import OurOfferce from "./homeComponents/OurOfferce";
import { useState } from "react";

function Home() {
  const [ActiveFilter, setActiveFilter] = useState(false);
  return (
    <>
      <div className={ActiveFilter ? HomeStyles.filter : ""}></div>
      <Announce />
      <Navbar setActiveFilter={setActiveFilter} />
      <HomeSlider />
      <OurOfferce></OurOfferce>
    </>
  );
}

export default Home;
