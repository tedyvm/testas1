async function gauti() {
    const atsakymas = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },  
    });
  
    if (atsakymas.status === 200) {
      return await atsakymas.json();

    } else {
      throw "Įvyko klaida";
    }
}



function gautiJuokeli() {
    gauti().then((data) => {
    console.log(data);
    document.querySelector("body").innerHTML += `<p>${data.joke}</p>`;
  }).catch((error) => {
    console.error(error);
    document.querySelector("body").innerHTML += `<p>Klaida: ${error}</p>`;
  });
}
  
document.querySelector('button').addEventListener('click', gautiJuokeli);  
  