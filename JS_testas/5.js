document.getElementById("mygtukas").addEventListener("click", function () {
  console.log("Mygtukas paspaustas!");
  const tempFrez = document.getElementById("tempF").value;
  const tempCrez = document.getElementById("tempC").value;
  if (tempFrez === "" && tempCrez === "") {
    alert("Įveskite temperatūrą!");
    return;
  }
  if (tempFrez !== "") {
    const tempCrez = (tempFrez - 32) * (5 / 9);
    document.querySelector("#tempC").value = tempCrez.toFixed(2);
    return;
  }
  if (tempCrez !== "") {
    const tempFrez = tempCrez * (9 / 5) + 32;
    document.querySelector("#tempF").value = tempFrez.toFixed(2);
    return;
  }
});
document.getElementById("tempF").addEventListener("click", function () {
  isvalyti();
}
);
document.getElementById("tempC").addEventListener("click", function () {
  isvalyti();
}
);
function isvalyti() {
  document.querySelector("#tempF").value = "";
  document.querySelector("#tempC").value = "";
}