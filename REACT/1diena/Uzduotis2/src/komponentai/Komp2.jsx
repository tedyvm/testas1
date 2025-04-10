const Komp2 = () => {
  let skaiciai = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2>Komp2</h2>
      <p>Masyvas: {skaiciai.join(", ")}</p>
      <p>Trecias indeksas: {skaiciai[3]}</p>
      <p>Paskutinis: {skaiciai[skaiciai.length-1]}</p>
    </div>
  );
};

export default Komp2;
