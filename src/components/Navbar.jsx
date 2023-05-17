import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

/*navbar is added on all pages except checkout*/

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Instructions</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/Cart">
          <FaCartPlus size={32} />
        </Link>
      </div>
    </div>
  );
};
