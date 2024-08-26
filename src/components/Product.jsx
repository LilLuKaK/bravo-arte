import React from "react";
import "../styles/Product.css";

function Product({ name, price, image }) {
  return (
    <div className="product">
      <a href="#">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="product-name">{name}</div>
        <div className="product-price">${price}</div>
      </a>
    </div>
  );
}

export default Product;
