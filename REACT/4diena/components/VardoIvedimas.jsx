const VardoIvedimas = () => {
  let tekstas = "";
  const irasas = (event) => {
    tekstas = event.target.value;
    if (tekstas.length > 0) {
      tekstas = "Labas " + tekstas;
      document.getElementById("text").innerHTML = tekstas;
    } else {
      tekstas = "Iveskite varda";
    }
  };
  const istrinti = () => {
    tekstas = "";
    document.getElementById("text").innerHTML = tekstas;
    document.getElementById("inputas").value = tekstas;
  };
  return (
    <div>
      <h2>VardoIvedimas</h2>
      <input type="text" onInput={irasas} id="inputas" />
      <p id="text"></p>
      <button onClick={istrinti}>Istrinti</button>
    </div>
  );
};

export default VardoIvedimas;
