import { useState } from "react";
import "./Paketai.css";

const Priedai = (props) => {
  const [pasirinktas, setPasirinktas] = useState([]);
  const [kaina, setKaina] = useState(0);
  let naujaKaina = 0;
  const pasirinkimasFn = (e) => {
    if (pasirinktas.includes(e.name)) {
      setPasirinktas(pasirinktas.filter((item) => item !== e.name));
      naujaKaina = kaina - e.price;
    } else {
      setPasirinktas([...pasirinktas, e.name]);
      naujaKaina = kaina + e.price;
    }
    setKaina(naujaKaina);
    props.dataReturn(naujaKaina);
  };
  return (
    <div>
      <h3>Papildomi priedai</h3>

      {props.data.map((priedas) => {
        const yraPasirinktas = pasirinktas.includes(priedas.name);

        return (
          <div
            className={`paketas priedas ${yraPasirinktas ? "pasirinktas" : ""}`}
            onClick={() => pasirinkimasFn(priedas)}
            key={priedas.name}
          >
            <svg
              style={{ display: yraPasirinktas ? "none" : "block" }}
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5.35168V19.3517H5V5.35168H19ZM22 2.35168H2V22.3517H22V2.35168Z"
                fill="#5E5E5E"
              />
            </svg>
            <svg
              style={{ display: yraPasirinktas ? "block" : "none" }}
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2.35168V22.3517H22V2.35168H2ZM10.5 17.4517L4.90002 11.8517L7 9.75168L10.4 13.1517L16.8 6.75168L18.9 8.85168L10.5 17.4517Z"
                fill="#189AF8"
              />
            </svg>

            <h4>{priedas.name}</h4>
            <p>{priedas.price} €</p>
          </div>
        );
      })}
    </div>
  );
};

export default Priedai;
