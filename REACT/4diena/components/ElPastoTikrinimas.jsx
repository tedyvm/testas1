const ElPastoTikrinimas = () => {
    const patikrinti = (e) => {
        const ivestis = document.getElementById("emailas").value;
        let arTinkamas = false;
        if(ivestis.includes("@") && (ivestis[ivestis.length - 2] === "." || ivestis[ivestis.length - 3] === "."  || ivestis[ivestis.length - 4] === ".")) {
            arTinkamas = true;
        }
        if(arTinkamas) {
            document.getElementById("atsakymas").innerHTML = "El pastas yra tinkamas";
            document.getElementById("atsakymas").style.color = "green";
        } else {
            document.getElementById("atsakymas").innerHTML = "El pastas yra netinkamas";
            document.getElementById("atsakymas").style.color = "red";
        }

    }
    return (
    <div>
          <h2>ElPastoTikrinimas</h2>
            <input id="emailas" type="email" placeholder="Iveskite el pasta" onBlur={patikrinti} />
            <p id="atsakymas"></p>
    </div>
  );
};

export default ElPastoTikrinimas;
