import { useState } from "react";

const Komp2 = () => {
  let zodziai = ["Pirmas", "Antras", "Trecias", "Ketvirtas", "Penktas", "Sestas", "Septintas", "Astuntas"];
  const [zodis, setZodis] = useState(zodziai[""]);
  const traukti = () => {
    const indeksas = Math.floor(Math.random() * zodziai.length);
    setZodis(zodziai[indeksas]);
  };
  return (
    <div>
      <h2>Atsitiktiins zodis</h2>
      <button onClick={traukti}>Atsiktinis</button>
      <p>Istrauktas zodis: {zodis}</p>
    </div>
  );
};

export default Komp2;
