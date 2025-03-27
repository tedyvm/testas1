const kortos1 = ["images/1.jpg", "images/2.webp", "images/3.webp", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
const kortos = [...kortos1, ...kortos1];
function sumaisomKortas() {
  kortos.sort(() => Math.random() - 0.5);
}
sumaisomKortas();

function isdeliojamKortas() {
  let template = "";
  const kortuKonteineris = document.querySelector(".kortu_konteineris");
  kortos.forEach((korta, i) => {
    let kortosID = korta.split("/")[1].split(".")[0];
    template += `
        <div class="korta">
          <img src="images/0.jpg" id="${i}" alt="Kortos paveikslėlis" onclick="paspaude('${korta}', ${i})">
        </div>
      `;
  });
  kortuKonteineris.innerHTML = template;
}

isdeliojamKortas();

let atversta = 0;
let pirmaKorta = "";
let pirmaKortaID = "";
let antraKorta = "";
let antraKortaID = "";
let rezultatas = 0;
let uzraktas = false;

function paspaude(korta, id) {
  if (uzraktas) return;

  document.getElementById(id).src = korta;

  if (atversta === 0) {
    // Pirma korta
    pirmaKorta = korta;
    pirmaKortaID = id;
    atversta = 1;
  } else {
    // Antra korta
    antraKorta = korta;
    antraKortaID = id;
    atversta = 0;
    uzraktas = true;

    if (pirmaKorta === antraKorta && pirmaKortaID !== antraKortaID) {
        alert("Atspejai!");
        document.getElementById(pirmaKortaID).style.display = "none";
        document.getElementById(antraKortaID).style.display = "none";
        rezultatas++;
        document.querySelector(".rezultatas").textContent = rezultatas;
        uzraktas = false;
    } else {setTimeout(() => {uzverstiKortas(); uzraktas = false;}, 1000);
    }
  }
}

function uzverstiKortas() {
  document.getElementById(pirmaKortaID).src = "images/0.jpg";
  document.getElementById(antraKortaID).src = "images/0.jpg";
}
