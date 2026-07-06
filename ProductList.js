import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} width="100" />
        </div>
      ))}
    </div>
  );
}

export default ProductList;