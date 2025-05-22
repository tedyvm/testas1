const Slaptazodis = () => {
  const alertas = (e) => {
    if (e.key === "Enter") {
      alert("Slaptazodis priimtas");
    }
  };
  const ilgis = (e) => {
    const ilgis = e.target.value.length;
    document.getElementById("ilgio").innerHTML = `Slaptazodzio ilgis: ${ilgis}`;
  };
  return (
    <div>
      <h2>Slaptazodis</h2>
      <input type="password" onKeyDown={alertas} onInput={ilgis} />
      <p id="ilgio"></p>
    </div>
  );
};

export default Slaptazodis;
