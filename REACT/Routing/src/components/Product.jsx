import { NavLink, useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const prekes = [
    { id: 1, pavadinimas: "Pienas", kaina: 1.5 },
    { id: 2, pavadinimas: "Duona", kaina: 0.8 },
    { id: 3, pavadinimas: "Sviestas", kaina: 2.5 },
  ];
  const preke = prekes.find((preke) => preke.id === parseInt(id));
  return (
    <div>
      {preke ? (
        <div>
          <h2>{preke.pavadinimas}</h2>
                  <p>Kaina: {preke.kaina} EUR</p>
                  <NavLink to={`/products`}>Atgal</NavLink>
        </div>
      ) : (
        <h2>Prekė nerasta</h2>
      )}
    </div>
  );
};

export default Product;
