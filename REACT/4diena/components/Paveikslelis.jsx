const Paveikslelis = () => {
  const uzvesta = () => {
    document.getElementById("atsakymas5").innerHTML = "Nuotrauka pasirinkta";
    document.querySelector("img").style.border = "5px solid red";
  };
  const isejo = () => {
    document.getElementById("atsakymas5").innerHTML = "";
    document.querySelector("img").style.border = "none";
  };
  return (
    <div>
      <h2>Paveikslelis</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png" alt=""
        onMouseLeave={isejo} onMouseEnter={uzvesta} />
      <p id="atsakymas5"></p>
    </div>
  );
};

export default Paveikslelis;
