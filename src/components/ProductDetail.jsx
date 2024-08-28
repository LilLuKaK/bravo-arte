import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";

const products = [
  { id: 1, name: "GENESIS", images: ["./../../src/assets/esculturas/genesis/genesis_sur.png", "./../../src/assets/esculturas/genesis/genesis_este.png", "./../../src/assets/esculturas/genesis/genesis_norte.png", "./../../src/assets/esculturas/genesis/genesis_oeste.png"] },
  { id: 2, name: "GRAVITY", images: ["./../../src/assets/esculturas/gravity/gravity_sur.png", "./../../src/assets/esculturas/gravity/gravity_este.png", "./../../src/assets/esculturas/gravity/gravity_norte.png", "./../../src/assets/esculturas/gravity/gravity_oeste.png"] },
  { id: 3, name: "TRIANGULO", images: ["./../../src/assets/esculturas/triangulo/triangulo_sur.png", "./../../src/assets/esculturas/triangulo/triangulo_este.png", "./../../src/assets/esculturas/triangulo/triangulo_norte.png", "./../../src/assets/esculturas/triangulo/triangulo_oeste.png"] },
  { id: 5, name: "MENGER", images: ["./../../src/assets/esculturas/menger/menger_sur.png", "./../../src/assets/esculturas/menger/menger_este.png", "./../../src/assets/esculturas/menger/menger_norte.png", "./../../src/assets/esculturas/menger/menger_oeste.png"] },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={product.name} />
        ))}
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        {/* <p>{product.price} USD</p> */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
