async function gautiFilma() {
  const atsakymas = await fetch("https://api.tvmaze.com/search/shows?q=madagascar");

  if (atsakymas.status === 200) {
    return atsakymas.json();
  } else {
    throw "Įvyko klaida";
  }
}

gautiFilma()
  .then((data) => {
    data.forEach(element => {
    console.log(data);
    document.getElementById("movie").innerHTML += `
    <img src="${element.show.image.medium}" alt="${element.show.name}">
    <h2>${element.show.name} (${element.show.premiered})</h2>
    <p>Genres: ${element.show.genres}</p>
    <p>${element.show.summary}</p>
    `;});
  })
  .catch((klaida) => console.log(klaida)); // "Įvyko klaida"
