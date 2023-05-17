import React, { useContext } from "react";
import { ShopContext } from "../../context/Context";

export const CartItem = (props) => {
  const { id, productImage, productName, price } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button className="amountbutton" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input value={cartItems[id]}></input>
          <button className="amountbutton" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
