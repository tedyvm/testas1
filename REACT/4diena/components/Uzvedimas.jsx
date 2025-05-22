function Uzvedimas() {
    const alertas = () => {
        document.getElementById("btn-1").innerHTML = "Pele uzvesta";
        document.getElementById("btn-1").style.backgroundColor = "red";
    }
    const isnyksta = () => {
        document.getElementById("btn-1").innerHTML = "mygtukas";
        document.getElementById("btn-1").style.backgroundColor = "white";
    }
    return (
    <div>
          <h2>Uzvedimas</h2>
          <button id="btn-1" onMouseEnter={alertas} onMouseLeave={isnyksta}>mygtukas</button>
    </div>
  );
}

export default Uzvedimas;
