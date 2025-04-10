const RaidziuFiltras = () => {
    const tikSkaiciai = () => {
        const tekstas = document.getElementById("tekstas").value;
        const tikSkaiciai = tekstas.replace(/[^0-9]/g, "");
        console.log(tikSkaiciai);
    }
    const tikRaides = () => {
        const tekstas = document.getElementById("tekstas").value;
        const tikRaides = tekstas.replace(/[^a-zA-Z]/g, "");
        console.log(tikRaides);
    }
    const viskas = () => {
        const tekstas = document.getElementById("tekstas").value;
        console.log(tekstas);

  }
    return (
    <div>
      <h2>RaidziuFiltras</h2>
      <input type="text" id="tekstas" />
      <label htmlFor=""><input type="radio" onInput={tikSkaiciai} name="pasirinkimas" value="Tik skaiciai" />Tik skaiciai</label>
          <label htmlFor=""><input type="radio" onInput={tikRaides} name="pasirinkimas" value="Tik raides" />Tik raides</label>
            <label htmlFor=""><input type="radio" onInput={viskas} name="pasirinkimas" value="Viskas" />Viskas</label>
    </div>
  );
};

export default RaidziuFiltras;
