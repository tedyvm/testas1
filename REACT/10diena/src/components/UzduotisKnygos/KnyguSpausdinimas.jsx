import React from "react";

const KnyguSpausdinimas = (props) => {
  console.log(props.sendData);
  const knygos = props.sendData;
  return (
    <div>
      <h2>KnyguSpausdinimas</h2>
      <div>
        {knygos.map((knyga, index) => {
          return (
            <div key={index}>
              <h2>{knyga.pavadinimas}</h2>
              <p>{knyga.autorius}</p>
              <p>{knyga.metai}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KnyguSpausdinimas;
