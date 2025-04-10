const Komp4 = () => {
  const automobilis = {
    marke: "Audi",
    modelis: "A4",
    metai: 2020,
    kaina: 20000,
  };

  return (
    <div>
      <h2>Automobilio skelbimas</h2>
      <p>
        Parduodama {automobilis.marke} {automobilis.modelis}
      </p>
      <p>Pagaminimo metai: {automobilis.metai}</p>
      <p>Kaina: {automobilis.kaina} EUR</p>
      <p>Automobilio amzius: {new Date().getFullYear() - automobilis.metai} metai</p>
    </div>
  );
};

export default Komp4;
