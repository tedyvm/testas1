let masyvas1 = [5, 4, 6, 8, 2, 4];
console.log(masyvas1[0], masyvas1[masyvas1.length - 1]);
console.log(masyvas1[3], masyvas1[2]);
console.log(masyvas1.length);

let masyvas2 = [2, 56, 8, 23, 4, 55, 47, 98, 252, 24, 456, 45];
console.log(masyvas2);
masyvas2[1] = 0;
masyvas2[2] = 0;
masyvas2[3] = 0;
console.log(masyvas2);

let masyvas3 = [];
masyvas3.push(54);
masyvas3.push(25);
masyvas3.push(455);
masyvas3.push(534);
console.log(masyvas3);

let masyvas4 = [];
masyvas4.push(Math.floor(Math.random() * 15 + 1));
masyvas4.push(Math.floor(Math.random() * 15 + 1));
masyvas4.push(Math.floor(Math.random() * 15 + 1));
masyvas4.push(Math.floor(Math.random() * 15 + 1));
console.log(masyvas4);

let jonas = [8, 5, 7, 9];
let petras = [5, 8, 7, 4];
let jonasPazymiuSuma = 0;
let petrasPazymiuSuma = 0;
let jonasPazymiuVid = 0;
let petrasPazymiuVid = 0;
for (i = 0; i < jonas.length; i++) {
  jonasPazymiuSuma += jonas[i];
}
for (i = 0; i < petras.length; i++) {
  petrasPazymiuSuma += petras[i];
}
console.log(`Petro vidurkis: ${petrasPazymiuSuma / petras.length}, Jono vidurkis: ${jonasPazymiuSuma / jonas.length}`);

let mas1 = [`inzinerija`, `socialogija`, `filologija`, `tikyba`, `kultura`];
for (i = 0; i < mas1.length; i++) {
  console.log(mas1[i]);
}

let mas2 = [`Lietuva`, `Meksika`, `Cile`, `Vietnamas`, `Malaizija`];
for (i = 0; i < mas2.length; i++) {
  console.log(`salis: ${mas1[i]}`);
}

let mas3 = [`Pirties projektavimas`, `Gipso klojimas`, `Tilto pamatu irengimas`];
for (i = 0; i < mas3.length; i++) {
  console.log(`projektas nr ${i + 1}: ${mas3[i]}`);
}

let mas4 = [5, 8, 4, 0, 32, 56, 8, 4, 0, 1, 3, 8, 1];
for (i = 0; i < mas4.length; i++) {
  if (mas4[i] > 5) {
    console.log(mas4[i]);
  }
}

let mas5 = [];
let mas5Suma = 0;
for (i = 0; i < 10; i++) {
  mas5.push(Math.floor(Math.random() * 20 + 1));
}
for (i = 0; i < mas5.length; i++) {
  if (mas5[i] % 4 == 0) {
    mas5Suma += mas5[i];
  }
}
console.log(mas5);
console.log(mas5Suma);

let mas6 = [];
let mas6Suma = 0;
for (i = 0; i < 10; i++) {
  mas6.push(Math.floor(Math.random() * 10 + 1));
  mas6Suma += mas6[i];
}
console.log(`pazymiai: ${mas6}`);
console.log(`vidurkis: ${mas6Suma / mas6.length}`);

let mas7 = [];
let mas7Suma = 0;
let mas7Vid = 0;
for (i = 0; i < 10; i++) {
  mas7.push(Math.floor(Math.random() * 10 + 1));
  mas7Suma += mas7[i];
}
console.log(`pazymiai: ${mas7}`);
mas7Vid = mas7Suma / mas6.length;
console.log(`vidukris: ${mas7Vid}`);
for (i = 0; i < mas7.length; i++) {
  if (mas7[i] > mas7Vid) console.log(`didesnis nei vidurkis: ${mas7[i]}`);
}

let mas8 = [];
for (i = 0; i < 10; i++) {
  mas8.push(Math.floor(Math.random() * 20 + 1));
}
for (i = 0; i < mas8.length; i++) {
  if (mas8[i] % 2 == 0) {
    console.log(mas8[i], mas8[i] * mas8[i]);
  } else {
    console.log(mas8[i]);
  }
}

let mas9 = [];
for (i = 0; i < 10; i++) {
  mas9.push(Math.floor(Math.random() * 10 + 1));
}
for (i = 0; i < mas9.length; i++) {
  if (mas9[i] >= 5) {
    console.log(`${mas9[i]}, teigiamas`);
  } else {
    console.log(`${mas9[i]}, neigiamas, truko iki teigiamo: ${5 - mas9[i]}`);
  }
}

let mas10 = [`Lietuva`, `Meksika`, `Cile`, `Vietnamas`, `Malaizija`];
let raidziu = 0
for (i = 0; i < mas10.length; i++) {
    console.log(`zodis: ${mas10[i]} turi ${mas10[i].length} raides`);
    raidziu += mas10[i].length
}
console.log(`is viso raidziu ${raidziu}`);

let mas11 = [];
let mas11Suma = 0;
let mas11sk=0
for (i = 0; i < 10; i++) {
  mas11.push(Math.floor(Math.random() * 20 + 1));
}
for (i = 0; i < mas11.length; i++) {
  if (mas11[i] % 3 == 0) {
      mas11Suma += mas11[i];
      mas11sk++
  }
}
console.log(mas11);
console.log(`is3 suma: ${mas11Suma}`);
console.log(`is3 vidurkis: ${mas11Suma/mas11sk}`);