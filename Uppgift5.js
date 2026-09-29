"use strict";

const dishes = ["Pasta", "Pizza", "Sushi", "Tacos", "Hamburgare"]; //Skapar en array med maträtter.

for (let i = 0; i < dishes.length; i++) {
    console.table(`Maträtt ${i + 1}: ${dishes[i]}`); //Skriver ut alla maträtter i arrayen.
}

console.table(`Maträtt 1: ${dishes[0]}`); //Skriver ut första maträtten i arrayen.

console.table(`Maträtt 5: ${dishes[4]}`); //Skriver ut sista maträtten i arrayen.

dishes.push("Sallad"); //Lägger till en maträtt i arrayen.

dishes.shift(); //Tar bort första maträtten i arrayen.

for (let i = 0; i < dishes.length; i++) {
    console.table(`Maträtter efter ändringarna ${i + 1}: ${dishes[i]}`); //Skriver ut alla maträtter i arrayen efter ändringar.
}