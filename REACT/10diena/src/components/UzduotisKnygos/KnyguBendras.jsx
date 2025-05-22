import React from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnyguSpausdinimas from "./KnyguSpausdinimas";

const KnyguBendras = () => {
  const knygos = [
    { pavadinimas: "Knyga1", autorius: "Autorius1", metai: 2000 },
    { pavadinimas: "Knyga2", autorius: "Autorius2", metai: 2005 },
    { pavadinimas: "Knyga3", autorius: "Autorius3", metai: 2010 },
  ];
  const [knygosIvedimas, setKnygosIvedimas] = React.useState(knygos);
  const idedamKnyga = (knyga) => {
    setKnygosIvedimas((prevKnygos) => [...prevKnygos, knyga]);
  };
    const isvalyti = () => {
    setKnygosIvedimas([]);
  }
  return (
    <div>
      KnyguBendras
          <KnygosIvedimas getData={idedamKnyga} />
          <KnyguSpausdinimas sendData={knygosIvedimas} />
          <button onClick={isvalyti}>Isvalyti</button>
    </div>
  );
};

export default KnyguBendras;
