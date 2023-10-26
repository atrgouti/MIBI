import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import { useState } from "react";

import "./App.css";

function App() {
  const [ActiveFilter, setActiveFilter] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
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
