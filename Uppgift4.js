//Lösning till uppgift 4. Av Martin Nilsson, 2026
"use strict";

//Skriver ut talen 1-20 i konsolen.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
//Skriver ut alla udda tal mellan 1-20 i konsolen.
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}