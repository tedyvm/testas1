// TODO: prijunkite šį komponentą prie App.jsx

const Komp4 = () => {
  let filmas = {
    pavadinimas: "Pulp Fiction",
    rezisierius: "Quentin Tarantino",
    metai: 1994,
  };

  return (
    // TODO: į šio komponento div įstatykite
    // filmo pavadinimą, režisierių ir metus
    <div className="filmai">
      <h1>Filmai</h1>
      <div className="filmas">
        <h4>Filmas: {filmas.pavadinimas}</h4>
        <p>Režisierius: {filmas.rezisierius}</p>
        <p>Metai: {filmas.metai}</p>
      </div>
    </div>
  );
};

export default Komp4;
