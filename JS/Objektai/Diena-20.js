let automobilis1 = {}

automobilis1.marke = `audi`;
automobilis1.modelis = `TT`;
automobilis1.rida = 56000;
automobilis1.metai = 2019;
automobilis1.spalva = `juoda`;
automobilis1.darbinisTuris = 2.5;
automobilis1.arDauzta = false;
automobilis1.arParuodama = true;

console.log(automobilis1);
console.log(`automobiliu yra:`, (new Date(Date.now()).getFullYear() - automobilis1.metai), `metai` );