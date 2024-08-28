import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const products = [
  { id: 1, name: "GENESIS", images: ["./../../src/assets/esculturas/genesis/genesis_sur.png", "./../../src/assets/esculturas/genesis/genesis_este.png", "./../../src/assets/esculturas/genesis/genesis_norte.png", "./../../src/assets/esculturas/genesis/genesis_oeste.png"] },
  { id: 2, name: "GRAVITY", images: ["./../../src/assets/esculturas/gravity/gravity_sur.png", "./../../src/assets/esculturas/gravity/gravity_este.png", "./../../src/assets/esculturas/gravity/gravity_norte.png", "./../../src/assets/esculturas/gravity/gravity_oeste.png"] },
  { id: 3, name: "TRIANGULO", images: ["./../../src/assets/esculturas/triangulo/triangulo_sur.png", "./../../src/assets/esculturas/triangulo/triangulo_este.png", "./../../src/assets/esculturas/triangulo/triangulo_norte.png", "./../../src/assets/esculturas/triangulo/triangulo_oeste.png"] },
  { id: 5, name: "MENGER", images: ["./../../src/assets/esculturas/menger/menger_sur.png", "./../../src/assets/esculturas/menger/menger_este.png", "./../../src/assets/esculturas/menger/menger_norte.png", "./../../src/assets/esculturas/menger/menger_oeste.png"] },
];

function ProductList() {
  const navigate = useNavigate();

  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id} className="product-container" onClick={() => handleClick(product.id)}>
          <Product {...product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
