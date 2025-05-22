import Preke from "./Preke";

const Parduotuve = () => {
  return (
    <div>
      <h2>Parduotuve</h2>
      <Preke pavadinimas="Agurkai" kaina="5" kiekis="100" />
      <Preke pavadinimas="obuoliai" kaina="2" kiekis="50" />
      <Preke pavadinimas="kriause" kaina="3" kiekis="20" />
    </div>
  );
};

export default Parduotuve;
