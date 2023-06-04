import React, { useState, createContext } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [order, setOrder] = useState();

  const getOrder = () => {
    setOrder(crypto.randomUUID());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [values, setValues] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
    email: "",
  });

  const evaluations = {
    nameEval: /[a-zA-Z]{2,}/,
    lastnameEval: /[a-zA-Z]{2,}/,
    addressEval: /[a-zA-Z]{2,}/,
    cityEval: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
    stateEval: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
    countryEval: /[a-zA-Z]{2,}/,
    zipcodeEval: /^\d{5}(?:[-\s]\d{4})?$/,
    phoneEval: /^[0-9]{10}$/,
    emailEval: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  };

  let getDefaultCart = () => {
    const cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getIconNumber = () => {
    let iconNumber = 0;
    for(let item in cartItems) {
      if (cartItems[item] > 0) {
        iconNumber += cartItems[item];
      }
    }
    return iconNumber;
  }

  const checkitout = () => {
    alert("You are being redirected to make your payment");
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    checkitout,
    updateCartItemCount,
    order,
    getOrder,
    handleChange,
    values,
    evaluations,
    getIconNumber,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
