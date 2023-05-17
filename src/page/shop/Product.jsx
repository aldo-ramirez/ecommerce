import React, { useContext } from "react";
import { ShopContext } from "../../context/Context";
import "./shop.css";

export const Product = (props) => {
  /*data destructured from product defined on Shop.jsx*/

  const { id, productName, productDescription, productImage, price } =
    props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{productDescription}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <>({cartItemCount})</>}
      </button>
    </div>
  );
};
