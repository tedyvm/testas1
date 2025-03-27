// Masyvo papildymas, trynimas, iterpimas
// Masyvu sujungimas
// Masyvo rikiavimas
// Masyvo reiksmiu radimas, unikaliu reiksmiu radimas
//

let patiekalai = ["cepelinai", "kotletai", "koldunai"];
patiekalai.unshift("grietine"); // ideda i prieki
console.log(patiekalai);
patiekalai.push("grybai"); // ideda i gala
console.log(patiekalai);
patiekalai.splice(3, 0, "sriuba"); // i trecia vieta, istrina 0, ideda sriuba
console.log(patiekalai);
patiekalai.splice(3, 1); // trecia vieta trina 1 elementa
console.log(patiekalai);
patiekalai.pop(); // trina is galo
console.log(patiekalai);
patiekalai.shift(); // triona is priekio
console.log(patiekalai);

let skaiciai = [2, 5, 98, 6, 3, 544, 2, 8, 6, 585, 21];
let arYra8 = skaiciai.includes(8);
console.log("ar yra 8", arYra8);

let joinFunkcija = ["sujungs", "zodziu", "i", "viena", "eilute"];
console.log(joinFunkcija);
let sunugtiZodziai = joinFunkcija.join(", "); //sujungs i eilute su siais zenklais
console.log(sunugtiZodziai);

let isskaidymas = "kintamasis is keliu zodziu";
let tekstasImasyva = isskaidymas.split(" "); // iskaidys pagal nurodyta zenkla, siuo atveju tarpas
console.log(tekstasImasyva, tekstasImasyva.length);

let pazymiai = [8, 5, 9, 10, 2, 3, 7, 7, 6]; // slice naudoti kad nukopijuotu tik reiksmes, nes kopijuojant kaip masyva susujungia rysys
let pazymiaiDid = pazymiai.slice().sort(); // surikiuos pagal dydi, imdamas tik pirma elemento skaiciu
console.log(pazymiaiDid);
let pazymiaiDid2 = pazymiai.slice().sort((a, b) => a - b); // surikiuos nuo maziausio iki didziausio
console.log(pazymiaiDid2);
pazymiaiMaz = pazymiai.slice().sort((a, b) => b - a); // surikiuos nuo didziausio iki maziausio
console.log(pazymiaiMaz);
let atvirksciai = pazymiai.slice().reverse(); // sudelios masyva atvirksciai
console.log(atvirksciai);
console.log(pazymiaiMaz.slice(0, 3)); // iskirps masyva nuo nulinio iki 3 neimtinai(t.y. be 3)

let vardaiB = ["Petras", "Jonas", "Antanas"];
let vardaiM = ["Algirdas", "Dainius", "Juozas", "Petras", "Antanas"];
let sujungtiVardai = [...vardaiB, ...vardaiM]; // sujungia i viena masyva
console.log(sujungtiVardai);
let unikalusVardai = [...new Set(sujungtiVardai)]; // suranda unikalius elementus
console.log(unikalusVardai);

let PirmasSem = ["tema1", "tema2", "tema3", "tema1"];
let AntroSem = ["tems5", "tema gera", "ger mjfds"];
PirmasSem.push(...AntroSem); //prides prie pirmo masyvo antro masyvo reiksmes i gala
console.log(PirmasSem);
let kopijaPirmoSem = PirmasSem.slice(); // nukopijuos tik reiksmes todel istrinant is vieno neissitrina is kito
PirmasSem = [];
console.log(PirmasSem);
console.log(kopijaPirmoSem);

// surandame elemento indeksa
let kelintasZodis = kopijaPirmoSem.indexOf("tema3");
console.log(kelintasZodis);

// surandame ar yra diuplikatu masyve
let arYraDuplikatas = kopijaPirmoSem.length !== new Set(kopijaPirmoSem).size;
console.log(arYraDuplikatas);

// isskaidyti masyva i pasirinkto dydzio gabalus [2,4,5,68] i pvz [[2,4],[5,68]]
console.log("--------------------/n");
const masyvasPradinis = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const skaidymoDydis2 = 2;
let naujasMasyvas = []
while (masyvasPradinis.length > 0) {
    naujasMasyvas.push(masyvasPradinis.slice(0, skaidymoDydis2))
    masyvasPradinis.splice(0, skaidymoDydis2)
}
console.log(naujasMasyvas);

//patikrinti ar tai palindrominis skaicius
let palindromisSk = "0123210";
let arTaiPalindrominis = undefined;
palindromisSk === palindromisSk.split("").reverse().join("") ? (arTaiPalindrominis = true) : (arTaiPalindrominis = false);
console.log(palindromisSk, palindromisSk.split("").reverse().join(""), arTaiPalindrominis);

// sujungia ir sudeda tik ubniikalius elementus
let masyvas1 = [1, 2, 3, 4];
let masyvas2 = [2, 3, 5, 6];
let masyvas3 = [];
masyvas3 = [...new Set([...masyvas1, ...masyvas2])];
console.log(masyvas3);

//surasti dublikatus
console.log("---------14");
let masyvas14 = [2, 4, 6, 8, 9, 11]
let masyvas142 = [4, 5, 6, 7, 8, 9]
let dublikatai14 = []

for (let skaicius of masyvas14) {
    if (masyvas142.includes(skaicius))
        dublikatai14.push(skaicius)
}
console.log(dublikatai14);

//surasti maziausia teigiama skaiciu kuris neegzistuoja
let masyvas15 = [5, 12, 4, 9, 36, 2, 57, 14, 1, 2, 3, -4]
let masyvas15Sort = masyvas15.slice().sort((a, b) => a - b)
console.log(masyvas15Sort);
let maziausiasSk = 0
while (maziausiasSk <= 0)
{
    for (let skaicius15 of masyvas15Sort) {
        if (!masyvas15Sort.includes(skaicius15 + 1) && skaicius15 + 1 > 0) {
            maziausiasSk = skaicius15 + 1
            break;
        }
    }
}
console.log(maziausiasSk);

//apversti masyva
let masyvas16 = [1, 2, 3, 4, 5]
console.log([...masyvas16.reverse()]);