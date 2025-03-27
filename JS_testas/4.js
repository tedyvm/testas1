document.getElementById("mygtukas").addEventListener("click", function () {
    console.log("Mygtukas paspaustas!");
    const amzius = document.getElementById("amzius").value;
    const amziusD = amzius * 365;
    const amziusH = amziusD * 24;
    const amziusM = amziusH * 60;
    const amziusS = amziusM * 60;
    console.log(amziusD);
    document.querySelector(".atsakymas").innerHTML = `
    <h1>Jūsų amžius: ${amzius} metų</h1>
    <h2>Jūsų amžius dienomis: ${amziusD} dienų</h2>
    <h2>Jūsų amžius valandomis: ${amziusH} valandų</h2>
    <h2>Jūsų amžius minutėmis: ${amziusM} minučių</h2>
    <h2>Jūsų amžius sekundėmis: ${amziusS} sekundžių</h2>
    `;
  });
  