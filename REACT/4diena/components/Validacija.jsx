import { useState } from "react";

const Validacija = () => {
  const [pranesimas, setPranesimas] = useState("");
  const patikrinimas = (e) => {
    const tekst = e.target.value;
    if (tekst < 10 && tekst > 0) {
      setPranesimas("Tekstas yra teisingas");
    } else {
      setPranesimas("Tekstas yra neteisingas");
    }
  };
  return (
    <div>
      <h2>Validacija</h2>
      <input type="text" onBlur={patikrinimas} />
      <p>{pranesimas}</p>
    </div>
  );
};

export default Validacija;
