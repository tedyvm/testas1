let darbo_valandos = 8;
let kep_per_val = 5;
let darbuotoju_skaicius = 3;
let kepalo_savikaina = 1.5;
let kepalo_kaina = 3;
let dienos_kiekis = 80;

function pateikti_duomenis() {
  let darbo_valandos = document.getElementById("darbo_valandos").value;
  let kep_per_val = document.getElementById("kep_per_val").value;
  let darbuotoju_skaicius = document.getElementById("darbuotoju_skaicius").value;
  let kepalo_savikaina = document.getElementById("kepalo_savikaina").value;
  let kepalo_kaina = document.getElementById("kepalo_kaina").value;
  let dienos_kiekis = document.getElementById("dienos_kiekis").value;

  let kep_per_diena = darbo_valandos * kep_per_val * darbuotoju_skaicius;
  let savikaina = kepalo_savikaina * kep_per_diena;
  let pajamos = kep_per_diena >= dienos_kiekis ? kepalo_kaina * kep_per_diena : 0;
  let pelnas = kep_per_diena >= dienos_kiekis ? pajamos - savikaina : 0;

  if (kep_per_diena >= dienos_kiekis) {
    console.log(`Kepykla spes ivykdyti uzsakyma`);
    console.log(`Pajamos: ${pajamos} Eur`);
    console.log(`Pelnas: ${pelnas} Eur`);
    uzsakymo_bukle.style.color = "green";
    document.getElementById("uzsakymo_bukle").innerHTML = `Kepykla spes ivykdyti uzsakyma`;
    document.getElementById("pajamos").innerHTML = `Pajamos: ${pajamos} Eur`;
    document.getElementById("pelnas").innerHTML = `Pelnas: ${pelnas} Eur`;
  } else {
    console.log(`Kepykla nespes ivykdyti uzsakymo, iki uzsakymo ivykdymo truksta ${dienos_kiekis - kep_per_diena} kepalu`);
    console.log(`Pajamos: ${pajamos} Eur`);
    console.log(`Pelnas: ${pelnas} Eur`);
    uzsakymo_bukle.style.color = "red";
    document.getElementById("uzsakymo_bukle").innerHTML = `Kepykla nespes ivykdyti uzsakymo, iki uzsakymo ivykdymo truksta ${
      dienos_kiekis - kep_per_diena
    } kepalu`;
    document.getElementById("pajamos").innerHTML = `Pajamos: ${pajamos} Eur`;
    document.getElementById("pelnas").innerHTML = `Pelnas: ${pelnas} Eur`;
  }
}
