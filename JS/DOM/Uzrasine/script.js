let uzrasai = [];

function sukurti() {
  let uzrasas = document.getElementById("langelis").value;
  if (uzrasas !== "") {
    uzrasai.push(uzrasas);
    console.log(uzrasai);
    document.getElementById("langelis").value = "";
  } else {
    alert("Irasykite teksta");
  }
  atnaujinti();
}

function istrinti(indeksas) {
  if (confirm("ar tikrai?")) {
    uzrasai.splice(indeksas, 1);
    console.log(indeksas);
    atnaujinti();
  }
}

function atnaujinti() {
  document.querySelector(".lapeliai").innerHTML = ""; // Išvalome esamą turinį
  uzrasai.forEach((uzrasas, indeksas) => {
    document.querySelector(".lapeliai").innerHTML += `
    <div class="lapelis"
            <p>${uzrasas}</p>
            <button onclick="istrinti(${indeksas})">Ištrinti</button>
            </div>
          `;
  });
}
