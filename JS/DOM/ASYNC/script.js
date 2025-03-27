// const getData = async (url) => {
//   const response = await fetch(url);
//   if (response.status === 200) {
//     return response.json();
//   } else {
//     throw "Ivyko klaida";
//   }
// };

// getData("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const FunkcijaPoUzlaikymo = (vykdomaFunkcija) => {
//   setTimeout(vykdomaFunkcija, 2000);
// };

// FunkcijaPoUzlaikymo(() => {
//   console.log("Ivykdoma funkcija po ");
// });

//3. uzdtuois

let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Funkcija1 = (masyvas, callback) => {
  masyvas.forEach((element) => {
    callback(element);
  });
};

callback = (element) => {
  if (element % 2 === 0) {
    console.log(`${element} yra lyginis`);
  }
};

Funkcija1(skaiciai, callback);

//4. uzduotis

let masyvas4 = ["vienas", "du", "trys", "keturi", "penki", "šeši", "septyni", "aštuoni", "devyni"];

Funkcija4 = (masyvas, callback4) => {
  masyvas.forEach((element) => {
    console.log(`zodzio ${element} ilgis yra ${callback4(element)} simboliai`);
  });
};
callback4 = (element) => {
  return element.length;
};
Funkcija4(masyvas4, callback4);

//5. uzduotis

let masyvas5 = [
  { vardas: "Jonas", pavarde: "Jonaitis", amzius: 30 },
  { vardas: "Petras", pavarde: "Petraitis", amzius: 25 },
  { vardas: "Antanas", pavarde: "Antanaitis", amzius: 20 },
  { vardas: "Juozas", pavarde: "Juozaitis", amzius: 35 },
  { vardas: "Kazys", pavarde: "Kazaitis", amzius: 40 },
];
let naujasMasyvas5 = [];
Funkcija5 = (masyvas, callback) => {
  masyvas.forEach((element) => {
    callback(element);
  });
};

callback5 = (i) => {
  let naujasObjektas = {
    vardas: i.vardas,
    amzius: i.amzius,
  };
  naujasMasyvas5.push(naujasObjektas);
};
console.log(masyvas5);
Funkcija5(masyvas5, callback5);
console.log(naujasMasyvas5);

//6. uzduotis

let isUserLogedIn = true;

Funkcija6 = (isUserLogedIn) => {
  return new Promise((resolve, reject) => {
    if (isUserLogedIn) {
      resolve("Vartotojas prisijunges");
    } else {
      reject("Vartotojas neprisijunges");
    }
  });
};

Funkcija6(isUserLogedIn)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

//7. uzduotis

async function Funkcija7(age) {
  if (typeof age !== "number") {
    throw "Klaida, iveskite skaiciu";
  }
  if (age > 18) {
    return "Vairuotojas gali laikyti egzamina";
  } else {
    throw new Error("Vairuotojas negali laikyti egzamino");
  }
}

Funkcija7(12)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
