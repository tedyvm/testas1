let dabar = new Date();
let kaledos = new Date('2025-12-25');
let kiekLiko = Math.floor((kaledos - dabar) / 1000 / 60 / 60 / 24);
console.log(`liko iki kaledu ${kiekLiko} dienos`);