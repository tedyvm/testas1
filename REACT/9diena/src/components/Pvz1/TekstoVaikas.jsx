const TekstoVaikas = (props) => {
  const patikrinimas = (fraze) => {
      if (fraze && fraze.split("").filter((r) => r == "a").length > 0) {
        const count = fraze.split("").filter((r) => r == "a").length;
      return `Tekste yra "a" raidžių ${count}`;
    } else {
      return `Tekste nėra "a" raidžių`;
    }
  };
  return (
    <div>
      <h4>Gautas tekstas is tevinio elemento: {props.tekstas}</h4>
      <h5>Teksto ilgis: {props.tekstas ? props.tekstas.length : ""}</h5> // Ternary operator
      <h5>Teksto ilgis: {props?.tekstas?.length}</h5> // Optional chaining
      <p>{patikrinimas(props.tekstas)}</p>
    </div>
  );
};

export default TekstoVaikas;
