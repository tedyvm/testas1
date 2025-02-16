// 17.Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite
// visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...

let mas1 = [5, 54, 87, 21, 54, 96, 3, 6];
for (let i in mas1) {
  console.log(`${i} - ${mas1[i]}`);
}

// 18.Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis.
// Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą
// atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
console.log(`--------------`);
let mas2 = [`alus`, `sviestas`, `duona`, `agurkai`, `ledai`];
console.log(`pirkiniu: ${mas2.length}`);
for (i of mas2) {
  console.log(`- ${i}`);
}
console.log(`--------------`);

// 19.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą
// duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir
// gautą vidurkį.
let mas3 = [5, 8, 1, 4, 9, 6, 7, 5, 7, 8, 5];
let suma3 = 0;
let tekstas3 = ``;
for (i of mas3) {
  suma3 += i;
  tekstas3 += (`${i}, `);
}
console.log(`vidurkis: ${suma3 / mas3.length}`);
console.log(`pazymiai: ${tekstas3}`);
console.log(`--------------`);
// 20.Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir
// užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius
// reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus
// per dieną kilometrus, kurie yra didesni nei 150.
let mas4 = [120, 58, 963, 65, 128, 235, 54, 21]
for (i of mas4) {
    if (i > 150) {
        console.log(i);
    }
}
console.log(`--------------`);
// 21.Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis.
// Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais
// galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt
// arba .json tipo.

let mas5 = ["onfo.txt", "keer.lpg", "feiik.hfg", "fefss.jpg", "grrf.txt"]
