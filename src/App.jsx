import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MenClothing from "./pages/MenClothing";
import ReadArticle from "./pages/blogsComponents/ReadArticle";
// import WomenClothing from "./pages/WomenClothing";
import Blog from "./pages/Blog";
import ProductsPage from "./pages/ProductsPage";
import { useState } from "react";

// import hooks
import useLocalStorageState from "./hooks/useLocalStorageState";

import "./App.css";

function App() {
  const [ActiveFilter, setActiveFilter] = useState(false);
  const [cartItems, setCartItems] = useLocalStorageState([], "cartItems");
  const [sideBarIsActive, setSideBarIsActive] = useState(false);

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
  function addItemToCart(
    id,
    title,
    image,
    quantity,
    price,
    category,
    hash,
    initialPrice
  ) {
    let itemExists = false;
    const updatedCartItems = cartItems.map((item) => {
      if (item.hash === hash) {
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
        hash,
        initialPrice,
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

  function handleDeleteMovies(hash) {
    setCartItems((items) => items.filter((item) => item.hash !== hash));
  }

  // Function to increase the quantity of an item in the cart
  function increaseQuantity(hash) {
    setCartItems((allItems) =>
      allItems.map((item) =>
        item.hash === hash
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: (item.quantity + 1) * item.initialPrice,
            }
          : item
      )
    );
  }

  function decreaseQuntity(hash) {
    setCartItems((allItems) =>
      allItems.map((item) =>
        item.hash === hash
          ? item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: (item.quantity - 1) * item.initialPrice,
              }
            : item
          : item
      )
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
          sideBarIsActive={sideBarIsActive}
          setSideBarIsActive={setSideBarIsActive}
          increaseQuantity={increaseQuantity}
          decreaseQuntity={decreaseQuntity}
        />
      ),
    },
    {
      path: "/women",
      element: (
        <MenClothing
          addItemToCart={addItemToCart}
          cartItems={cartItems}
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
          handleDeleteMovies={handleDeleteMovies}
          sideBarIsActive={sideBarIsActive}
          setSideBarIsActive={setSideBarIsActive}
          increaseQuantity={increaseQuantity}
          decreaseQuntity={decreaseQuntity}
          categoryType={"women"}
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
          handleDeleteMovies={handleDeleteMovies}
          sideBarIsActive={sideBarIsActive}
          setSideBarIsActive={setSideBarIsActive}
          increaseQuantity={increaseQuantity}
          decreaseQuntity={decreaseQuntity}
          categoryType={"men"}
        />
      ),
    },
    {
      path: "/accessories",
      element: (
        <MenClothing
          addItemToCart={addItemToCart}
          cartItems={cartItems}
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
          handleDeleteMovies={handleDeleteMovies}
          sideBarIsActive={sideBarIsActive}
          setSideBarIsActive={setSideBarIsActive}
          increaseQuantity={increaseQuantity}
          decreaseQuntity={decreaseQuntity}
          categoryType={"accessories"}
        />
      ),
    },
    {
      path: "/blog",
      element: (
        <Blog
          addItemToCart={addItemToCart}
          cartItems={cartItems}
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
          handleDeleteMovies={handleDeleteMovies}
          sideBarIsActive={sideBarIsActive}
          setSideBarIsActive={setSideBarIsActive}
          increaseQuantity={increaseQuantity}
          decreaseQuntity={decreaseQuntity}
          categoryType={"accessories"}
        />
      ),
    },
    {
      path: "/product/:category/:id",
      element: (
        <ProductsPage
          addItemToCart={addItemToCart}
          cartItems={cartItems}
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
          handleDeleteMovies={handleDeleteMovies}
          sideBarIsActive={sideBarIsActive}
          setSideBarIsActive={setSideBarIsActive}
          increaseQuantity={increaseQuantity}
          decreaseQuntity={decreaseQuntity}
        />
      ),
    },
    {
      path: "/readArticle/:id",
      element: (
        <ReadArticle
          addItemToCart={addItemToCart}
          cartItems={cartItems}
          ActiveFilter={ActiveFilter}
          setActiveFilter={setActiveFilter}
          handleDeleteMovies={handleDeleteMovies}
          sideBarIsActive={sideBarIsActive}
          setSideBarIsActive={setSideBarIsActive}
          increaseQuantity={increaseQuantity}
          decreaseQuntity={decreaseQuntity}
        />
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
