document.querySelector(".search").addEventListener("submit", function (e) {
  e.preventDefault(); //kadangi submit mygtukas atnaujina puslapi, kad to išvengti naudojame preventDefault
  const city = document.getElementById("city").value;
  console.log("Miestas:", city);
  if (city) {
    getData(city);
  } else {
    alert("Iveskite miesta");
  }
});

const getPhoto = async (city) => {
  const pixbayKey = "49476688-6374962df10cd2d3fb43d7b79";
  const url = `https://pixabay.com/api/?key=${pixbayKey}&q=${city}`;
  try {
    const response = await axios.get(url);
    // console.log(response.data.hits.length);
    // console.log(response.data.hits[0].largeImageURL);
    const randomIndex = Math.floor(Math.random() * response.data.hits.length);
    // console.log(randomIndex);
    document.querySelector("body").style.backgroundImage = `url("${response.data.hits[randomIndex].largeImageURL}")`;
  } catch (error) {
    console.log(error);
    document.querySelector("body").style.backgroundImage = `url("clouds.jpeg")`;
  }
};

const getData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0aa8679f7f4cfb9af5b36c2935c1a05d`;
  try {
    const response = await axios.get(url);
    const temp = response.data.main;
    const weather = response.data.weather[0];
    const wind = response.data.wind;
    const directions = ["\u2193 ", "\u2199", "\u2190", "\u2196", "\u2191", "\u2197", "\u2192", "\u2198"];
    const index = Math.round((response.data.wind.deg % 360) / 45);
    const name = response.data.name;
    const country = response.data.sys.country;
    const icon = weather.icon;
    getPhoto(name);
    document.querySelector(".oras").innerHTML = `
      <h2>${name}, ${country}</h2>
      <img src="http://openweathermap.org/img/wn/${icon}.png" alt="icon">
      <h1>${weather.description} </h1> 
      <h2>${temp.temp}°C</h2>
      <p>Wind: ${wind.speed}m/s,  <span>${directions[index]}</span></p>`;

    console.log(name);
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        alert("Miestas nerastas");
        document.querySelector(".oras").innerHTML = "";
      }
      console.log(error);
    }
  }
};
