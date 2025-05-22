const Darbuotojas = ({ darbuotojas }) => {
  return (
    <div>
      <h3>
        {darbuotojas.vardas} {darbuotojas.pavarde}
          </h3>
          <p>
        Amžius: {darbuotojas.amzius} <br />
        Pareigos: {darbuotojas.pareigos} <br />
        Atlyginimas: {darbuotojas.atlyginimas} <br />
        Pazymiai: {darbuotojas.pazymiai.join(", ")} <br />
        Vidurkis: {darbuotojas.pazymiai.reduce((a, b) => a + b, 0) / darbuotojas.pazymiai.length} <br />
          </p>
    </div>
  );
};

export default Darbuotojas;
