const AtvirkstinisTekstas = () => {
    const apversti = () => {
        const tekstas = document.getElementById("tekstas").value;
        const apverstas = tekstas.split("").reverse().join("");
        console.log(apverstas);
  }
    return (
    <div>
          <h2>AtvirkstinisTekstas</h2>
          <input type="text" id="tekstas" onChange={apversti}/>
    </div>
  );
};

export default AtvirkstinisTekstas;
