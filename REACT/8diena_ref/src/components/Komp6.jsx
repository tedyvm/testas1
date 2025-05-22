import { useRef, useState } from "react";

const Komp6 = () => {
  const [keliones, setKeliones] = useState([]);
  const formRef = useRef();
  const funkcija = (e) => {
    e.preventDefault();
    const naujaKelione = {
      visoKm: formRef.current["visoKm"].value,
      sanaudos: formRef.current["sanaudos"].value,
      kaina: formRef.current["kaina"].value,
      kuro: ((formRef.current["visoKm"].value / 100) * formRef.current["sanaudos"].value).toFixed(2),
      islaidos: ((formRef.current["visoKm"].value / 100) * formRef.current["sanaudos"].value * formRef.current["kaina"].value).toFixed(2),
    };
    const kiekNetusciuLauku = Object.values(naujaKelione).filter((value) => value.length > 0).length;
    if (kiekNetusciuLauku == Object.values(naujaKelione).length) {
      setKeliones((prev) => [...prev, naujaKelione]);
      formRef.current["visoKm"].value = "";
      formRef.current["sanaudos"].value = "";
      formRef.current["kaina"].value = "";
    }
  };

  return (
    <div>
      <h3>Kelione</h3>
      <form onSubmit={funkcija} ref={formRef}>
        <div>
          <label htmlFor="">Is viso nuvaziuota</label>
          <input type="number" name="visoKm" />
        </div>
        <div>
          <label htmlFor="">Automobilio sanaudos l/100km</label>
          <input type="number" name="sanaudos" />
        </div>
        <div>
          <label htmlFor="">Kuro kaina EUR</label>
          <input type="number" name="kaina" />
        </div>
        <button type="submit">Patvirtinti</button>
      </form>
      {keliones.length > 0 && (
        <>
          <table>
            <thead>
                          <tr>
                              <th>Keliones nr.</th>
                <th>Is viso km</th>
                <th>Sanaudos</th>
                <th>Kaina</th>
                <th>Kuro sanaudos</th>
                <th>Islaidos</th>
              </tr>
            </thead>
            <tbody>
              {keliones.map((kelione, index) => (
                  <tr key={index}>
                      <td>{index+1}</td>
                  <td>{kelione.visoKm}</td>
                  <td>{kelione.sanaudos}</td>
                  <td>{kelione.kaina}</td>
                  <td>{kelione.kuro}</td>
                  <td>{kelione.islaidos}</td>
                </tr>
              ))}
                          <tr key={keliones.length}>
                              <td><strong>VISO:</strong></td>
                <td>
                  <strong> {keliones.reduce((acc, kelione) => acc + Number(kelione.visoKm), 0)}</strong>
                </td>
                <td>
                  <strong>{keliones.reduce((acc, kelione) => acc + Number(kelione.sanaudos), 0) / keliones.length}</strong>
                </td>
                <td>
                  <strong>{keliones.reduce((acc, kelione) => acc + Number(kelione.kaina), 0) / keliones.length}</strong>
                </td>
                <td>
                  <strong>{keliones.reduce((acc, kelione) => acc + Number(kelione.kuro), 0).toFixed(2)}</strong>
                </td>
                <td>
                  <strong>{keliones.reduce((acc, kelione) => acc + Number(kelione.islaidos), 0)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Komp6;
