// let pasirinkimas = 4;

// switch (pasirinkimas) {
//   case 1:
//     console.log(`Vartotojas laimejo vandens`);
//     break;
//   case 2:
//     console.log(`Vartotojas laimejo limonada`);
//     break;
//   case 3:
//     console.log(`Vartotojas laimejo arbata`);
//     break;
//   case 4:
//     console.log(`Vartotojas laimejo kava`);
//     break;
//   default:
//     console.log(`KLAIDA: tokio pasirinkimo nera`);
//     break;
// }

// let a = 3;
// let b = 3;
// let c = 6;
// switch (a) {
//   case 1:
//     console.log(a + b + c);
//     break;
//   case 2:
//     console.log(b * c);
//     break;
//   case 3:
//     console.log(a ** 2);
//     break;
//   default:
//     console.log(`Klaida`);
//     break;
// }

// let klaidosKodas = 300;

// switch (klaidosKodas) {
//   case 200:
//   case 300:
//     console.log(`${klaidosKodas} Puslapis rastas`);
//     break;
//   case 404:
//     console.log(`${klaidosKodas} Puslapis nerastas`);
//         break;
//   case 500:
//     console.log(`${klaidosKodas} Serverio klaida`);
//     break;
//   default:
//     console.log(`${klaidosKodas} Klaida`);
//     break;
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 0; i <= 15; i+=2) {
//   console.log(i);
// }
// for (let i = 0; i <= 20; i+=3) {
//     console.log(`[${i}]`);
// }
// for (let i = 1; i <= 20; i++) {
//     if (i % 4 == 0 ) {
//         console.log(i);
//     }
// }

// let pradzia = 0;
// let pabaiga = 10;
// if (pradzia < pabaiga) {
//   for (let i = pradzia; i <= pabaiga; i++) {
//     console.log(`${i} ${i ** 2}`);
//   }
// }
// pradzia = 0;
// pabaiga = 10;
// if (pradzia < pabaiga) {
//   for (let i = pradzia; i <= pabaiga; i++) {
//     if (i % 2 !== 0 || i % 8 == 0) {
//       console.log(i);
//     }
//   }
// }

// let skaicius1 = 4;
// let skaicius2 = 25;
// let rezultatas = 0;
// for (let i = 1; i <= skaicius2; i++) {
//   rezultatas += skaicius1;
// }
// console.log(rezultatas);

/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let vardas = "Vardenis";
let pavarde = "Pavardenis";
let gimimoMetai = 1990;
let siuMetai = 2021;
console.log(`As esu ${vardas} ${pavarde}. Man yra ${siuMetai - gimimoMetai} metai(-u)`);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let skaicius1 = Math.floor(Math.random() * 5);
let skaicius2 = Math.floor(Math.random() * 5);
console.log(skaicius1, skaicius2);
if (skaicius1 > skaicius2) {
  console.log((skaicius1 / skaicius2).toFixed(2));
} else {
  console.log((skaicius2 / skaicius1).toFixed(2));
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let a = Math.floor(Math.random() * 26);
let b = Math.floor(Math.random() * 26);
let c = Math.floor(Math.random() * 26);
console.log(a, b, c);
if ((a > b && a < c) || (a < b && a > c)) {
  console.log(a);
} else if ((b > a && b < c) || (b < a && b > c)) {
  console.log(b);
} else if ((c > a && c < b) || (c < a && c > b)) {
  console.log(c);
} else {
  console.log(`klaida`);
}

let suma = 0;
for (let i = 0; i <= 100; i++) {
  suma += i;
}
console.log(`8 uzduotis: ${suma}`);

let suma2 = 0;
for (let i = 20; i <= 50; i++) {
  if (i % 2 == 0) {
    suma2 += i;
  }
}
console.log(`9 uzduotis: ${suma2}`);

let suma3 = 0;
for (let i = 30; i <= 60; i++) {
  if (i % 2 !== 0) {
    suma3 += i;
  }
}
console.log(`10 uzduotis: ${suma3}`);

let suma4 = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    suma4 += i;
  }
}
console.log(`11 uzduotis: ${suma4}`);

let skaicius3 = 0;
for (let i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
      console.log(`FizzBuzz`);
    }
  else if (i % 5 == 0) {  
    console.log(`Buzz`);
  }
    else if (i % 3 == 0) {
        console.log(`Fizz`);
    }
    else {
        console.log(i);
    }
}

let a1 = 1;
let b1 = 0;
let c1 = 0;

for (let i = 2; i <= 20; i++) {
    c1 = a1 + b1;
    a1 = b1;
    b1 = c1;
    console.log(c1);
}


/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
