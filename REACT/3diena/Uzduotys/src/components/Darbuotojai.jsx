import { useState } from "react";
const Darbuotojai = () => {
  const darbuotojas = {
    vardas: "Jonas",
    profesija: "programuotojas",
    atlyginimas: 2000,
    etatas: "pilnas",
    darboStazas: 5,
  };
  function kiekUzdirbes() {
    if (darbuotojas.etatas === "pilnas") {
      return darbuotojas.atlyginimas * darbuotojas.darboStazas * 12;
    } else if (darbuotojas.etatas === "puse") {
      return (darbuotojas.atlyginimas * darbuotojas.darboStazas * 12) / 2;
    }
  }
  function ilgametis() {
    if (darbuotojas.darboStazas >= 5) {
      return "ilgametis";
    } else {
      return "naujokas";
    }
  }
  const [suma, setDydis] = useState(0);
  function uzdarbis(suma) {
    if (darbuotojas.atlyginimas > suma) {
      return "darbuotojas uzdirba daugiau nei " + suma;
    } else {
      return "darbuotojas uzdirba maziau nei " + suma;
    }
  }

  return (
    <div>
      <h1>Darbuotojas</h1>
      <h4>Vardas {darbuotojas.vardas}</h4>
      <h4>Profesija {darbuotojas.profesija}</h4>
      <h4>Atlyginimas {darbuotojas.atlyginimas}</h4>
      <h4>Etatas {darbuotojas.etatas}</h4>
      <h4>Darbo stazas {darbuotojas.darboStazas}</h4>
      <h3>Uzdirbo viso: {kiekUzdirbes()}</h3>
      <h5>darbuotojas yra {ilgametis()}</h5>
      <input type="number" value={suma} onChange={(e) => setDydis(Number(e.target.value))} placeholder="Įveskite atlygio dydi" />
      <h5>{uzdarbis(suma)}</h5>
    </div>
  );
};

export default Darbuotojai;
