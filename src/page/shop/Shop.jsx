import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";
import { Navbar } from "../../components/Navbar";
import Social from "../../components/Social";
import Footer from "../../components/footer";

export const Shop = (id) => {
  return (
    <div className="shop">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="shopTitle">
        <h1>AldoTech Shop</h1>
        <Social />
      </div>

      <div className="products">
        {PRODUCTS.map((product) => {
          return <Product data={product} key={product.id} />;
        })}
      </div>
      <br />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
