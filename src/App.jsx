import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import ProductsPage from "./pages/ProductsPage";
import { useState } from "react";

import "./App.css";

function App() {
  const [ActiveFilter, setActiveFilter] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home ActiveFilter={ActiveFilter} setActiveFilter={setActiveFilter} />
      ),
    },
    {
      path: "/women",
      element: (
        <WomenClothing
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
        />
      ),
    },
    {
      path: "/men",
      element: (
        <MenClothing
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
        />
      ),
    },
    {
      path: "/product/:id",
      element: (
        <ProductsPage
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
        />
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
