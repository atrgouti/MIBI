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

function Home({ ActiveFilter, setActiveFilter }) {
  return (
    <>
      <div className={ActiveFilter ? filtringStyles.filter : ""}></div>
      <Announce />
      <Navbar setActiveFilter={setActiveFilter} />
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
    </>
  );
}

export default Home;
