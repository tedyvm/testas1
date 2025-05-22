import { useRef, useState } from "react";

const Komp2 = () => {
  const [pirmasZodis, setPirmasZodis] = useState("");
  const [antrasZodis, setAntrasZodis] = useState("");
  const pirmasZodisRef = useRef();
  const antrasZodisRef = useRef();
  const ivesti = () => {
    setPirmasZodis(pirmasZodisRef.current.value);
    setAntrasZodis(antrasZodisRef.current.value);
  };
  const daugiauA = () => {
    pirmasZodis.split("").filter((zodis) => zodis === "a").length;
    antrasZodis.split("").filter((zodis) => zodis === "a").length;
    if (pirmasZodis.split("").filter((zodis) => zodis === "a").length > antrasZodis.split("").filter((zodis) => zodis === "a").length) {
      return `${pirmasZodis} turi daugiau a`;
    }
    if (pirmasZodis.split("").filter((zodis) => zodis === "a").length < antrasZodis.split("").filter((zodis) => zodis === "a").length) {
      return `${antrasZodis} turi daugiau a`;
    }
    if (pirmasZodis.split("").filter((zodis) => zodis === "a").length === antrasZodis.split("").filter((zodis) => zodis === "a").length) {
      return `${pirmasZodis} ir ${antrasZodis} turi po lygiai a`;
    }
  };

  return (
    <div>
      <h2>Lyginti zodzius</h2>
      <div>
        <label htmlFor="pirmasZodis">Pirmas Zodis: </label>
        <input type="text" id="pirmasZodis" ref={pirmasZodisRef} />
      </div>
      <div>
        <label htmlFor="antrasZodis">Antras Zodis: </label>
        <input type="text" id="antrasZodis" ref={antrasZodisRef} />
      </div>
      <div>
        <button onClick={ivesti}>Ivesti</button>
      </div>
      {pirmasZodis && antrasZodis && (
        <>
          <div>
            <p>
              Ivesti zodziai {pirmasZodis}, {antrasZodis}
            </p>
            <p>{daugiauA()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Komp2;
