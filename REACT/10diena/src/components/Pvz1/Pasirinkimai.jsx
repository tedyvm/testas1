import { useState } from "react";
import Mygtukas from "./Mygtukas";

const Pasirinkimai = () => {
  let miestai = ["Vilnius", "Kaunas", "Klaipeda"];
    const [pasirinktas, setPasirinktas] = useState();
    const pagaunamReiksme = (reiksme) => {
      setPasirinktas(reiksme);
    };
  return (
    <div>
      <h2>Pasirinkite miesta</h2>
      <div>
        {miestai.map((miestas) => (
          <>
            <Mygtukas miestas={miestas} griztaReiksme={pagaunamReiksme} />
          </>
        ))}
      </div>
      <div>
        <h3>Pasirinktas miestas: {pasirinktas}</h3>
      </div>
    </div>
  );
};

export default Pasirinkimai;
