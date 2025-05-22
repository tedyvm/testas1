import React from "react";
import { NavLink } from "react-router";

const Products = () => {
  const prekes = [
    { id: 1, pavadinimas: "Pienas", kaina: 1.5 },
    { id: 2, pavadinimas: "Duona", kaina: 0.8 },
    { id: 3, pavadinimas: "Sviestas", kaina: 2.5 },
  ];
  return (
    <div>
      <h2>Products</h2>
      <div>
        {prekes.map((preke) => (
          <div key={preke.id}>
            <h3>{preke.pavadinimas}</h3>
            <p>Kaina: {preke.kaina} EUR</p>
            <NavLink to={`/product/${preke.id}`}>Placiau</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
