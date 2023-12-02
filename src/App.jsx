import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"));
// import MenClothing from "./pages/MenClothing";
const MenClothing = lazy(() => import("./pages/MenClothing"));
// import ReadArticle from "./pages/blogsComponents/ReadArticle";
const ReadArticle = lazy(() => import("./pages/blogsComponents/ReadArticle"));
// import Blog from "./pages/Blog";
const Blog = lazy(() => import("./pages/Blog"));
// import ProductsPage from "./pages/ProductsPage";
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
import { useState } from "react";

// import hooks
import useLocalStorageState from "./hooks/useLocalStorageState";

// fontawsoe
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  const [ActiveFilter, setActiveFilter] = useState(false);
  const [cartItems, setCartItems] = useLocalStorageState([], "cartItems");
  const [sideBarIsActive, setSideBarIsActive] = useState(false);

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
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </div>
          }
        >
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
        </Suspense>
      ),
    },
    {
      path: "/women",
      element: (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </div>
          }
        >
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
        </Suspense>
      ),
    },
    {
      path: "/men",
      element: (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </div>
          }
        >
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
        </Suspense>
      ),
    },
    {
      path: "/accessories",
      element: (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </div>
          }
        >
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
        </Suspense>
      ),
    },
    {
      path: "/blog",
      element: (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </div>
          }
        >
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
        </Suspense>
      ),
    },
    {
      path: "/product/:category/:id",
      element: (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </div>
          }
        >
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
        </Suspense>
      ),
    },
    {
      path: "/readArticle/:id",
      element: (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </div>
          }
        >
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
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
