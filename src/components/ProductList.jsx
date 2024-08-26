import React from "react";
import Product from "./Product";
import "../styles/Product.css";

const products = [
  { name: "HEATHER GREY TEE", price: 20, image: "/path/to/image1.jpg" },
  // Otros productos...
];

function ProductList() {
  return (
    <div className="container">
      {products.map((product, index) => (
      <Product key={index} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
