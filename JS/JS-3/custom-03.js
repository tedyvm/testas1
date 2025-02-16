/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
for (let i = 0; i <= 10; i++) {
  console.log("labas");
}
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for (i = 0; i < 10; i++) {
  console.log(i);
}
/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
for (i = 10; i <= 50; i += 2) {
  console.log(i);
}
/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for (i = 10; i <= 50; i += 2) {
  if (i % 10 == 0) {
    continue;
  }
  console.log(i);
}
/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
let por = 0;
for (i = 0; i <= 20; i++) {
  console.log(i);
  if (i % 2 == 0) {
    por += 1;
  }
}
console.log(`poriniu buo ${por}`);
/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
let rezultatas1 = "";
let did = 0;
let num1 = 0;
for (i = 1; i < 20; i++) {
  num1 = Math.floor(Math.random() * 301);
  if (num1 > 150) {
    did++;
    if (num1 > 275) {
      num1 = `[${num1}]`;
    }
  }
  rezultatas1 += `${num1}, `;
}

console.log(rezultatas1, did);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
let rez2 = "";
let num2 = 0;

for (i = 77; i < 3000; i += 77) {
  rez2 += i;
  if (i + 77 <= 3000) {
    rez2 += `, `;
  }
}
console.log(rez2);

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

let text = ""
for (i = 1; i <= 10; i++){
    for (j = 1; j <= 10; j++){
    text += `* `
    }
    console.log(text);
    text=""
}