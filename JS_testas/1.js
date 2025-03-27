const eur = (Math.random() * 1000).toFixed(2);
const kursas = 0.96;
const usd = (eur / kursas).toFixed(2);
console.log(`${ eur } EUR lygu ${ usd } USD`);