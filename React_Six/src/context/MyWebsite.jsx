import { createContext } from "react";
import { useState } from "react";

export let MyShop = createContext();

export const myShopContextProvider = ({ children }) => {
  // State to control active screen/view ('home' shows products, 'cart' shows shopping cart)
  const [view, setView] = useState("home");

  // State to store items currently in the cart
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyShop.Provider value={{ view, setView, cartItems, setCartItems }}>
      {children}
    </MyShop.Provider>
  );
};
