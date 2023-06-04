import { useContext } from "react";
import { ShopContext } from "../../context/Context";
import "./checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { order, values, getTotalAmount, checkitout } = useContext(ShopContext);
  const navigate = useNavigate();

  //const orderNumber = order();
  const totalAmountToday = getTotalAmount()

  return (
    <div className="checkout">
      <div className="checkout-title">
        <h3>Please verify all information is correct</h3>
      </div>
      <div className="checkout-list">
        <ul>
          <li>Name(s): {values.name}</li>
          <li>Last Name(s): {values.lastName}</li>
          <li>Address: {values.address}</li>
          <li>City: {values.city}</li>
          <li>State: {values.state}</li>
          <li>Zipcode: {values.zipcode}</li>
          <li>Country: {values.country}</li>
          <li>Contact Phone: {values.phone}</li>
          <li>Email: {values.email}</li>
          <li>
          Order number: {order}
            {totalAmountToday}
          </li>
        </ul>
        <div className="checkout-buttons">
        <button onClick={checkitout}>Continue to make payment</button>

<button onClick={() => navigate("/shop")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
