import React from "react";
import TekstoVaikas from "./TekstoVaikas";

const TekstoBendras = () => {
  const vidinisTekstas = "vidinis tekstas";
  return (
    <>
      <h2>TekstoBendras</h2>
      <TekstoVaikas tekstas="mano perduotas tekstas" />
      <TekstoVaikas tekstas="antras perduodamas tekstas" />
      <TekstoVaikas tekstas={vidinisTekstas} />
      <TekstoVaikas />
      <TekstoVaikas />
    </>
  );
};

export default TekstoBendras;
