import Darbuotojas from "./Darbuotojas";

const Imone = () => {
    let darbuotojas = {
        vardas: "Tomas",
        pavarde: "Tomauskas",
        amzius: 20,
        pareigos: "programuotojas",
        atlyginimas: 2000,
        pazymiai: [10, 8, 9]
    }
    let darbuotojas2 = {
        vardas: "Petras",
        pavarde: "Petrauskas",
        amzius: 25,
        pareigos: "dizaineris",
        atlyginimas: 2500,
        pazymiai: [10, 8, 9]
    }
  return (
    <div>
          <h2>Imone</h2>
          <Darbuotojas darbuotojas={darbuotojas} />
          <Darbuotojas darbuotojas={darbuotojas2} />
    </div>
  );
};

export default Imone;
