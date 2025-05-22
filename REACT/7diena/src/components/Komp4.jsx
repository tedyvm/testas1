import { useState } from "react";

const Komp4 = () => {
  const minUzsakymas = 15;
  const [kiausiniai, setKiausiniai] = useState(0);
  const busena = () => {
    if (kiausiniai < minUzsakymas) {
      return `Per mazai kiausiniu, ${minUzsakymas - kiausiniai} truksta`;
    } else if (kiausiniai > minUzsakymas) {
      return `Uzsakymas ivykdytas, ${kiausiniai - minUzsakymas} per daug`;
    } else {
      return `Kiausiniu uzsakymas patvirtintas`;
    }
  };
  return (
    <div>
      <h2>Vistos</h2>
      <div>
        <label htmlFor="kiausiniai">Kiek padejo kiausiniu: </label>
        <input type="number" id="kiausiniai" onInput={(e) => setKiausiniai(e.target.valueAsNumber)} />
        <p>{busena()}</p>
      </div>
    </div>
  );
};

export default Komp4;
