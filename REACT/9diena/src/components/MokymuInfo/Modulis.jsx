import React from "react";

const Modulis = ({ mokymas }) => {
  const { pavadinimas, trukme, kaina } = mokymas;
  return (
    <div>
      <h4>Mokymu pavadinimas: {pavadinimas}</h4>
      <p>Mokymu trukme: {trukme} val.</p>
      <p>Mokymu kaina: {kaina} Eur</p>
      <hr />
    </div>
  );
};

export default Modulis;
