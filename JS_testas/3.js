document.getElementById("mygtukas").addEventListener("click", function () {
  console.log("Mygtukas paspaustas!");
  const ugis = document.getElementById("ugis").value;
  const svoris = document.getElementById("svoris").value;
  const kmi = svoris / (((ugis / 100) * ugis) / 100);
  let isvada = "";
  console.log(kmi);
  switch (true) {
    case kmi < 18.5:
      isvada = "Svoris per mazas";
      break;
    case kmi >= 18.5 && kmi <= 24.9:
      isvada = "Svoris normalus";
      break;
    case kmi >= 25:
      isvada = "nutukimas";
      break;
    default:
  }
  console.log("Klaida");
  document.querySelector(".atsakymas").innerHTML = `
    <h1>Jūsų KMI: ${kmi.toFixed(2)}</h1>
    <h2>${isvada}</h2>
    `;
});
