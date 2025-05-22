import React from "react";

const PrekiuSarasas = (props) => {
  const prekes = props.prekes;
  const perkam = (preke) => {
    props.nupirko(preke);
  };
  return (
    <div>
      {prekes.map((preke, index) => (
        <>
          <div key={index}>
            <h3>{preke.pavadinimas}</h3>
            <p>Kaina: {preke.kaina} EUR</p>
            <p>Kiekis: {preke.kiekis}</p>
            <button onClick={() => perkam(preke)}>Nupirkti</button>
          </div>
          <hr></hr>
        </>
      ))}
    </div>
  );
};

export default PrekiuSarasas;
