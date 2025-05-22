import React from "react";
import Automobilis from "./Automobilis";

const Servisas = () => {
  let automobiliai = [
    { id: 1, marke: "Audi", modelis: "A4", metai: 2015 },
    { id: 2, marke: "BMW", modelis: "X5", metai: 2018 },
    { id: 3, marke: "Mercedes", modelis: "C-Class", metai: 2020 },
    { id: 4, marke: "Toyota", modelis: "Corolla", metai: 2019 },
    { id: 5, marke: "Ford", modelis: "Focus", metai: 2017 },
  ];
  return (
    <div>
      <h2>Servisas</h2>
      {automobiliai.map((masina, i) => (
        <Automobilis key={i} auto={masina} />
      ))}
    </div>
  );
};

export default Servisas;
