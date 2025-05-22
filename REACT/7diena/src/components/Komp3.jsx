import { useState } from "react";

const Komp3 = () => {
  const [begikas1, setBegikas1] = useState("0");
  const [begikas2, setBegikas2] = useState("0");

  const laikas = () => {
    return Math.abs(Number(begikas1) - Number(begikas2));
  };

  const greitesnis = () => {
    if (Number(begikas1) < Number(begikas2)) {
      return "Begikas 1";
    } else if (Number(begikas1) > Number(begikas2)) {
      return "Begikas 2";
    } else {
      return "Begikai lygus";
    }
  };

  return (
    <div>
      <h2>Begikas</h2>
      <div>
        <label htmlFor="begikas1">Begikas 1: </label>
        <input type="number" id="begikas1" onInput={(e) => setBegikas1(e.target.valueAsNumber)} />
      </div>
      <div>
        <label htmlFor="begikas2">Begikas 2: </label>
        <input type="number" id="begikas2" onInput={(e) => setBegikas2(e.target.valueAsNumber)} />
      </div>
      <p>
        Greitesnis bėgikas: <strong>{greitesnis()}</strong>, skirtumas: <strong>{laikas()}</strong> s
      </p>
    </div>
  );
};

export default Komp3;
