/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let masyvas = ["gdgd", "fdfde", "fgefewf", "ferfef", "Wdws", "fwdfdf", "dawdasd"]


/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
let masyvoIlgis = masyvas.length
for (i = 0; i < masyvoIlgis; i++){
    console.log(masyvas[i]);
}

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
masyvoIlgis = masyvas.length
for (i = (masyvoIlgis-1); i >=0 ; i--){
    console.log(masyvas[i]);
}
/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
let ilg = 0
let trump=0
for (i = 0; i < masyvoIlgis; i++){
    if (masyvas[i].length <= 5) {
        trump++
    }
    else if (masyvas[i].length > 5) {
        ilg++
    }
}
console.log(ilg, trump);