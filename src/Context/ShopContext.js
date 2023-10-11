import React, { useState } from "react";
import { createContext } from "react";
import PRODUCTS from "../ProductsData";

export const ShopContextWrapper = createContext();

function ShopContext(props) {
  // cartItem Initial State
  const InitialState = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  // AddToCart Handler
  const AddtoCart = (ProductId) => {
    setCartItem((prev) => {
      return { ...prev, [ProductId]: prev[ProductId] + 1 };    
    });
  };
  // RemovefromCart Handler
  const RemovefromCart = (ProductId) => {
    setCartItem((prev) => {
      return { ...prev, [ProductId]: prev[ProductId] - 1 };
    });
  };

  // State
  const [cartItem, setCartItem] = useState(InitialState());

  // TotalAmount Handler
  const TotalAmountHandler = () => {
    let Amount = 0;
    for (let item in cartItem) {
      let EachObject = PRODUCTS.find((proObj) => proObj.id === +item);
      Amount = Amount + EachObject.price * +cartItem[EachObject.id];
    }
    return Amount;
  };


      // CartItem Count
      const cartCountHandler = () => {
        let cartCount = 0;
        for (let i in cartItem) {
          if (cartItem[i] > 0) {
            cartCount = cartCount + cartItem[i];
          }
        }
        return cartCount;
      };

  const GlobalState = {
    cartItem,
    AddtoCart,
    RemovefromCart,
    TotalAmountHandler,
    setCartItem,
    cartCountHandler
  };
  return (
    <ShopContextWrapper.Provider value={GlobalState}>
      {props.children}
    </ShopContextWrapper.Provider>
  );
}

export default ShopContext;
