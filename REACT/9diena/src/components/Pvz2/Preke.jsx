import React from "react";

const Preke = (props) => {
  return (
    <div>
      <h3>{props.pavadinimas}</h3>
          <p>Prekyboje turime {props.kiekis}</p>
          <h4>Kaina: {props.kaina}</h4>
          <br />
    </div>
  );
};

export default Preke;
