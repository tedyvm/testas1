let keliones = [
  {
    kryptis: "Ispanija",
    aprasymas:
      "Ispanija - Europos šalis, turinti įvairių pramogų galimybių. Čia galima mėgautis saulės voniomis, lankyti kultūrinius paminklus, mėgautis skaniu maistu ir t.t.",
    kaina: "500",
    trukme: 7,
    likVietu: 20,
    data: "2021-01-01",
  },
  {
    kryptis: "Graikija",
    aprasymas:
      "Graikija - Europos šalis, turinti įvairių pramogų galimybių. Čia galima mėgautis saulės voniomis, lankyti kultūrinius paminklus, mėgautis skaniu maistu ir t.t",
    kaina: "400",
    trukme: 5,
    likVietu: 25,
    data: "2021-11-01",
  },
  {
    kryptis: "Italija",
    aprasymas:
      "Italija - Europos šalis, turinti įvairių pramogų galimybių. Čia galima mėgautis saulės voniomis, lankyti kultūrinius paminklus, mėgautis skaniu maistu ir t.t.",
    kaina: "600",
    trukme: 8,
    likVietu: 10,
    data: "2021-12-01",
  },
  {
    kryptis: "Vokietija",
    aprasymas:
      "Vokietija - Europos šalis, turinti įvairių pramogų galimybių. Čia galima mėgautis saulės voniomis, lankyti kultūrinius paminklus, mėgautis skaniu maistu ir t.t.",
    kaina: "550",
    trukme: 9,
    likVietu: 5,
    data: "2021-05-01",
  },
];
pasirinkimas = 1;
isdelioti();
document.getElementById("rikiavimas").addEventListener("change", function (event) {
  pasirinkimas = event.target.value;
  console.log(pasirinkimas);
  isdelioti(pasirinkimas);
});

function isdelioti(pasirinkimas) {
  switch (pasirinkimas) {
    case "1":
      keliones.sort((a, b) => a.kaina - b.kaina);
      break;
    case "2":
      keliones.sort((a, b) => b.kaina - a.kaina);
      break;
    case "3":
      keliones.sort((a, b) => a.trukme - b.trukme);
      break;
    case "4":
      keliones.sort((a, b) => b.trukme - a.trukme);
      break;
  }
  console.log(keliones);
  document.querySelector(".korteles").innerHTML = "";
  keliones.forEach((kelione) => {
      document.querySelector(".korteles").innerHTML += `
    <div class="kortele">
        <b>${kelione.kryptis}</b><br>
        <p>${kelione.aprasymas}
        </p>
        Kaina: ${kelione.kaina} Eur<br><br>
        Trukme: ${kelione.trukme} dienos <br><br>
        Likusiu vietu skaicius: ${kelione.likVietu}<br><br>
        Keliones data: ${kelione.data}
        </div>`;
  });
}
