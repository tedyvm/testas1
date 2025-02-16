let skaicius1 = 1;
while (skaicius1 <= 20) {
  console.log(skaicius1);
  skaicius1++;
}

let skaicius2 = 1;
while (skaicius2 <= 50) {
  if (skaicius2 % 2 == 0) {
    console.log(`${skaicius2} lyginis`);
  } else {
    console.log(`${skaicius2} nelyginis`);
  }
  skaicius2++;
}

let skaicius3 = 25;
while (skaicius3 <= 50) {
  if (skaicius3 % 3 == 0) {
    console.log(`skaicius ${skaicius3} dalinasi is 3`);
  } else {
    console.log(skaicius3);
  }
  skaicius3++;
}

let skaicius4 = 1;
while (skaicius4 <= 100) {
  if (skaicius4 % 3 == 0 && skaicius4 % 5 == 0) {
    break;
  }
  console.log(skaicius4);
  skaicius4++;
}

let skaicius5 = Math.floor(Math.random() * 10);
let suma5 = 0;
while (skaicius5 < 9) {
  console.log(skaicius5);
    let skaicius6 = Math.floor(Math.random() * 10);
    console.log(skaicius6);
  suma5 += skaicius5;
}
console.log(suma5);
