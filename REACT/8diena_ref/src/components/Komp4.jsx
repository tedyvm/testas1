import { useRef, useState } from "react";

const Komp4 = () => {
  const [automobiliai, setAutomobiliai] = useState([]);
  const formRef = useRef();

  const funkcija = (e) => {
    e.preventDefault();
    console.log(formRef.current["marke"].value);
    const naujasAutomobilis = {
      marke: formRef.current["marke"].value,
      modelis: formRef.current["modelis"].value,
      metai: formRef.current["metai"].value,
    };
    const kiekNetusciuLauku = Object.values(naujasAutomobilis).filter((value) => value.length > 0).length;
    if (kiekNetusciuLauku == Object.values(naujasAutomobilis).length) {
      setAutomobiliai((prev) => [...prev, naujasAutomobilis]);
      formRef.current["marke"].value = "";
      formRef.current["modelis"].value = "";
      formRef.current["metai"].value = "";
    }
  };
  const naujausiasAuto = () => {
    let naujausiasAutomobilis = automobiliai[0];
    for (const auto of automobiliai) {
      if (auto.metai > naujausiasAutomobilis.metai) {
        naujausiasAutomobilis = auto;
      }
    }
    return `${naujausiasAutomobilis.marke} ${naujausiasAutomobilis.modelis} (${naujausiasAutomobilis.metai})`;
  };

  return (
    <div>
      <h2>Automobiliai</h2>
      <form onSubmit={funkcija} ref={formRef}>
        <div>
          <label htmlFor="">Marke</label>
          <input type="text" name="marke" />
        </div>
        <div>
          <label htmlFor="">Modelis</label>
          <input type="text" name="modelis" />
        </div>
        <div>
          <label htmlFor="">Metai</label>
          <input type="number" name="metai" min={1900} max={2025} />
        </div>
        <button type="submit">Ivesti</button>
      </form>
      {automobiliai.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>Marke</th>
                <th>Modelis</th>
                <th>Metai</th>
              </tr>
            </thead>
            <tbody>
              {automobiliai.map((automobilis, index) => {
                return (
                  <tr key={index}>
                    <td>{automobilis.marke}</td>
                    <td>{automobilis.modelis}</td>
                    <td>{automobilis.metai}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={() => setAutomobiliai([])}>Isvalyti</button>
          <p>Naujausias automobilis {naujausiasAuto()}</p>
        </>
      )}
    </div>
  );
};

export default Komp4;
