document.getElementById("mygtukas").addEventListener("click", function () {
  console.log("Mygtukas paspaustas!");
  const tempF = document.getElementById("tempF").value;
  const tempC = document.getElementById("tempC").value;
  if (tempF === "" && tempC === "") {
    alert("Įveskite temperatūrą!");
    return;
  }
  if (tempF !== "" && tempC !== "") {
    alert("Įveskite tik vieną temperatūrą!");
    return;
  }
  if (tempF !== "") {
    const tempC = (tempF - 32) * (5 / 9);
    document.querySelector(".atsakymas").innerHTML = `
      <h1>Temperatūra Farenheito laipsniais: ${tempF}°F</h1>
      <h2>Temperatūra Celsijaus laipsniais: ${tempC.toFixed(2)}°C</h2>
      `;
    return;
  }
  if (tempC !== "") {
    const tempF = tempC * (9 / 5) + 32;
    document.querySelector(".atsakymas").innerHTML = `
      <h1>Temperatūra Celsijaus laipsniais: ${tempC}°C</h1>
      <h2>Temperatūra Farenheito laipsniais: ${tempF.toFixed(2)}°F</h2>
      `;
    return;
  }
});
