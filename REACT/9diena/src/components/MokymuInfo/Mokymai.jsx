import React from "react";
import Modulis from "./Modulis";

const Mokymai = () => {
  let mokymai = [
    { id: 1, pavadinimas: "React", trukme: 30, kaina: 300 },
    { id: 2, pavadinimas: "JavaScript", trukme: 20, kaina: 200 },
    { id: 3, pavadinimas: "CSS", trukme: 15, kaina: 150 },
    { id: 4, pavadinimas: "HTML", trukme: 10, kaina: 100 },
    { id: 5, pavadinimas: "Node.js", trukme: 25, kaina: 250 },
  ];
  return (
    <div>
      <h2>Mokymai</h2>
      <div>
        {mokymai.map((mokymas, i) => (
          <Modulis key={i} mokymas={mokymas} />
        ))}
      </div>
    </div>
  );
};

export default Mokymai;
