import { useState } from "react";
const PrekiuKrepselis = () => {
  const prekes = [
    { id: 1, pavadinimas: "Prekė 1", kaina: 10, kiekis: 2, nuolaida: 0 },
    { id: 2, pavadinimas: "Prekė 2", kaina: 20, kiekis: 1, nuolaida: 5 },
    { id: 3, pavadinimas: "Prekė 3", kaina: 15, kiekis: 3, nuolaida: 0 },
    { id: 4, pavadinimas: "Prekė 4", kaina: 30, kiekis: 1, nuolaida: 10 },
    { id: 5, pavadinimas: "Prekė 5", kaina: 25, kiekis: 2, nuolaida: 0 },
  ];
  const [riba, setRiba] = useState(0);
  function isspausdinti(masyvas) {
    return masyvas.map((preke) => {
      return (
        <tr key={preke.id}>
          <td>{preke.pavadinimas}</td>
          <td>{preke.kaina}</td>
          <td>{preke.kiekis}</td>
          <td>{preke.nuolaida}</td>
        </tr>
      );
    });
  }
  function nuolaiduSuma(masyvas) {
    let suma = 0;
    masyvas.forEach((preke) => {
      suma += preke.nuolaida * preke.kiekis;
    });
    return suma;
  }
  function bendraKaina(masyvas) {
    let suma = 0;
    masyvas.forEach((preke) => {
      suma += preke.kaina * preke.kiekis - preke.nuolaida;
    });
    return suma;
  }
  function kainosRiba(riba) {
    return prekes.filter((preke) => preke.kaina < riba);
  }
  return (
    <div>
      <h1>Prekes</h1>
      <table>
        <thead>
          <tr>
            <th>Pavadinimas</th>
            <th>Kaina</th>
            <th>Kiekis</th>
            <th>Nuolaida</th>
          </tr>
        </thead>
        <tbody>{isspausdinti(prekes)}</tbody>
      </table>
      <h4>Nuolaidu suma {nuolaiduSuma(prekes)}</h4>
      <h4>Bendra kaina {bendraKaina(prekes)}</h4>
      <h1>Prekes su filtru</h1>
      <input type="number" value={riba} onChange={(e) => setRiba(Number(e.target.value))} placeholder="Įveskite kainos ribą" />
      <table>
        <thead>
          <tr>
            <th>Pavadinimas</th>
            <th>Kaina</th>
            <th>Kiekis</th>
            <th>Nuolaida</th>
          </tr>
        </thead>
        <tbody>{isspausdinti(kainosRiba(riba))}</tbody>
      </table>
      <h4>Nuolaidu suma {nuolaiduSuma(kainosRiba(riba))}</h4>
      <h4>Bendra kaina {bendraKaina(kainosRiba(riba))}</h4>
    </div>
  );
};

export default PrekiuKrepselis;
