/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

let kr1 = Math.floor(Math.random() * 10) + 1;
let kr2 = Math.floor(Math.random() * 10) + 1;
let kr3 = Math.floor(Math.random() * 10) + 1;
console.log(`krastines: ${kr1}, ${kr2}, ${kr3}`);
if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
  console.log(`galima sudaryti trikampi`);
} else {
  console.log(`negalima sudaryti trikampio`);
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let a5 = Math.floor(Math.random() * 3);
let b5 = Math.floor(Math.random() * 3);
let c5 = Math.floor(Math.random() * 3);
let d5 = Math.floor(Math.random() * 3);
console.log(a5, b5, c5, d5);
let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;
if (a5 == 0) {
  nuliai++;
} else if (a5 == 1) {
  vienetai++;
} else {
  dvejetai++;
}
if (b5 == 0) {
  nuliai++;
} else if (b5 == 1) {
  vienetai++;
} else {
  dvejetai++;
}
if (c5 == 0) {
  nuliai++;
} else if (c5 == 1) {
  vienetai++;
} else {
  dvejetai++;
}
if (d5 == 0) {
  nuliai++;
} else if (d5 == 1) {
  vienetai++;
} else {
  dvejetai++;
}
console.log(`nuliai: ${nuliai}, vienetai: ${vienetai}, dvejetai: ${dvejetai}`);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let a6 = Math.floor(Math.random() * 21 - 10);
let b6 = Math.floor(Math.random() * 21 - 10);
let c6 = Math.floor(Math.random() * 21 - 10);

if (a6 < 0) {
  console.log(`[${a6}]`);
} else if (a6 == 0) {
  console.log(`(${a6})`);
} else {
  console.log(`{${a6}}`);
}
if (b6 < 0) {
  console.log(`[${b6}]`);
} else if (b6 == 0) {
  console.log(`(${b6})`);
} else {
  console.log(`{${b6}}`);
}
if (c6 < 0) {
  console.log(`[${c6}]`);
} else if (a6 == 0) {
  console.log(`(${c6})`);
} else {
  console.log(`{${c6}}`);
}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
let nupirkta = Math.floor(Math.random() * 2996 + 5);
let kaina = 1;
let nupirktaUz = nupirkta * kaina;
if (nupirktaUz > 1000 && nupirktaUz <= 2000) {
  kaina = kaina - kaina * 0.03;
  console.log(`nupirkta ${nupirkta} zvakiu po ${kaina}`);
} else if (nupirktaUz > 2000) {
  kaina = kaina - kaina * 0.04;
  console.log(`nupirkta ${nupirkta} zvakiu po ${kaina}`);
} else {
  console.log(`nupirkta ${nupirkta} zvakiu po ${kaina}`);
}
/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

let a8 = Math.floor(Math.random() * 101);
let b8 = Math.floor(Math.random() * 101);
let c8 = Math.floor(Math.random() * 101);
let vid8 = (a8 + b8 + c8) / 3;
console.log(a8, b8, c8);
if (a8 < 10 || a8 > 90) {
  if (b8 < 10 || b8 > 90) {
    console.log(`-a-b`);
    console.log(c8);
  } else if (c8 < 10 || c8 > 90) {
    console.log(`-a-c`);
    console.log(b8);
  } else {
    console.log(`-a`);
    console.log((c8 + b8) / 2);
  }
} else if (b8 < 10 || b8 > 90) {
  if (a8 < 10 || a8 > 90) {
    console.log(c8);
  } else if (c8 < 10 || c8 > 90) {
    console.log(a8);
  } else {
    console.log((c8 + a8) / 2);
  }
} else if (c8 < 10 || c8 > 90) {
  if (b8 < 10 || b8 > 90) {
    console.log(a8);
  } else if (a8 < 10 || a8 > 90) {
    console.log(b8);
  } else {
    console.log((a8 + b8) / 2);
  }
} else {
  console.log(vid8);
}

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
console.log(`+++++++++++++++++`);
let val9 = Math.floor(Math.random() * 25 + 1);
let min9 = Math.floor(Math.random() * 61 + 1);
let sec9 = Math.floor(Math.random() * 61 + 1);
let valP = 0;
let minP = 0;
let secP = 0;
console.log(`${val9}:${min9}:${sec9}`);
let plus = Math.floor(Math.random() * 301);
console.log(plus);
if (plus + sec9 >= 60) {
  min9 = min9 + Math.floor((plus + sec9) / 60);
  sec9 = (plus + sec9) % 60;
  if (min9 >= 60) {
    val9 = val9 + Math.floor(min9 / 60);
    min9 = min9 % 60;
  }
} else {
  sec9 += plus;
}
console.log(`${val9}:${min9}:${sec9}`);

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/



// let a1 = Math.floor(Math.random() * 9000 + 1000);
// let b1 = Math.floor(Math.random() * 9000 + 1000);
// let c1 = Math.floor(Math.random() * 9000 + 1000);
// let d1 = Math.floor(Math.random() * 9000 + 1000);
// let e1 = Math.floor(Math.random() * 9000 + 1000);
// let f1 = Math.floor(Math.random() * 9000 + 1000);
// console.log(a1, b1, c1, d1, e1, f1);
// let sk1 = 0;
// let sk2 = 0;
// let sk3 = 0;
// let sk4 = 0;
// let sk5 = 0;
// let sk6 = 0;

// if (a1 > b1 && a1 > c1 && a1 > d1 && a1 > e1 && a1 > f1) {
//   sk1 = a1;
//   if (b1 > c1 && b1 > d1 && b1 > e1 && b1 > f1) {
//     sk2 = b1;
//     if (c1 > d1 && c1 > e1 && c1 > f1) {
//       sk3 = c1;
//       if (d1 > e1 && d1 > f1) {
//         sk4 = d1;
//         if (e1 > f1) {
//           sk5 = e1;
//           sk6 = f1;
//         } else {
//           sk5 = f1;
//           sk6 = e1;
//         }
//       } else {
//         sk4 = e1;
//         sk5 = d1;
//         sk6 = f1;
//       }
//     } else if (d1 > c1 && d1 > e1 && d1 > f1) {
//       sk3 = d1;
//       if (c1 > e1 && c1 > f1) {
//         sk4 = c1;
//         if (e1 > f1) {
//           sk5 = e1;
//           sk6 = f1;
//         } else {
//           sk5 = f1;
//           sk6 = e1;
//         }
//       }
//     } else if (e1 > c1 && e1 > d1 && e1 > f1) {
//       sk3 = e1;
//       if (c1 > d1 && c1 > f1) {
//         sk4 = c1;
//         if (d1 > f1) {
//           sk5 = d1;
//           sk6 = f1;
//         } else {
//           sk5 = f1;
//           sk6 = d1;
//         }
//       }
//     } else {
//       sk3 = f1;
//       if (c1 > d1 && c1 > e1) {
//         sk4 = c1;
//         if (d1 > e1) {
//           sk5 = d1;
//           sk6 = e1;
//         } else {
//           sk5 = e1;
//           sk6 = d1;
//         }
//       }
//     }
//   } else if (c1 > b1 && c1 > d1 && c1 > e1 && c1 > f1) {
//     sk2 = c1;
//   } else if (d1 > b1 && d1 > c1 && d1 > e1 && d1 > f1) {
//     sk2 = d1;
//   } else if (e1 > b1 && e1 > c1 && e1 > d1 && e1 > f1) {
//     sk2 = e1;
//   } else {
//     sk2 = f1;
//   }
// }
// console.log(`${sk1} ${sk2} ${sk3} ${sk4} ${sk5} ${sk6}`);
