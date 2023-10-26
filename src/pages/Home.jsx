import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import HomeSlider from "./homeComponents/HomeSlider";
import filtringStyles from "./filtring.module.css";
import OurOfferce from "./homeComponents/OurOfferce";
import Categories from "./homeComponents/Categories";
import ProductsQuickView from "./homeComponents/ProductsQuickView";
import HotCollection from "./homeComponents/hotCollection";
import BestBagsCollection from "./homeComponents/BestBagsCollection";
import DayToNight from "./homeComponents/DayToNight";
import Testemonials from "./homeComponents/Testemonials";
import Newsletter from "./homeComponents/Newsletter";
import Footer from "../components/Footer";

import GeneralLoader from "../components/GeneralLoader";
import { useState } from "react";
function Home({ ActiveFilter, setActiveFilter }) {
  const [someDataIsLoading, setSomeDataIsLoading] = useState(false);
  window.scrollTo({ top: 0, left: 0 });
  return (
    <div>
      <div
        // style={{ position: "absolute" }}
        className={ActiveFilter ? filtringStyles.filter : ""}
      ></div>
      <Announce />
      <Navbar setActiveFilter={setActiveFilter} />
      {someDataIsLoading && <GeneralLoader />}
      <HomeSlider />
      <OurOfferce></OurOfferce>
      <Categories></Categories>
      <ProductsQuickView />
      <HotCollection />
      <BestBagsCollection />
      <DayToNight />
      <Testemonials />
      <Newsletter />
      <Footer></Footer>
    </div>
  );
}

export default Home;
