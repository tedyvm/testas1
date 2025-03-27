let pazymiai = [];

function sukurti() {
  let pamoka = document.querySelector("#pamoka").value;
  let pazymys = parseFloat(document.querySelector("#pazymys").value);
  if (pamoka === "" || isNaN(pazymys)) {
    alert("uzpildykite visus laukus");
  } else {
    if (pazymys < 1 || pazymys > 10) {
      alert("iveskite teisinga pazymi");
    } else {
      if (pazymiai.length === 0) {
        document.querySelector(".pazymiai").innerHTML = "";
        document.querySelector(".pazymiai").innerHTML = `
        <table class="pazymiai-table">
        <tr>
            <td><b>Pamoka</b></td>
            <td><b>Pazymys</b></td>
        </tr></table>
    `;
      }

      let irasas = {
        pamoka: pamoka,
        pazymys: pazymys,
      };
      pazymiai.push(irasas);

      // Įtraukiame naują įrašą į lentelę
      document.querySelector(".pazymiai-table").innerHTML += `
        <tr>
            <td>${pamoka}</td>
            <td>${pazymys}</td>
        </tr>
    `;

      // Apskaičiuojame vidurkį ir didžiausią pažymį
      let suma = 0;
      let did = pazymiai[0].pazymys;

      pazymiai.forEach((element) => {
        suma += element.pazymys;
        if (element.pazymys > did) {
          did = element.pazymys;
        }
      });

      let vidurkis = suma / pazymiai.length;

      // Atvaizduojame rezultatus
      document.querySelector(".rezultatai").innerHTML = `
        <b>Vidurkis:</b> ${vidurkis.toFixed(2)}<br>
        <b>Didžiausias pažymys:</b> ${did}
    `;

      // Išvalome įvesties laukus
      document.querySelector("#pamoka").value = "";
      document.querySelector("#pazymys").value = "";
    }
  }
}
