// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
  const kursai = [
    {
      pavadinimas: "React kursai",
      trukme: "2 savaitės",
      kaina: 200,
    },
    {
      pavadinimas: "JavaScript kursai",
      trukme: "3 savaitės",
      kaina: 250,
    },
    {
      pavadinimas: "CSS kursai",
      trukme: "1 savaitė",
      kaina: 150,
    },
  ];
  return (
    <div>
      <h1>Mokymai</h1>
      <div className="kursai">
        {kursai.map((kursas) => (
          <div className="kursas">
            <h3>{kursas.pavadinimas}</h3>
            <p>Trukmė: {kursas.trukme}</p>
            <p>Kaina: {kursas.kaina} EUR</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Komp9;
