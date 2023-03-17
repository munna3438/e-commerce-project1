import React from "react";
import { Products } from "../../products";
import Product from "./Product";
import "./shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitel">
        <h1>Electronic Shop</h1>
      </div>
      <div className="products">
        {Products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
