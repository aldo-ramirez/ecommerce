import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
import {useContext, useState} from "react";
import {ShopContext} from "../context/Context"



/*navbar is added on all pages except checkout*/

export const Navbar = () => {
  const [addClass, setAddClass] = useState("");
  const {getIconNumber} = useContext(ShopContext);
  const iconNumber = getIconNumber();

  return (
    
    <div className="navbar">
      <div className="links">
        <Link to="/">Instructions</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/Cart" className={iconNumber > 0 ? "cartIcon": ""} data-count={iconNumber}>
          <FaCartPlus size={32} />
        </Link>
      </div>
    </div>
  );
};
