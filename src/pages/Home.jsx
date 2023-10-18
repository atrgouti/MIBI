import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import HomeSlider from "./homeComponents/HomeSlider";
import HomeStyles from "./Home.module.css";
import OurOfferce from "./homeComponents/OurOfferce";
import Categories from "./homeComponents/Categories";
import ProductsQuickView from "./homeComponents/ProductsQuickView";
import HotCollection from "./homeComponents/hotCollection";
import BestBagsCollection from "./homeComponents/BestBagsCollection";
import DayToNight from "./homeComponents/DayToNight";
import Testemonials from "./homeComponents/Testemonials";
import Newsletter from "./homeComponents/Newsletter";
import Footer from "../components/Footer";

function Home({ MibiProductsData, ActiveFilter, setActiveFilter }) {
  return (
    <>
      <div className={ActiveFilter ? HomeStyles.filter : ""}></div>
      <Announce />
      <Navbar setActiveFilter={setActiveFilter} />
      <HomeSlider />
      <OurOfferce></OurOfferce>
      <Categories></Categories>
      <ProductsQuickView MibiProductsData={MibiProductsData} />
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
