const Komp7 = () => {
  const prekes = [
    { id: 1, pavadinimas: "Pienas", kaina: 1.55 },
    { id: 2, pavadinimas: "Duona", kaina: 0.82 },
    { id: 3, pavadinimas: "Sviestas", kaina: 2.00 },
    { id: 4, pavadinimas: "Kava", kaina: 3.00 },
    { id: 5, pavadinimas: "Cukrus", kaina: 0.59 },
  ];
  return (
    <div>
      <h1>Komp7</h1>
      <div className="prekiu-sarasas">
        {prekes.length > 0 ? (
          prekes.map((preke) => (
            <div className="prekes-blokas" key={preke.id}>
              <h3>{preke.pavadinimas}</h3>
              <p>Kaina: {preke.kaina} EUR</p>
            </div>
          ))
        ) : (
          <p>Prekių nėra</p>
        )}
      </div>
    </div>
  );
};

export default Komp7;
