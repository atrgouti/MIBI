import { useEffect, useState } from "react";

export default function useLocalStorageState(initialState, key) {
  const [cartItems, setCartItems] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(cartItems));
    },
    [cartItems, key]
  );

  return [cartItems, setCartItems];
}
