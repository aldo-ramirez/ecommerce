import React, { useContext } from "react";
import { ShopContext } from "../../context/Context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./Cart-Items";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  let totalAmount = getTotalAmount().toFixed(2);
  return (
    <div className="cart">
      <div className="navbar">
        <Navbar />
      </div>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="cart-buttons">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/shop")}>Cancel</button>
          <button
            onClick={() => {
              navigate("/form");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
