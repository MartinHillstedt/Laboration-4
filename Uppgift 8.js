//Lösning till uppgift 8. Av Martin Nilsson, 2026

"use strict";

const book = { //Skapar ett objekt som innehåller information om en bok.
    title: "Nineteen Eighty-Four (1984)",
    author: "George Orwell",
    published: 1949
};

function displayBookInfo (book) { //Skapar en funktion som tar emot ett bokobjekt som parameter och skriver ut informationen i konsolen.
    console.log ("Titel: " + book.title);
    console.log ("Författare: " + book.author);
    console.log ("Utgivningsår: " + book.published);
}

displayBookInfo (book); //Anropar funktionen med bokobjektet som parameter.