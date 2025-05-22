const Suma = (props) => {
  const pirkti = () => {
    props.dataReturn(true);
  };
  return (
    <>
      <h2>Galutine kaina: {props.data1} €</h2>
      <button onClick={pirkti}>Pirkti</button>
    </>
  );
};

export default Suma;
