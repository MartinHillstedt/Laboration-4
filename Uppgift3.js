//Lösning till uppgift 3. Av Martin Nilsson, 2026
"use strict";

const age= 17;
const child= "barn.";
const adult= "vuxen.";
const senior= "pensionär.";

if (age < 18) { 
    console.log(`Mitt eminenta javascript har kommit fram till att du är ett ${child}`); //Om åldern är mindre än 18 år, skriv ut att personen är ett barn.
} else if (age >= 18 && age < 65) { 
    console.log(`Mitt eminenta javascript har kommit fram till att du är en ${adult}`); //Om åldern är mellan 18 och 65 år, skriv ut att personen är vuxen.
} else { 
    console.log(`Mitt eminenta javascript har kommit fram till att du är en ${senior}`); //Om åldern är 65 år eller äldre, skriv ut att personen är pensionär.
}