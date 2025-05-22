import React, { useState } from "react";
import PridetiPreke from "./PridetiPreke";
import PrekiuSarasas from "./PrekiuSarasas";

const Parduotuve = () => {
  const testData = [
    { pavadinimas: "Pienas", kaina: 1.5, kiekis: 10 },
    { pavadinimas: "Duona", kaina: 0.8, kiekis: 20 },
    { pavadinimas: "Kava", kaina: 3.0, kiekis: 5 },
  ];
  const [prekes, setPrekes] = useState(testData);
  const gaudomPreke = (preke) => {
    setPrekes((prev) => [preke, ...prev]);
  };
  const gaudomNupirko = (preke) => {
    const indeksas = prekes.findIndex((item) => item.pavadinimas === preke.pavadinimas);
    console.log(indeksas);
    preke.kiekis -= 1;
    if (preke.kiekis <= 0) {
      preke.kiekis = 0;
      alert("Prekė išparduota");
    }
    if (indeksas !== -1) {
      prekes[indeksas] = preke;
      setPrekes([...prekes]);
    }
  };
  return (
    <div>
      <h2>Parduotuve</h2>
      <PridetiPreke siunciamPreke={gaudomPreke} />
      <PrekiuSarasas prekes={prekes} nupirko={gaudomNupirko} />
    </div>
  );
};

export default Parduotuve;
