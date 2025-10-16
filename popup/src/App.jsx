import React, { useState } from "react";
import "./App.css"; // use App.css instead of ProductPopup.css

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    shortDesc: "Comfortable over-ear design.",
    fullDesc:
      "These wireless headphones deliver crystal-clear sound and deep bass with up to 20 hours of battery life.",
    image: "wireless-headphones.jpeg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$89.99",
    shortDesc: "Track your health and notifications.",
    fullDesc:
      "Stay connected and track your daily activity with this smartwatch featuring heart-rate monitoring and GPS.",
    image: "smartwatch.jpeg",
  },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card" onClick={() => setSelectedProduct(p)}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <p>{p.shortDesc}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.fullDesc}</p>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
