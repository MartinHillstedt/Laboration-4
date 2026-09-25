//Lösning till uppgift 2. Av Martin Nilsson, 2026
"use strict;"

const pris = 9657;
const antal = 17;
const total = pris * antal; //Beräkna totalpris utan moms
const moms = total * 0.25; //Lägg på 25% moms

console.log(`Pris: ${pris} kr`);
console.log(`Antal: ${antal}`);
console.log(`Total: ${total} kr`);
console.log(`Totalt inklusive moms: ${total + moms} kr`);