import { useRef, useState } from "react";

const Komp7 = () => {
  const [prekes, setPrekes] = useState([]);
  const [isfiltruotos, setIsfiltruotos] = useState([]);
  const formRef = useRef();

  const funkcija = (e) => {
    e.preventDefault();
    const naujaPreke = {
      pavadinimas: formRef.current["pavadinimas"].value,
      kaina: Number(formRef.current["kaina"].value),
      kiekis: Number(formRef.current["kiekis"].value),
    };

    const kiekNetusciuLauku = Object.values(naujaPreke).filter((value) => value.length > 0).length;
console.log(kiekNetusciuLauku);
    if (kiekNetusciuLauku == Object.values(naujaPreke).length) {
      setPrekes((prev) => [naujaPreke, ...prev]);
      setIsfiltruotos([]); // kad neberodytų seno filtro
      formRef.current.reset();
    }
  };

  const maziauNei5 = () => {
    const filtruoti = prekes.filter((preke) => preke.kiekis < 5);
    setIsfiltruotos(filtruoti);
  };
    const isvalyti = () => {
    setPrekes([]);
    setIsfiltruotos([]);
  }
  return (
    <div>
      <h3>Prekės</h3>
      <form onSubmit={funkcija} ref={formRef}>
        <div>
          <label>Pavadinimas</label>
          <input type="text" name="pavadinimas" />
        </div>
        <div>
          <label>Kaina</label>
          <input type="number" name="kaina" />
        </div>
        <div>
          <label>Kiekis</label>
          <input type="number" name="kiekis" />
        </div>
        <button type="submit">Įvesti</button>
      </form>

      {prekes.length === 0 && <p>Nėra prekių</p>}

      {prekes.length > 0 && (
        <>
          <h4>Visos prekės:</h4>
          <div className="prekes">
            {prekes.map((preke, index) => (
              <div key={index} className="preke">
                <h4>{preke.pavadinimas}</h4>
                <h5>{preke.kaina} €</h5>
                <h6>{preke.kiekis} vnt.</h6>
              </div>
            ))}
          </div>

          <button onClick={isvalyti}>Išvalyti</button>
          <button onClick={maziauNei5}>Rodyti mažus likučius</button>
        </>
      )}

      {isfiltruotos.length > 0 ? (
        <>
          <h4>Prekės, kurių likutis mažesnis nei 5:</h4>
          <div className="prekes">
            {isfiltruotos.map((preke, index) => (
              <div key={index} className="preke">
                <h4>{preke.pavadinimas}</h4>
                <h5>{preke.kaina} €</h5>
                <h6>{preke.kiekis} vnt.</h6>
              </div>
            ))}
          </div>
        </>
      ) : isfiltruotos.length === 0 && prekes.length > 0 ? (
        <p>Prekių su mažu likučiu nėra</p>
      ) : null}
    </div>
  );
};

export default Komp7;
