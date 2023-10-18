import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import { useEffect, useState } from "react";

import "./App.css";

// get fetched object data from API
import { mibiProducts } from "./components/apiMibiProducts";

function App() {
  const [MibiProductsData, setMibiProductsData] = useState([]);
  const [ActiveFilter, setActiveFilter] = useState(false);

  // fetch data
  useEffect(function () {
    mibiProducts().then((data) => setMibiProductsData(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              MibiProductsData={MibiProductsData}
              ActiveFilter={ActiveFilter}
              setActiveFilter={setActiveFilter}
            />
          }
        ></Route>
        <Route
          path="/women"
          element={
            <WomenClothing
              ActiveFilter={ActiveFilter}
              setActiveFilter={setActiveFilter}
            />
          }
        ></Route>
        <Route
          path="/men"
          element={
            <MenClothing
              ActiveFilter={ActiveFilter}
              setActiveFilter={setActiveFilter}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
