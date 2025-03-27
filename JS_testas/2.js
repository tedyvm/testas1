const usd = (Math.random() * 1000).toFixed(2);
const kursas = 1.16;
const eur = (usd / kursas).toFixed(2);
console.log(`${ usd } USD lygu ${ eur } EUR `);