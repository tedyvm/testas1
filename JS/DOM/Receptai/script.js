let receptai = [
  {
    pav: "Vistiena su salotomis",
    foto: "f1.jpeg",
    aprasymas: "Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.",
    miltai: 500,
    vistiena: 2,
    cukrus: 20,
  },
  {
    pav: "Tortas su melynem",
    foto: "f2.jpeg",
    aprasymas: "Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.",
    miltai: 1000,
    melynes: 500,
    cukrus: 50,
  },
  {
    pav: "Makaronai su mesa",
    foto: "f3.jpeg",
    aprasymas: "Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.",
    makaronai: 1500,
    mesa: 500,
    druska: 15,
  },
];

const rangeInput = document.getElementById("porcijos");
const rangeValue = document.getElementById("kiekis");

// Funkcija, kuri atnaujina span reikšmę
rangeInput.addEventListener("input", function () {
  rangeValue.textContent = rangeInput.value;
});

// Pasirenkame konteinerį, į kurį bus pridedamos kortelės
let container = document.getElementById("korteles-container");

// Pereiname per korteles masyvą ir sukuriame korteles
receptai.forEach(function (kortele, index) {
  // Sukuriame pagrindinį div su klasėmis
  let div = document.createElement("div");
  div.classList.add("col-12", "col-sm-6", "col-lg-4");

  // Sukuriame kortelės struktūrą pagal šabloną
  div.innerHTML = `
    <div class="card d-flex" id="${index}">
      <img class="pazymeta" src="V.svg" alt="" />
      <img src="${kortele.foto}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h4 class="card-title">${kortele.pav}</h4>
        <p class="card-text">${kortele.aprasymas}</p>
      </div>
    </div>
  `;

  // Pridedame kortelę į konteinerį
  container.appendChild(div);
});

let pasirinktas;
document.querySelectorAll(".card").forEach((div) => {
  div.addEventListener("click", function (event) {
    let clickedDiv = event.target.closest(".card"); // Randame artimiausią .card elementą
    let clickedId = clickedDiv ? clickedDiv.id : "nerasta"; // Patikriname ar rastas ID

    // Paslepiame visų kortelių ikoną
    document.querySelectorAll("img.pazymeta").forEach((img) => (img.style.display = "none"));

    // Parodome tik paspausto div'ą ikonos
    let icon = clickedDiv.querySelector("img.pazymeta");
    if (icon) icon.style.display = "block";

    calc(clickedId);
    Ingredientai(clickedId);
    console.log("Paspaustas div ID:", clickedId); // Spausdina ID į konsolę
  });
});

function calc(clickedId) {
  let slider = document.getElementById("porcijos");
  slider.addEventListener("input", function () {
    let kiekis = slider.value;
    console.log("Slankiklio reikšmė:", kiekis);
    Ingredientai(clickedId);
  });
}

function Ingredientai(clickedId) {
  // Patikriname, ar masyvas ir atitinkamas objektas egzistuoja
  if (receptai[clickedId]) {
    // Pakeičiamas turinys elemente su klase ".ingr"
    let recipe = receptai[clickedId];
    let ingrContent = "";

    // Įtraukiame ingredientus į tekstą
    for (let ingredient in recipe) {
      if (ingredient !== "pav" && ingredient !== "foto" && ingredient !== "aprasymas") {
        // Pirmą raidę paverčiame į didžiąją
        let kiekis = document.querySelector("#porcijos").value;
        console.log(kiekis);
        let capitalizedIngredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        ingrContent += `${capitalizedIngredient}: ${recipe[ingredient] * kiekis}<br>`;
      }
    }

    // Atvaizduojame recepto pavadinimą ir ingredientus
    document.querySelector(".ingr").innerHTML = ingrContent;
    console.log(receptai[clickedId]);
  } else {
    document.querySelector(".ingr").innerHTML = "Receptas nerastas";
  }
}
