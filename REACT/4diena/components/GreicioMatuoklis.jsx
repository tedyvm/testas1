import { useState } from "react";

const GreicioMatuoklis = () => {
  const [greitis, setGreitis] = useState(0);
    const patikrinimas = () => {
        if (greitis === 0) {
            return "Stoviu vietoje";
          } else if (greitis > 0 && greitis < 20) {
            return "Lėtas važiavimas";
          } else if (greitis >= 20 && greitis < 40) {
            return "Vidutinis važiavimas";
          } else if (greitis >= 40 && greitis <= 60) {
            return "Greitas važiavimas";
          } else {
            return "Nežinomas greitis";
          }
    }
    return (
    <div>
            <h2>GreicioMatuoklis</h2>
            <button onClick={()=>setGreitis(0)}>0 km/h</button>
            <button onClick={()=>setGreitis(20)}>20 km/h</button>
            <button onClick={()=>setGreitis(40)}>40 km/h</button>
            <button onClick={()=>setGreitis(60)}>60 km/h</button>
            <p>{greitis} km/h</p>
            <p>{patikrinimas()}</p>
    </div>
  );
};

export default GreicioMatuoklis;
