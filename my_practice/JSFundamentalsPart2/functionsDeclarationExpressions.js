'use strict';

console.log(`JS Fundamentals Part 2`);

// Function decalration 
function calcAge1 (birthYear) {
    return 2021 - birthYear;
}

const ageJuan = calcAge1(1987);
console.log(ageJuan);

// Function expression
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const ageGaby = calcAge1(1988);
console.log(ageGaby);