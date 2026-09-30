//Lösning till uppgift 6. Av Martin Nilsson, 2026

"use strict";

function calculateArea(length, width) { //Funktion som kommer att få till uppgift att beräkna arean av en rektangel.
    const area =length * width; //Variabel som beräknar arean med längd * bredd.
    return area //Returnerar arean av rektangeln.
 } 

 const area1 = calculateArea(12, 16); //Anropar funktionen med längd 12 och bredd 16.
 const area2 = calculateArea(17, 28); //Anropar funktionen med längd 17 och bredd 28.
 const area3 = calculateArea(5, 9); //Anropar funktionen med längd 5 och bredd 9.

 console.log(`Arean är: ${area1}`); //Skriver ut arean av area 1.
 console.log(`Arean är: ${area2}`); //Skriver ut arean av area 2.
 console.log(`Arean är: ${area3}`); //Skriver ut arean av area 3.
