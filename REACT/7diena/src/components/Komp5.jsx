import { useState } from "react";

const Komp5 = () => {
  const [uzsakymai, setUzsakymai] = useState(0);
  const [pirmaKepykla, setPirmaKepykla] = useState(0);
  const [antraKepykla, setAntraKepykla] = useState(0);
  const [treciaKepykla, setTreciaKepykla] = useState(0);

  const atsakymas = () => {
    const bendraProdukcija = pirmaKepykla + antraKepykla + treciaKepykla;
    const uzsakymuSkaicius = uzsakymai;

    if (bendraProdukcija >= uzsakymuSkaicius) {
      return `Visi užsakymai bus iškepti, liks ${bendraProdukcija - uzsakymuSkaicius} kepinių.`;
    } else {
      return `Ne visi užsakymai bus iškepti, trūksta ${uzsakymuSkaicius - bendraProdukcija} kepinių.`;
    }
  };

  return (
    <div>
      <h2>Trys kepyklos</h2>
      <div>
        <label htmlFor="uzsakymai">Užsakymų kiekis: </label>
        <input type="number" id="uzsakymai" onInput={(e) => setUzsakymai(e.target.valueAsNumber)} />
      </div>
      <div>
        <label htmlFor="pirmaKepykla">Pirma kepykla gali iškepti: </label>
        <input type="number" id="pirmaKepykla" onInput={(e) => setPirmaKepykla(e.target.valueAsNumber)} />
      </div>
      <div>
        <label htmlFor="antraKepykla">Antra kepykla gali iškepti: </label>
        <input type="number" id="antraKepykla" onInput={(e) => setAntraKepykla(e.target.valueAsNumber)} />
      </div>
      <div>
        <label htmlFor="treciaKepykla">Trečia kepykla gali iškepti: </label>
        <input type="number" id="treciaKepykla" onInput={(e) => setTreciaKepykla(e.target.valueAsNumber)} />
      </div>
      <p>{atsakymas()}</p>
    </div>
  );
};

export default Komp5;
