import React, { useState, useEffect } from "react";
import "../styles/Product.css";

function Product({ name, price, images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [hovering, setHovering] = useState(false);

  let imageIndex = 0;

  useEffect(() => {
    let interval;
    if (hovering) {
      interval = setInterval(() => {
        imageIndex = (imageIndex + 1) % images.length;
        setCurrentImage(images[imageIndex]);
      }, 1500);
    } else {
      setCurrentImage(images[0]);
    }
    return () => clearInterval(interval);
  }, [hovering, images]);

  return (
    <div
      className="product"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <a href="#">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>
        <div className="product-name">{name}</div>
        {/* <div className="product-price">${price}</div> */}
      </a>
    </div>
  );
}

export default Product;
