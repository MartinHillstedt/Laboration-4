//Lösning till uppgift 7. Av Martin Nilsson, 2026.

"use strict";

const numbers = [10,15,8,20,6,10]; //Skapar en array med tal.

function sumOfArray(arr) { //Funktion som tar emot en array som parameter och returnerar summan av alla element i arrayen.
    
        let sum = 0; //Skapar en variabel som kommer att hålla summan av alla element i arrayen.
        for (let i = 0; i < arr.length; i++) //Loopar igenom alla element i arrayen.
    {
        sum += arr[i]; //Lägger till varje element i arrayen till summan.
    }
    return sum; //Returnerar summan av alla element i arrayen.
}