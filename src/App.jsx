import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import ProductsPage from "./pages/ProductsPage";
import { useState } from "react";

// import hooks
import useLocalStorageState from "./hooks/useLocalStorageState";

import "./App.css";

function App() {
  const [ActiveFilter, setActiveFilter] = useState(false);
  const [cartItems, setCartItems] = useLocalStorageState([], "cartItems");

  // old function
  // function addItemToCart(id, title, image, quantity, price, category) {
  //   const newItemObject = {
  //     id: id,
  //     title: title,
  //     image: image,
  //     quantity: quantity,
  //     price: price * quantity,
  //     category: category,
  //   };
  //   const newItem = [...cartItems, newItemObject];
  //   const checker = cartItems.filter(
  //     (item) => item.id === id && item.category === category
  //   );
  //   checker.length > 0 ? console.log("kayn deja") : setCartItems(newItem);
  // }

  // new function
  function addItemToCart(id, title, image, quantity, price, category) {
    let itemExists = false;
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.category === category) {
        itemExists = true;
        return {
          ...item,
          quantity: item.quantity + quantity,
          price: price * (item.quantity + quantity),
          // Assuming price is the unit price, we do not need to update it here
        };
      }
      return item;
    });

    if (!itemExists) {
      const newItemObject = {
        id,
        title,
        image,
        quantity,
        price, // store the unit price
        category,
      };
      updatedCartItems.push(newItemObject);
    }

    setCartItems(updatedCartItems);
  }

  // function handleDeleteMovies(id, type) {
  //   setCartItems((items) =>
  //     items.filter((item) => item.id !== id && item.category !== type)
  //   );
  // }

  function handleDeleteMovies(id, type) {
    setCartItems((items) =>
      items.filter((item) => !(item.id === id && item.category === type))
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
          cartItems={cartItems}
          addItemToCart={addItemToCart}
          handleDeleteMovies={handleDeleteMovies}
        />
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
          addItemToCart={addItemToCart}
          cartItems={cartItems}
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
        />
      ),
    },
    {
      path: "/product/:id",
      element: (
        <ProductsPage
          cartItems={cartItems}
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
        />
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
