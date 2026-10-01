//Lösning till uppgift 9. Av Martin Nilsson, 2026

"use strict";

const myKids = [ //Skapar en array med objekt som innehåller information om barnen.
    { 
        name: "Sam", 
        age: 10,
        city: "Österbillsjö"
    },
    { 
        name: "Jacke",
        age: 9,
        city: "Överhörnäs"
    },  
    { 
        name: "Tim",
        age: 6,
        city: "Komnäs"
    },
    { 
        name: "Livia ", 
        age: 18,
        city: "Själevad" 
    },
    { 
        name: "Milton", 
        age: 20,
        city: "Örnsköldsvik"
    } 
];

function printKidsInfo(kids) { //Skapar en funktion som tar emot en array med barnobjekt som parameter och skriver ut informationen i konsolen.
    if (kids.age >= 18) { //Kollar om barnet är 18 år eller äldre.
    console.log (`${kids.name} bor i ${kids.city} och är myndig`); //Skriver ut barnets namn, vart den bor och att den inte är myndig.
    } else { 
    console.log (`${kids.name} bor i ${kids.city} och är inte myndig`); //Skriver ut barnets namn, vart den bor och att den är myndig.
    }
}

for (let i = 0; i < myKids.length; i++) { //Loopar igenom alla barn i arrayen.
    printKidsInfo(myKids[i]); //Anropar funktionen med varje barnobjekt som parameter.
}