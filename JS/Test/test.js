let a = 5;
let b = 8;
let c = 3;

if (a > b && a > c) {
  console.log(`a yra didziausias`);
} else if (b > a && b > c) {
  console.log(`b yra didziausias`);
} else {
  console.log(`c yra didziausias`);
}

let x = 5;
let y = 8;
let z = 3;

if (x < y && x < z) {
  console.log(`x yra maziausias`);
} else if (y < x && y < z) {
  console.log(`y yra maziausias`);
} else {
  console.log(`z yra maziausias`);
}

let rez1 = 8;
let rez2 = 5;
let rez3 = 9;
let vid = (rez1 + rez2 + rez3) / 3;
console.log(vid);
if (vid >= 8) {
  console.log(`8-10`);
} else if (vid > 5 && vid < 8) {
  console.log(`5-8`);
} else {
  console.log(`<5`);
}

let a1 = 5;
let b1 = 8;

if (a1 > b1 || a1 == 0) {
  console.log(`pirmas didesnis arba lygus 0`);
}
if (b1 > a1 || b1 == 5) {
  console.log(`antras didesnis arba lygus 5`);
}
if (a1 > b1 && a1 == 20) {
  console.log(`pirmas didesnis ir lygus 20`);
}
if (b1 > a1 && b1 < 100) {
  console.log(`antras didesnis ir mazesnis uz 100`);
}
