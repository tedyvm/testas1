// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
  const salys = [
    {
      pavadinimas: "Lietuva",
      sostine: "Vilnius",
      gyventojuSk: 2700000,
    },
    {
      pavadinimas: "Latvija",
      sostine: "Ryga",
      gyventojuSk: 1900000,
    },
    {
      pavadinimas: "Estija",
      sostine: "Talinas",
      gyventojuSk: 1300000,
    },
  ];

  return (
    <div>
      <h1>Salys</h1>
      <div className="salys">
        {salys.map((salis) => (
          <div className="salis">
            <h4>{salis.pavadinimas}</h4>
            <p>Sostinė: {salis.sostine}</p>
            <p>Gyventojų skaičius: {salis.gyventojuSk}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Komp8;
